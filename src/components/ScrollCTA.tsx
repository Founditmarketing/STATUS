"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function ScrollCTA() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel element placed at bottom of hero via id */}
      <div
        ref={sentinelRef}
        id="scroll-cta-sentinel"
        className="h-1 w-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Sticky CTA bar */}
      <div
        className={`hidden sm:block fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ willChange: "transform" }}
        role="complementary"
        aria-label="Quick actions"
      >
        <div className="gradient-bg border-t border-white/10 shadow-2xl shadow-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            <p className="hidden sm:block text-white/90 text-sm font-medium">
              Save $3,000+ with professional-grade DIY mini-splits
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/products"
                className="flex-1 sm:flex-none bg-white text-primary px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-white/90 transition-colors text-center"
              >
                Shop Mini Splits
              </Link>
              <Link
                href="/tools#calculator"
                className="flex-1 sm:flex-none border border-white/30 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Size My System
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
