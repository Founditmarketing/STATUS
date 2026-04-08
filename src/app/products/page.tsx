"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/Toast";
import { bundles, accessories, type Product } from "@/lib/products";

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

  const featured = bundles.find((b) => b.badge === "Most Popular")!;
  const twoZone = bundles.filter((b) => b.zones === 2);
  const threeZone = bundles.filter((b) => b.zones === 3);

  return (
    <>
      {/* Hero — Lifestyle Banner */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <Image
          src="/pomelli-image (11).png"
          alt="STATUS mini-split installed in modern home"
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

      {/* Featured Product — Hero Card */}
      <section className="py-16 sm:py-24 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-square max-w-lg mx-auto w-full">
              <Image
                src="/pomelli-asset-2.png"
                alt="STATUS complete mini-split system"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-primary-light font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Most Popular</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{featured.name}</h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">{featured.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { l: "Capacity", v: `${(featured.btu! / 1000).toFixed(0)}K BTU` },
                  { l: "Zones", v: `${featured.zones} Rooms` },
                  { l: "Efficiency", v: featured.seer! },
                  { l: "Coverage", v: featured.coverage! },
                ].map((s) => (
                  <div key={s.l} className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.10]">
                    <p className="text-white/50 text-xs mb-0.5">{s.l}</p>
                    <p className="font-bold text-sm">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-extrabold">${featured.price.toLocaleString()}</span>
                <span className="text-sm text-success font-semibold">Save $3,000+ vs pro install</span>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/products/${featured.slug}`}
                  className="flex-1 bg-white text-foreground text-center py-3.5 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors"
                >
                  Learn More
                </Link>
                <button
                  onClick={() => handleAdd(featured)}
                  className="flex-1 gradient-bg text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>
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
    </>
  );
}

/* ─── Product Card Component ─── */
function ProductCard({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) {
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
        {product.category === "bundle" && (
          <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">
            {product.zones}-Zone · {product.seer}
          </p>
        )}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors leading-tight">
            {product.shortName}
          </h3>
        </Link>
        <p className="text-muted text-xs sm:text-sm mb-4 leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        {/* Price + Actions */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-extrabold">${product.price.toLocaleString()}</span>
            {product.category === "bundle" && (
              <span className="text-[10px] text-muted">+ free shipping</span>
            )}
          </div>
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
