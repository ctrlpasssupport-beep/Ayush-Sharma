import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-vq0BKko2.mjs";
import {
  b as useNavigate,
  y as Link,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-D-3bcQUa.mjs";
import { t as useSessionUser } from "./use-session-BwxwNWeq.mjs";
import { h as LogOut, m as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-D7gmeKA4.js
var import_jsx_runtime = require_jsx_runtime();
function AccountPage() {
  const navigate = useNavigate();
  const user = useSessionUser();
  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "mx-auto flex max-w-md flex-col px-4 py-16",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "rounded-[2rem] bg-card p-8 shadow-card fade-up",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "text-4xl",
          children: "🍕",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "mt-3 text-3xl font-extrabold",
          children: "My account",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-1 text-muted-foreground",
          children: "You're signed in to Subday Pizza.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "mt-6 flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
              className: "size-4 text-muted-foreground",
              "aria-hidden": true,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "truncate text-sm font-semibold",
              children: user?.email ?? "Loading…",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          variant: "hero",
          size: "xl",
          className: "mt-6 w-full",
          asChild: true,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/menu",
            children: "Browse the menu",
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
          variant: "soft",
          size: "xl",
          className: "mt-3 w-full",
          onClick: signOut,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}),
            " Sign out",
          ],
        }),
      ],
    }),
  });
}
//#endregion
export { AccountPage as component };
