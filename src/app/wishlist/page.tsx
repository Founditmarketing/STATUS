"use client";

import { useState, useEffect } from "react";
import { getWishlist, removeFromWishlist } from "@/lib/wishlist";
import { allProducts, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/Toast";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart, setCartOpen } = useCart();
  const { addToast } = useToast();

  useEffect(() => {
    const ids = getWishlist();
    setWishlistIds(ids);
    setProducts(allProducts.filter((p) => ids.includes(p.id)));
  }, []);

  function handleRemove(productId: string) {
    removeFromWishlist(productId);
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    addToast("Removed from wishlist", "info");
  }

  function handleAdd(product: Product) {
    addToCart({
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      image_url: product.images[0]?.src || "/wall-mount.png",
    });
    addToast(`${product.shortName} added to cart`, "success");
    setCartOpen(true);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Saved Items</h1>
      <p className="text-muted mb-8">{products.length} {products.length === 1 ? "item" : "items"} saved</p>

      {products.length === 0 ? (
        <div className="text-center py-16 bg-surface rounded-2xl border border-border">
          <svg className="w-16 h-16 text-muted/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p className="font-semibold text-lg mb-2">No saved items yet</p>
          <p className="text-muted text-sm mb-6">Tap the heart icon on any product to save it here.</p>
          <Link
            href="/products"
            className="gradient-bg text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {products.map((product) => (
            <div key={product.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-border hover:shadow-sm transition-shadow">
              <Link href={`/products/${product.slug}`} className="w-20 h-20 rounded-xl bg-surface border border-border/50 overflow-hidden relative shrink-0">
                <Image
                  src={product.images[0]?.src || "/wall-mount.png"}
                  alt={product.name}
                  fill
                  className="object-contain p-1"
                  sizes="80px"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/products/${product.slug}`} className="font-bold text-sm hover:text-primary transition-colors">
                  {product.name}
                </Link>
                <p className="text-xs text-muted mt-0.5 line-clamp-1">{product.shortDescription}</p>
                <p className="text-primary font-extrabold mt-1">${product.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleAdd(product)}
                    className="gradient-bg text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-xs text-red-400 hover:text-red-600 transition-colors font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
