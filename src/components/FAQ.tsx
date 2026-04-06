"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a ductless mini-split system?",
    answer:
      "A ductless mini-split is a heating and cooling system that doesn't require ductwork. It consists of an outdoor compressor/condenser unit connected to one or more indoor air-handling units via a small conduit. They're incredibly efficient, quiet, and perfect for homes without existing ductwork.",
  },
  {
    question: "Can I really install this myself?",
    answer:
      "Yes! STATUS systems are engineered specifically for DIY installation. Our pre-charged linesets use quick-connect fittings that require no special tools, vacuum pumps, or HVAC certifications. Most homeowners complete the installation in 2-3 hours with basic hand tools. We also provide step-by-step video guides and live phone support.",
  },
  {
    question: "How do I know what size system I need?",
    answer:
      "System sizing depends on your room's square footage, ceiling height, insulation quality, climate zone, and sun exposure. Use our free BTU Calculator tool or our Manual J sizing guide to determine the perfect system size. Our support team is also available to help you choose the right system.",
  },
  {
    question: "What SEER2 rating do your systems have?",
    answer:
      "Our systems range from 20 to 24 SEER2, making them among the most efficient on the market. Higher SEER2 ratings mean lower energy bills — our 24 SEER2 units can save you up to 60% on heating and cooling costs compared to traditional HVAC systems.",
  },
  {
    question: "What is a pre-charged lineset?",
    answer:
      "A pre-charged lineset comes factory-filled with refrigerant and uses quick-connect fittings. This eliminates the need for a vacuum pump, manifold gauges, or an HVAC technician. Simply connect the lineset between the indoor and outdoor units, tighten the fittings, and you're ready to go.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "All STATUS systems come with a 7-year compressor warranty and a 5-year parts warranty. We also offer a 45-day satisfaction guarantee — if you're not happy with your system, return it for a full refund.",
  },
  {
    question: "Do mini-splits work in cold climates?",
    answer:
      "Absolutely. Our hyper-heat models are rated to operate efficiently down to -13°F (-25°C). They use advanced inverter compressor technology to maintain full heating capacity even in extreme cold, making them suitable for virtually any climate in the US and Canada.",
  },
  {
    question: "How much can I save vs professional installation?",
    answer:
      "On average, STATUS customers save $3,000 or more compared to hiring an HVAC contractor for a similar system. Professional installations typically cost $4,000-$8,000+ for a single-zone system. With STATUS, you get the same professional-grade equipment at a fraction of the cost.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about STATUS mini-split systems.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-border overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
