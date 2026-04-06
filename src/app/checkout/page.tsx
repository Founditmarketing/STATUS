"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/Toast";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const TAX_RATE = 0.0825; // 8.25%

function CheckoutContent() {
  const { items, cartTotal, clearCart, user } = useCart();
  const { addToast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const cancelled = searchParams.get("cancelled");
  const supabase = createClient();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Shipping form
  const [shipping, setShipping] = useState({
    name: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    zip: "",
  });

  // Show cancelled toast
  useEffect(() => {
    if (cancelled) {
      addToast("Payment was cancelled. Your cart is still saved.", "info");
    }
  }, [cancelled, addToast]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/login?redirect=/checkout");
    }
  }, [user, router]);

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push("/products");
    }
  }, [items, router]);

  const subtotal = cartTotal;
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  const shippingCost = 0; // Free shipping
  const total = subtotal + tax + shippingCost;

  function handleShippingSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handlePlaceOrder() {
    setLoading(true);

    try {
      // 1. Create order in Supabase (pending until Stripe confirms)
      const { data: order, error: orderErr } = await supabase
        .from("orders")
        .insert({
          user_id: user!.id,
          status: "pending",
          subtotal,
          tax,
          shipping: shippingCost,
          total,
          shipping_name: shipping.name,
          shipping_address_line1: shipping.address_line1,
          shipping_address_line2: shipping.address_line2,
          shipping_city: shipping.city,
          shipping_state: shipping.state,
          shipping_zip: shipping.zip,
        })
        .select("id")
        .single();

      if (orderErr) throw orderErr;

      // 2. Create order items
      const orderItems = items.map((item) => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.product_name,
        price: item.price,
        quantity: item.quantity,
      }));

      const { error: itemsErr } = await supabase.from("order_items").insert(orderItems);
      if (itemsErr) throw itemsErr;

      // 3. Create Stripe Checkout Session
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            product_name: i.product_name,
            price: i.price,
            quantity: i.quantity,
            image_url: i.image_url,
          })),
          shipping,
          userId: user!.id,
          orderId: order.id,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // 4. Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      addToast("Failed to start checkout. Please try again.", "error");
      setLoading(false);
    }
  }

  if (!user || items.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[
          { num: 1, label: "Shipping" },
          { num: 2, label: "Review & Pay" },
        ].map((s, i) => (
          <div key={s.num} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s.num ? "gradient-bg text-white" : "bg-surface border border-border text-muted"
              }`}
            >
              {step > s.num ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                s.num
              )}
            </div>
            <span className={`text-sm font-medium ${step >= s.num ? "text-foreground" : "text-muted"}`}>
              {s.label}
            </span>
            {i < 1 && <div className="w-12 h-px bg-border mx-2" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Main content */}
        <div className="lg:col-span-3">
          {step === 1 && (
            <form onSubmit={handleShippingSubmit} className="bg-white rounded-2xl border border-border p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="ship-name" className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input
                    id="ship-name"
                    type="text"
                    required
                    value={shipping.name}
                    onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="ship-addr1" className="block text-sm font-medium mb-1.5">Address Line 1</label>
                  <input
                    id="ship-addr1"
                    type="text"
                    required
                    value={shipping.address_line1}
                    onChange={(e) => setShipping({ ...shipping, address_line1: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    placeholder="123 Main St"
                  />
                </div>
                <div>
                  <label htmlFor="ship-addr2" className="block text-sm font-medium mb-1.5">Address Line 2 <span className="text-muted">(optional)</span></label>
                  <input
                    id="ship-addr2"
                    type="text"
                    value={shipping.address_line2}
                    onChange={(e) => setShipping({ ...shipping, address_line2: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    placeholder="Apt, Suite, Unit"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="ship-city" className="block text-sm font-medium mb-1.5">City</label>
                    <input
                      id="ship-city"
                      type="text"
                      required
                      value={shipping.city}
                      onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="ship-state" className="block text-sm font-medium mb-1.5">State</label>
                    <select
                      id="ship-state"
                      required
                      value={shipping.state}
                      onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    >
                      <option value="">Select</option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ship-zip" className="block text-sm font-medium mb-1.5">ZIP</label>
                    <input
                      id="ship-zip"
                      type="text"
                      required
                      pattern="[0-9]{5}"
                      value={shipping.zip}
                      onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full gradient-bg text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity mt-6 min-h-[48px]"
              >
                Continue to Review
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-6">Review Your Order</h2>

              {/* Shipping summary */}
              <div className="bg-surface rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold">Shipping To</h3>
                  <button onClick={() => setStep(1)} className="text-primary text-xs font-semibold hover:underline">
                    Edit
                  </button>
                </div>
                <p className="text-sm">{shipping.name}</p>
                <p className="text-sm text-muted">{shipping.address_line1}{shipping.address_line2 ? `, ${shipping.address_line2}` : ""}</p>
                <p className="text-sm text-muted">{shipping.city}, {shipping.state} {shipping.zip}</p>
              </div>

              {/* Items */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product_id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="font-semibold text-sm">{item.product_name}</p>
                      <p className="text-xs text-muted">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-sm">
                      ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stripe payment notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-primary">Secure Payment via Stripe</p>
                  <p className="text-xs text-blue-700 mt-0.5">You&apos;ll be redirected to Stripe&apos;s secure checkout to complete your payment.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-border py-3 rounded-xl font-semibold hover:bg-surface transition-colors min-h-[48px]"
                >
                  Back
                </button>
                <button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="flex-1 gradient-bg text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[48px] inline-flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Pay with Stripe
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary sidebar */}
        <div className="lg:col-span-2">
          <div className="bg-surface rounded-2xl border border-border p-6 sticky top-28">
            <h3 className="font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              {items.map((item) => (
                <div key={item.product_id} className="flex justify-between">
                  <span className="text-muted truncate mr-2">
                    {item.product_name} × {item.quantity}
                  </span>
                  <span className="font-medium shrink-0">
                    ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span className="font-medium text-success">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Estimated Tax</span>
                <span className="font-medium">${tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
            <div className="border-t border-border mt-4 pt-4 flex justify-between items-center">
              <span className="font-bold">Total</span>
              <span className="text-xl font-extrabold gradient-text">
                ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="mt-5 space-y-2 text-xs text-muted">
              {["Free 3-Day Shipping", "45-Day Return Policy", "7-Year Warranty"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-success shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>

            {/* Stripe trust badge */}
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-2 text-xs text-muted">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secured by Stripe · 256-bit SSL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
