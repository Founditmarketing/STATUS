"use client";

import { useState, useEffect } from "react";

/** Seeded random: stable per-product so numbers don't flicker on re-render */
function seededRandom(seed: string, min: number, max: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const normalized = ((hash % 1000) + 1000) % 1000 / 1000;
  return Math.floor(normalized * (max - min + 1)) + min;
}

export function ViewingNow({ productId }: { productId: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(seededRandom(productId + "v", 8, 24));
    // Fluctuate slightly every 30s
    const interval = setInterval(() => {
      setCount((c) => c + (Math.random() > 0.5 ? 1 : -1));
    }, 30000);
    return () => clearInterval(interval);
  }, [productId]);

  if (count <= 0) return null;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
      </span>
      <span className="text-muted">
        <span className="font-semibold text-foreground">{count} people</span> viewing this right now
      </span>
    </div>
  );
}

export function StockBadge({ productId }: { productId: string }) {
  const stock = seededRandom(productId + "s", 3, 12);
  
  if (stock > 8) return null; // Only show when "low"

  return (
    <div className="flex items-center gap-1.5 text-sm">
      <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      <span className="text-amber-700 font-semibold">Only {stock} left in stock</span>
    </div>
  );
}

export function RecentSales({ productId }: { productId: string }) {
  const sold = seededRandom(productId + "rs", 2, 7);

  return (
    <div className="flex items-center gap-1.5 text-sm text-muted">
      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span><span className="font-semibold text-foreground">{sold} sold</span> in the last 24 hours</span>
    </div>
  );
}
