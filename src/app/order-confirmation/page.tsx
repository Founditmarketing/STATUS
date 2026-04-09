"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ConfirmationContent() {
  const params = useSearchParams();
  const orderId = params.get("order_id") || "STATUS";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      {/* Success animation */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-30" />
        <div className="relative w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
        Order Confirmed!
      </h1>
      <p className="text-muted text-lg mb-2">Thank you for choosing STATUS.</p>
      <p className="text-sm text-muted mb-8">
        Order <span className="font-semibold text-foreground">#{orderId.slice(0, 8).toUpperCase()}</span>
      </p>

      {/* What happens next */}
      <div className="bg-surface rounded-2xl border border-border/50 p-6 sm:p-8 mb-8 text-left">
        <h2 className="font-bold text-lg mb-6 text-center">What Happens Next</h2>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Order Received",
              desc: "We've received your order and payment has been processed.",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              active: true,
            },
            {
              step: 2,
              title: "Processing & QC",
              desc: "Your system is being picked, tested, and packaged. Usually 1-2 business days.",
              icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              active: false,
            },
            {
              step: 3,
              title: "Shipped",
              desc: "Your system ships via freight carrier. You'll receive a tracking number via email.",
              icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
              active: false,
            },
            {
              step: 4,
              title: "Delivered",
              desc: "Estimated delivery: 3-5 business days. Then it's DIY time! 🔧",
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              active: false,
            },
          ].map((s, i) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  s.active ? "gradient-bg text-white" : "bg-white border-2 border-border text-muted"
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                {i < 3 && <div className="w-px h-full bg-border mt-2" />}
              </div>
              <div className="pb-6">
                <p className={`font-bold text-sm ${s.active ? "text-primary" : ""}`}>{s.title}</p>
                <p className="text-sm text-muted mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/account"
          className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm"
        >
          View My Orders
        </Link>
        <Link
          href="/products"
          className="border border-border px-6 py-3 rounded-xl font-semibold hover:bg-surface transition-colors text-sm"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Support */}
      <p className="text-xs text-muted mt-8">
        Questions about your order?{" "}
        <Link href="/support" className="text-primary hover:underline font-medium">Contact Support</Link>
      </p>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
