import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-De4wxCCP.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
    className: "mx-auto max-w-6xl px-4 pb-8 pt-14 fade-up",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "text-sm font-bold uppercase tracking-[0.2em] text-primary",
        children: eyebrow,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className:
          "mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-6xl",
        children: title,
      }),
      children &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-4 max-w-2xl text-lg text-muted-foreground",
          children,
        }),
    ],
  });
}
//#endregion
export { PageHeader as t };
