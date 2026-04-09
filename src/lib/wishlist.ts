/* ─── Wishlist (localStorage) ─── */

const WISHLIST_KEY = "status_wishlist";

export function getWishlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
  } catch {
    return [];
  }
}

export function addToWishlist(productId: string): string[] {
  const list = getWishlist();
  if (!list.includes(productId)) {
    list.push(productId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  }
  return list;
}

export function removeFromWishlist(productId: string): string[] {
  const list = getWishlist().filter((id) => id !== productId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  return list;
}

export function isInWishlist(productId: string): boolean {
  return getWishlist().includes(productId);
}

export function clearWishlist(): void {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify([]));
}
