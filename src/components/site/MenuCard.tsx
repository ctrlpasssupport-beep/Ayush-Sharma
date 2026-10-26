import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sizesFor, categories, type MenuItem } from "@/data/menu";
import { useCart } from "@/lib/cart";

export function imageForItem(item: MenuItem): string {
  if (item.category.includes("pizza") || item.category === "kullad") {
    const pizzas = [
      "/images/pizza-1.jpg",
      "/images/pizza-2.jpg",
      "/images/pizza-3.jpg",
      "/images/pizza-4.jpg",
      "/images/pizza-5.jpg",
      "/images/pizza-6.jpg",
      "/images/pizza-7.jpg",
      "/images/pizza-8.jpg",
    ];
    let hash = 0;
    for (let i = 0; i < item.name.length; i++) hash += item.name.charCodeAt(i);
    return pizzas[hash % pizzas.length];
  }
  if (item.category.includes("burger")) {
    const burgers = [
      "/images/burger-1.jpg",
      "/images/burger-2.jpg",
      "/images/burger-3.jpg",
    ];
    let hash = 0;
    for (let i = 0; i < item.name.length; i++) hash += item.name.charCodeAt(i);
    return burgers[hash % burgers.length];
  }
  if (
    item.category.includes("pasta") ||
    item.category.includes("bread") ||
    item.category.includes("sandwiches") ||
    item.category.includes("wrap") ||
    item.category.includes("fries")
  ) {
    const pastas = [
      "/images/pasta-1.jpg",
      "/images/pasta-2.jpg",
      "/images/pasta-3.jpg",
    ];
    let hash = 0;
    for (let i = 0; i < item.name.length; i++) hash += item.name.charCodeAt(i);
    return pastas[hash % pastas.length];
  }
  const drinks = [
    "/images/drink-1.jpg",
    "/images/drink-2.jpg",
    "/images/drink-3.jpg",
    "/images/drink-4.jpg",
    "/images/drink-5.jpg",
    "/images/drink-6.jpg",
    "/images/drink-7.jpg",
    "/images/drink-8.jpg",
    "/images/drink-9.jpg",
  ];
  let hash = 0;
  for (let i = 0; i < item.name.length; i++) hash += item.name.charCodeAt(i);
  return drinks[hash % drinks.length];
}

export function MenuCard({
  item,
  showCategory,
}: {
  item: MenuItem;
  showCategory?: boolean;
}) {
  const { add } = useCart();
  const sizes = sizesFor(item);
  const [idx, setIdx] = useState(sizes.length ? 1 : 0);
  const available = item.available !== false;
  const cat = categories.find((c) => c.id === item.category);
  const img = imageForItem(item);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-[#15191b] border border-white/10 shadow-lg transition-all duration-300 hover:border-[#fac564]/50 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
        <img
          src={img}
          alt={item.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15191b] via-transparent to-black/20" />
        
        {/* Category Emoji Badge & Veg Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="grid size-8 place-items-center rounded-full bg-black/70 backdrop-blur-md text-sm border border-white/15">
            {cat?.emoji ?? "🍕"}
          </span>
          {item.featured && (
            <Badge className="rounded-none bg-[#fac564] text-[#121618] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
              Special
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <span
            className="grid size-5 place-items-center rounded-sm bg-black/60 border border-green-500"
            title="Vegetarian"
          >
            <span className="size-2 rounded-full bg-green-500" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-[#fac564] leading-tight line-clamp-1">
          {item.name}
        </h3>
        {showCategory && (
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-[#fac564]/80">
            {cat?.name}
          </p>
        )}
        <p className="mt-1.5 text-xs text-white/60 line-clamp-2 min-h-[2rem]">
          {item.note || "Prepared fresh with original Italian dough and premium cheese."}
        </p>

        {sizes.length > 0 && (
          <div
            className="mt-3 grid grid-cols-3 gap-1 rounded bg-white/5 p-1 border border-white/5"
            role="radiogroup"
            aria-label="Size"
          >
            {sizes.map((s, i) => (
              <button
                key={s}
                role="radio"
                aria-checked={i === idx}
                onClick={() => setIdx(i)}
                className={`py-1 text-[11px] font-bold uppercase tracking-wider transition-all ${
                  i === idx
                    ? "bg-[#fac564] text-[#121618] shadow-sm font-extrabold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-white/40 tracking-wider">
              {sizes.length ? sizes[idx] : "Standard"}
            </span>
            <span className="font-display text-xl font-bold text-[#fac564]">
              ₹{item.prices[idx] ?? item.prices[0] ?? 0}
            </span>
          </div>

          <Button
            variant="hero"
            size="sm"
            className="h-9 px-4 text-xs uppercase tracking-wider font-bold"
            disabled={!available}
            onClick={() => {
              add({
                id: item.id,
                name: item.name,
                size: sizes[idx] ?? "",
                price: item.prices[idx] ?? 0,
              });
              toast.success(`${item.name} added to cart`);
            }}
          >
            {available ? (
              <>
                <Plus className="size-3.5 mr-1" /> Add
              </>
            ) : (
              "Sold Out"
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}
