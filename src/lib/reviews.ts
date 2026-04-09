/* ─── Seeded Product Reviews ─── */

export interface Review {
  id: string;
  productId: string;    // matches Product.id
  author: string;
  rating: number;       // 1-5
  title: string;
  body: string;
  date: string;         // ISO string
  verified: boolean;
  helpful: number;
}

const bundleReviews: Review[] = [
  {
    id: "r1",
    productId: "mz-27k-12-12",
    author: "Mike R.",
    rating: 5,
    title: "Installed in one weekend — cooling like a dream",
    body: "I was skeptical about DIY mini-splits but this system blew me away. The quick-connect linesets made it incredibly easy — no brazing, no vacuum pump. My garage stays at 68° now even in Texas summers. The WiFi control is a huge bonus.",
    date: "2026-03-15T00:00:00Z",
    verified: true,
    helpful: 24,
  },
  {
    id: "r2",
    productId: "mz-27k-12-12",
    author: "Sarah K.",
    rating: 5,
    title: "Saved us $4,000 vs. HVAC contractor quote",
    body: "Got quotes from 3 local HVAC companies ranging from $7,500-$9,200 for a 2-zone system. Installed the STATUS 27K myself with my husband's help in about 8 hours. It's whisper quiet and our energy bill dropped 30%. Best home improvement purchase we've made.",
    date: "2026-03-22T00:00:00Z",
    verified: true,
    helpful: 31,
  },
  {
    id: "r3",
    productId: "mz-27k-12-12",
    author: "James L.",
    rating: 5,
    title: "Professional quality, DIY price",
    body: "As a retired electrician, I was impressed with the build quality. The indoor units are sleek and the outdoor condenser is solid. Installation instructions were clear and the quick-connect fittings sealed perfectly. Running strong for 4 months now.",
    date: "2026-02-10T00:00:00Z",
    verified: true,
    helpful: 18,
  },
  {
    id: "r4",
    productId: "mz-27k-12-12",
    author: "Diana P.",
    rating: 4,
    title: "Great system, just took longer than expected",
    body: "The system itself is excellent — quiet, efficient, and the app control is great. Installation took me about 12 hours as a complete beginner (vs. the 6 hours they suggest). Had to watch a few YouTube videos for the wall penetration. But it works perfectly and I'm very happy with the result.",
    date: "2026-01-28T00:00:00Z",
    verified: true,
    helpful: 15,
  },
  {
    id: "r5",
    productId: "mz-27k-12-12",
    author: "Robert T.",
    rating: 5,
    title: "Heating works incredible in Michigan winters",
    body: "Bought this mainly for heating since our old furnace died. Even at -5°F this thing kept both rooms at 72°. The hyper heat technology is legit. My propane bill went from $400/mo to about $90 in electricity. Pays for itself in one winter.",
    date: "2026-02-25T00:00:00Z",
    verified: true,
    helpful: 27,
  },
  {
    id: "r6",
    productId: "mz-27k-9-9-12",
    author: "Kevin W.",
    rating: 5,
    title: "Whole house comfort — 3 zones is the way to go",
    body: "We have a 3-bedroom ranch and this 3-zone system covers the entire house. Each room has its own temperature control which ended all the thermostat arguments. The 12K unit in the living room handles our open concept great.",
    date: "2026-03-05T00:00:00Z",
    verified: true,
    helpful: 22,
  },
  {
    id: "r7",
    productId: "mz-27k-9-9-12",
    author: "Lisa M.",
    rating: 5,
    title: "Best purchase for our home office setup",
    body: "Working from home in Florida without good AC was torture. Got the 3-zone to cover both offices and the bedroom. Each zone keeps at perfect temp independently. The noise level is unbelievable — you genuinely cannot hear it running. Wish we did this years ago.",
    date: "2026-03-18T00:00:00Z",
    verified: true,
    helpful: 19,
  },
  {
    id: "r8",
    productId: "mz-18k-9-9",
    author: "Chris B.",
    rating: 5,
    title: "Perfect for our small cabin",
    body: "Installed in our 800 sq ft cabin in the mountains. Two 9K units handle the bedroom and main room perfectly. Even on the hottest days it cools down fast. The pre-charged linesets made it so easy — literally just threaded them on.",
    date: "2026-02-15T00:00:00Z",
    verified: true,
    helpful: 14,
  },
  {
    id: "r9",
    productId: "mz-18k-9-9",
    author: "Amanda F.",
    rating: 5,
    title: "Finally cool in our bonus room",
    body: "Our upstairs bonus room and guest bedroom were always 10 degrees hotter than the rest of the house. This 2-zone system solved it completely. My husband installed it in about 5 hours. The remote app is really handy for turning it on before we head upstairs.",
    date: "2026-03-01T00:00:00Z",
    verified: true,
    helpful: 11,
  },
  {
    id: "r10",
    productId: "mz-27k-9-18",
    author: "Tom H.",
    rating: 5,
    title: "18K unit is a BEAST for open concept",
    body: "Our main living area is about 600 sq ft open concept kitchen/living. The 18K unit handles it with ease while the 9K keeps the master bedroom perfect. I was worried about the outdoor unit noise but it's remarkably quiet even at full blast.",
    date: "2026-03-10T00:00:00Z",
    verified: true,
    helpful: 16,
  },
];

const accessoryReviews: Review[] = [
  {
    id: "r11",
    productId: "acc-lineset-25",
    author: "Dave C.",
    rating: 5,
    title: "Makes installation truly DIY",
    body: "The quick-connect fittings are the real deal. No brazing, no vacuum pump, just hand-tighten and go. The lineset was exactly 25 feet and the insulation is thick and well-made. This is what makes the STATUS system actually doable for regular homeowners.",
    date: "2026-02-20T00:00:00Z",
    verified: true,
    helpful: 20,
  },
  {
    id: "r12",
    productId: "acc-bracket",
    author: "Paul S.",
    rating: 5,
    title: "Solid bracket, keeps condenser elevated",
    body: "Heavy duty steel, powder coated nicely. Bolted it to a concrete pad and the condenser sits about 18 inches up — great for airflow and keeps it above any potential flooding. The anti-vibration pads really do reduce noise.",
    date: "2026-02-28T00:00:00Z",
    verified: true,
    helpful: 9,
  },
  {
    id: "r13",
    productId: "acc-cover",
    author: "Nancy G.",
    rating: 4,
    title: "Clean look, easy to install",
    body: "Snaps together easily and makes the exterior lines look professional. Painted it to match our siding. Only giving 4 stars because I wish it came in longer sections — had to buy a second kit for our longer run.",
    date: "2026-03-08T00:00:00Z",
    verified: true,
    helpful: 7,
  },
];

export const allReviews: Review[] = [...bundleReviews, ...accessoryReviews];

export function getReviewsForProduct(productId: string): Review[] {
  return allReviews.filter((r) => r.productId === productId);
}

export function getAverageRating(productId: string): { average: number; count: number } {
  const reviews = getReviewsForProduct(productId);
  if (reviews.length === 0) return { average: 0, count: 0 };
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return { average: Math.round((sum / reviews.length) * 10) / 10, count: reviews.length };
}

/** Get aggregate rating across ALL bundle products (for bundles that share reviews) */
export function getBundleRatingAggregate(): { average: number; count: number } {
  const reviews = bundleReviews;
  if (reviews.length === 0) return { average: 0, count: 0 };
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return { average: Math.round((sum / reviews.length) * 10) / 10, count: reviews.length };
}
