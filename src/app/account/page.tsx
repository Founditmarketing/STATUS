"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";

interface Order {
  id: string;
  status: string;
  total: number;
  created_at: string;
}

interface Profile {
  full_name: string | null;
  phone: string | null;
  address_line1: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
}

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (!u) {
        router.push("/login?redirect=/account");
        return;
      }
      setUser(u);

      const { data: p } = await supabase
        .from("profiles")
        .select("full_name, phone, address_line1, city, state, zip")
        .eq("id", u.id)
        .single();
      setProfile(p);

      const { data: o } = await supabase
        .from("orders")
        .select("id, status, total, created_at")
        .eq("user_id", u.id)
        .order("created_at", { ascending: false });
      setOrders(o || []);
      setLoading(false);
    }
    load();
  }, [supabase, router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">My Account</h1>
          <p className="text-muted mt-1">{user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 min-h-[44px]"
        >
          Sign Out
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold mb-4">Profile</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted">Name</span>
            <p className="font-medium">{profile?.full_name || "—"}</p>
          </div>
          <div>
            <span className="text-muted">Email</span>
            <p className="font-medium">{user?.email || "—"}</p>
          </div>
          <div>
            <span className="text-muted">Phone</span>
            <p className="font-medium">{profile?.phone || "—"}</p>
          </div>
          <div>
            <span className="text-muted">Location</span>
            <p className="font-medium">
              {profile?.city && profile?.state ? `${profile.city}, ${profile.state} ${profile.zip || ""}` : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
        <h2 className="text-lg font-bold mb-4">Order History</h2>
        {orders.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted mb-4">No orders yet</p>
            <Link href="/products" className="gradient-bg text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Shop Mini Splits
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-border">
                <div>
                  <p className="font-semibold text-sm">Order #{order.id.slice(0, 8).toUpperCase()}</p>
                  <p className="text-xs text-muted mt-0.5">
                    {new Date(order.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">${Number(order.total).toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${
                    order.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : order.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
