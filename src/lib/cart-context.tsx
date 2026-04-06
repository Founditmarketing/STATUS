"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export interface CartItem {
  id?: string;
  product_id: string;
  product_name: string;
  price: number;
  quantity: number;
  image_url?: string;
}

interface CartContextType {
  items: CartItem[];
  user: User | null;
  isLoading: boolean;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "status-cart";

function getLocalCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setLocalCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const supabase = createClient();

  // Listen for auth state changes
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Initial check
    supabase.auth.getUser().then(({ data: { user: u } }) => {
      setUser(u);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  // Load cart — from Supabase if logged in, localStorage if guest
  useEffect(() => {
    async function loadCart() {
      setIsLoading(true);
      if (user) {
        const { data } = await supabase
          .from("cart_items")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: true });

        if (data) {
          setItems(
            data.map((d) => ({
              id: d.id,
              product_id: d.product_id,
              product_name: d.product_name,
              price: Number(d.price),
              quantity: d.quantity,
              image_url: d.image_url,
            }))
          );
        }

        // Merge any guest cart items into the user's cart
        const localItems = getLocalCart();
        if (localItems.length > 0) {
          for (const li of localItems) {
            const existing = data?.find((d) => d.product_id === li.product_id);
            if (!existing) {
              await supabase.from("cart_items").upsert(
                {
                  user_id: user.id,
                  product_id: li.product_id,
                  product_name: li.product_name,
                  price: li.price,
                  quantity: li.quantity,
                  image_url: li.image_url,
                },
                { onConflict: "user_id,product_id" }
              );
            }
          }
          localStorage.removeItem(STORAGE_KEY);
          // Reload
          const { data: refreshed } = await supabase
            .from("cart_items")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", { ascending: true });
          if (refreshed) {
            setItems(
              refreshed.map((d) => ({
                id: d.id,
                product_id: d.product_id,
                product_name: d.product_name,
                price: Number(d.price),
                quantity: d.quantity,
                image_url: d.image_url,
              }))
            );
          }
        }
      } else {
        setItems(getLocalCart());
      }
      setIsLoading(false);
    }
    loadCart();
  }, [user, supabase]);

  const addToCart = useCallback(
    async (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
      const qty = item.quantity ?? 1;
      const existing = items.find((i) => i.product_id === item.product_id);

      if (existing) {
        const newQty = existing.quantity + qty;
        setItems((prev) =>
          prev.map((i) =>
            i.product_id === item.product_id ? { ...i, quantity: newQty } : i
          )
        );
        if (user) {
          await supabase
            .from("cart_items")
            .update({ quantity: newQty, updated_at: new Date().toISOString() })
            .eq("user_id", user.id)
            .eq("product_id", item.product_id);
        } else {
          setLocalCart(
            items.map((i) =>
              i.product_id === item.product_id ? { ...i, quantity: newQty } : i
            )
          );
        }
      } else {
        const newItem: CartItem = { ...item, quantity: qty };
        setItems((prev) => [...prev, newItem]);
        if (user) {
          await supabase.from("cart_items").insert({
            user_id: user.id,
            product_id: item.product_id,
            product_name: item.product_name,
            price: item.price,
            quantity: qty,
            image_url: item.image_url,
          });
        } else {
          setLocalCart([...items, newItem]);
        }
      }
    },
    [items, user, supabase]
  );

  const removeFromCart = useCallback(
    async (productId: string) => {
      setItems((prev) => prev.filter((i) => i.product_id !== productId));
      if (user) {
        await supabase
          .from("cart_items")
          .delete()
          .eq("user_id", user.id)
          .eq("product_id", productId);
      } else {
        setLocalCart(items.filter((i) => i.product_id !== productId));
      }
    },
    [items, user, supabase]
  );

  const updateQuantity = useCallback(
    async (productId: string, quantity: number) => {
      if (quantity <= 0) return removeFromCart(productId);
      setItems((prev) =>
        prev.map((i) => (i.product_id === productId ? { ...i, quantity } : i))
      );
      if (user) {
        await supabase
          .from("cart_items")
          .update({ quantity, updated_at: new Date().toISOString() })
          .eq("user_id", user.id)
          .eq("product_id", productId);
      } else {
        setLocalCart(
          items.map((i) =>
            i.product_id === productId ? { ...i, quantity } : i
          )
        );
      }
    },
    [items, user, supabase, removeFromCart]
  );

  const clearCart = useCallback(async () => {
    setItems([]);
    if (user) {
      await supabase.from("cart_items").delete().eq("user_id", user.id);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user, supabase]);

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        user,
        isLoading,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
