import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { offerTerms } from "@/data/menu";
import { useOffers } from "@/lib/catalog";
import { waLink } from "@/lib/whatsapp";

export function OffersGrid() {
  const all = useOffers();
  const offers = all.filter((o) => o.kind === "combo");
  const deals = all.filter((o) => o.kind === "deal");

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((o, i) => (
          <article
            key={o.id}
            className={`relative flex flex-col overflow-hidden rounded-xl p-8 border transition-all duration-300 ${
              i === 1
                ? "bg-[#171b1d] border-[#fac564] shadow-[0_0_30px_rgba(250,197,100,0.15)] ring-1 ring-[#fac564]"
                : "bg-[#15191b] border-white/10 hover:border-white/30"
            }`}
          >
            {i === 1 && (
              <span className="absolute top-0 right-0 bg-[#fac564] px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#121618]">
                Most Popular
              </span>
            )}
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#fac564]">
              Special Combo
            </p>
            <h3 className="mt-2 text-2xl font-bold font-display uppercase tracking-wider text-white">
              {o.title}
            </h3>
            <div className="mt-4 flex items-baseline gap-1 text-[#fac564]">
              <span className="text-xl font-bold">₹</span>
              <span className="price text-5xl font-extrabold tracking-tight">
                {o.price}
              </span>
            </div>

            <ul className="mt-6 space-y-2.5 text-sm text-white/80 border-t border-white/10 pt-6">
              {o.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 text-[#fac564] shrink-0" />
                  <span className="leading-snug">{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-white/10">
              <Button
                variant={i === 1 ? "hero" : "outlineWhite"}
                size="lg"
                className="w-full text-xs uppercase font-bold tracking-widest"
                asChild
              >
                <a
                  href={waLink(
                    `Hi PizzaHub! I'd like to order the ${o.title} combo (₹${o.price}).`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order This Combo
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {deals.map((d) => (
          <article
            key={d.id}
            className="flex items-center gap-5 rounded-xl border border-white/10 bg-[#15191b] p-6 hover:border-[#fac564]/40 transition-colors"
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#fac564]/10 border border-[#fac564]/30 text-2xl">
              <Sparkles className="size-6 text-[#fac564]" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                {d.title}
              </h3>
              <p className="mt-1 text-sm text-white/70">{d.text}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-xs text-white/50">{offerTerms}</p>
    </div>
  );
}
