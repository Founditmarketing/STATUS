"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useState, useEffect, useCallback } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useCart();
  const [showNav, setShowNav] = useState(false);
  // Mirror Safari's toolbar: hide on scroll-down, show on scroll-up.
  // This means our bar is hidden whenever Safari's gap would appear.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;

        if (y < 100) {
          // Near top of page — always hide to keep hero clean
          setShowNav(false);
        } else if (delta > 3) {
          // Scrolling DOWN — hide (matches Safari hiding its toolbar)
          setShowNav(false);
        } else if (delta < -3) {
          // Scrolling UP — show (matches Safari showing its toolbar)
          setShowNav(true);
        }

        lastY = y;
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = useCallback(
    (path: string) => pathname?.startsWith(path),
    [pathname]
  );

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40"
      style={{
        transform: showNav ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
      aria-label="Mobile navigation"
    >
      {/* Shadow fade above the bar */}
      <div
        className="h-6 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.15), transparent)",
        }}
      />

      {/* Main bar */}
      <div className="relative">
        <div
          className="border-t border-white/[0.08] px-1 py-1"
          style={{
            backgroundColor: "#0c0f14",
            boxShadow: "0 -4px 30px rgba(0,0,0,0.4)",
          }}
        >
          <div className="flex items-center justify-around">
            {/* Shop */}
            <NavItem
              href="/products"
              active={isActive("/products")}
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              }
              label="Shop"
            />

            {/* Size */}
            <NavItem
              href="/tools"
              active={isActive("/tools")}
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              }
              label="Size"
            />

            {/* Center CTA — the lightning bolt */}
            <Link
              href="/products"
              className="relative flex items-center justify-center -mt-5"
              aria-label="Shop STATUS systems"
            >
              <div
                className="absolute w-16 h-16 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,102,255,0.35) 0%, transparent 70%)",
                  filter: "blur(8px)",
                }}
              />
              <div
                className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #0066ff 0%, #0044cc 50%, #00d4aa 100%)",
                  boxShadow: "0 4px 20px rgba(0,102,255,0.35)",
                  transition: "transform 0.15s ease",
                }}
              >
                <svg
                  className="w-5 h-5 text-white"
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

            {/* Help */}
            <NavItem
              href="/support"
              active={isActive("/support")}
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              }
              label="Help"
            />

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="flex flex-col items-center justify-center py-2 px-3 min-w-[60px] min-h-[48px] rounded-xl text-white/50 active:scale-95"
              style={{ transition: "transform 0.15s ease" }}
              aria-label={`Shopping cart, ${cartCount} items`}
            >
              <div className="relative">
                <svg
                  className="w-[21px] h-[21px]"
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
                  <span
                    className="absolute -top-1.5 -right-2.5 min-w-[17px] h-[17px] px-0.5 text-white text-[9px] font-bold rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--primary)",
                      boxShadow: "0 0 0 2px rgba(12, 15, 20, 0.97)",
                    }}
                  >
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
    </nav>
  );
}

/* ─── Extracted NavItem for cleaner code ─── */

function NavItem({
  href,
  active,
  icon,
  label,
}: {
  href: string;
  active: boolean | undefined;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`relative flex flex-col items-center justify-center py-2 px-3 min-w-[60px] min-h-[48px] rounded-xl active:scale-95 ${
        active ? "text-white" : "text-white/50"
      }`}
      style={{ transition: "transform 0.15s ease" }}
    >
      {active && (
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            backgroundColor: "rgba(0,102,255,0.15)",
            border: "1px solid rgba(0,102,255,0.25)",
          }}
        />
      )}
      <svg
        className={`w-[21px] h-[21px] relative ${
          active ? "text-[#4d94ff]" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={active ? 2.5 : 1.8}
      >
        {icon}
      </svg>
      <span
        className={`text-[10px] font-semibold tracking-wide relative mt-0.5 ${
          active ? "text-[#4d94ff]" : ""
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
