"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { useCart } from "@/lib/cart-context";
import SearchModal from "@/components/SearchModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const { cartCount, setCartOpen, user } = useCart();

  // Cmd+K to open search
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setSearchOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastScrollY.current;

        if (delta > 3 && y > 50) {
          setShowPromo(false);
        } else if (delta < -3) {
          setShowPromo(true);
        }

        lastScrollY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/tools", label: "Sizing & Tools" },
    { href: "/support", label: "Support" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/50"
      style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
    >
      {/* Top banner */}
      <div
        style={{
          transform: showPromo ? "translateY(0)" : "translateY(-100%)",
          maxHeight: showPromo ? "48px" : "0px",
          transition: "transform 0.3s ease, max-height 0.3s ease",
          overflow: "hidden",
        }}
      >
        <div className="bg-foreground text-white text-center py-2 px-4 text-sm font-medium tracking-wide">
          Free 3-Day Shipping on All Systems &mdash; Order Today
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 min-h-[44px]">
            <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-[0.15em] uppercase">Status</span>
          </Link>

          {/* Desktop nav — 44px min touch targets */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors px-4 py-3 min-h-[44px] inline-flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Search + Cart + Auth */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-muted hover:text-foreground transition-colors px-2 py-3 min-h-[44px] inline-flex items-center gap-1.5 text-sm"
              aria-label="Search products"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded bg-surface border border-border text-[10px] text-muted font-mono">⌘K</kbd>
            </button>
            {/* Account link */}
            {user ? (
              <Link
                href="/account"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors px-3 py-3 min-h-[44px] inline-flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account
              </Link>
            ) : (
              <Link
                href="/login"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors px-3 py-3 min-h-[44px] inline-flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Sign In
              </Link>
            )}

            {/* Cart button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-muted hover:text-foreground transition-colors px-3 py-3 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label={`Shopping cart, ${cartCount} items`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce-in">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>

            <Link
              href="/products"
              className="gradient-bg text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity min-h-[44px] inline-flex items-center"
            >
              Shop Mini Splits
            </Link>
          </div>

          {/* Mobile: Cart + Menu */}
          <div className="md:hidden flex items-center gap-1">
            {/* Mobile cart button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={`Shopping cart, ${cartCount} items`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted hover:text-foreground transition-colors py-3 min-h-[44px] flex items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <Link
                  href="/account"
                  className="text-base font-medium text-primary py-3 min-h-[44px] flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Account
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="text-base font-medium text-primary py-3 min-h-[44px] flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Sign In
                </Link>
              )}
              <Link
                href="/products"
                className="gradient-bg text-white px-5 py-3 rounded-lg text-base font-semibold text-center mt-2 min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Shop Mini Splits
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
