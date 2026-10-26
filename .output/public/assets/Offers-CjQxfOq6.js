import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { a as t, c as n } from "./catalog-iSjdVlqq.js";
import { t as r } from "./check-BucXF59w.js";
import { h as i, n as a } from "./index-CElauyXZ.js";
var o = e();
function s() {
  let e = t(),
    s = e.filter((e) => e.kind === `combo`),
    c = e.filter((e) => e.kind === `deal`);
  return (0, o.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, o.jsx)(`div`, {
        className: `grid gap-5 md:grid-cols-3`,
        children: s.map((e, t) =>
          (0, o.jsxs)(
            `article`,
            {
              className: `flex flex-col rounded-3xl p-7 shadow-card ${t === 1 ? `bg-primary text-primary-foreground` : `bg-card`}`,
              children: [
                (0, o.jsx)(`p`, {
                  className: `text-xs font-bold uppercase tracking-[0.2em] opacity-75`,
                  children: `Combo`,
                }),
                (0, o.jsx)(`h3`, {
                  className: `mt-1 text-2xl font-extrabold`,
                  children: e.title,
                }),
                (0, o.jsxs)(`p`, {
                  className: `price mt-3 text-5xl`,
                  children: [`₹`, e.price],
                }),
                (0, o.jsx)(`ul`, {
                  className: `mt-5 space-y-2 text-sm`,
                  children: e.items.map((e) =>
                    (0, o.jsxs)(
                      `li`,
                      {
                        className: `flex gap-2`,
                        children: [
                          (0, o.jsx)(r, {
                            className: `mt-0.5 size-4 shrink-0`,
                          }),
                          e,
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, o.jsx)(i, {
                  variant: t === 1 ? `cheese` : `hero`,
                  size: `xl`,
                  className: `mt-auto pt-0 w-full`,
                  asChild: !0,
                  children: (0, o.jsx)(`a`, {
                    href: a(
                      `Hi Subday Pizza! I'd like the ${e.title} combo (₹${e.price}).`,
                    ),
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `mt-6`,
                    children: `Order this combo`,
                  }),
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, o.jsx)(`div`, {
        className: `grid gap-5 md:grid-cols-2`,
        children: c.map((e) =>
          (0, o.jsxs)(
            `article`,
            {
              className: `flex items-center gap-5 rounded-3xl border-2 border-dashed border-primary/40 bg-accent p-6`,
              children: [
                (0, o.jsx)(`span`, {
                  className: `grid size-14 shrink-0 place-items-center rounded-full bg-cheese text-2xl`,
                  children: `🎁`,
                }),
                (0, o.jsxs)(`div`, {
                  children: [
                    (0, o.jsx)(`h3`, {
                      className: `text-xl font-extrabold`,
                      children: e.title,
                    }),
                    (0, o.jsx)(`p`, {
                      className: `text-muted-foreground`,
                      children: e.text,
                    }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, o.jsx)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: n,
      }),
    ],
  });
}
export { s as t };
