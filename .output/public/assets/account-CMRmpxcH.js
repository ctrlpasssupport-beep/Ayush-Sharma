import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { t } from "./mail-BNTbLGiX.js";
import {
  T as n,
  U as r,
  V as i,
  W as a,
  h as o,
  o as s,
} from "./index-CElauyXZ.js";
var c = n(`log-out`, [
    [`path`, { d: `m16 17 5-5-5-5`, key: `1bji2h` }],
    [`path`, { d: `M21 12H9`, key: `dn1m92` }],
    [`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`, key: `1uf3rs` }],
  ]),
  l = e();
function u() {
  let e = a(),
    n = s();
  async function u() {
    (await i.auth.signOut(), e({ to: `/` }));
  }
  return (0, l.jsx)(`div`, {
    className: `mx-auto flex max-w-md flex-col px-4 py-16`,
    children: (0, l.jsxs)(`div`, {
      className: `rounded-[2rem] bg-card p-8 shadow-card fade-up`,
      children: [
        (0, l.jsx)(`p`, { className: `text-4xl`, children: `🍕` }),
        (0, l.jsx)(`h1`, {
          className: `mt-3 text-3xl font-extrabold`,
          children: `My account`,
        }),
        (0, l.jsx)(`p`, {
          className: `mt-1 text-muted-foreground`,
          children: `You're signed in to Subday Pizza.`,
        }),
        (0, l.jsxs)(`div`, {
          className: `mt-6 flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3`,
          children: [
            (0, l.jsx)(t, {
              className: `size-4 text-muted-foreground`,
              "aria-hidden": !0,
            }),
            (0, l.jsx)(`span`, {
              className: `truncate text-sm font-semibold`,
              children: n?.email ?? `Loading…`,
            }),
          ],
        }),
        (0, l.jsx)(o, {
          variant: `hero`,
          size: `xl`,
          className: `mt-6 w-full`,
          asChild: !0,
          children: (0, l.jsx)(r, { to: `/menu`, children: `Browse the menu` }),
        }),
        (0, l.jsxs)(o, {
          variant: `soft`,
          size: `xl`,
          className: `mt-3 w-full`,
          onClick: u,
          children: [(0, l.jsx)(c, {}), ` Sign out`],
        }),
      ],
    }),
  });
}
export { u as component };
