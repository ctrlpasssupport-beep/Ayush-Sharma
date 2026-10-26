import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-vq0BKko2.mjs";
import { t as combo_default } from "./combo-6hN-mJUl.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import {
  _ as Bike,
  c as Pizza,
  d as MessageCircle,
  i as Sparkles,
  l as Phone,
} from "../_libs/lucide-react.mjs";
import { n as telHref, t as site } from "./site--jYoShYP.mjs";
import {
  l as usePartyHall,
  s as useMenu,
  t as categories,
} from "./catalog-Clsn0hX3.mjs";
import { i as waLink } from "./whatsapp-BPz_t6n4.mjs";
import { t as MenuCard } from "./MenuCard-Cvl4t45r.mjs";
import { t as OffersGrid } from "./Offers-DwQQsnNP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CT319O_p.js
var import_jsx_runtime = require_jsx_runtime();
var hero_pizza_default = "/assets/hero-pizza-CKfFawd3.jpg";
var homeCats = [
  "classic-veg",
  "burgers",
  "sandwiches",
  "pasta",
  "fries",
  "shakes",
  "mojito",
  "cold-coffee",
  "wraps",
  "garlic-bread",
];
function Index() {
  const menu = useMenu();
  const party = usePartyHall();
  const featured = menu.filter((m) => m.featured);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className:
            "mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:pt-16",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "fade-up",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className:
                    "inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                      className: "size-3.5",
                    }),
                    " ",
                    site.city,
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                  className:
                    "mt-5 text-5xl font-extrabold leading-[0.95] md:text-7xl",
                  children: [
                    "Good Times.",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-primary",
                      children: "Great Pizza.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-6 max-w-md text-lg text-muted-foreground",
                  children:
                    "Freshly made pizzas, cheesy burgers, delicious shakes and combos made for sharing.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "mt-8 flex flex-wrap gap-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      variant: "hero",
                      size: "xl",
                      asChild: true,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        Link,
                        {
                          to: "/menu",
                          children: "Explore Menu",
                        },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      variant: "whatsapp",
                      size: "xl",
                      asChild: true,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "a",
                        {
                          href: waLink(
                            "Hi Subday Pizza! I'd like to place an order.",
                          ),
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              MessageCircle,
                              {},
                            ),
                            " Order on WhatsApp",
                          ],
                        },
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                  className:
                    "mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pizza, {
                          className: "size-4 text-primary",
                        }),
                        " Pizza & Fast Food",
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                          className: "size-4 text-primary",
                        }),
                        " Value-for-Money Combos",
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bike, {
                          className: "size-4 text-primary",
                        }),
                        " Home Delivery Available",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-cheese/40",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: hero_pizza_default,
                  alt: "Fresh vegetarian pizza with paneer, olives, corn and capsicum",
                  width: 1600,
                  height: 1200,
                  className:
                    "aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "absolute -bottom-5 left-5 rounded-2xl bg-card px-4 py-3 shadow-card",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs font-semibold text-muted-foreground",
                      children: "Pizzas from",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "price text-2xl text-primary",
                      children: "₹100",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mx-auto max-w-6xl px-4 py-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-3xl font-extrabold md:text-4xl",
              children: "What are you craving?",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "no-scrollbar mt-6 flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5",
              children: homeCats.map((id) => {
                const c = categories.find((x) => x.id === id);
                return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  Link,
                  {
                    to: "/menu",
                    hash: id,
                    className:
                      "flex min-w-32 flex-col items-center gap-2 rounded-3xl bg-card p-5 text-center shadow-card transition-transform hover:-translate-y-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-4xl",
                        "aria-hidden": true,
                        children: c.emoji,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-sm font-bold",
                        children: c.id === "classic-veg" ? "Pizza" : c.name,
                      }),
                    ],
                  },
                  id,
                );
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mx-auto max-w-6xl px-4 py-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-end justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-sm font-bold uppercase tracking-[0.2em] text-primary",
                      children: "Hand-picked",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      className: "text-3xl font-extrabold md:text-4xl",
                      children: "Featured Favourites",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/menu",
                  className: "hidden text-sm font-bold text-primary md:block",
                  children: "Full menu →",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
              children: featured.map((m) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  MenuCard,
                  {
                    item: m,
                    showCategory: true,
                  },
                  m.id,
                ),
              ),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "mx-auto max-w-6xl px-4 py-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: "text-3xl font-extrabold md:text-4xl",
              children: "Combos made for sharing",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-8",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                OffersGrid,
                {},
              ),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "mx-auto max-w-6xl px-4 py-12",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "grid overflow-hidden rounded-[2rem] bg-charcoal text-cream md:grid-cols-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "p-8 md:p-12",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                    className: "text-4xl font-extrabold",
                    children: "Your Pizza Night, Delivered.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "mt-4 text-cream/75",
                    children: [
                      "Free home delivery on orders of ₹",
                      site.delivery.minOrder,
                      " or more, within ",
                      site.delivery.radiusKm,
                      " km.",
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-8 flex flex-wrap gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                        variant: "cheese",
                        size: "xl",
                        asChild: true,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "a",
                          {
                            href: telHref,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                Phone,
                                {},
                              ),
                              " Call to Order",
                            ],
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                        variant: "whatsapp",
                        size: "xl",
                        asChild: true,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "a",
                          {
                            href: waLink("Hi! I'd like a home delivery."),
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                MessageCircle,
                                {},
                              ),
                              " WhatsApp",
                            ],
                          },
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                src: combo_default,
                alt: "Double cheese burger, peri peri fries and Oreo shake",
                loading: "lazy",
                width: 1200,
                height: 912,
                className: "h-full max-h-96 w-full object-cover",
              }),
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className:
            "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
              src: party,
              alt: "Party hall set for a birthday with pizzas and shakes",
              loading: "lazy",
              width: 1200,
              height: 800,
              className: "rounded-[2rem] object-cover shadow-card",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "text-sm font-bold uppercase tracking-[0.2em] text-primary",
                  children: "Party Hall",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "mt-2 text-4xl font-extrabold",
                  children: "Make Every Celebration Delicious.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "mt-6 grid grid-cols-3 gap-3",
                  children: [
                    ["Food package", party.packagePrice],
                    ["Per hour", party.hourlyRate],
                    ["3 hours", party.threeHourRate],
                  ].map(([l, v]) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className: "rounded-2xl bg-card p-4 shadow-card",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                            className: "price text-2xl",
                            children: ["₹", Number(v).toLocaleString("en-IN")],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className:
                              "text-xs font-semibold text-muted-foreground",
                            children: l,
                          }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  variant: "hero",
                  size: "xl",
                  className: "mt-8",
                  asChild: true,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                    to: "/party-hall",
                    children: "See party details",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    },
  );
}
//#endregion
export { Index as component };
