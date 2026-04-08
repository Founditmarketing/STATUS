/* ─── STATUS Product Catalog — Single Source of Truth ─── */

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductInclude {
  name: string;
  qty: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: "bundle" | "accessory";
  price: number;
  comparePrice?: number;
  badge?: string;
  description: string;
  shortDescription: string;
  images: ProductImage[];
  specs: ProductSpec[];
  includes: ProductInclude[];
  features: string[];
  faqs: { q: string; a: string }[];
  // Bundle-specific
  condenser?: string;
  btu?: number;
  zones?: number;
  handlers?: string[];
  handlerModels?: string[];
  seer?: string;
  coverage?: string;
}

/* ─── Shared Assets ─── */

const bundleImages: ProductImage[] = [
  { src: "/pomelli-asset-2.png", alt: "Complete STATUS mini-split system with indoor unit, outdoor condenser, lineset, and remote" },
  { src: "/pomelli-image (15).png", alt: "STATUS indoor wall-mount unit close-up" },
  { src: "/pomelli-image (13).png", alt: "STATUS indoor unit — 4-angle product view" },
  { src: "/22url.webp.jpeg.jpg", alt: "STATUS outdoor condenser unit — front view" },
  { src: "/34134.jpg", alt: "STATUS outdoor condenser unit — rear condenser coil detail" },
  { src: "/product-hero.png", alt: "STATUS mini-split installed in modern living space" },
];

const sharedFeatures = [
  "R454B Next-Gen Refrigerant",
  "WiFi Built-In — Control from Anywhere",
  "Hyper Heat Down to -13°F",
  "Pre-Charged Quick-Connect Linesets",
  "7-Year Compressor Warranty",
  "Energy Star Certified",
  "ETL Safety Listed",
  "Assembled in the USA",
  "Ultra-Quiet Operation (25dB Indoor)",
  "Washable Filters — No Replacements Needed",
];

const sharedIncludes: ProductInclude[] = [
  { name: "Outdoor Condenser Unit", qty: 1 },
  { name: "Wireless IR Remote", qty: 1 },
  { name: "Installation Hardware Kit", qty: 1 },
  { name: "Owner's Manual & Quick Start Guide", qty: 1 },
];

const bundleFaqs = [
  { q: "Do I need HVAC certification to install?", a: "No. STATUS systems use pre-charged quick-connect linesets that don't require brazing, vacuuming, or EPA certification. If you can mount a TV and connect a garden hose, you can install a STATUS system." },
  { q: "What tools do I need?", a: "A drill with a 3\" hole saw bit, adjustable wrenches, a level, and a stud finder. No specialized HVAC tools required." },
  { q: "How long does installation take?", a: "Most homeowners complete a single-zone installation in 4-6 hours. Multizone systems typically take 6-10 hours depending on the number of indoor units." },
  { q: "Does it work in extreme cold?", a: "Yes. STATUS Hyper Heat technology maintains full heating capacity down to -13°F (-25°C), making it suitable for virtually any climate in North America." },
  { q: "What is the warranty?", a: "7-year compressor warranty, 5-year parts warranty. All warranty claims are handled directly by STATUS — no third-party runaround." },
  { q: "Can I add zones later?", a: "Yes. If your outdoor condenser supports additional zones, you can add indoor units at any time. Each zone operates independently." },
];

/* ─── Bundle Products ─── */

export const bundles: Product[] = [
  {
    id: "mz-18k-9-9",
    slug: "18k-2-zone-9-9",
    name: "18K BTU 2-Zone System (9K+9K)",
    shortName: "18K 2-Zone (9K+9K)",
    category: "bundle",
    condenser: "SDIY-MZ-18-230",
    btu: 18000,
    zones: 2,
    handlers: ["9K Wall-Mount Air Handler", "9K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-09-230"],
    seer: "23 SEER2",
    coverage: "600–900 sq ft",
    price: 2899,
    badge: "Best Value",
    description: "The perfect entry point for whole-home comfort. Two 9,000 BTU indoor units give you independent temperature control in two rooms — ideal for a bedroom and living room setup.",
    shortDescription: "2 rooms, independent temp control. Perfect starter system.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "18,000 BTU" },
      { label: "Zones", value: "2" },
      { label: "Indoor Units", value: "2× 9,000 BTU Wall-Mount" },
      { label: "Efficiency", value: "23 SEER2" },
      { label: "Coverage", value: "600–900 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "9K BTU Wall-Mount Indoor Unit", qty: 2 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-18k-9-12",
    slug: "18k-2-zone-9-12",
    name: "18K BTU 2-Zone System (9K+12K)",
    shortName: "18K 2-Zone (9K+12K)",
    category: "bundle",
    condenser: "SDIY-MZ-18-230",
    btu: 18000,
    zones: 2,
    handlers: ["9K Wall-Mount Air Handler", "12K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "750–1,100 sq ft",
    price: 3099,
    description: "Asymmetric two-zone setup — put more power where you need it. The 12K unit handles a larger living area while the 9K keeps a bedroom comfortable.",
    shortDescription: "Mixed capacity for rooms of different sizes.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "18,000 BTU" },
      { label: "Zones", value: "2" },
      { label: "Indoor Units", value: "1× 9K + 1× 12K Wall-Mount" },
      { label: "Efficiency", value: "22 SEER2" },
      { label: "Coverage", value: "750–1,100 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "9K BTU Wall-Mount Indoor Unit", qty: 1 },
      { name: "12K BTU Wall-Mount Indoor Unit", qty: 1 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-27k-9-9",
    slug: "27k-2-zone-9-9",
    name: "27K BTU 2-Zone System (9K+9K)",
    shortName: "27K 2-Zone (9K+9K)",
    category: "bundle",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["9K Wall-Mount Air Handler", "9K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-09-230"],
    seer: "23 SEER2",
    coverage: "600–900 sq ft",
    price: 3299,
    description: "Higher condenser capacity with two compact 9K indoor units — extra headroom for extreme temperatures while maintaining peak efficiency.",
    shortDescription: "Extra condenser power for extreme climates.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "27,000 BTU" },
      { label: "Zones", value: "2" },
      { label: "Indoor Units", value: "2× 9,000 BTU Wall-Mount" },
      { label: "Efficiency", value: "23 SEER2" },
      { label: "Coverage", value: "600–900 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "9K BTU Wall-Mount Indoor Unit", qty: 2 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-27k-9-12",
    slug: "27k-2-zone-9-12",
    name: "27K BTU 2-Zone System (9K+12K)",
    shortName: "27K 2-Zone (9K+12K)",
    category: "bundle",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["9K Wall-Mount Air Handler", "12K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "750–1,100 sq ft",
    price: 3499,
    description: "Powerful asymmetric 2-zone with the larger 27K condenser. The extra condenser capacity ensures maximum performance even in simultaneous heating/cooling demand.",
    shortDescription: "27K condenser with mixed indoor units.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "27,000 BTU" },
      { label: "Zones", value: "2" },
      { label: "Indoor Units", value: "1× 9K + 1× 12K Wall-Mount" },
      { label: "Efficiency", value: "22 SEER2" },
      { label: "Coverage", value: "750–1,100 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "9K BTU Wall-Mount Indoor Unit", qty: 1 },
      { name: "12K BTU Wall-Mount Indoor Unit", qty: 1 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-27k-9-18",
    slug: "27k-2-zone-9-18",
    name: "27K BTU 2-Zone System (9K+18K)",
    shortName: "27K 2-Zone (9K+18K)",
    category: "bundle",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["9K Wall-Mount Air Handler", "18K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-18-230"],
    seer: "22 SEER2",
    coverage: "950–1,350 sq ft",
    price: 3799,
    description: "Maximum asymmetric coverage — the 18K unit handles a large open-concept living area while the 9K keeps a bedroom or office at the perfect temperature.",
    shortDescription: "Large living area + bedroom combo.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "27,000 BTU" },
      { label: "Zones", value: "2" },
      { label: "Indoor Units", value: "1× 9K + 1× 18K Wall-Mount" },
      { label: "Efficiency", value: "22 SEER2" },
      { label: "Coverage", value: "950–1,350 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "9K BTU Wall-Mount Indoor Unit", qty: 1 },
      { name: "18K BTU Wall-Mount Indoor Unit", qty: 1 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-27k-12-12",
    slug: "27k-2-zone-12-12",
    name: "27K BTU 2-Zone System (12K+12K)",
    shortName: "27K 2-Zone (12K+12K)",
    category: "bundle",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["12K Wall-Mount Air Handler", "12K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-12-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "900–1,300 sq ft",
    price: 3699,
    badge: "Most Popular",
    description: "Our best-selling system. Two evenly matched 12K units deliver balanced comfort across two equal-sized rooms — the ideal solution for most homes.",
    shortDescription: "Best seller. Balanced power for two rooms.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "27,000 BTU" },
      { label: "Zones", value: "2" },
      { label: "Indoor Units", value: "2× 12,000 BTU Wall-Mount" },
      { label: "Efficiency", value: "22 SEER2" },
      { label: "Coverage", value: "900–1,300 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "12K BTU Wall-Mount Indoor Unit", qty: 2 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-27k-12-18",
    slug: "27k-2-zone-12-18",
    name: "27K BTU 2-Zone System (12K+18K)",
    shortName: "27K 2-Zone (12K+18K)",
    category: "bundle",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 2,
    handlers: ["12K Wall-Mount Air Handler", "18K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-12-230", "SDIY-AH-18-230"],
    seer: "21 SEER2",
    coverage: "1,100–1,550 sq ft",
    price: 3999,
    description: "Maximum 2-zone coverage. The 18K unit dominates a large open living area while the 12K handles a master suite or large bedroom with ease.",
    shortDescription: "Maximum coverage for two large rooms.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "27,000 BTU" },
      { label: "Zones", value: "2" },
      { label: "Indoor Units", value: "1× 12K + 1× 18K Wall-Mount" },
      { label: "Efficiency", value: "21 SEER2" },
      { label: "Coverage", value: "1,100–1,550 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "12K BTU Wall-Mount Indoor Unit", qty: 1 },
      { name: "18K BTU Wall-Mount Indoor Unit", qty: 1 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-27k-9-9-9",
    slug: "27k-3-zone-9-9-9",
    name: "27K BTU 3-Zone System (9K+9K+9K)",
    shortName: "27K 3-Zone (9K×3)",
    category: "bundle",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 3,
    handlers: ["9K Wall-Mount Air Handler", "9K Wall-Mount Air Handler", "9K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-09-230", "SDIY-AH-09-230"],
    seer: "23 SEER2",
    coverage: "900–1,350 sq ft",
    price: 4199,
    description: "Three-zone whole-home comfort. Three compact 9K units give you independent temperature control in three rooms — bedrooms, offices, or any combination.",
    shortDescription: "3-room independent control. Whole-home solution.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "27,000 BTU" },
      { label: "Zones", value: "3" },
      { label: "Indoor Units", value: "3× 9,000 BTU Wall-Mount" },
      { label: "Efficiency", value: "23 SEER2" },
      { label: "Coverage", value: "900–1,350 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "9K BTU Wall-Mount Indoor Unit", qty: 3 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-27k-9-9-12",
    slug: "27k-3-zone-9-9-12",
    name: "27K BTU 3-Zone System (9K+9K+12K)",
    shortName: "27K 3-Zone (9K+9K+12K)",
    category: "bundle",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 3,
    handlers: ["9K Wall-Mount Air Handler", "9K Wall-Mount Air Handler", "12K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-09-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "1,050–1,550 sq ft",
    price: 4399,
    badge: "Whole Home",
    description: "The ultimate whole-home system. Two 9K units for bedrooms plus a 12K for the main living area — complete comfort with independent control everywhere.",
    shortDescription: "2 bedrooms + living room. Complete home comfort.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "27,000 BTU" },
      { label: "Zones", value: "3" },
      { label: "Indoor Units", value: "2× 9K + 1× 12K Wall-Mount" },
      { label: "Efficiency", value: "22 SEER2" },
      { label: "Coverage", value: "1,050–1,550 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "9K BTU Wall-Mount Indoor Unit", qty: 2 },
      { name: "12K BTU Wall-Mount Indoor Unit", qty: 1 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
  {
    id: "mz-27k-9-12-12",
    slug: "27k-3-zone-9-12-12",
    name: "27K BTU 3-Zone System (9K+12K+12K)",
    shortName: "27K 3-Zone (9K+12K+12K)",
    category: "bundle",
    condenser: "SDIY-MZ-27-230",
    btu: 27000,
    zones: 3,
    handlers: ["9K Wall-Mount Air Handler", "12K Wall-Mount Air Handler", "12K Wall-Mount Air Handler"],
    handlerModels: ["SDIY-AH-09-230", "SDIY-AH-12-230", "SDIY-AH-12-230"],
    seer: "22 SEER2",
    coverage: "1,200–1,750 sq ft",
    price: 4599,
    description: "Maximum 3-zone coverage for larger homes. Two 12K units handle main living areas while the 9K takes care of a bedroom or home office.",
    shortDescription: "Maximum 3-zone coverage for larger homes.",
    images: bundleImages,
    specs: [
      { label: "Total Capacity", value: "27,000 BTU" },
      { label: "Zones", value: "3" },
      { label: "Indoor Units", value: "1× 9K + 2× 12K Wall-Mount" },
      { label: "Efficiency", value: "22 SEER2" },
      { label: "Coverage", value: "1,200–1,750 sq ft" },
      { label: "Voltage", value: "230V / 60Hz" },
      { label: "Refrigerant", value: "R454B" },
      { label: "Heating Range", value: "Down to -13°F" },
      { label: "Noise Level", value: "25 dB (indoor)" },
      { label: "WiFi", value: "Built-in" },
    ],
    includes: [
      ...sharedIncludes,
      { name: "9K BTU Wall-Mount Indoor Unit", qty: 1 },
      { name: "12K BTU Wall-Mount Indoor Unit", qty: 2 },
    ],
    features: sharedFeatures,
    faqs: bundleFaqs,
  },
];

/* ─── Accessories ─── */

export const accessories: Product[] = [
  {
    id: "acc-lineset-25",
    slug: "precharged-lineset-25ft",
    name: "25ft Pre-Charged Quick-Connect Lineset",
    shortName: "25ft Lineset",
    category: "accessory",
    price: 249,
    description: "Factory-sealed, pre-charged with R454B refrigerant. Quick-connect fittings mean no brazing, no vacuum pump, no HVAC certification. Just connect and go.",
    shortDescription: "Quick-connect, factory sealed with R454B. No tools needed.",
    images: [
      { src: "/url.webp.jpeg[1].jpg", alt: "25ft pre-charged quick-connect lineset coiled" },
      { src: "/pomelli-asset-2.png", alt: "Lineset connected to STATUS system" },
    ],
    specs: [
      { label: "Length", value: "25 feet" },
      { label: "Connection Type", value: "Quick-Connect (No Brazing)" },
      { label: "Refrigerant", value: "R454B (Pre-Charged)" },
      { label: "Insulation", value: "UV-Resistant PE Foam" },
      { label: "Line Diameter", value: "1/4\" × 3/8\"" },
      { label: "Compatible With", value: "All STATUS Systems" },
    ],
    includes: [
      { name: "Pre-Charged Lineset", qty: 1 },
      { name: "Quick-Connect Fittings", qty: 2 },
      { name: "Wall Pass-Through Sleeve", qty: 1 },
    ],
    features: [
      "Factory sealed with R454B — no vacuum pump needed",
      "Quick-connect brass fittings — hand-tighten only",
      "UV-resistant insulation rated for outdoor exposure",
      "Compatible with all STATUS indoor/outdoor units",
    ],
    faqs: [
      { q: "Do I need a vacuum pump?", a: "No. The lineset comes pre-charged with R454B refrigerant. Just connect the quick-connect fittings and the system is ready." },
      { q: "Can I cut the lineset to a shorter length?", a: "No. Cutting the lineset would release the pre-charged refrigerant. Choose the length closest to your installation distance." },
      { q: "What size is the lineset?", a: "1/4\" liquid line × 3/8\" suction line — compatible with all STATUS 9K, 12K, and 18K indoor units." },
    ],
  },
  {
    id: "acc-lineset-50",
    slug: "precharged-lineset-50ft",
    name: "50ft Pre-Charged Quick-Connect Lineset",
    shortName: "50ft Lineset",
    category: "accessory",
    price: 349,
    description: "Extended 50-foot reach for installations where the outdoor condenser needs to be placed further from the indoor unit. Same pre-charged, quick-connect simplicity.",
    shortDescription: "Extended length for remote outdoor unit placement.",
    images: [
      { src: "/url.webp.jpeg[1].jpg", alt: "50ft pre-charged quick-connect lineset coiled" },
      { src: "/pomelli-asset-2.png", alt: "Extended lineset connected to STATUS system" },
    ],
    specs: [
      { label: "Length", value: "50 feet" },
      { label: "Connection Type", value: "Quick-Connect (No Brazing)" },
      { label: "Refrigerant", value: "R454B (Pre-Charged)" },
      { label: "Insulation", value: "UV-Resistant PE Foam" },
      { label: "Line Diameter", value: "1/4\" × 3/8\"" },
      { label: "Compatible With", value: "All STATUS Systems" },
    ],
    includes: [
      { name: "Pre-Charged Lineset", qty: 1 },
      { name: "Quick-Connect Fittings", qty: 2 },
      { name: "Wall Pass-Through Sleeve", qty: 1 },
    ],
    features: [
      "50ft reach for flexible condenser placement",
      "Factory sealed with R454B — no vacuum pump needed",
      "Quick-connect brass fittings — hand-tighten only",
      "UV-resistant insulation rated for outdoor exposure",
    ],
    faqs: [
      { q: "When should I choose the 50ft over the 25ft?", a: "Choose the 50ft if your outdoor condenser will be more than 20 feet from the indoor unit — account for vertical runs and routing around obstacles." },
      { q: "Does the longer line affect performance?", a: "Minimal. STATUS systems are designed to maintain full output with linesets up to 50 feet." },
    ],
  },
  {
    id: "acc-bracket",
    slug: "outdoor-mounting-bracket",
    name: "Heavy-Duty Outdoor Mounting Bracket",
    shortName: "Mounting Bracket",
    category: "accessory",
    price: 79,
    description: "Powder-coated steel mounting bracket for the outdoor condenser unit. Keeps the unit elevated off the ground for proper airflow and drainage.",
    shortDescription: "Heavy-duty bracket for outdoor condenser unit.",
    images: [
      { src: "/43124.jpg", alt: "Heavy-duty outdoor mounting bracket" },
      { src: "/22url.webp.jpeg.jpg", alt: "Condenser unit mounted on bracket" },
    ],
    specs: [
      { label: "Material", value: "Powder-Coated Steel" },
      { label: "Weight Capacity", value: "250 lbs" },
      { label: "Finish", value: "White Powder Coat (UV Resistant)" },
      { label: "Compatible With", value: "All STATUS Condensers" },
      { label: "Height", value: "18 inches off ground" },
    ],
    includes: [
      { name: "Mounting Bracket", qty: 1 },
      { name: "Concrete Anchor Bolts", qty: 4 },
      { name: "Anti-Vibration Pads", qty: 4 },
    ],
    features: [
      "250 lb weight capacity — built for any STATUS condenser",
      "18\" elevation for proper airflow and snow clearance",
      "Anti-vibration pads reduce noise transmission",
      "UV-resistant powder coat finish — won't rust or fade",
    ],
    faqs: [
      { q: "Is this bracket required?", a: "Not required but strongly recommended. Elevating the condenser improves airflow, prevents flood damage, and keeps the unit clear of snow and debris." },
      { q: "Can I wall-mount the bracket?", a: "This bracket is designed for ground mounting on concrete or a pad. For wall mounting, use lag bolts into structural studs (not included)." },
    ],
  },
  {
    id: "acc-cover",
    slug: "lineset-cover-kit",
    name: "Line Set Cover Kit",
    shortName: "Line Cover Kit",
    category: "accessory",
    price: 89,
    description: "Paintable PVC cover to hide exterior refrigerant lines for a clean, professional finish. Includes all connectors and mounting hardware.",
    shortDescription: "Paintable PVC cover for a clean exterior finish.",
    images: [
      { src: "/pomelli-image (15).png", alt: "STATUS unit with clean line cover installation" },
    ],
    specs: [
      { label: "Material", value: "UV-Resistant PVC" },
      { label: "Length", value: "14 feet (expandable)" },
      { label: "Width", value: "3.5 inches" },
      { label: "Color", value: "White (Paintable)" },
    ],
    includes: [
      { name: "Straight Duct Sections", qty: 4 },
      { name: "90° Elbows", qty: 2 },
      { name: "Decorative End Cap", qty: 1 },
      { name: "Wall Entry Fitting", qty: 1 },
      { name: "Mounting Clips & Screws", qty: 1 },
    ],
    features: [
      "Paintable — match any exterior color",
      "Snap-together assembly, no special tools",
      "UV-resistant PVC won't yellow or crack",
      "14ft total length with expansion options",
    ],
    faqs: [
      { q: "Can I paint the cover?", a: "Yes — use any exterior latex paint. Lightly sand before painting for best adhesion." },
    ],
  },
  {
    id: "acc-pump",
    slug: "condensate-pump",
    name: "Condensate Pump",
    shortName: "Condensate Pump",
    category: "accessory",
    price: 69,
    description: "Mini condensate removal pump for installations where gravity drain isn't possible. Ultra-quiet operation with automatic float switch.",
    shortDescription: "For installations where gravity drain isn't possible.",
    images: [
      { src: "/pomelli-image (15).png", alt: "Condensate pump for mini-split installation" },
    ],
    specs: [
      { label: "Pump Rate", value: "7.4 GPH" },
      { label: "Lift Height", value: "Up to 20 feet" },
      { label: "Noise Level", value: "< 20 dB" },
      { label: "Power", value: "110V / 4W" },
    ],
    includes: [
      { name: "Condensate Pump Unit", qty: 1 },
      { name: "Drain Tubing (6ft)", qty: 1 },
      { name: "Mounting Hardware", qty: 1 },
    ],
    features: [
      "Ultra-quiet operation (< 20 dB)",
      "Automatic float switch activation",
      "20ft lift height for versatile routing",
      "Low 4W power consumption",
    ],
    faqs: [
      { q: "When do I need a condensate pump?", a: "If your indoor unit is in a basement, interior room, or anywhere without a nearby exterior wall or downhill drain path." },
    ],
  },
];

/* ─── Helpers ─── */

export const allProducts = [...bundles, ...accessories];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  if (product.category === "bundle") {
    return accessories.slice(0, limit);
  }
  return bundles.filter((b) => b.badge).slice(0, limit);
}

/** Smart upsells: suggest accessories if cart has bundles, bundles if cart only has accessories */
export function getCartUpsells(cartProductIds: string[]): Product[] {
  const cartHasBundle = cartProductIds.some((id) =>
    bundles.some((b) => b.id === id)
  );

  if (cartHasBundle) {
    // Suggest accessories not already in cart
    return accessories.filter((a) => !cartProductIds.includes(a.id));
  }
  // If only accessories, suggest top bundles
  return bundles.filter((b) => b.badge).slice(0, 3);
}
