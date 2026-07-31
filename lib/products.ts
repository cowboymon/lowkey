/**
 * Product data layer.
 *
 * v1 serves static placeholder data. At launch this module is the single
 * swap point for Shopify: replace `getProducts()` with a Storefront API
 * query (keeping the same `Product` shape) and every component keeps
 * working — no rewrite needed.
 */
export type Product = {
  id: string;
  name: string;
  variant: string;
  size: string;
  description: string;
  /** PLACEHOLDER imagery: cropped packaging renders from the Stage 6 pack
   *  design PDF. Swap for real product photography before launch. */
  image: string;
  imageAlt: string;
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
      image: "/product/deo-vanilla-glaze.png",
      imageAlt: "Low Key full-body deodorant stick — Vanilla Glaze",
      accent: "pink",
    },
    {
      id: "deo-unscented",
      name: "Full-Body Deodorant",
      variant: "Unscented",
      size: "75 mL",
      description:
        "For skin that prefers the quiet. All of the odour control, none of the fragrance.",
      image: "/product/deo-unscented.png",
      imageAlt: "Low Key full-body deodorant stick — Unscented",
      accent: "blue",
    },
  ];
}
