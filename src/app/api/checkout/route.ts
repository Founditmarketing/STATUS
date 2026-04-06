import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, shipping, userId, orderId } = body as {
      items: {
        product_name: string;
        price: number;
        quantity: number;
        image_url?: string;
      }[];
      shipping: {
        name: string;
        address_line1: string;
        address_line2?: string;
        city: string;
        state: string;
        zip: string;
      };
      userId: string;
      orderId: string;
    };

    if (!items || items.length === 0) {
      return Response.json({ error: "No items provided" }, { status: 400 });
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";

    const lineItems = items.map(
      (item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.product_name,
            ...(item.image_url
              ? { images: [`${origin}${item.image_url}`] }
              : {}),
          },
          unit_amount: Math.round(item.price * 100), // Stripe uses cents
        },
        quantity: item.quantity,
      })
    );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      automatic_tax: { enabled: false },
      metadata: {
        userId,
        orderId,
        shippingName: shipping.name,
        shippingAddress: `${shipping.address_line1}${shipping.address_line2 ? `, ${shipping.address_line2}` : ""}, ${shipping.city}, ${shipping.state} ${shipping.zip}`,
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}&order_id=${orderId}`,
      cancel_url: `${origin}/checkout?cancelled=true`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Checkout error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
