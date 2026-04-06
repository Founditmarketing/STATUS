"use client";

import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount, user } = useCart();
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setCartOpen(false);
    }
    if (cartOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, setCartOpen]);

  function handleCheckout() {
    setCartOpen(false);
    if (user) {
      router.push("/checkout");
    } else {
      router.push("/login?redirect=/checkout");
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[101] h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Your Cart
            {cartCount > 0 && (
              <span className="text-sm font-medium text-muted">({cartCount} {cartCount === 1 ? "item" : "items"})</span>
            )}
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 rounded-lg hover:bg-surface transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="font-semibold text-lg mb-1">Your cart is empty</p>
              <p className="text-muted text-sm mb-6">Browse our systems and add items to get started.</p>
              <button
                onClick={() => {
                  setCartOpen(false);
                  router.push("/products");
                }}
                className="gradient-bg text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Shop Mini Splits
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product_id} className="flex gap-4 p-3 rounded-xl bg-surface border border-border">
                  {/* Product image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0 relative">
                    {item.image_url ? (
                      <Image
                        src={item.image_url}
                        alt={item.product_name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <svg className="w-8 h-8 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{item.product_name}</h3>
                    <p className="text-primary font-bold text-sm mt-0.5">
                      ${item.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-1 bg-white border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                          aria-label="Increase quantity"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.product_id)}
                        className="text-red-400 hover:text-red-600 transition-colors p-1"
                        aria-label={`Remove ${item.product_name}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-muted text-sm">Subtotal</span>
              <span className="text-xl font-extrabold">
                ${cartTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <p className="text-xs text-muted">Shipping &amp; tax calculated at checkout</p>
            <button
              onClick={handleCheckout}
              className="w-full gradient-bg text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-base min-h-[48px]"
            >
              {user ? "Checkout" : "Sign In to Checkout"}
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full text-center text-sm text-muted hover:text-foreground transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
