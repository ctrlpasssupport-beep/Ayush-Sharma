import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { t as n } from "./react-BiuhUkGL.js";
import { i as r, s as i } from "./catalog-iSjdVlqq.js";
import { T as a } from "./index-CElauyXZ.js";
import { t as o } from "./input-CSjAzpNs.js";
import { t as s } from "./PageHeader-BfJsdPcN.js";
import { t as c } from "./MenuCard-DCefqzhD.js";
var l = a(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  u = e(n()),
  d = t();
function f() {
  let e = r(),
    [t, n] = (0, u.useState)(``),
    a = (0, u.useMemo)(
      () =>
        e.filter((e) => e.name.toLowerCase().includes(t.trim().toLowerCase())),
      [t, e],
    ),
    f = i
      .map((e) => ({ c: e, items: a.filter((t) => t.category === e.id) }))
      .filter((e) => e.items.length);
  return (0, d.jsxs)(d.Fragment, {
    children: [
      (0, d.jsx)(s, {
        eyebrow: `Our menu`,
        title: `Everything, freshly made.`,
        children: `All prices in ₹. Pizza sizes shown as Small / Medium / Large.`,
      }),
      (0, d.jsx)(`div`, {
        className: `sticky top-16 z-30 border-y border-border/60 bg-background/90 backdrop-blur`,
        children: (0, d.jsxs)(`div`, {
          className: `mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center`,
          children: [
            (0, d.jsxs)(`div`, {
              className: `relative md:w-72`,
              children: [
                (0, d.jsx)(l, {
                  className: `absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground`,
                }),
                (0, d.jsx)(o, {
                  value: t,
                  onChange: (e) => n(e.target.value),
                  placeholder: `Search dishes…`,
                  className: `h-11 rounded-full bg-card pl-9`,
                  "aria-label": `Search menu`,
                }),
              ],
            }),
            (0, d.jsx)(`nav`, {
              className: `no-scrollbar flex gap-2 overflow-x-auto`,
              "aria-label": `Categories`,
              children: f.map(({ c: e }) =>
                (0, d.jsxs)(
                  `a`,
                  {
                    href: `#${e.id}`,
                    className: `shrink-0 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-card hover:bg-secondary`,
                    children: [e.emoji, ` `, e.name],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, d.jsxs)(`div`, {
        className: `mx-auto max-w-6xl space-y-14 px-4 py-10`,
        children: [
          f.length === 0 &&
            (0, d.jsxs)(`div`, {
              className: `py-20 text-center`,
              children: [
                (0, d.jsx)(`p`, { className: `text-5xl`, children: `🍕` }),
                (0, d.jsxs)(`p`, {
                  className: `mt-4 text-lg font-semibold`,
                  children: [`No dishes match “`, t, `”.`],
                }),
                (0, d.jsx)(`p`, {
                  className: `text-muted-foreground`,
                  children: `Try “paneer”, “shake” or “fries”.`,
                }),
              ],
            }),
          f.map(({ c: e, items: t }) =>
            (0, d.jsxs)(
              `section`,
              {
                id: e.id,
                className: `scroll-mt-40`,
                children: [
                  (0, d.jsxs)(`h2`, {
                    className: `text-3xl font-extrabold`,
                    children: [e.emoji, ` `, e.name],
                  }),
                  (0, d.jsx)(`div`, {
                    className: `mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
                    children: t.map((e) => (0, d.jsx)(c, { item: e }, e.id)),
                  }),
                ],
              },
              e.id,
            ),
          ),
        ],
      }),
    ],
  });
}
export { f as component };
