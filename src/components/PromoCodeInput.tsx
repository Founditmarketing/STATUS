"use client";

import { useState } from "react";
import { validatePromoCode, calculateDiscount, type PromoCode } from "@/lib/promo";

interface Props {
  subtotal: number;
  onApply: (promo: PromoCode, discount: number) => void;
  onRemove: () => void;
  appliedCode?: string;
}

export default function PromoCodeInput({ subtotal, onApply, onRemove, appliedCode }: Props) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleApply() {
    setError("");
    setLoading(true);
    
    // Simulate brief validation delay for UX
    setTimeout(() => {
      const result = validatePromoCode(code, subtotal);
      if (result.valid && result.promo) {
        const discount = calculateDiscount(result.promo, subtotal);
        onApply(result.promo, discount);
        setCode("");
      } else {
        setError(result.error || "Invalid code");
      }
      setLoading(false);
    }, 400);
  }

  if (appliedCode) {
    return (
      <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-200/60">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 3.636a1.5 1.5 0 010 2.122L3.414 7.394a1.5 1.5 0 01-2.122-2.122l1.636-1.636a1.5 1.5 0 012.122 0zM16.95 3.636a1.5 1.5 0 012.122 0l1.636 1.636a1.5 1.5 0 01-2.122 2.122l-1.636-1.636a1.5 1.5 0 010-2.122zM10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-emerald-700">{appliedCode}</span>
        </div>
        <button
          onClick={onRemove}
          className="text-xs text-emerald-600 hover:text-emerald-800 font-medium"
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => { setCode(e.target.value.toUpperCase()); setError(""); }}
          placeholder="Promo code"
          className="flex-1 px-3 py-2 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
          onKeyDown={(e) => e.key === "Enter" && code && handleApply()}
        />
        <button
          onClick={handleApply}
          disabled={!code || loading}
          className="px-4 py-2 rounded-lg bg-foreground text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-40"
        >
          {loading ? "..." : "Apply"}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mt-1.5 font-medium">{error}</p>}
    </div>
  );
}
