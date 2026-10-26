import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-vq0BKko2.mjs";
import { t as PageHeader } from "./PageHeader-De4wxCCP.mjs";
import {
  d as MessageCircle,
  l as Phone,
  p as MapPin,
} from "../_libs/lucide-react.mjs";
import { n as telHref, t as site } from "./site--jYoShYP.mjs";
import { i as waLink } from "./whatsapp-BPz_t6n4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CtvFg4NC.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        eyebrow: "Contact",
        title: "Hungry? Let's talk.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-3",
        children: [
          {
            icon: Phone,
            t: "Call restaurant",
            d: site.phone,
            href: telHref,
            v: "hero",
            b: "Call now",
          },
          {
            icon: MessageCircle,
            t: "WhatsApp order",
            d: "Send us your order",
            href: waLink("Hi Subday Pizza!"),
            v: "whatsapp",
            b: "Open WhatsApp",
          },
          {
            icon: MapPin,
            t: "Find us",
            d: site.city,
            href: site.mapsUrl,
            v: "cheese",
            b: "Get directions",
          },
        ].map(({ icon: I, t, d, href, v, b }) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: "flex flex-col rounded-3xl bg-card p-7 shadow-card",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {
                  className: "size-8 text-primary",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "mt-4 text-xl font-extrabold",
                  children: t,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-muted-foreground",
                  children: d,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  variant: v,
                  size: "xl",
                  className: "mt-6",
                  asChild: true,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                    href,
                    target: href.startsWith("http") ? "_blank" : void 0,
                    rel: "noreferrer",
                    children: b,
                  }),
                }),
              ],
            },
            t,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        className: "mx-auto mt-6 max-w-6xl px-4 text-sm text-muted-foreground",
        children: [
          "Free home delivery on orders of ₹",
          site.delivery.minOrder,
          "+ within ",
          site.delivery.radiusKm,
          " km.",
        ],
      }),
    ],
  });
//#endregion
export { SplitComponent as component };
