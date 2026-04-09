"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { allProducts, type Product } from "@/lib/products";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.includes(q) ||
        p.specs.some((s) => s.value.toLowerCase().includes(q))
    );
    setResults(filtered);
  }, [query]);

  const handleSelect = useCallback((slug: string) => {
    onClose();
    router.push(`/products/${slug}`);
  }, [onClose, router]);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-[10%] left-1/2 -translate-x-1/2 z-[201] w-full max-w-lg px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <svg className="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search systems, accessories..."
              className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted"
            />
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-surface border border-border text-[10px] text-muted font-mono">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto">
            {query && results.length === 0 && (
              <div className="px-5 py-8 text-center">
                <p className="text-muted text-sm">No results for &ldquo;{query}&rdquo;</p>
              </div>
            )}
            {results.map((product) => (
              <button
                key={product.id}
                onClick={() => handleSelect(product.slug)}
                className="w-full flex items-center gap-3 px-5 py-3 hover:bg-surface transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-border/50 overflow-hidden relative shrink-0">
                  <Image
                    src={product.images[0]?.src || "/wall-mount.png"}
                    alt={product.name}
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{product.shortName}</p>
                  <p className="text-xs text-muted truncate">{product.shortDescription}</p>
                </div>
                <span className="text-sm font-bold text-primary shrink-0">${product.price.toLocaleString()}</span>
              </button>
            ))}
          </div>

          {/* Footer hint */}
          {!query && (
            <div className="px-5 py-4 bg-surface/50 border-t border-border">
              <p className="text-xs text-muted text-center">
                Try &ldquo;3-zone&rdquo;, &ldquo;lineset&rdquo;, or &ldquo;bracket&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
