"use client";

import { getReviewsForProduct, getAverageRating, getBundleRatingAggregate, type Review } from "@/lib/reviews";

/* ─── Star Display ─── */
function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "lg" ? "w-5 h-5" : size === "md" ? "w-4 h-4" : "w-3.5 h-3.5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClass} ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Compact Rating Badge (for product cards) ─── */
export function RatingBadge({ productId, useBundleAggregate }: { productId: string; useBundleAggregate?: boolean }) {
  const { average, count } = useBundleAggregate ? getBundleRatingAggregate() : getAverageRating(productId);
  if (count === 0) return null;

  return (
    <div className="flex items-center gap-1.5">
      <Stars rating={average} size="sm" />
      <span className="text-xs text-muted">({count})</span>
    </div>
  );
}

/* ─── Single Review Card ─── */
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border border-border/50 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Stars rating={review.rating} size="md" />
            {review.verified && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                Verified
              </span>
            )}
          </div>
          <h4 className="font-bold text-sm">{review.title}</h4>
        </div>
      </div>
      <p className="text-sm text-muted leading-relaxed mb-3">{review.body}</p>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>{review.author} · {new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        {review.helpful > 0 && (
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            {review.helpful} found helpful
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Full Review Section ─── */
export default function ReviewSection({ productId, useBundleAggregate }: { productId: string; useBundleAggregate?: boolean }) {
  const directReviews = getReviewsForProduct(productId);
  // For bundles, show all bundle reviews if none exist for this specific product
  const reviews = directReviews.length > 0 ? directReviews : (useBundleAggregate ? getReviewsForProduct("mz-27k-12-12").concat(getReviewsForProduct("mz-27k-9-9-12")) : directReviews);
  const { average, count } = useBundleAggregate ? getBundleRatingAggregate() : getAverageRating(productId);

  if (reviews.length === 0) return null;

  // Rating distribution
  const dist = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    pct: Math.round((reviews.filter((r) => r.rating === star).length / reviews.length) * 100),
  }));

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">Customer Reviews</h2>

        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-2xl border border-border/50 p-6 text-center">
              <p className="text-5xl font-extrabold mb-2">{average}</p>
              <Stars rating={average} size="lg" />
              <p className="text-sm text-muted mt-2">Based on {count} reviews</p>

              {/* Distribution bars */}
              <div className="mt-6 space-y-2">
                {dist.map((d) => (
                  <div key={d.star} className="flex items-center gap-2 text-xs">
                    <span className="w-3 text-right font-medium">{d.star}</span>
                    <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="flex-1 h-2 bg-border/50 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: `${d.pct}%` }} />
                    </div>
                    <span className="w-6 text-muted">{d.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="lg:col-span-2 space-y-4">
            {reviews.slice(0, 5).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
