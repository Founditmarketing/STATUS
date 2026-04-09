"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/Toast";
import { bundles, accessories, type Product } from "@/lib/products";
import { RatingBadge } from "@/components/ReviewSection";

export default function Products() {
  const { addToCart, setCartOpen } = useCart();
  const { addToast } = useToast();

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

  const twoZone = bundles.filter((b) => b.zones === 2);
  const threeZone = bundles.filter((b) => b.zones === 3);

  return (
    <div className="overflow-x-hidden">
      {/* Hero — Lifestyle Banner */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <Image
          src="/product-hero.png"
          alt="STATUS mini-split in a modern warm-climate home"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <span className="text-white/60 text-sm uppercase tracking-[0.2em] font-semibold mb-4 block">
                STATUS Systems
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
                Comfort.<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Engineered.
                </span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Pro-grade ductless mini-split systems you install yourself. 
                Save $3,000+ and take control of every room.
              </p>
              <a
                href="#systems"
                className="inline-flex items-center gap-2 bg-white text-foreground px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors"
              >
                Shop Systems
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Zone Systems */}
      <section id="systems" className="py-16 sm:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-2 block">2-Zone Systems</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Two Rooms. One Condenser.
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Independent temperature control for two separate rooms. One outdoor unit, two indoor units.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {twoZone.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={handleAdd} />
            ))}
          </div>
        </div>
      </section>

      {/* 3-Zone Systems */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-2 block">3-Zone Systems</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Whole Home Comfort.
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Three zones of independent control. Heat and cool your entire home from a single outdoor unit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {threeZone.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={handleAdd} />
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-2 block">Accessories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Complete Your Install.
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Everything you need for a clean, professional installation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {accessories.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={handleAdd} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14">
            {[
              { label: "Free Shipping", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
              { label: "7-Year Warranty", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { label: "Energy Star", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
              { label: "ETL Certified", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { label: "USA Assembled", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-sm font-semibold text-white/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Product Card Component ─── */
function ProductCard({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) {
  const isBundle = product.category === "bundle";
  const monthly = isBundle ? Math.ceil(product.price / 24) : null;

  return (
    <div className="group bg-white rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative aspect-square bg-surface/50 overflow-hidden">
        <Image
          src={product.images[0]?.src || "/wall-mount.png"}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
            {product.badge}
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        {isBundle && (
          <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">
            {product.zones}-Zone · {product.seer}
          </p>
        )}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors leading-tight">
            {product.shortName}
          </h3>
        </Link>

        {/* Star rating */}
        <div className="mb-2">
          <RatingBadge productId={product.id} useBundleAggregate={isBundle} />
        </div>

        <p className="text-muted text-xs sm:text-sm mb-3 leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        {/* Coverage + specs strip (bundles) */}
        {isBundle && product.coverage && (
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-surface px-2 py-1 rounded-md text-muted">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {product.coverage}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-surface px-2 py-1 rounded-md text-muted">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {product.seer}
            </span>
          </div>
        )}

        {/* Price + Financing */}
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xl font-extrabold">${product.price.toLocaleString()}</span>
            {isBundle && (
              <span className="text-[10px] text-emerald-600 font-semibold">FREE shipping</span>
            )}
          </div>
          {monthly && (
            <p className="text-xs text-muted mb-3">
              Or as low as <span className="font-semibold text-foreground">${monthly}/mo</span> with financing
            </p>
          )}
          <div className="flex gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 text-center py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-surface transition-colors"
            >
              Details
            </Link>
            <button
              onClick={() => onAdd(product)}
              className="flex-1 gradient-bg text-white py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
