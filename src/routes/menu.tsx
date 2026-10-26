import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { MenuCard } from "@/components/site/MenuCard";
import { PageHeader } from "@/components/site/PageHeader";
import { categories } from "@/data/menu";
import { useMenu } from "@/lib/catalog";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Prices — PizzaHub Gurugram" },
      {
        name: "description",
        content:
          "Full PizzaHub menu: authentic Italian pizzas, burgers, sandwiches, pasta, fries, wraps, mojitos, shakes and coffee with prices in ₹.",
      },
      { property: "og:title", content: "PizzaHub Menu & Prices" },
      {
        property: "og:description",
        content: "Browse pizzas, burgers, shakes and more with prices.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const menu = useMenu();
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      menu.filter((m) => m.name.toLowerCase().includes(q.trim().toLowerCase())),
    [q, menu],
  );
  const groups = categories
    .map((c) => ({ c, items: filtered.filter((m) => m.category === c.id) }))
    .filter((g) => g.items.length);

  return (
    <div className="bg-[#121618] text-white min-h-screen">
      <PageHeader
        eyebrow="Our Menu"
        title="Discover Our Flavours"
        bgImage="/images/bg_3.jpg"
      >
        All prices in ₹. Hand-crafted daily using fresh proofed dough and 100% dairy mozzarella.
      </PageHeader>

      {/* Sticky Search & Category Navigation Bar */}
      <div className="sticky top-20 z-40 border-y border-white/10 bg-[#0e1113]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 py-4 md:flex-row md:items-center">
          <div className="relative md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search pizza, pasta, shakes…"
              className="h-10 w-full rounded bg-[#171b1d] border border-white/15 pl-10 pr-4 text-xs text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
              aria-label="Search menu"
            />
          </div>

          <nav
            className="no-scrollbar flex gap-2 overflow-x-auto py-1"
            aria-label="Categories"
          >
            {groups.map(({ c }) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 flex items-center gap-1.5 rounded bg-[#15191b] border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:border-[#fac564] hover:text-[#fac564] transition-all"
              >
                <span>{c.emoji}</span>
                <span>{c.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu Categories List */}
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 py-14">
        {groups.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-5xl">🍕</p>
            <p className="mt-4 font-display text-2xl font-bold uppercase tracking-wider text-white">
              No dishes match “{q}”
            </p>
            <p className="text-sm text-white/50 mt-1">
              Try searching for “paneer”, “burger”, “shake” or “garlic bread”.
            </p>
          </div>
        )}

        {groups.map(({ c, items }) => (
          <section key={c.id} id={c.id} className="scroll-mt-40">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
              <span className="text-3xl">{c.emoji}</span>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                  {c.name}
                </h2>
                <p className="text-xs text-[#fac564] font-cursive tracking-wider">
                  Hand-crafted recipe
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((m) => (
                <MenuCard key={m.id} item={m} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
