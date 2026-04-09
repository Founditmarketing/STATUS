"use client";

import { useState } from "react";
import { bundles, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/Toast";
import Image from "next/image";

export default function ComparePage() {
  const [selected, setSelected] = useState<[string, string]>([
    bundles[5]?.id || "", // 27K 12+12 (Most Popular)
    bundles[0]?.id || "", // 18K 9+9 (Best Value)
  ]);
  const { addToCart, setCartOpen } = useCart();
  const { addToast } = useToast();

  const products = selected.map((id) => bundles.find((b) => b.id === id)).filter(Boolean) as Product[];

  function handleAdd(product: Product) {
    addToCart({
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      image_url: product.images[0]?.src || "/wall-mount.png",
    });
    addToast(`${product.shortName} added to cart`, "success");
    setCartOpen(true);
  }

  const specLabels = [
    "Total Capacity",
    "Zones",
    "Indoor Units",
    "Efficiency",
    "Coverage",
    "Voltage",
    "Refrigerant",
    "Heating Range",
    "Noise Level",
    "WiFi",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Compare Systems</h1>
      <p className="text-muted mb-8">Choose two systems to compare side-by-side.</p>

      {/* Selectors */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[0, 1].map((i) => (
          <select
            key={i}
            value={selected[i]}
            onChange={(e) => {
              const next = [...selected] as [string, string];
              next[i] = e.target.value;
              setSelected(next);
            }}
            className="w-full px-3 py-3 rounded-xl border border-border bg-surface text-sm font-medium focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          >
            {bundles.map((b) => (
              <option key={b.id} value={b.id}>{b.shortName}</option>
            ))}
          </select>
        ))}
      </div>

      {/* Product headers */}
      <div className="grid grid-cols-[140px_1fr_1fr] sm:grid-cols-[200px_1fr_1fr] gap-0 border border-border rounded-2xl overflow-hidden bg-white">
        {/* Header row */}
        <div className="bg-surface p-4 border-b border-r border-border font-bold text-sm">System</div>
        {products.map((p) => (
          <div key={p.id} className="p-4 border-b border-r last:border-r-0 border-border text-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2">
              <Image
                src={p.images[0]?.src || "/wall-mount.png"}
                alt={p.name}
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
            <p className="font-bold text-sm">{p.shortName}</p>
            {p.badge && (
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1">
                {p.badge}
              </span>
            )}
          </div>
        ))}

        {/* Price row */}
        <div className="bg-surface p-4 border-b border-r border-border font-bold text-sm flex items-center">Price</div>
        {products.map((p) => (
          <div key={p.id + "price"} className="p-4 border-b border-r last:border-r-0 border-border text-center">
            <span className="text-xl font-extrabold text-primary">${p.price.toLocaleString()}</span>
          </div>
        ))}

        {/* Spec rows */}
        {specLabels.map((label, idx) => (
          <>
            <div key={label} className={`bg-surface p-4 border-r border-border text-sm text-muted ${idx < specLabels.length - 1 ? "border-b" : ""}`}>
              {label}
            </div>
            {products.map((p) => {
              const spec = p.specs.find((s) => s.label === label);
              const otherProduct = products.find((op) => op.id !== p.id);
              const otherSpec = otherProduct?.specs.find((s) => s.label === label);
              const isDifferent = spec?.value !== otherSpec?.value;

              return (
                <div
                  key={p.id + label}
                  className={`p-4 border-r last:border-r-0 border-border text-center text-sm ${
                    idx < specLabels.length - 1 ? "border-b" : ""
                  } ${isDifferent ? "bg-primary/5 font-semibold" : ""}`}
                >
                  {spec?.value || "—"}
                </div>
              );
            })}
          </>
        ))}

        {/* Add to cart row */}
        <div className="bg-surface p-4 border-t border-r border-border" />
        {products.map((p) => (
          <div key={p.id + "cta"} className="p-4 border-t border-r last:border-r-0 border-border text-center">
            <button
              onClick={() => handleAdd(p)}
              className="gradient-bg text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
