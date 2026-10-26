import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-vq0BKko2.mjs";
import { t as PageHeader } from "./PageHeader-De4wxCCP.mjs";
import { t as combo_default } from "./combo-6hN-mJUl.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about--cv24278.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        eyebrow: "About us",
        title: "Your neighbourhood pizza spot.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-4 text-lg text-muted-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                children:
                  "Subday Pizza is a local pizza and fast-food destination in Gurugram. We make pizzas, burgers, sandwiches, pasta, wraps, fries, shakes, mojitos and coffee — plus combo meals that make sharing easy.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                children:
                  "Drop in, order a delivery, or book our party hall for your next celebration.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                variant: "hero",
                size: "xl",
                asChild: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/menu",
                  children: "See the menu",
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: combo_default,
            alt: "Burger, fries and shake",
            loading: "lazy",
            width: 1200,
            height: 912,
            className: "rounded-[2rem] shadow-card",
          }),
        ],
      }),
    ],
  });
//#endregion
export { SplitComponent as component };
