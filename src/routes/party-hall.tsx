import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { site, telHref } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { usePartyHall } from "@/lib/catalog";

export const Route = createFileRoute("/party-hall")({
  head: () => ({
    meta: [
      { title: "Party Hall & Catering — PizzaHub Gurugram" },
      {
        name: "description",
        content:
          "Book the PizzaHub party hall: ₹400/hour, ₹1,000 for 3 hours, party food package ₹1,500.",
      },
      { property: "og:title", content: "PizzaHub Party Hall & Catering" },
      {
        property: "og:description",
        content: "Birthdays and get-togethers with pizza, burgers and shakes.",
      },
    ],
  }),
  component: PartyHall,
});

function PartyHall() {
  const p = usePartyHall();
  return (
    <div className="bg-[#121618] text-white min-h-screen">
      <PageHeader
        eyebrow="Celebrations"
        title="Party Hall & Events"
        bgImage="/images/bg_3.jpg"
      >
        Birthdays, kitty parties or get-togethers — bring your loved ones, we'll serve the pizza!
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Photos side */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <img
                src="/images/about.jpg"
                alt="Party hall decorated with food"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="font-cursive text-xl text-[#fac564]">Air Conditioned Space</span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                    Private Dining & Music Setup
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/image_3.jpg"
                alt="Party gathering"
                className="rounded-lg object-cover h-36 w-full border border-white/10"
              />
              <img
                src="/images/gallery-2.jpg"
                alt="Fresh Pizzas"
                className="rounded-lg object-cover h-36 w-full border border-white/10"
              />
            </div>
          </div>

          {/* Details side */}
          <div className="space-y-8">
            <div>
              <span className="font-cursive text-2xl text-[#fac564]">
                Affordable Packages
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1">
                Transparent Rates & Pricing
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["Hall / hour", p.hourlyRate],
                ["3 hours slot", p.threeHourRate],
                ["Food package", p.packagePrice],
              ].map(([l, v]) => (
                <div
                  key={l as string}
                  className="rounded-xl bg-[#15191b] border border-white/10 p-4 sm:p-5 text-center hover:border-[#fac564]/50 transition-colors"
                >
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#fac564]">
                    ₹{Number(v).toLocaleString("en-IN")}
                  </p>
                  <p className="mt-1 text-[11px] uppercase font-bold tracking-wider text-white/60">
                    {l}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#15191b] border border-white/10 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5 text-[#fac564]" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  ₹{p.packagePrice.toLocaleString("en-IN")} Food Package Includes:
                </h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 pt-2 text-sm text-white/80">
                {p.packageItems.map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 text-[#fac564] shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="whatsapp"
                size="xl"
                className="px-8 text-xs uppercase font-bold tracking-widest"
                asChild
              >
                <a
                  href={waLink(
                    "Hi PizzaHub! I'd like to enquire about booking the party hall. Date: ___  Guests: ___",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4 mr-2" /> Book On WhatsApp
                </a>
              </Button>
              <Button
                variant="outlineWhite"
                size="xl"
                className="px-8 text-xs uppercase font-bold tracking-widest"
                asChild
              >
                <a href={telHref}>
                  <Phone className="size-4 mr-2 text-[#fac564]" /> Call Direct
                </a>
              </Button>
            </div>

            <p className="text-xs text-white/50">
              Rates as advertised on our menu — please confirm date availability and head counts when enquiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
