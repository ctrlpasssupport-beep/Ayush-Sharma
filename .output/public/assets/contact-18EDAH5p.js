import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { t } from "./message-circle-DBLaYLBS.js";
import {
  S as n,
  a as r,
  h as i,
  i as a,
  n as o,
  w as s,
} from "./index-CElauyXZ.js";
import { t as c } from "./PageHeader-BfJsdPcN.js";
var l = e(),
  u = () =>
    (0, l.jsxs)(l.Fragment, {
      children: [
        (0, l.jsx)(c, { eyebrow: `Contact`, title: `Hungry? Let's talk.` }),
        (0, l.jsx)(`div`, {
          className: `mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-3`,
          children: [
            {
              icon: n,
              t: `Call restaurant`,
              d: a.phone,
              href: r,
              v: `hero`,
              b: `Call now`,
            },
            {
              icon: t,
              t: `WhatsApp order`,
              d: `Send us your order`,
              href: o(`Hi Subday Pizza!`),
              v: `whatsapp`,
              b: `Open WhatsApp`,
            },
            {
              icon: s,
              t: `Find us`,
              d: a.city,
              href: a.mapsUrl,
              v: `cheese`,
              b: `Get directions`,
            },
          ].map(({ icon: e, t, d: n, href: r, v: a, b: o }) =>
            (0, l.jsxs)(
              `div`,
              {
                className: `flex flex-col rounded-3xl bg-card p-7 shadow-card`,
                children: [
                  (0, l.jsx)(e, { className: `size-8 text-primary` }),
                  (0, l.jsx)(`h2`, {
                    className: `mt-4 text-xl font-extrabold`,
                    children: t,
                  }),
                  (0, l.jsx)(`p`, {
                    className: `text-muted-foreground`,
                    children: n,
                  }),
                  (0, l.jsx)(i, {
                    variant: a,
                    size: `xl`,
                    className: `mt-6`,
                    asChild: !0,
                    children: (0, l.jsx)(`a`, {
                      href: r,
                      target: r.startsWith(`http`) ? `_blank` : void 0,
                      rel: `noreferrer`,
                      children: o,
                    }),
                  }),
                ],
              },
              t,
            ),
          ),
        }),
        (0, l.jsxs)(`p`, {
          className: `mx-auto mt-6 max-w-6xl px-4 text-sm text-muted-foreground`,
          children: [
            `Free home delivery on orders of ₹`,
            a.delivery.minOrder,
            `+ within `,
            a.delivery.radiusKm,
            ` km.`,
          ],
        }),
      ],
    });
export { u as component };
