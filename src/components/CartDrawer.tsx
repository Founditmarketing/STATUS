"use client";

import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useMemo } from "react";
import { getCartUpsells } from "@/lib/products";
import { useToast } from "@/components/Toast";

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, removeFromCart, updateQuantity, addToCart, cartTotal, cartCount, user } = useCart();
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);
  const { addToast } = useToast();

  // Smart upsells based on cart contents
  const upsells = useMemo(() => {
    const ids = items.map((i) => i.product_id);
    return getCartUpsells(ids);
  }, [items]);

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
        className={`fixed inset-0 z-[100] bg-black/50 transition-all duration-300 ${
          cartOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[101] h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-all duration-300 ease-out ${
          cartOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Your Cart
            {cartCount > 0 && (
              <span className="text-sm font-medium text-muted">({cartCount})</span>
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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
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
            <>
              {/* Cart Items */}
              <div className="px-5 py-4 space-y-3">
                {items.map((item) => (
                  <div key={item.product_id} className="flex gap-3 p-3 rounded-xl bg-surface border border-border/60">
                    {/* Product image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shrink-0 relative border border-border/30">
                      {item.image_url ? (
                        <Image
                          src={item.image_url}
                          alt={item.product_name}
                          fill
                          className="object-contain p-1"
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary/10">
                          <svg className="w-6 h-6 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
                        <div className="flex items-center gap-0.5 bg-white border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-7 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                            aria-label="Increase quantity"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.product_id)}
                          className="text-xs text-red-400 hover:text-red-600 transition-colors font-medium"
                          aria-label={`Remove ${item.product_name}`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free Shipping Badge */}
              <div className="mx-5 mb-4">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200/60">
                  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-emerald-700 text-sm font-semibold">FREE shipping on your order</span>
                </div>
              </div>

              {/* Upsell Section */}
              {upsells.length > 0 && (
                <div className="px-5 pb-4">
                  <div className="border-t border-border/60 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                      Complete Your Installation
                    </p>
                    <div className="space-y-2">
                      {upsells.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 p-2.5 rounded-xl border border-border/50 bg-surface/50 hover:bg-surface transition-colors"
                        >
                          {/* Thumbnail */}
                          <div className="w-12 h-12 rounded-lg bg-white border border-border/30 overflow-hidden relative flex-shrink-0">
                            <Image
                              src={product.images[0]?.src || "/wall-mount.png"}
                              alt={product.name}
                              fill
                              className="object-contain p-0.5"
                              sizes="48px"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">{product.shortName}</p>
                            <p className="text-xs text-muted truncate">{product.shortDescription}</p>
                          </div>

                          {/* Price + Add */}
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-sm font-bold">${product.price}</span>
                            <button
                              onClick={() => {
                                addToCart({
                                  product_id: product.id,
                                  product_name: product.name,
                                  price: product.price,
                                  image_url: product.images[0]?.src || "/wall-mount.png",
                                });
                                addToast(`${product.shortName} added`, "success");
                              }}
                              className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-colors"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-5 py-4 space-y-3 bg-white">
            {/* Subtotal */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-muted text-sm">Subtotal</span>
                <span className="font-bold">
                  ${cartTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted text-sm">Shipping</span>
                <span className="text-emerald-600 text-sm font-semibold">FREE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted text-sm">Tax</span>
                <span className="text-muted text-sm">Calculated at checkout</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-2 border-t border-border/60">
              <span className="font-bold text-base">Total</span>
              <span className="text-xl font-extrabold">
                ${cartTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full gradient-bg text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-base min-h-[48px]"
            >
              {user ? "Proceed to Checkout" : "Sign In to Checkout"}
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full text-center text-sm text-muted hover:text-foreground transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
