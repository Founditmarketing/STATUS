"use client";

import { use, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/Toast";
import { ViewingNow, StockBadge, RecentSales } from "@/components/UrgencyBadge";
import { RatingBadge } from "@/components/ReviewSection";
import ReviewSection from "@/components/ReviewSection";
import ShareButtons from "@/components/ShareButtons";
import WishlistButton from "@/components/WishlistButton";
import FinancingBadge from "@/components/FinancingBadge";

/* ─── Image Gallery ─── */
function ImageGallery({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4 min-w-0">
      {/* Main Image */}
      <div className="relative aspect-square bg-surface rounded-3xl overflow-hidden border border-border/50">
        <Image
          src={product.images[activeIndex]?.src || "/wall-mount.png"}
          alt={product.images[activeIndex]?.alt || product.name}
          fill
          className="object-contain p-6 sm:p-10"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {product.badge && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
            {product.badge}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {product.images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 max-w-full">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                i === activeIndex
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border/50 hover:border-border"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── FAQ Accordion ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm sm:text-base font-semibold pr-4 group-hover:text-primary transition-colors">{q}</span>
        <svg
          className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-muted text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ─── Sticky Add-to-Cart Bar ─── */
function StickyBar({ product, onAdd }: { product: Product; onAdd: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="font-bold text-sm truncate">{product.shortName}</p>
          <p className="text-primary font-extrabold text-lg">${product.price.toLocaleString()}</p>
        </div>
        <button
          onClick={onAdd}
          className="flex-shrink-0 gradient-bg text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* ─── Main Product Page ─── */
export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);
  const { addToCart, setCartOpen } = useCart();
  const { addToast } = useToast();

  const handleAdd = useCallback(() => {
    addToCart({
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      image_url: product.images[0]?.src || "/wall-mount.png",
    });
    addToast(`${product.shortName} added to cart`, "success");
    setCartOpen(true);
  }, [addToCart, setCartOpen, addToast, product]);

  return (
    <div className="overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-muted">
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{product.shortName}</span>
        </nav>
      </div>

      {/* Product Hero — Two Column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-4 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 min-w-0">
          {/* Left — Gallery */}
          <ImageGallery product={product} />

          {/* Right — Info */}
          <div className="lg:pt-4 min-w-0">
            {product.category === "bundle" && product.zones && (
              <span className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-2 block">
                {product.zones}-Zone System · {product.seer}
              </span>
            )}

            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight break-words">
                {product.name}
              </h1>
              <WishlistButton productId={product.id} />
            </div>

            {/* Rating + Share */}
            <div className="flex items-center gap-4 mb-4">
              <RatingBadge productId={product.id} useBundleAggregate={product.category === "bundle"} />
              <ShareButtons productName={product.name} productSlug={product.slug} />
            </div>

            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground">
                  ${product.price.toLocaleString()}
                </span>
                {product.comparePrice && (
                  <span className="text-lg text-muted line-through">
                    ${product.comparePrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.category === "bundle" && (
                <p className="text-sm text-success font-semibold mt-1">Save $3,000+ vs. professional install</p>
              )}
              {product.category === "bundle" && <FinancingBadge price={product.price} />}
            </div>

            {/* Urgency Triggers */}
            <div className="space-y-1.5 mb-6">
              <ViewingNow productId={product.id} />
              <StockBadge productId={product.id} />
              <RecentSales productId={product.id} />
            </div>

            {/* Quick Specs (bundles only) */}
            {product.category === "bundle" && (
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
                {[
                  { label: "BTU", value: `${(product.btu! / 1000).toFixed(0)}K`, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { label: "Zones", value: `${product.zones}`, icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                  { label: "Coverage", value: product.coverage!, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { label: "Efficiency", value: product.seer!, icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-surface border border-border/50 min-w-0">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                    </svg>
                    <div>
                      <p className="text-xs text-muted">{s.label}</p>
                      <p className="text-sm font-bold">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="w-full gradient-bg text-white py-4 rounded-2xl font-bold text-sm sm:text-base hover:opacity-90 transition-opacity mb-4 box-border"
            >
              Add to Cart — ${product.price.toLocaleString()}
            </button>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-2 text-xs text-muted">
              {["Free Shipping", "7-Year Warranty", "Easy DIY Install", "30-Day Returns"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      {product.features.length > 0 && (
        <section className="bg-foreground text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">
              Built Different
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {product.features.slice(0, 10).map((f) => (
                <div key={f} className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm leading-tight">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lifestyle Image (bundles only) */}
      {product.category === "bundle" && (
        <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
          <Image
            src="/product-hero.png"
            alt="STATUS mini-split installed in a modern home"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-7xl mx-auto">
            <p className="text-white/70 text-sm uppercase tracking-widest mb-2">Designed for Modern Homes</p>
            <p className="text-white text-2xl sm:text-3xl font-extrabold max-w-lg">
              Whisper-quiet comfort that blends into any interior.
            </p>
          </div>
        </section>
      )}

      {/* Specs Table */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">Technical Specifications</h2>
          <div className="bg-surface rounded-2xl border border-border/50 overflow-hidden">
            {product.specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < product.specs.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <span className="text-muted text-sm">{spec.label}</span>
                <span className="font-semibold text-sm text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">What&apos;s in the Box</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.includes.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl border border-border/50 p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-extrabold text-sm">{item.qty}×</span>
                </div>
                <p className="text-sm font-semibold leading-tight">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Accessories */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              {product.category === "bundle" ? "Complete Your Install" : "Popular Systems"}
            </h2>
            <p className="text-muted mb-10">
              {product.category === "bundle"
                ? "Everything you need for a professional-grade installation."
                : "Pair this accessory with a STATUS system."}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/products/${r.slug}`}
                  className="group bg-surface rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={r.images[0]?.src || "/wall-mount.png"}
                      alt={r.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{r.shortName}</p>
                    <p className="text-primary font-extrabold">${r.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {product.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div>
              {product.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      <ReviewSection productId={product.id} useBundleAggregate={product.category === "bundle"} />

      {/* Compare Link */}
      {product.category === "bundle" && (
        <div className="text-center pb-12">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Compare All Systems
          </Link>
        </div>
      )}

      {/* Sticky Bar */}
      <StickyBar product={product} onAdd={handleAdd} />
    </div>
  );
}
