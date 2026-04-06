export function ProductSchema() {
  const products = [
    {
      name: "STATUS 9K BTU Wall Mounted Mini-Split System",
      description: "DIY ductless mini-split heat pump with pre-charged lineset. 24 SEER2, WiFi control, hyper heat to -13°F. No HVAC certification needed.",
      sku: "STATUS-WM-9K",
      price: "1899.00",
      image: "/wall-mount.png",
      category: "Wall Mounted Systems",
    },
    {
      name: "STATUS 12K BTU Wall Mounted Mini-Split System",
      description: "DIY ductless mini-split heat pump with pre-charged lineset. 24 SEER2, WiFi control, hyper heat to -13°F. Covers 450-650 sq ft.",
      sku: "STATUS-WM-12K",
      price: "2099.00",
      image: "/wall-mount.png",
      category: "Wall Mounted Systems",
    },
    {
      name: "STATUS 12K BTU Ceiling Cassette Mini-Split System",
      description: "Flush-mount ceiling cassette with 360° airflow. 22 SEER2, 4-way air distribution, WiFi control. DIY installation with pre-charged lineset.",
      sku: "STATUS-CC-12K",
      price: "2699.00",
      image: "/ceiling-cassette.png",
      category: "Ceiling Cassette Systems",
    },
    {
      name: "STATUS 12K BTU Concealed Ducted Mini-Split System",
      description: "Hidden ducted mini-split system with low-profile design. 21 SEER2, WiFi control. Only a discreet vent is visible.",
      sku: "STATUS-CD-12K",
      price: "2299.00",
      image: "/ducted-system.png",
      category: "Concealed Ducted Systems",
    },
  ];

  const schema = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.sku,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "STATUS",
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "STATUS",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          businessDays: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2300",
      bestRating: "5",
      worstRating: "1",
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const faqs = [
    {
      question: "What is a ductless mini-split system?",
      answer: "A ductless mini-split is a heating and cooling system that doesn't require ductwork. It consists of an outdoor compressor/condenser and one or more indoor air-handling units, connected by a conduit. They're highly efficient (up to 24 SEER2) and can be installed without professional help using STATUS pre-charged linesets.",
    },
    {
      question: "Can I really install this myself?",
      answer: "Yes! STATUS systems are specifically engineered for DIY installation. Our pre-charged linesets eliminate the need for vacuum pumps, manifold gauges, or HVAC certification. Quick-connect fittings mean you just tighten and go. Most homeowners complete installation in 2-3 hours with basic hand tools.",
    },
    {
      question: "How do I know what size system I need?",
      answer: "Use our free BTU Calculator tool to determine the right system size based on your room's square footage. As a general guide: 9,000 BTU covers 300-450 sq ft, 12,000 BTU covers 450-650 sq ft, 18,000 BTU covers 650-900 sq ft, and 24,000 BTU covers 900-1,200 sq ft.",
    },
    {
      question: "What SEER2 rating do your systems have?",
      answer: "STATUS systems range from 20 to 24 SEER2, making them among the most efficient on the market. Higher SEER2 ratings mean lower energy bills. All our systems exceed Energy Star requirements and qualify for federal tax credits.",
    },
    {
      question: "What is a pre-charged lineset?",
      answer: "A pre-charged lineset is a refrigerant line that comes factory-filled with R410A refrigerant and sealed with quick-connect fittings. This eliminates the need for a vacuum pump, manifold gauges, or HVAC certification during installation — you simply connect the fittings and tighten them.",
    },
    {
      question: "What warranty do you offer?",
      answer: "STATUS offers a 7-year compressor warranty, a 5-year parts warranty, and a 45-day satisfaction guarantee. If you're not happy with your system within 45 days, return it for a full refund with no questions asked.",
    },
    {
      question: "Do mini-splits work in cold climates?",
      answer: "Yes. STATUS systems feature Hyper Heat technology that operates efficiently down to -13°F (-25°C). They're used successfully in cold climates across Colorado, Minnesota, and the northern United States.",
    },
    {
      question: "How much can I save vs professional installation?",
      answer: "Most homeowners save $3,000 to $5,000+ compared to hiring an HVAC contractor. Professional installation typically costs $4,000-$8,000 including parts and labor, while a STATUS DIY system starts at just $1,899 with everything included.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "STATUS",
    url: "https://statushvac.com",
    logo: "/logo.png",
    description: "STATUS manufactures DIY ductless mini-split heat pump systems with pre-charged linesets for homeowner installation. Assembled in the USA.",
    telephone: "+1-800-123-4567",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2300",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
