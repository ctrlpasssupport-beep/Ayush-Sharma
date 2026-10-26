import { n as __toESM } from "../_runtime.mjs";
import {
  c as require_react,
  s as require_jsx_runtime,
} from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as PageHeader } from "./PageHeader-De4wxCCP.mjs";
import { o as Search } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-Jk7YAuX-.mjs";
import { s as useMenu, t as categories } from "./catalog-Clsn0hX3.mjs";
import { t as MenuCard } from "./MenuCard-Cvl4t45r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-BABCXOHs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MenuPage() {
  const menu = useMenu();
  const [q, setQ] = (0, import_react.useState)("");
  const filtered = (0, import_react.useMemo)(
    () =>
      menu.filter((m) => m.name.toLowerCase().includes(q.trim().toLowerCase())),
    [q, menu],
  );
  const groups = categories
    .map((c) => ({
      c,
      items: filtered.filter((m) => m.category === c.id),
    }))
    .filter((g) => g.items.length);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
          eyebrow: "Our menu",
          title: "Everything, freshly made.",
          children:
            "All prices in ₹. Pizza sizes shown as Small / Medium / Large.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "sticky top-16 z-30 border-y border-border/60 bg-background/90 backdrop-blur",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "relative md:w-72",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
                    className:
                      "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                    value: q,
                    onChange: (e) => setQ(e.target.value),
                    placeholder: "Search dishes…",
                    className: "h-11 rounded-full bg-card pl-9",
                    "aria-label": "Search menu",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
                className: "no-scrollbar flex gap-2 overflow-x-auto",
                "aria-label": "Categories",
                children: groups.map(({ c }) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "a",
                    {
                      href: `#${c.id}`,
                      className:
                        "shrink-0 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-card hover:bg-secondary",
                      children: [c.emoji, " ", c.name],
                    },
                    c.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mx-auto max-w-6xl space-y-14 px-4 py-10",
          children: [
            groups.length === 0 &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "py-20 text-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-5xl",
                    children: "🍕",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "mt-4 text-lg font-semibold",
                    children: ["No dishes match “", q, "”."],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-muted-foreground",
                    children: "Try “paneer”, “shake” or “fries”.",
                  }),
                ],
              }),
            groups.map(({ c, items }) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "section",
                {
                  id: c.id,
                  className: "scroll-mt-40",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                      className: "text-3xl font-extrabold",
                      children: [c.emoji, " ", c.name],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                      children: items.map((m) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          MenuCard,
                          { item: m },
                          m.id,
                        ),
                      ),
                    }),
                  ],
                },
                c.id,
              ),
            ),
          ],
        }),
      ],
    },
  );
}
//#endregion
export { MenuPage as component };
