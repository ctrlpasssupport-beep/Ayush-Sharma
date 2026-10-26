import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-vq0BKko2.mjs";
import { t as PageHeader } from "./PageHeader-De4wxCCP.mjs";
import {
  d as MessageCircle,
  g as Check,
  l as Phone,
} from "../_libs/lucide-react.mjs";
import { n as telHref } from "./site--jYoShYP.mjs";
import { l as usePartyHall } from "./catalog-Clsn0hX3.mjs";
import { i as waLink } from "./whatsapp-BPz_t6n4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/party-hall-DRmib51A.js
var import_jsx_runtime = require_jsx_runtime();
var party_default = "/assets/party-BPdZ4bSt.jpg";
function PartyHall() {
  const p = usePartyHall();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
          eyebrow: "Party hall",
          title: "Make Every Celebration Delicious.",
          children:
            "Birthdays, kitty parties or get-togethers — bring the people, we'll bring the food.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
              src: party_default,
              alt: "Party hall decorated with balloons and food",
              width: 1200,
              height: 800,
              className: "rounded-[2rem] object-cover shadow-card",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "grid grid-cols-3 gap-3",
                  children: [
                    ["Hall / hour", p.hourlyRate],
                    ["3 hours", p.threeHourRate],
                    ["Food package", p.packagePrice],
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
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "rounded-3xl bg-card p-6 shadow-card",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                      className: "text-xl font-extrabold",
                      children: [
                        "₹",
                        p.packagePrice.toLocaleString("en-IN"),
                        " party package includes",
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                      className: "mt-4 grid gap-2 sm:grid-cols-2",
                      children: p.packageItems.map((i) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "li",
                          {
                            className: "flex gap-2 text-sm",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                Check,
                                { className: "size-4 text-primary" },
                              ),
                              i,
                            ],
                          },
                          i,
                        ),
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      variant: "whatsapp",
                      size: "xl",
                      asChild: true,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "a",
                        {
                          href: waLink(
                            "Hi Subday Pizza! I'd like to enquire about booking the party hall. Date: ___  Guests: ___",
                          ),
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              MessageCircle,
                              {},
                            ),
                            " Enquire About Party Hall",
                          ],
                        },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      variant: "soft",
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
                            " Call us",
                          ],
                        },
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm text-muted-foreground",
                  children:
                    "Rates as advertised on our menu — please confirm availability and current pricing when enquiring.",
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
export { PartyHall as component };
