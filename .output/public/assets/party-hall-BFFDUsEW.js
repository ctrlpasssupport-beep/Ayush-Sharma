import { t as e } from "./jsx-runtime-BkSabwWG.js";
import { o as t } from "./catalog-iSjdVlqq.js";
import { t as n } from "./check-BucXF59w.js";
import { t as r } from "./message-circle-DBLaYLBS.js";
import { S as i, a, h as o, n as s } from "./index-CElauyXZ.js";
import { t as c } from "./PageHeader-BfJsdPcN.js";
var l = `/assets/party-BPdZ4bSt.jpg`,
  u = e();
function d() {
  let e = t();
  return (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(c, {
        eyebrow: `Party hall`,
        title: `Make Every Celebration Delicious.`,
        children: `Birthdays, kitty parties or get-togethers — bring the people, we'll bring the food.`,
      }),
      (0, u.jsxs)(`div`, {
        className: `mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2`,
        children: [
          (0, u.jsx)(`img`, {
            src: l,
            alt: `Party hall decorated with balloons and food`,
            width: 1200,
            height: 800,
            className: `rounded-[2rem] object-cover shadow-card`,
          }),
          (0, u.jsxs)(`div`, {
            className: `space-y-6`,
            children: [
              (0, u.jsx)(`div`, {
                className: `grid grid-cols-3 gap-3`,
                children: [
                  [`Hall / hour`, e.hourlyRate],
                  [`3 hours`, e.threeHourRate],
                  [`Food package`, e.packagePrice],
                ].map(([e, t]) =>
                  (0, u.jsxs)(
                    `div`,
                    {
                      className: `rounded-2xl bg-card p-4 shadow-card`,
                      children: [
                        (0, u.jsxs)(`p`, {
                          className: `price text-2xl`,
                          children: [`₹`, Number(t).toLocaleString(`en-IN`)],
                        }),
                        (0, u.jsx)(`p`, {
                          className: `text-xs font-semibold text-muted-foreground`,
                          children: e,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
              (0, u.jsxs)(`div`, {
                className: `rounded-3xl bg-card p-6 shadow-card`,
                children: [
                  (0, u.jsxs)(`h2`, {
                    className: `text-xl font-extrabold`,
                    children: [
                      `₹`,
                      e.packagePrice.toLocaleString(`en-IN`),
                      ` party package includes`,
                    ],
                  }),
                  (0, u.jsx)(`ul`, {
                    className: `mt-4 grid gap-2 sm:grid-cols-2`,
                    children: e.packageItems.map((e) =>
                      (0, u.jsxs)(
                        `li`,
                        {
                          className: `flex gap-2 text-sm`,
                          children: [
                            (0, u.jsx)(n, { className: `size-4 text-primary` }),
                            e,
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, u.jsxs)(`div`, {
                className: `flex flex-wrap gap-3`,
                children: [
                  (0, u.jsx)(o, {
                    variant: `whatsapp`,
                    size: `xl`,
                    asChild: !0,
                    children: (0, u.jsxs)(`a`, {
                      href: s(
                        `Hi Subday Pizza! I'd like to enquire about booking the party hall. Date: ___  Guests: ___`,
                      ),
                      target: `_blank`,
                      rel: `noreferrer`,
                      children: [
                        (0, u.jsx)(r, {}),
                        ` Enquire About Party Hall`,
                      ],
                    }),
                  }),
                  (0, u.jsx)(o, {
                    variant: `soft`,
                    size: `xl`,
                    asChild: !0,
                    children: (0, u.jsxs)(`a`, {
                      href: a,
                      children: [(0, u.jsx)(i, {}), ` Call us`],
                    }),
                  }),
                ],
              }),
              (0, u.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: `Rates as advertised on our menu — please confirm availability and current pricing when enquiring.`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { d as component };
