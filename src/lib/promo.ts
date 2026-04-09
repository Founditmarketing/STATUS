/* ─── Promo Code System ─── */

export interface PromoCode {
  code: string;
  type: "percent" | "fixed";
  value: number;       // percent (10 = 10%) or fixed dollar amount
  minOrder?: number;   // minimum order to apply
  description: string;
}

const promoCodes: PromoCode[] = [
  { code: "WELCOME10", type: "percent", value: 10, description: "10% off your order" },
  { code: "STATUS20", type: "percent", value: 20, minOrder: 2000, description: "20% off orders $2,000+" },
  { code: "INSTALL50", type: "fixed", value: 50, description: "$50 off your order" },
  { code: "COOL100", type: "fixed", value: 100, minOrder: 1000, description: "$100 off orders $1,000+" },
  { code: "DIY15", type: "percent", value: 15, description: "15% off your order" },
];

export function validatePromoCode(code: string, subtotal: number): { valid: boolean; promo?: PromoCode; error?: string } {
  const normalized = code.trim().toUpperCase();
  const promo = promoCodes.find((p) => p.code === normalized);

  if (!promo) {
    return { valid: false, error: "Invalid promo code" };
  }

  if (promo.minOrder && subtotal < promo.minOrder) {
    return { valid: false, error: `Minimum order of $${promo.minOrder.toLocaleString()} required` };
  }

  return { valid: true, promo };
}

export function calculateDiscount(promo: PromoCode, subtotal: number): number {
  if (promo.type === "percent") {
    return Math.round(subtotal * (promo.value / 100) * 100) / 100;
  }
  return Math.min(promo.value, subtotal);
}
