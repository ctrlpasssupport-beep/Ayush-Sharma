import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { OffersGrid } from "@/components/site/Offers";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Combos — PizzaHub Gurugram" },
      {
        name: "description",
        content:
          "Meal for Two ₹450, Meal for Three ₹550, Meal for Four ₹800 plus pizza and burger deals at PizzaHub.",
      },
      { property: "og:title", content: "PizzaHub Offers & Combos" },
      {
        property: "og:description",
        content: "Value combos from ₹450 and buy-2 pizza deals.",
      },
    ],
  }),
  component: () => (
    <div className="bg-[#121618] text-white min-h-screen">
      <PageHeader
        eyebrow="Special Deals"
        title="Combos & Big Savings"
        bgImage="/images/bg_1.jpg"
      >
        Generously sized feast combos packed with pizzas, garlic bread, fries and drinks.
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <OffersGrid />
      </div>
    </div>
  ),
});
