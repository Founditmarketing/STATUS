"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/Toast";

/* ─── Real Product Catalog: 10 Multizone Bundles ─── */

const bundles = [
  // ── 18K Condenser (2-Zone) ──
  {
    id: "mz-18k-9-9",
    name: "18K 2-Zone (9K+9K)",
    condenser: "SDIY-MZ-18-230",
    btu: 18000,
    zones: 2,
    handlers: ["9K Air Handler", "9K Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-09-230"],
    seer: "23 SEER2",
    coverage: "600–900 sq ft",
    price: 2899,
    badge: "Best Value",
  },
  {
    id: "mz-18k-9-12",
    name: "18K 2-Zone (9K+12K)",
    condenser: "SDIY-MZ-18-230",
    btu: 18000,
    zones: 2,
    handlers: ["9K Air Handler", "12K Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "750–1,100 sq ft",
    price: 3099,
    badge: null,
  },
  // ── 27K Condenser (2-Zone) ──
  {
    id: "mz-27k-9-9",
    name: "27K 2-Zone (9K+9K)",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["9K Air Handler", "9K Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-09-230"],
    seer: "23 SEER2",
    coverage: "600–900 sq ft",
    price: 3299,
    badge: null,
  },
  {
    id: "mz-27k-9-12",
    name: "27K 2-Zone (9K+12K)",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["9K Air Handler", "12K Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "750–1,100 sq ft",
    price: 3499,
    badge: null,
  },
  {
    id: "mz-27k-9-18",
    name: "27K 2-Zone (9K+18K)",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["9K Air Handler", "18K Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-18-230"],
    seer: "22 SEER2",
    coverage: "950–1,350 sq ft",
    price: 3799,
    badge: null,
  },
  {
    id: "mz-27k-12-12",
    name: "27K 2-Zone (12K+12K)",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["12K Air Handler", "12K Air Handler"],
    handlerModels: ["SDIY-AH-12-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "900–1,300 sq ft",
    price: 3699,
    badge: "Most Popular",
  },
  {
    id: "mz-27k-12-18",
    name: "27K 2-Zone (12K+18K)",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["12K Air Handler", "18K Air Handler"],
    handlerModels: ["SDIY-AH-12-230", "SDIY-AH-18-230"],
    seer: "21 SEER2",
    coverage: "1,100–1,550 sq ft",
    price: 3999,
    badge: null,
  },
  // ── 27K Condenser (3-Zone) ──
  {
    id: "mz-27k-9-9-9",
    name: "27K 3-Zone (9K+9K+9K)",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 3,
    handlers: ["9K Air Handler", "9K Air Handler", "9K Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-09-230", "SDIY-AH-09-230"],
    seer: "23 SEER2",
    coverage: "900–1,350 sq ft",
    price: 4199,
    badge: null,
  },
  {
    id: "mz-27k-9-9-12",
    name: "27K 3-Zone (9K+9K+12K)",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 3,
    handlers: ["9K Air Handler", "9K Air Handler", "12K Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-09-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "1,050–1,550 sq ft",
    price: 4399,
    badge: "Whole Home",
  },
  {
    id: "mz-27k-9-12-12",
    name: "27K 3-Zone (9K+12K+12K)",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 3,
    handlers: ["9K Air Handler", "12K Air Handler", "12K Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-12-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "1,200–1,750 sq ft",
    price: 4599,
    badge: null,
  },
];

const sharedFeatures = [
  "R454B Refrigerant",
  "WiFi Built-In",
  "Hyper Heat to -13°F",
  "Pre-Charged Linesets",
  "7-Year Warranty",
];

const accessories = [
  { name: "25ft Pre-Charged Lineset", price: 249, desc: "Quick-connect, factory sealed with R454B", id: "acc-lineset-25" },
  { name: "50ft Pre-Charged Lineset", price: 349, desc: "Extended length for remote outdoor unit placement", id: "acc-lineset-50" },
  { name: "Wall Mounting Bracket", price: 79, desc: "Heavy-duty bracket for outdoor condenser unit", id: "acc-bracket" },
  { name: "Line Set Cover Kit", price: 89, desc: "Paintable PVC cover to hide exterior lines", id: "acc-cover" },
  { name: "Condensate Pump", price: 69, desc: "For installations where gravity drain isn't possible", id: "acc-pump" },
];

export default function Products() {
  const { addToCart, setCartOpen } = useCart();
  const { addToast } = useToast();

  function handleAddBundle(bundle: typeof bundles[0]) {
    addToCart({
      product_id: bundle.id,
      product_name: bundle.name,
      price: bundle.price,
      image_url: "/wall-mount.png",
    });
    addToast(`${bundle.name} added to cart`, "success");
    setCartOpen(true);
  }

  function handleAddAccessory(acc: typeof accessories[0]) {
    addToCart({
      product_id: acc.id,
      product_name: acc.name,
      price: acc.price,
    });
    addToast(`${acc.name} added to cart`, "success");
  }

  const twoZone = bundles.filter((b) => b.zones === 2);
  const threeZone = bundles.filter((b) => b.zones === 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Multizone <span className="gradient-text">Bundle Systems</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-6">
            Complete DIY multizone mini-split packages. One outdoor condenser, multiple indoor units. 
            Heat and cool every room independently.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted">
            {["Free 3-Day Shipping", "45-Day Returns", "7-Year Warranty", "R454B Refrigerant", "Energy Star Certified"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-border">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Specs Bar */}
      <section className="bg-foreground text-white py-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
            {sharedFeatures.map((f) => (
              <span key={f} className="flex items-center gap-2 text-white/80">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2-Zone Systems */}
      <section id="2-zone" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl gradient-bg text-white text-sm font-bold">2</span>
              <h2 className="text-3xl font-extrabold">2-Zone <span className="gradient-text">Bundles</span></h2>
            </div>
            <p className="text-muted">One condenser, two indoor air handlers. Perfect for apartments, additions, and open-plan homes.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {twoZone.map((bundle) => (
              <BundleCard key={bundle.id} bundle={bundle} onAdd={handleAddBundle} />
            ))}
          </div>
        </div>
      </section>

      {/* 3-Zone Systems */}
      <section id="3-zone" className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl gradient-bg text-white text-sm font-bold">3</span>
              <h2 className="text-3xl font-extrabold">3-Zone <span className="gradient-text">Bundles</span></h2>
            </div>
            <p className="text-muted">One condenser, three indoor air handlers. Whole-home comfort with independent room control.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {threeZone.map((bundle) => (
              <BundleCard key={bundle.id} bundle={bundle} onAdd={handleAddBundle} />
            ))}
          </div>
        </div>
      </section>

      {/* What's In Every Bundle */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            What&apos;s In Every <span className="gradient-text">Bundle</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Outdoor Condenser", desc: "Inverter compressor, R454B pre-charged", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { label: "Indoor Air Handlers", desc: "Wall-mount units with WiFi built-in", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { label: "Pre-Charged Linesets", desc: "Quick-connect, no vacuum pump needed", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { label: "Install Hardware", desc: "Brackets, remote controls, everything", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 bg-surface rounded-2xl border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">{item.label}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section id="accessories" className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-2">Accessories &amp; <span className="gradient-text">Add-Ons</span></h2>
          <p className="text-muted mb-10">Everything else you might need for your installation.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((acc) => (
              <div key={acc.name} className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
                <h3 className="font-bold mb-1">{acc.name}</h3>
                <p className="text-sm text-muted mb-4">{acc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">${acc.price}</span>
                  <button
                    onClick={() => handleAddAccessory(acc)}
                    className="text-primary text-sm font-semibold hover:underline min-h-[44px] inline-flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Not Sure Which Bundle?</h2>
              <p className="text-white/80 max-w-lg mx-auto mb-6">
                Use our free sizing calculator to find the perfect multizone system for your home, or call us for expert advice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/tools" className="bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
                  Size My System
                </Link>
                <a href="tel:+18887828871" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  Call 1-888-STATUS-1
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Bundle Product Card ─── */

function BundleCard({ bundle, onAdd }: { bundle: typeof bundles[0]; onAdd: (b: typeof bundles[0]) => void }) {
  return (
    <div className="group bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image + Badge */}
      <div className="h-44 sm:h-48 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <Image
          src="/wall-mount.png"
          alt={bundle.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {bundle.badge && (
          <span className="absolute top-3 left-3 gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {bundle.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-foreground/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {bundle.zones}-Zone
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-base leading-tight">{bundle.name}</h3>
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full shrink-0">{bundle.seer}</span>
        </div>

        <p className="text-sm text-muted mb-3">
          {bundle.btu.toLocaleString()} BTU · Covers {bundle.coverage}
        </p>

        {/* Air Handler breakdown */}
        <div className="space-y-1.5 mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Includes:</p>      
          <div className="text-sm space-y-1">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>1× {bundle.btu >= 27000 ? "27K" : "18K"} Outdoor Condenser</span>
            </div>
            {bundle.handlers.map((h, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-success shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-3">
          <div>
            <span className="text-2xl font-extrabold text-primary">${bundle.price.toLocaleString()}</span>
            <p className="text-[11px] text-muted">Complete bundle · Free shipping</p>
          </div>
          <button
            onClick={() => onAdd(bundle)}
            className="gradient-bg text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity min-h-[44px] inline-flex items-center gap-1.5 shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
