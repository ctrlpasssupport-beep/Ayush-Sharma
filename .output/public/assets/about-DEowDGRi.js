import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { U as t, h as n } from "./index-CElauyXZ.js";
import { t as r } from "./PageHeader-BfJsdPcN.js";
import { t as i } from "./combo-Dpde6eNl.js";
var a = e(),
  o = () =>
    (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(r, {
          eyebrow: `About us`,
          title: `Your neighbourhood pizza spot.`,
        }),
        (0, a.jsxs)(`div`, {
          className: `mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2`,
          children: [
            (0, a.jsxs)(`div`, {
              className: `space-y-4 text-lg text-muted-foreground`,
              children: [
                (0, a.jsx)(`p`, {
                  children: `Subday Pizza is a local pizza and fast-food destination in Gurugram. We make pizzas, burgers, sandwiches, pasta, wraps, fries, shakes, mojitos and coffee — plus combo meals that make sharing easy.`,
                }),
                (0, a.jsx)(`p`, {
                  children: `Drop in, order a delivery, or book our party hall for your next celebration.`,
                }),
                (0, a.jsx)(n, {
                  variant: `hero`,
                  size: `xl`,
                  asChild: !0,
                  children: (0, a.jsx)(t, {
                    to: `/menu`,
                    children: `See the menu`,
                  }),
                }),
              ],
            }),
            (0, a.jsx)(`img`, {
              src: i,
              alt: `Burger, fries and shake`,
              loading: `lazy`,
              width: 1200,
              height: 912,
              className: `rounded-[2rem] shadow-card`,
            }),
          ],
        }),
      ],
    });
export { o as component };
