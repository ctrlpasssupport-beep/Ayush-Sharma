import { n as __toESM } from "../_runtime.mjs";
import {
  c as require_react,
  s as require_jsx_runtime,
} from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-huN1Ej-Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)(null);
var keyOf = (l) => `${l.id}|${l.size ?? ""}`;
function CartProvider({ children }) {
  const [lines, setLines] = (0, import_react.useState)([]);
  const [open, setOpen] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    try {
      const raw = localStorage.getItem("subday-cart");
      if (raw) setLines(JSON.parse(raw));
    } catch {}
  }, []);
  (0, import_react.useEffect)(() => {
    localStorage.setItem("subday-cart", JSON.stringify(lines));
  }, [lines]);
  const add = (l) =>
    setLines((prev) => {
      const k = keyOf(l);
      return prev.find((p) => keyOf(p) === k)
        ? prev.map((p) =>
            keyOf(p) === k
              ? {
                  ...p,
                  qty: p.qty + 1,
                }
              : p,
          )
        : [
            ...prev,
            {
              ...l,
              qty: 1,
            },
          ];
    });
  const setQty = (k, qty) =>
    setLines((prev) =>
      qty <= 0
        ? prev.filter((p) => keyOf(p) !== k)
        : prev.map((p) =>
            keyOf(p) === k
              ? {
                  ...p,
                  qty,
                }
              : p,
          ),
    );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
    value: {
      lines,
      open,
      setOpen,
      add,
      setQty,
      clear: () => setLines([]),
    },
    children,
  });
}
var lineKey = keyOf;
function useCart() {
  const c = (0, import_react.useContext)(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
//#endregion
export { lineKey as n, useCart as r, CartProvider as t };
