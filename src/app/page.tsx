import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import ScrollCTA from "@/components/ScrollCTA";
import HVACParticles from "@/components/HVACParticles";
import { ProductSchema, FAQSchema } from "@/components/SchemaMarkup";

const stats = [
  { value: "$3,000+", label: "Average Savings", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "2-3 Hrs", label: "Install Time", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "24 SEER2", label: "Peak Efficiency", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { value: "7 Year", label: "Compressor Warranty", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

const products = [
  {
    title: "18K 2-Zone (9K+9K)",
    slug: "2-zone",
    description: "Two rooms, one system. Perfect starter bundle for bedrooms, offices, or apartments. Includes two 9K air handlers.",
    price: "$2,899",
    priceNote: "18,000 BTU / 600–900 sq ft",
    specs: ["2 Indoor Air Handlers", "Up to 23 SEER2", "WiFi Built-In"],
    image: "/wall-mount.png",
    badge: "Best Value",
  },
  {
    title: "27K 2-Zone (12K+12K)",
    slug: "2-zone",
    description: "Our most popular multizone bundle. Two 12K handlers give powerful cooling and heating for larger rooms.",
    price: "$3,699",
    priceNote: "27,000 BTU / 900–1,300 sq ft",
    specs: ["2 Indoor Air Handlers", "Up to 22 SEER2", "Hyper Heat to -13°F"],
    image: "/wall-mount.png",
    badge: "Most Popular",
  },
  {
    title: "27K 3-Zone (9K+9K+12K)",
    slug: "3-zone",
    description: "Whole-home comfort. Three independent zones with individual temperature control for every room.",
    price: "$4,399",
    priceNote: "27,000 BTU / 1,050–1,550 sq ft",
    specs: ["3 Indoor Air Handlers", "Up to 22 SEER2", "R454B Refrigerant"],
    image: "/wall-mount.png",
    badge: "Whole Home",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Size Your Space",
    description: "Use our free BTU calculator or Manual J sizing tool to find the perfect system for your room or home.",
  },
  {
    step: "02",
    title: "Shop & Order",
    description: "Choose your system type and configuration. Everything ships free in 3 days with all parts included.",
  },
  {
    step: "03",
    title: "Install Yourself",
    description: "Follow our step-by-step video guides. Pre-charged linesets mean no special tools or certifications needed.",
  },
  {
    step: "04",
    title: "Save Year-Round",
    description: "Enjoy lower energy bills with up to 24 SEER2 efficiency. Heat and cool for a fraction of the cost.",
  },
];

const testimonials = [
  {
    quote: "Installed the 12K BTU wall unit in my garage workshop in about 2 hours. Works flawlessly even at -5°F. Incredible value.",
    name: "Mike T.",
    location: "Denver, CO",
    rating: 5,
    product: "12K BTU Wall Mount",
    installTime: "2 hours",
    verified: true,
  },
  {
    quote: "Saved over $4,000 compared to the quotes I got from local HVAC companies. The pre-charged lineset made installation a breeze.",
    name: "Sarah L.",
    location: "Minneapolis, MN",
    rating: 5,
    product: "18K BTU Wall Mount",
    installTime: "3 hours",
    verified: true,
  },
  {
    quote: "We've installed 3 STATUS units in our home now. The ceiling cassette in the living room is whisper quiet and looks amazing.",
    name: "Carlos R.",
    location: "Seattle, WA",
    rating: 5,
    product: "12K BTU Ceiling Cassette",
    installTime: "2.5 hours",
    verified: true,
  },
];

const resources = [
  { title: "Sizing Guide", description: "Learn how to properly size your mini-split system for maximum efficiency and comfort.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", href: "/tools#sizing" },
  { title: "Installation Guide", description: "Step-by-step instructions with photos and video for every system type we sell.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", href: "/support#guides" },
  { title: "Brand Comparison", description: "See how STATUS stacks up against MrCool, Senville, Pioneer, and other DIY brands.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", href: "/tools#comparison" },
  { title: "BTU Calculator", description: "Input your room dimensions and get an instant BTU recommendation for your space.", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", href: "/tools#calculator" },
  { title: "Blog & Guides", description: "Tips on energy efficiency, maintenance, rebate programs, and getting the most from your system.", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z", href: "/support" },
  { title: "FAQ", description: "Answers to the most common questions about our systems, installation, and warranties.", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", href: "#faq" },
];

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <ProductSchema />
      <FAQSchema />

      {/* Hero Section — Stacked on Mobile, Video Background on Desktop */}
      <section className="relative flex flex-col sm:block sm:min-h-[90vh] bg-foreground text-white overflow-hidden">
        {/* Video wrapper: Specific height on mobile, absolute full-viewport on desktop */}
        <div className="hidden sm:block relative w-full h-[50vh] sm:absolute sm:inset-0 sm:h-full order-1 sm:order-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/pomelli-image (11).png"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/status-hero.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay specifically for desktop text readability */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content wrapper: solid dark bg on mobile, flows naturally down. Padded center on desktop */}
        <div className="relative w-full sm:h-full sm:flex sm:items-center order-2 sm:order-none">
          {/* Custom Particle Effect specifically for Mobile */}
          <HVACParticles />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
              <div className="inline-flex items-center gap-2 bg-white/10 sm:bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                Up to 24 SEER2 Efficiency
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                DIY Ductless
                <br className="hidden sm:block" />
                {" "}Mini-Split Systems.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Professional HVAC. DIY Prices.
                </span>
              </h1>

              <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed mx-auto sm:mx-0">
                Save $3,000+ with our pre-charged, easy-install ductless mini-split systems. No HVAC certification needed. No special tools. Just comfort.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Link
                  href="/products"
                  className="gradient-bg text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 min-h-[48px]"
                >
                  Shop Mini Splits
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/tools#calculator"
                  className="bg-white/10 sm:bg-white/15 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold hover:bg-white/25 transition-colors inline-flex items-center justify-center gap-2 min-h-[48px]"
                >
                  Size My System
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-sm text-white/70">
                {["Free 3-Day Shipping", "45-Day Guarantee", "7-Year Warranty"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating cards — desktop only */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-extrabold gradient-text">$3,000+</div>
                  <div className="text-xs text-muted">Average Savings vs Pro Install</div>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs font-bold">4.8/5 · 2,300+ reviews</div>
            </div>
          </div>
        </div>

        {/* Sentinel for ScrollCTA IntersectionObserver */}
        <div id="hero-sentinel" className="absolute bottom-0 h-1 w-full" aria-hidden="true" />
      </section>

      {/* ScrollCTA - appears when hero scrolls out of view */}
      <ScrollCTA />

      <section className="border-y border-border bg-white noise-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: `${0.1 * stats.indexOf(stat)}s` }}>
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 mb-2 sm:mb-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 sm:py-24 bg-white noise-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Choose Your <span className="gradient-text">Bundle</span>
            </h2>
            <p className="text-base sm:text-lg text-muted">
              Complete multizone packages — one outdoor condenser plus multiple indoor air handlers. Everything ships free with pre-charged linesets included.
            </p>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 overflow-x-auto sm:overflow-visible pb-8 sm:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-pl-4">
            {products.map((product) => (
              <div
                key={product.title}
                className="group w-[85vw] sm:w-auto shrink-0 snap-center sm:snap-none bg-surface rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="h-48 sm:h-56 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{product.description}</p>

                  <ul className="space-y-2 mb-5 sm:mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-success shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-3">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <p className="text-[13px] text-muted mt-0.5">{product.priceNote}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <Link href={`/products#${product.slug}`} className="gradient-bg text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity min-h-[44px] inline-flex items-center">
                      Shop Now &rarr;
                    </Link>
                    <Link href="/tools#calculator" className="text-primary text-sm font-medium hover:underline min-h-[44px] inline-flex items-center">
                      Size my room
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY Installation — Image-First Split Layout */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">DIY Installation</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-6">
                Save Thousands. <span className="gradient-text">Install Yourself.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed">
                Why pay $4,000–$8,000 for professional installation when you can do it yourself in a few hours? STATUS systems are engineered from the ground up for homeowner installation.
              </p>
              <ul className="space-y-4">
                {[
                  "Pre-charged linesets — no vacuum pump or gauges needed",
                  "Quick-connect fittings — just tighten and go",
                  "Step-by-step video installation guides",
                  "Live phone support during your install",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifestyle image: hand with remote controlling unit */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/pomelli-asset-4.png"
                  alt="Homeowner using remote control to adjust STATUS wall-mounted mini-split"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's In the Box — with product kit photo */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Product kit photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-white order-2 lg:order-1">
              <div className="relative w-full aspect-square sm:aspect-[4/5]">
                <Image
                  src="/pomelli-asset-2.png"
                  alt="STATUS mini-split complete kit — indoor unit, outdoor condenser, pre-charged lineset, and remote control"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Everything Included</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-6">
                What&apos;s In the <span className="gradient-text">Box</span>
              </h2>
              <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed">
                No hidden costs. No extra parts to buy. Every STATUS system ships with the complete kit.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { item: "Indoor Unit (Evaporator)", desc: "Wall mount, cassette, or ducted" },
                  { item: "Outdoor Unit (Condenser)", desc: "Inverter compressor with hyper heat" },
                  { item: "Pre-Charged Lineset", desc: "Quick-connect, factory sealed" },
                  { item: "Mounting Hardware", desc: "Bracket, bolts, anchors, and template" },
                  { item: "WiFi Control Module", desc: "Control from anywhere via app" },
                  { item: "Remote Control", desc: "Backlit with timer and sleep mode" },
                ].map((box) => (
                  <div key={box.item} className="flex items-start gap-3 p-3 bg-surface rounded-lg">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">{box.item}</p>
                      <p className="text-[13px] text-muted">{box.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs STATUS — Comparison (mobile-optimized stacked cards) */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pre-Charged Technology</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-6">
                Quick-Connect <span className="gradient-text">Linesets</span>
              </h2>
              <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed">
                Our pre-charged linesets come factory-filled with R410A refrigerant and use quick-connect fittings. No vacuum pump. No manifold gauges. No HVAC certification. Just connect, tighten, and enjoy.
              </p>
              <ul className="space-y-4">
                {[
                  "Factory-sealed with R410A refrigerant",
                  "No brazing, soldering, or special tools",
                  "Leak-tested at the factory",
                  "Available in 16ft, 25ft, and 50ft lengths",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-border p-5 sm:p-8">
              <h3 className="text-lg font-bold mb-4">Traditional vs STATUS Install</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { traditional: "Licensed HVAC tech ($150+/hr)", status: "DIY with basic hand tools" },
                  { traditional: "Vacuum pump & manifold gauges", status: "Pre-charged quick-connect" },
                  { traditional: "Brazing copper lines", status: "Tighten fittings by hand" },
                  { traditional: "8-12 hours install time", status: "2-3 hours install time" },
                  { traditional: "$4,000-$8,000+ total cost", status: "Starting at $1,899" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-2 gap-2 sm:gap-4 text-sm">
                    <div className="flex items-start gap-1.5 sm:gap-2 p-2 bg-red-50 rounded-lg">
                      <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-700 text-[13px] sm:text-sm">{row.traditional}</span>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2 p-2 bg-green-50 rounded-lg">
                      <svg className="w-4 h-4 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-700 text-[13px] sm:text-sm">{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals — Glassmorphism Cards */}
      <section className="py-12 sm:py-16 bg-foreground text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Energy Star Certified", description: "All STATUS systems meet or exceed Energy Star requirements for maximum efficiency and rebate eligibility.", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
              { title: "ETL Safety Listed", description: "Every unit is independently tested and certified to UL safety standards by Intertek (ETL).", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Assembled in the USA", description: "Engineered and assembled in our state-of-the-art facility, ensuring quality control at every step.", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" },
            ].map((item, idx) => (
              <div key={item.title} className="text-center p-6 sm:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.08] transition-all duration-300 animate-fade-up" style={{ animationDelay: `${0.15 * idx}s` }}>
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 mb-5 relative">
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl" />
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary-light relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works — Dark Immersive Editorial */}
      <section className="py-20 sm:py-28 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.12),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary-light font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">The Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Four Steps to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Comfort</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60">
              From sizing to saving — the whole process takes just a few hours.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {howItWorks.map((item, idx) => (
              <div key={item.step} className="relative p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 animate-fade-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-b from-primary/30 to-transparent bg-clip-text text-transparent mb-3 sm:mb-4">{item.step}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Large Quote Marks, Elevated Cards */}
      <section className="py-16 sm:py-24 bg-surface noise-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Social Proof</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              What Our Customers <span className="gradient-text">Say</span>
            </h2>
            <p className="text-base sm:text-lg text-muted">
              Thousands of homeowners have already made the switch to STATUS.
            </p>
          </div>

          {/* Aggregate review score */}
          <div className="flex items-center justify-center gap-3 mb-10 sm:mb-12">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-lg">4.8/5</span>
            <span className="text-muted text-sm">from 2,300+ verified reviews</span>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:snap-none sm:pb-0">
            {testimonials.map((t, idx) => (
              <div key={t.name} className="relative bg-white rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 min-w-[300px] sm:min-w-0 snap-center flex-shrink-0 sm:flex-shrink animate-fade-up" style={{ animationDelay: `${0.12 * idx}s` }}>
                {/* Decorative large quote mark */}
                <div className="absolute top-4 right-5 text-6xl sm:text-7xl font-serif text-primary/[0.07] leading-none select-none pointer-events-none">&ldquo;</div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {t.verified && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-success bg-green-50 px-2 py-1 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-foreground text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 relative">&ldquo;{t.quote}&rdquo;</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded-full">{t.product}</span>
                  <span className="text-xs bg-surface-2 text-muted font-medium px-2 py-1 rounded-full">Installed in {t.installTime}</span>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-sm sm:text-base">{t.name}</p>
                  <p className="text-sm text-muted">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebates CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
                Up to $8,000 in Rebates
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8">
                Federal tax credits and state rebates can cover a huge portion of your system cost. Heat pumps qualify for the 25C tax credit and many state incentive programs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/tools#rebates"
                  className="bg-white text-primary font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 min-h-[48px]"
                >
                  Check Your Rebates
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="border-2 border-white/30 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-white/10 transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Shop Systems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Resources &amp; <span className="gradient-text">Guides</span>
            </h2>
            <p className="text-base sm:text-lg text-muted">
              Everything you need to choose, install, and maintain your system.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group bg-surface rounded-2xl p-4 sm:p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all min-h-[44px]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={resource.icon} />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">{resource.title}</h3>
                <p className="text-[13px] sm:text-sm text-muted leading-relaxed">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQ />
      </div>
    </>
  );
}
