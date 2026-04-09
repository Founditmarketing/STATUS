"use client";

import { useState, useEffect } from "react";
import { isInWishlist, addToWishlist, removeFromWishlist } from "@/lib/wishlist";

export default function WishlistButton({ productId }: { productId: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isInWishlist(productId));
  }, [productId]);

  function toggle() {
    if (saved) {
      removeFromWishlist(productId);
      setSaved(false);
    } else {
      addToWishlist(productId);
      setSaved(true);
    }
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-surface transition-colors group"
      aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
    >
      <svg
        className={`w-5 h-5 transition-colors duration-200 ${saved ? "text-red-500 fill-red-500" : "text-muted group-hover:text-red-400"}`}
        fill={saved ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  );
}
