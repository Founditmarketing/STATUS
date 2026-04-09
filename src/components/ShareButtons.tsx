"use client";

import { useState } from "react";
import { useToast } from "@/components/Toast";

interface Props {
  productName: string;
  productSlug: string;
}

export default function ShareButtons({ productName, productSlug }: Props) {
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();
  const url = typeof window !== "undefined" ? `${window.location.origin}/products/${productSlug}` : "";
  const text = `Check out the ${productName} from STATUS — DIY mini-split systems that save $3,000+ vs. professional install!`;

  function handleShare() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      navigator.share({ title: productName, text, url }).catch(() => {});
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    addToast("Link copied!", "success");
    setTimeout(() => setCopied(false), 2000);
  }


  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted">Share:</span>
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-surface border border-border/50 flex items-center justify-center text-muted hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-colors"
        aria-label="Share on Facebook"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      {/* Twitter/X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-surface border border-border/50 flex items-center justify-center text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
        aria-label="Share on X"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className="w-7 h-7 rounded-full bg-surface border border-border/50 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )}
      </button>
    </div>
  );
}
