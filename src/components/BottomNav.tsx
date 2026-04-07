"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useState, useEffect } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useCart();
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (window.scrollY > 150) setShowNav(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 150) {
        setShowNav(false);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        showNav ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      {/* Gradient glow behind the bar */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {/* Main nav container */}
      <div className="relative mx-3 mb-3">
        {/* Frosted glass bar */}
        <div className="bg-foreground/90 backdrop-blur-2xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 px-2 py-1.5">
          <div className="flex items-center justify-around">
            {/* Shop */}
            <Link
              href="/products"
              className={`relative flex flex-col items-center justify-center py-2 px-4 min-w-[72px] min-h-[52px] rounded-xl transition-all duration-200 ${
                isActive("/products")
                  ? "text-white"
                  : "text-white/50 active:scale-95"
              }`}
            >
              {isActive("/products") && (
                <div className="absolute inset-0 rounded-xl bg-primary/20 border border-primary/30" />
              )}
              <svg
                className={`w-[22px] h-[22px] relative ${
                  isActive("/products") ? "text-primary-light" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={isActive("/products") ? 2.5 : 1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <span
                className={`text-[10px] font-semibold tracking-wide relative mt-0.5 ${
                  isActive("/products") ? "text-primary-light" : ""
                }`}
              >
                Shop
              </span>
            </Link>

            {/* Size System */}
            <Link
              href="/tools"
              className={`relative flex flex-col items-center justify-center py-2 px-4 min-w-[72px] min-h-[52px] rounded-xl transition-all duration-200 ${
                isActive("/tools")
                  ? "text-white"
                  : "text-white/50 active:scale-95"
              }`}
            >
              {isActive("/tools") && (
                <div className="absolute inset-0 rounded-xl bg-primary/20 border border-primary/30" />
              )}
              <svg
                className={`w-[22px] h-[22px] relative ${
                  isActive("/tools") ? "text-primary-light" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={isActive("/tools") ? 2.5 : 1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span
                className={`text-[10px] font-semibold tracking-wide relative mt-0.5 ${
                  isActive("/tools") ? "text-primary-light" : ""
                }`}
              >
                Size
              </span>
            </Link>

            {/* Center CTA Button — elevated, prominent */}
            <Link
              href="/products"
              className="relative -mt-5 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-primary blur-lg opacity-40 scale-110" />
              <div className="relative w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-primary/30 border-2 border-primary-light/30 active:scale-95 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </Link>

            {/* Support */}
            <Link
              href="/support"
              className={`relative flex flex-col items-center justify-center py-2 px-4 min-w-[72px] min-h-[52px] rounded-xl transition-all duration-200 ${
                isActive("/support")
                  ? "text-white"
                  : "text-white/50 active:scale-95"
              }`}
            >
              {isActive("/support") && (
                <div className="absolute inset-0 rounded-xl bg-primary/20 border border-primary/30" />
              )}
              <svg
                className={`w-[22px] h-[22px] relative ${
                  isActive("/support") ? "text-primary-light" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={isActive("/support") ? 2.5 : 1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                className={`text-[10px] font-semibold tracking-wide relative mt-0.5 ${
                  isActive("/support") ? "text-primary-light" : ""
                }`}
              >
                Help
              </span>
            </Link>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex flex-col items-center justify-center py-2 px-4 min-w-[72px] min-h-[52px] rounded-xl text-white/50 active:scale-95 transition-all duration-200"
            >
              <div className="relative">
                <svg
                  className="w-[22px] h-[22px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-[18px] h-[18px] px-1 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-foreground/90 animate-bounce-in">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold tracking-wide mt-0.5">
                Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
