"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("order_id");
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<{
    total: number;
    status: string;
    shipping_name: string;
    shipping_city: string;
    shipping_state: string;
  } | null>(null);

  useEffect(() => {
    async function loadOrder() {
      if (!orderId) {
        router.push("/");
        return;
      }

      const supabase = createClient();
      const { data } = await supabase
        .from("orders")
        .select("total, status, shipping_name, shipping_city, shipping_state")
        .eq("id", orderId)
        .single();

      if (data) {
        // Update order status to confirmed (payment went through)
        await supabase
          .from("orders")
          .update({ status: "confirmed", updated_at: new Date().toISOString() })
          .eq("id", orderId);

        // Clear the cart
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase.from("cart_items").delete().eq("user_id", user.id);
        }

        setOrderDetails({ ...data, status: "confirmed" });
      }
      setLoading(false);
    }
    loadOrder();
  }, [orderId, router]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Payment Successful!</h1>
      <p className="text-muted text-lg mb-2">Thank you for your purchase.</p>
      {orderId && (
        <p className="text-sm text-muted mb-8">
          Order <span className="font-semibold text-foreground">#{orderId.slice(0, 8).toUpperCase()}</span> has been confirmed.
        </p>
      )}

      {orderDetails && (
        <div className="bg-surface rounded-2xl border border-border p-6 text-left mb-8">
          <h3 className="font-bold mb-3">Order Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Status</span>
              <span className="inline-flex items-center gap-1 text-green-700 font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Confirmed
              </span>
            </div>
            {orderDetails.shipping_name && (
              <div className="flex justify-between">
                <span className="text-muted">Ship To</span>
                <span className="font-medium">{orderDetails.shipping_name}</span>
              </div>
            )}
            {orderDetails.shipping_city && (
              <div className="flex justify-between">
                <span className="text-muted">Location</span>
                <span className="font-medium">{orderDetails.shipping_city}, {orderDetails.shipping_state}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="font-bold">Total Paid</span>
              <span className="text-xl font-extrabold gradient-text">
                ${Number(orderDetails.total).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <Link href="/account" className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity min-h-[48px] inline-flex items-center justify-center">
          View My Orders
        </Link>
        <Link href="/products" className="border border-border px-6 py-3 rounded-xl font-semibold hover:bg-surface transition-colors min-h-[48px] inline-flex items-center justify-center">
          Continue Shopping
        </Link>
      </div>

      <div className="mt-8 text-xs text-muted">
        <p>A confirmation email will be sent to your account email address.</p>
        <p className="mt-1">Questions? Call us at <a href="tel:+18001234567" className="text-primary font-medium">(800) 123-4567</a></p>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
