import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIY Mini-Split Systems & Accessories | STATUS",
  description: "Shop wall mounted, ceiling cassette, and concealed ducted mini-split heat pump systems. Starting at $1,899 with free 3-day shipping. Pre-charged linesets included — no HVAC certification needed.",
};

const categoryImages: Record<string, string> = {
  "Wall Mounted": "/wall-mount.png",
  "Ceiling Cassette": "/ceiling-cassette.png",
  "Concealed Ducted": "/ducted-system.png",
};

const systems = [
  {
    category: "Wall Mounted",
    slug: "wall-mounted",
    description: "Most popular. Sleek indoor unit mounts high on any wall.",
    items: [
      { name: "9K BTU Wall Mount", seer: "24 SEER2", area: "300-450 sq ft", price: "$1,899", features: ["Hyper Heat to -13°F", "WiFi Control", "Inverter Compressor"] },
      { name: "12K BTU Wall Mount", seer: "24 SEER2", area: "450-650 sq ft", price: "$2,099", features: ["Hyper Heat to -13°F", "WiFi Control", "Inverter Compressor"] },
      { name: "18K BTU Wall Mount", seer: "22 SEER2", area: "650-900 sq ft", price: "$2,499", features: ["Hyper Heat to -13°F", "WiFi Control", "Inverter Compressor"] },
      { name: "24K BTU Wall Mount", seer: "21 SEER2", area: "900-1,200 sq ft", price: "$2,899", features: ["Hyper Heat to -13°F", "WiFi Control", "Inverter Compressor"] },
      { name: "36K BTU Wall Mount", seer: "20 SEER2", area: "1,200-1,500 sq ft", price: "$3,499", features: ["Hyper Heat to -13°F", "WiFi Control", "Inverter Compressor"] },
    ],
  },
  {
    category: "Ceiling Cassette",
    slug: "ceiling-cassette",
    description: "Flush-mount in ceiling with 360° airflow distribution.",
    items: [
      { name: "12K BTU Cassette", seer: "22 SEER2", area: "450-650 sq ft", price: "$2,699", features: ["4-Way Airflow", "WiFi Control", "Auto Swing Louvers"] },
      { name: "18K BTU Cassette", seer: "21 SEER2", area: "650-900 sq ft", price: "$3,199", features: ["4-Way Airflow", "WiFi Control", "Auto Swing Louvers"] },
      { name: "24K BTU Cassette", seer: "20 SEER2", area: "900-1,200 sq ft", price: "$3,699", features: ["4-Way Airflow", "WiFi Control", "Auto Swing Louvers"] },
    ],
  },
  {
    category: "Concealed Ducted",
    slug: "concealed-ducted",
    description: "Hidden behind walls/ceilings. Only a discreet vent is visible.",
    items: [
      { name: "12K BTU Ducted", seer: "21 SEER2", area: "450-650 sq ft", price: "$2,299", features: ["Low Profile Design", "WiFi Control", "External Static Pressure"] },
      { name: "18K BTU Ducted", seer: "20 SEER2", area: "650-900 sq ft", price: "$2,799", features: ["Low Profile Design", "WiFi Control", "External Static Pressure"] },
      { name: "24K BTU Ducted", seer: "20 SEER2", area: "900-1,200 sq ft", price: "$3,299", features: ["Low Profile Design", "WiFi Control", "External Static Pressure"] },
    ],
  },
];

const accessories = [
  { name: "25ft Pre-Charged Lineset", price: "$249", desc: "Quick-connect, factory sealed with R410A" },
  { name: "50ft Pre-Charged Lineset", price: "$349", desc: "Extended length for remote outdoor unit placement" },
  { name: "Wall Mounting Bracket", price: "$79", desc: "Heavy-duty bracket for outdoor condenser unit" },
  { name: "Line Set Cover Kit", price: "$89", desc: "Paintable PVC cover to hide exterior lines" },
  { name: "Condensate Pump", price: "$69", desc: "For installations where gravity drain isn't possible" },
  { name: "WiFi Thermostat Upgrade", price: "$129", desc: "Smart thermostat with scheduling and geofencing" },
];

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Shop <span className="gradient-text">Mini-Split Systems</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-6">
            Every system ships free in 3 days with everything you need for DIY installation. Pre-charged linesets included.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
            {["Free 3-Day Shipping", "45-Day Returns", "7-Year Warranty", "Pre-Charged Linesets"].map((item) => (
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

      {/* Product Listings */}
      {systems.map((category) => (
        <section key={category.category} id={category.slug} className="py-16 bg-white border-b border-border last:border-b-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold mb-2">{category.category} <span className="gradient-text">Systems</span></h2>
              <p className="text-muted">{category.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div key={item.name} className="bg-surface rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden">
                  <div className="h-44 relative overflow-hidden">
                    <Image
                      src={categoryImages[category.category] || "/wall-mount.png"}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold">{item.name}</h3>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{item.seer}</span>
                    </div>
                    <p className="text-sm text-muted mb-4">Covers {item.area}</p>

                    <ul className="space-y-2 mb-6">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted">
                          <svg className="w-3.5 h-3.5 text-success shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-primary">{item.price}</span>
                      <button className="gradient-bg text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Accessories */}
      <section id="accessories" className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-2">Accessories &amp; <span className="gradient-text">Add-Ons</span></h2>
          <p className="text-muted mb-10">Everything else you might need for your installation.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((acc) => (
              <div key={acc.name} className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
                <h3 className="font-bold mb-1">{acc.name}</h3>
                <p className="text-sm text-muted mb-4">{acc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{acc.price}</span>
                  <button className="text-primary text-sm font-semibold hover:underline">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Not Sure Which System?</h2>
              <p className="text-white/80 max-w-lg mx-auto mb-6">
                Use our free sizing tool to find the perfect mini-split for your space, or call us for expert advice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/tools" className="bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
                  Size My System
                </Link>
                <a href="tel:+18001234567" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  Call (800) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
