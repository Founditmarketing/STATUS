"use client";

import Link from "next/link";
import { useState } from "react";

const btuGuide = [
  { sqft: "150-300", btu: "9,000", model: "9K Wall Mount" },
  { sqft: "300-450", btu: "12,000", model: "12K Wall Mount" },
  { sqft: "450-650", btu: "18,000", model: "18K Wall Mount" },
  { sqft: "650-900", btu: "24,000", model: "24K Wall/Cassette" },
  { sqft: "900-1,200", btu: "30,000", model: "Multi-Zone System" },
  { sqft: "1,200-1,500", btu: "36,000", model: "36K Wall Mount" },
];

const comparison = [
  { feature: "DIY Install", status: true, mrcool: true, pioneer: false, senville: false },
  { feature: "Pre-Charged Linesets", status: true, mrcool: true, pioneer: false, senville: false },
  { feature: "Up to 24 SEER2", status: true, mrcool: false, pioneer: false, senville: false },
  { feature: "Hyper Heat (-13°F)", status: true, mrcool: true, pioneer: false, senville: false },
  { feature: "WiFi Included", status: true, mrcool: false, pioneer: false, senville: false },
  { feature: "7-Year Compressor Warranty", status: true, mrcool: true, pioneer: true, senville: false },
  { feature: "45-Day Satisfaction Guarantee", status: true, mrcool: false, pioneer: false, senville: false },
  { feature: "USA Assembled", status: true, mrcool: false, pioneer: false, senville: false },
  { feature: "Free 3-Day Shipping", status: true, mrcool: false, pioneer: false, senville: false },
];

export default function Tools() {
  const [sqft, setSqft] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function calculateBTU() {
    const area = parseInt(sqft);
    if (isNaN(area) || area <= 0) return;
    let btu: number;
    if (area <= 300) btu = 9000;
    else if (area <= 450) btu = 12000;
    else if (area <= 650) btu = 18000;
    else if (area <= 900) btu = 24000;
    else if (area <= 1200) btu = 30000;
    else btu = 36000;
    setResult(`For ${area} sq ft, we recommend a ${btu.toLocaleString()} BTU system.`);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Sizing &amp; <span className="gradient-text">Tools</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Free calculators, guides, and comparison tools to help you choose the perfect mini-split system.
          </p>
        </div>
      </section>

      {/* BTU Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            BTU <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-muted text-center mb-10">
            Enter your room&apos;s square footage for an instant sizing recommendation.
          </p>

          <div className="bg-surface rounded-2xl border border-border p-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Room Square Footage</label>
                <input
                  type="number"
                  value={sqft}
                  onChange={(e) => setSqft(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="e.g. 500"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={calculateBTU}
                  className="gradient-bg text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Calculate
                </button>
              </div>
            </div>

            {result && (
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                <p className="text-primary font-semibold">{result}</p>
                <Link href="/products" className="text-primary text-sm hover:underline mt-1 inline-block">
                  Shop this size &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sizing Guide Table */}
      <section id="sizing" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Quick Sizing <span className="gradient-text">Guide</span>
          </h2>
          <p className="text-muted text-center mb-10">
            General guidelines based on room size. Climate, insulation, and sun exposure may affect your needs.
          </p>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left p-4 text-sm font-semibold">Room Size (sq ft)</th>
                  <th className="text-center p-4 text-sm font-semibold">BTU Needed</th>
                  <th className="text-center p-4 text-sm font-semibold">Recommended Model</th>
                </tr>
              </thead>
              <tbody>
                {btuGuide.map((row, i) => (
                  <tr key={row.sqft} className={i % 2 === 0 ? "" : "bg-surface/50"}>
                    <td className="p-4 text-sm">{row.sqft}</td>
                    <td className="p-4 text-sm text-center font-medium">{row.btu}</td>
                    <td className="p-4 text-sm text-center text-primary font-medium">{row.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brand Comparison */}
      <section id="comparison" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Brand <span className="gradient-text">Comparison</span>
          </h2>
          <p className="text-muted text-center mb-10">
            See how STATUS compares to other popular DIY mini-split brands.
          </p>

          <div className="bg-white rounded-2xl border border-border overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left p-4 text-sm font-semibold">Feature</th>
                  <th className="text-center p-4 text-sm font-bold text-primary">STATUS</th>
                  <th className="text-center p-4 text-sm font-semibold">MrCool</th>
                  <th className="text-center p-4 text-sm font-semibold">Pioneer</th>
                  <th className="text-center p-4 text-sm font-semibold">Senville</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "" : "bg-surface/50"}>
                    <td className="p-4 text-sm">{row.feature}</td>
                    {[row.status, row.mrcool, row.pioneer, row.senville].map((val, j) => (
                      <td key={j} className="p-4 text-center">
                        {val ? (
                          <svg className="w-5 h-5 text-success mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rebates Info */}
      <section id="rebates" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Rebates &amp; <span className="gradient-text">Tax Credits</span>
          </h2>
          <p className="text-muted text-center mb-10">
            Heat pumps qualify for significant federal and state incentives.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-lg mb-3">Federal Tax Credit (25C)</h3>
              <p className="text-3xl font-extrabold gradient-text mb-3">Up to $2,000</p>
              <p className="text-muted text-sm leading-relaxed">
                The Inflation Reduction Act provides a 30% tax credit (up to $2,000) for qualifying heat pump installations. STATUS systems meet all Energy Star requirements.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-lg mb-3">State & Utility Rebates</h3>
              <p className="text-3xl font-extrabold gradient-text mb-3">Up to $6,000+</p>
              <p className="text-muted text-sm leading-relaxed">
                Many states and utilities offer additional rebates for heat pump installations. Combined with federal credits, your total incentives could reach $8,000 or more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Need Help Choosing?</h2>
              <p className="text-white/80 max-w-lg mx-auto mb-6">
                Our HVAC experts are available Mon-Fri, 9am-5pm MST to help you find the perfect system.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products" className="bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
                  Shop Systems
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
