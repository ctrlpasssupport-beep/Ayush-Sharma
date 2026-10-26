import { n as __toESM } from "../_runtime.mjs";
import {
  c as require_react,
  s as require_jsx_runtime,
} from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-vq0BKko2.mjs";
import { s as Plus } from "../_libs/lucide-react.mjs";
import { o as sizesFor, t as categories } from "./catalog-Clsn0hX3.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useCart } from "./cart-huN1Ej-Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MenuCard-Cvl4t45r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(badgeVariants({ variant }), className),
    ...props,
  });
}
function MenuCard({ item, showCategory }) {
  const { add } = useCart();
  const sizes = sizesFor(item);
  const [idx, setIdx] = (0, import_react.useState)(sizes.length ? 1 : 0);
  const available = item.available !== false;
  const cat = categories.find((c) => c.id === item.category);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
    className:
      "group flex flex-col rounded-3xl bg-card p-5 shadow-card transition-transform hover:-translate-y-1",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-start justify-between gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-2xl",
            "aria-hidden": true,
            children: cat?.emoji,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex gap-1",
            children: [
              item.featured &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
                  className:
                    "rounded-full bg-cheese text-charcoal hover:bg-cheese",
                  children: "Favourite",
                }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "grid size-5 place-items-center rounded-sm border-2 border-veg",
                title: "Vegetarian",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "size-2 rounded-full bg-veg",
                }),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
        className: "mt-4 text-lg font-bold leading-tight",
        children: item.name,
      }),
      showCategory &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className:
            "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
          children: cat?.name,
        }),
      item.note &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-1 text-xs text-muted-foreground",
          children: item.note,
        }),
      sizes.length > 0 &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className:
            "mt-4 grid grid-cols-3 gap-1 rounded-full bg-secondary p-1",
          role: "radiogroup",
          "aria-label": "Size",
          children: sizes.map((s, i) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                role: "radio",
                "aria-checked": i === idx,
                onClick: () => setIdx(i),
                className: `rounded-full py-1.5 text-xs font-bold transition-colors ${i === idx ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`,
                children: s,
              },
              s,
            ),
          ),
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-auto flex items-end justify-between pt-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "price text-2xl",
            children: ["₹", item.prices[idx] ?? item.prices[0] ?? 0],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            variant: "hero",
            size: "sm",
            className: "h-10 px-4",
            disabled: !available,
            onClick: () => {
              add({
                id: item.id,
                name: item.name,
                size: sizes[idx] ?? "",
                price: item.prices[idx] ?? 0,
              });
              toast.success(`${item.name} added`);
            },
            children: available
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_jsx_runtime.Fragment,
                  {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}),
                      " Add",
                    ],
                  },
                )
              : "Unavailable",
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { MenuCard as t };
