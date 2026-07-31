/**
 * Product data layer.
 *
 * v1 serves static placeholder data. At launch this module is the single
 * swap point for Shopify: replace `getProducts()` with a Storefront API
 * query (keeping the same `Product` shape) and every component keeps
 * working — no rewrite needed. (Add an `image` field here when real
 * product photography replaces the neutral placeholder frames.)
 */
export type Product = {
  id: string;
  name: string;
  variant: string;
  size: string;
  description: string;
  accent: "pink" | "blue";
};

export function getProducts(): Product[] {
  return [
    {
      id: "deo-vanilla-glaze",
      name: "Full-Body Deodorant",
      variant: "Vanilla Glaze",
      size: "75 mL",
      description:
        "Warm, soft, dessert-adjacent — without smelling like a bakery got involved.",
      accent: "pink",
    },
    {
      id: "deo-unscented",
      name: "Full-Body Deodorant",
      variant: "Unscented",
      size: "75 mL",
      description:
        "For skin that prefers the quiet. All of the odour control, none of the fragrance.",
      accent: "blue",
    },
  ];
}
