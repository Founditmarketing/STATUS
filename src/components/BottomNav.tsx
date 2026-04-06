"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useState, useEffect } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useCart();
  // Start hidden so the hero section is completely unblocked
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Initial check on mount in case they loaded halfway down
    if (window.scrollY > 150) setShowNav(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide completely if at the very top
      if (currentScrollY < 150) {
        setShowNav(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down: hide
        setShowNav(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up: show
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-border pb-safe transition-transform duration-300 ease-out ${showNav ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex items-center justify-around h-16 px-2">
        <Link 
          href="/products" 
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname?.startsWith('/products') ? 'text-primary' : 'text-muted hover:text-foreground transition-colors'}`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-semibold tracking-wide">Shop</span>
        </Link>
        
        <Link 
          href="/tools" 
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname?.startsWith('/tools') ? 'text-primary' : 'text-muted hover:text-foreground transition-colors'}`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-semibold tracking-wide">Size System</span>
        </Link>

        <button 
          onClick={() => setCartOpen(true)}
          className="flex flex-col items-center justify-center w-full h-full space-y-1 text-muted hover:text-foreground transition-colors relative"
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-wide">Cart</span>
        </button>
      </div>
    </div>
  );
}
