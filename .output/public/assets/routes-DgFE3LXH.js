import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { i as t, o as n, s as r } from "./catalog-iSjdVlqq.js";
import { t as i } from "./message-circle-DBLaYLBS.js";
import {
  S as a,
  T as o,
  U as s,
  a as c,
  h as l,
  i as u,
  n as d,
} from "./index-CElauyXZ.js";
import { t as f } from "./combo-Dpde6eNl.js";
import { t as p } from "./MenuCard-DCefqzhD.js";
import { t as m } from "./Offers-CjQxfOq6.js";
var h = o(`bike`, [
    [`circle`, { cx: `18.5`, cy: `17.5`, r: `3.5`, key: `15x4ox` }],
    [`circle`, { cx: `5.5`, cy: `17.5`, r: `3.5`, key: `1noe27` }],
    [`circle`, { cx: `15`, cy: `5`, r: `1`, key: `19l28e` }],
    [`path`, { d: `M12 17.5V14l-3-3 4-3 2 3h2`, key: `1npguv` }],
  ]),
  g = o(`pizza`, [
    [`path`, { d: `m12 14-1 1`, key: `11onhr` }],
    [`path`, { d: `m13.75 18.25-1.25 1.42`, key: `1yisr3` }],
    [
      `path`,
      { d: `M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12`, key: `1qtqk6` },
    ],
    [`path`, { d: `M18.8 9.3a1 1 0 0 0 2.1 7.7`, key: `fbbbr2` }],
    [
      `path`,
      {
        d: `M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z`,
        key: `1hyfdd`,
      },
    ],
  ]),
  _ = o(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  v = `/assets/hero-pizza-CKfFawd3.jpg`,
  y = e(),
  b = [
    `classic-veg`,
    `burgers`,
    `sandwiches`,
    `pasta`,
    `fries`,
    `shakes`,
    `mojito`,
    `cold-coffee`,
    `wraps`,
    `garlic-bread`,
  ];
function x() {
  let e = t(),
    o = n(),
    x = e.filter((e) => e.featured);
  return (0, y.jsxs)(y.Fragment, {
    children: [
      (0, y.jsxs)(`section`, {
        className: `mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:pt-16`,
        children: [
          (0, y.jsxs)(`div`, {
            className: `fade-up`,
            children: [
              (0, y.jsxs)(`span`, {
                className: `inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary`,
                children: [
                  (0, y.jsx)(_, { className: `size-3.5` }),
                  ` `,
                  u.city,
                ],
              }),
              (0, y.jsxs)(`h1`, {
                className: `mt-5 text-5xl font-extrabold leading-[0.95] md:text-7xl`,
                children: [
                  `Good Times.`,
                  (0, y.jsx)(`br`, {}),
                  (0, y.jsx)(`span`, {
                    className: `text-primary`,
                    children: `Great Pizza.`,
                  }),
                ],
              }),
              (0, y.jsx)(`p`, {
                className: `mt-6 max-w-md text-lg text-muted-foreground`,
                children: `Freshly made pizzas, cheesy burgers, delicious shakes and combos made for sharing.`,
              }),
              (0, y.jsxs)(`div`, {
                className: `mt-8 flex flex-wrap gap-3`,
                children: [
                  (0, y.jsx)(l, {
                    variant: `hero`,
                    size: `xl`,
                    asChild: !0,
                    children: (0, y.jsx)(s, {
                      to: `/menu`,
                      children: `Explore Menu`,
                    }),
                  }),
                  (0, y.jsx)(l, {
                    variant: `whatsapp`,
                    size: `xl`,
                    asChild: !0,
                    children: (0, y.jsxs)(`a`, {
                      href: d(`Hi Subday Pizza! I'd like to place an order.`),
                      target: `_blank`,
                      rel: `noreferrer`,
                      children: [(0, y.jsx)(i, {}), ` Order on WhatsApp`],
                    }),
                  }),
                ],
              }),
              (0, y.jsxs)(`ul`, {
                className: `mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold`,
                children: [
                  (0, y.jsxs)(`li`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, y.jsx)(g, { className: `size-4 text-primary` }),
                      ` Pizza & Fast Food`,
                    ],
                  }),
                  (0, y.jsxs)(`li`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, y.jsx)(_, { className: `size-4 text-primary` }),
                      ` Value-for-Money Combos`,
                    ],
                  }),
                  (0, y.jsxs)(`li`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, y.jsx)(h, { className: `size-4 text-primary` }),
                      ` Home Delivery Available`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, y.jsxs)(`div`, {
            className: `relative`,
            children: [
              (0, y.jsx)(`div`, {
                className: `absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-cheese/40`,
              }),
              (0, y.jsx)(`img`, {
                src: v,
                alt: `Fresh vegetarian pizza with paneer, olives, corn and capsicum`,
                width: 1600,
                height: 1200,
                className: `aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card`,
              }),
              (0, y.jsxs)(`div`, {
                className: `absolute -bottom-5 left-5 rounded-2xl bg-card px-4 py-3 shadow-card`,
                children: [
                  (0, y.jsx)(`p`, {
                    className: `text-xs font-semibold text-muted-foreground`,
                    children: `Pizzas from`,
                  }),
                  (0, y.jsx)(`p`, {
                    className: `price text-2xl text-primary`,
                    children: `₹100`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, y.jsxs)(`section`, {
        className: `mx-auto max-w-6xl px-4 py-12`,
        children: [
          (0, y.jsx)(`h2`, {
            className: `text-3xl font-extrabold md:text-4xl`,
            children: `What are you craving?`,
          }),
          (0, y.jsx)(`div`, {
            className: `no-scrollbar mt-6 flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5`,
            children: b.map((e) => {
              let t = r.find((t) => t.id === e);
              return (0, y.jsxs)(
                s,
                {
                  to: `/menu`,
                  hash: e,
                  className: `flex min-w-32 flex-col items-center gap-2 rounded-3xl bg-card p-5 text-center shadow-card transition-transform hover:-translate-y-1`,
                  children: [
                    (0, y.jsx)(`span`, {
                      className: `text-4xl`,
                      "aria-hidden": !0,
                      children: t.emoji,
                    }),
                    (0, y.jsx)(`span`, {
                      className: `text-sm font-bold`,
                      children: t.id === `classic-veg` ? `Pizza` : t.name,
                    }),
                  ],
                },
                e,
              );
            }),
          }),
        ],
      }),
      (0, y.jsxs)(`section`, {
        className: `mx-auto max-w-6xl px-4 py-12`,
        children: [
          (0, y.jsxs)(`div`, {
            className: `flex items-end justify-between`,
            children: [
              (0, y.jsxs)(`div`, {
                children: [
                  (0, y.jsx)(`p`, {
                    className: `text-sm font-bold uppercase tracking-[0.2em] text-primary`,
                    children: `Hand-picked`,
                  }),
                  (0, y.jsx)(`h2`, {
                    className: `text-3xl font-extrabold md:text-4xl`,
                    children: `Featured Favourites`,
                  }),
                ],
              }),
              (0, y.jsx)(s, {
                to: `/menu`,
                className: `hidden text-sm font-bold text-primary md:block`,
                children: `Full menu →`,
              }),
            ],
          }),
          (0, y.jsx)(`div`, {
            className: `mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4`,
            children: x.map((e) =>
              (0, y.jsx)(p, { item: e, showCategory: !0 }, e.id),
            ),
          }),
        ],
      }),
      (0, y.jsxs)(`section`, {
        className: `mx-auto max-w-6xl px-4 py-12`,
        children: [
          (0, y.jsx)(`h2`, {
            className: `text-3xl font-extrabold md:text-4xl`,
            children: `Combos made for sharing`,
          }),
          (0, y.jsx)(`div`, { className: `mt-8`, children: (0, y.jsx)(m, {}) }),
        ],
      }),
      (0, y.jsx)(`section`, {
        className: `mx-auto max-w-6xl px-4 py-12`,
        children: (0, y.jsxs)(`div`, {
          className: `grid overflow-hidden rounded-[2rem] bg-charcoal text-cream md:grid-cols-2`,
          children: [
            (0, y.jsxs)(`div`, {
              className: `p-8 md:p-12`,
              children: [
                (0, y.jsx)(`h2`, {
                  className: `text-4xl font-extrabold`,
                  children: `Your Pizza Night, Delivered.`,
                }),
                (0, y.jsxs)(`p`, {
                  className: `mt-4 text-cream/75`,
                  children: [
                    `Free home delivery on orders of ₹`,
                    u.delivery.minOrder,
                    ` or more, within `,
                    u.delivery.radiusKm,
                    ` km.`,
                  ],
                }),
                (0, y.jsxs)(`div`, {
                  className: `mt-8 flex flex-wrap gap-3`,
                  children: [
                    (0, y.jsx)(l, {
                      variant: `cheese`,
                      size: `xl`,
                      asChild: !0,
                      children: (0, y.jsxs)(`a`, {
                        href: c,
                        children: [(0, y.jsx)(a, {}), ` Call to Order`],
                      }),
                    }),
                    (0, y.jsx)(l, {
                      variant: `whatsapp`,
                      size: `xl`,
                      asChild: !0,
                      children: (0, y.jsxs)(`a`, {
                        href: d(`Hi! I'd like a home delivery.`),
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: [(0, y.jsx)(i, {}), ` WhatsApp`],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, y.jsx)(`img`, {
              src: f,
              alt: `Double cheese burger, peri peri fries and Oreo shake`,
              loading: `lazy`,
              width: 1200,
              height: 912,
              className: `h-full max-h-96 w-full object-cover`,
            }),
          ],
        }),
      }),
      (0, y.jsxs)(`section`, {
        className: `mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2`,
        children: [
          (0, y.jsx)(`img`, {
            src: o,
            alt: `Party hall set for a birthday with pizzas and shakes`,
            loading: `lazy`,
            width: 1200,
            height: 800,
            className: `rounded-[2rem] object-cover shadow-card`,
          }),
          (0, y.jsxs)(`div`, {
            children: [
              (0, y.jsx)(`p`, {
                className: `text-sm font-bold uppercase tracking-[0.2em] text-primary`,
                children: `Party Hall`,
              }),
              (0, y.jsx)(`h2`, {
                className: `mt-2 text-4xl font-extrabold`,
                children: `Make Every Celebration Delicious.`,
              }),
              (0, y.jsx)(`div`, {
                className: `mt-6 grid grid-cols-3 gap-3`,
                children: [
                  [`Food package`, o.packagePrice],
                  [`Per hour`, o.hourlyRate],
                  [`3 hours`, o.threeHourRate],
                ].map(([e, t]) =>
                  (0, y.jsxs)(
                    `div`,
                    {
                      className: `rounded-2xl bg-card p-4 shadow-card`,
                      children: [
                        (0, y.jsxs)(`p`, {
                          className: `price text-2xl`,
                          children: [`₹`, Number(t).toLocaleString(`en-IN`)],
                        }),
                        (0, y.jsx)(`p`, {
                          className: `text-xs font-semibold text-muted-foreground`,
                          children: e,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
              (0, y.jsx)(l, {
                variant: `hero`,
                size: `xl`,
                className: `mt-8`,
                asChild: !0,
                children: (0, y.jsx)(s, {
                  to: `/party-hall`,
                  children: `See party details`,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { x as component };
