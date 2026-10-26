import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-vq0BKko2.mjs";
import { g as Check } from "../_libs/lucide-react.mjs";
import { c as useOffers, r as offerTerms } from "./catalog-Clsn0hX3.mjs";
import { i as waLink } from "./whatsapp-BPz_t6n4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Offers-DwQQsnNP.js
var import_jsx_runtime = require_jsx_runtime();
function OffersGrid() {
  const all = useOffers();
  const offers = all.filter((o) => o.kind === "combo");
  const deals = all.filter((o) => o.kind === "deal");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid gap-5 md:grid-cols-3",
        children: offers.map((o, i) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "article",
            {
              className: `flex flex-col rounded-3xl p-7 shadow-card ${i === 1 ? "bg-primary text-primary-foreground" : "bg-card"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "text-xs font-bold uppercase tracking-[0.2em] opacity-75",
                  children: "Combo",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "mt-1 text-2xl font-extrabold",
                  children: o.title,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "price mt-3 text-5xl",
                  children: ["₹", o.price],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "mt-5 space-y-2 text-sm",
                  children: o.items.map((it) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "li",
                      {
                        className: "flex gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                            className: "mt-0.5 size-4 shrink-0",
                          }),
                          it,
                        ],
                      },
                      it,
                    ),
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  variant: i === 1 ? "cheese" : "hero",
                  size: "xl",
                  className: "mt-auto pt-0 w-full",
                  asChild: true,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                    href: waLink(
                      `Hi Subday Pizza! I'd like the ${o.title} combo (₹${o.price}).`,
                    ),
                    target: "_blank",
                    rel: "noreferrer",
                    className: "mt-6",
                    children: "Order this combo",
                  }),
                }),
              ],
            },
            o.id,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid gap-5 md:grid-cols-2",
        children: deals.map((d) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "article",
            {
              className:
                "flex items-center gap-5 rounded-3xl border-2 border-dashed border-primary/40 bg-accent p-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "grid size-14 shrink-0 place-items-center rounded-full bg-cheese text-2xl",
                  children: "🎁",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className: "text-xl font-extrabold",
                      children: d.title,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-muted-foreground",
                      children: d.text,
                    }),
                  ],
                }),
              ],
            },
            d.id,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-sm text-muted-foreground",
        children: offerTerms,
      }),
    ],
  });
}
//#endregion
export { OffersGrid as t };
