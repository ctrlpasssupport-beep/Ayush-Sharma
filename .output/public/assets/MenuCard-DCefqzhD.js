import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { t as n } from "./react-BiuhUkGL.js";
import { l as r, s as i } from "./catalog-iSjdVlqq.js";
import {
  E as a,
  _ as o,
  g as s,
  h as c,
  t as l,
  x as u,
} from "./index-CElauyXZ.js";
var d = e(n(), 1),
  f = t(),
  p = o(
    `inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,
    {
      variants: {
        variant: {
          default: `border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80`,
          secondary: `border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80`,
          destructive: `border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80`,
          outline: `text-foreground`,
        },
      },
      defaultVariants: { variant: `default` },
    },
  );
function m({ className: e, variant: t, ...n }) {
  return (0, f.jsx)(`div`, { className: s(p({ variant: t }), e), ...n });
}
function h({ item: e, showCategory: t }) {
  let { add: n } = a(),
    o = r(e),
    [s, p] = (0, d.useState)(+!!o.length),
    h = e.available !== !1,
    g = i.find((t) => t.id === e.category);
  return (0, f.jsxs)(`article`, {
    className: `group flex flex-col rounded-3xl bg-card p-5 shadow-card transition-transform hover:-translate-y-1`,
    children: [
      (0, f.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [
          (0, f.jsx)(`div`, {
            className: `grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-2xl`,
            "aria-hidden": !0,
            children: g?.emoji,
          }),
          (0, f.jsxs)(`div`, {
            className: `flex gap-1`,
            children: [
              e.featured &&
                (0, f.jsx)(m, {
                  className: `rounded-full bg-cheese text-charcoal hover:bg-cheese`,
                  children: `Favourite`,
                }),
              (0, f.jsx)(`span`, {
                className: `grid size-5 place-items-center rounded-sm border-2 border-veg`,
                title: `Vegetarian`,
                children: (0, f.jsx)(`span`, {
                  className: `size-2 rounded-full bg-veg`,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, f.jsx)(`h3`, {
        className: `mt-4 text-lg font-bold leading-tight`,
        children: e.name,
      }),
      t &&
        (0, f.jsx)(`p`, {
          className: `text-xs font-semibold uppercase tracking-wide text-muted-foreground`,
          children: g?.name,
        }),
      e.note &&
        (0, f.jsx)(`p`, {
          className: `mt-1 text-xs text-muted-foreground`,
          children: e.note,
        }),
      o.length > 0 &&
        (0, f.jsx)(`div`, {
          className: `mt-4 grid grid-cols-3 gap-1 rounded-full bg-secondary p-1`,
          role: `radiogroup`,
          "aria-label": `Size`,
          children: o.map((e, t) =>
            (0, f.jsx)(
              `button`,
              {
                role: `radio`,
                "aria-checked": t === s,
                onClick: () => p(t),
                className: `rounded-full py-1.5 text-xs font-bold transition-colors ${t === s ? `bg-card text-foreground shadow-sm` : `text-muted-foreground`}`,
                children: e,
              },
              e,
            ),
          ),
        }),
      (0, f.jsxs)(`div`, {
        className: `mt-auto flex items-end justify-between pt-5`,
        children: [
          (0, f.jsxs)(`span`, {
            className: `price text-2xl`,
            children: [`₹`, e.prices[s] ?? e.prices[0] ?? 0],
          }),
          (0, f.jsx)(c, {
            variant: `hero`,
            size: `sm`,
            className: `h-10 px-4`,
            disabled: !h,
            onClick: () => {
              (n({
                id: e.id,
                name: e.name,
                size: o[s] ?? ``,
                price: e.prices[s] ?? 0,
              }),
                l.success(`${e.name} added`));
            },
            children: h
              ? (0, f.jsxs)(f.Fragment, {
                  children: [(0, f.jsx)(u, {}), ` Add`],
                })
              : `Unavailable`,
          }),
        ],
      }),
    ],
  });
}
export { h as t };
