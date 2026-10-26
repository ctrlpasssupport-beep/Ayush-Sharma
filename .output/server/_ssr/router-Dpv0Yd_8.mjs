import { n as __toESM } from "../_runtime.mjs";
import {
  c as require_react,
  s as require_jsx_runtime,
} from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-vq0BKko2.mjs";
import {
  G as redirect,
  _ as createFileRoute,
  d as Scripts,
  f as HeadContent,
  g as lazyRouteComponent,
  h as Outlet,
  m as createRouter,
  v as createRootRouteWithContext,
  x as useRouter,
  y as Link,
} from "../_libs/@tanstack/react-router+[...].mjs";
import {
  a as DialogOverlay,
  c as DialogTrigger,
  i as DialogDescription,
  n as DialogClose,
  o as DialogPortal,
  r as DialogContent,
  s as DialogTitle,
  t as Dialog,
} from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as supabase } from "./client-D-3bcQUa.mjs";
import { t as useSessionUser } from "./use-session-BwxwNWeq.mjs";
import {
  a as ShoppingBag,
  f as Menu,
  l as Phone,
  n as User,
  p as MapPin,
  r as Trash2,
  s as Plus,
  t as X,
  u as Minus,
} from "../_libs/lucide-react.mjs";
import { t as Textarea } from "./textarea-D4FaEWc1.mjs";
import { n as telHref, t as site } from "./site--jYoShYP.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import {
  i as waLink,
  n as mapsPinLink,
  r as subtotal,
  t as buildOrderMessage,
} from "./whatsapp-BPz_t6n4.mjs";
import {
  n as lineKey,
  r as useCart,
  t as CartProvider,
} from "./cart-huN1Ej-Y.mjs";
import { t as z } from "../_libs/next-themes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dpv0Yd_8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BQhURTLb.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const stack = error instanceof Error ? error.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message: describeThrown(error),
    ...(stack !== void 0 && { stack }),
    filename: window.location.pathname,
  });
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
  if (error instanceof Response)
    return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  const { message } = error ?? {};
  if (typeof message === "string" && message.length > 0) return message;
  try {
    return (
      JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error)
    );
  } catch {
    return String(error);
  }
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    ),
    ...props,
    ref,
  }),
);
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  },
);
var SheetContent = import_react.forwardRef(
  ({ side = "right", className, children, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
          ref,
          className: cn(sheetVariants({ side }), className),
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
              className:
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                  className: "h-4 w-4",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "sr-only",
                  children: "Close",
                }),
              ],
            }),
            children,
          ],
        }),
      ],
    }),
);
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    ),
    ...props,
  });
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    ),
    ...props,
  });
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props,
  }),
);
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  }),
);
SheetDescription.displayName = DialogDescription.displayName;
var nav = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/menu",
    label: "Menu",
  },
  {
    to: "/offers",
    label: "Offers",
  },
  {
    to: "/party-hall",
    label: "Party Hall",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
    to: "/",
    className: "flex items-center gap-2",
    "aria-label": "Subday Pizza home",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className:
          "grid size-9 place-items-center rounded-full bg-primary text-lg text-primary-foreground",
        children: "🍕",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        className: "font-display text-xl font-extrabold tracking-tight",
        children: [
          "Subday",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-primary",
            children: "Pizza",
          }),
        ],
      }),
    ],
  });
}
function SiteHeader() {
  const { lines, setOpen } = useCart();
  const user = useSessionUser();
  const [mobile, setMobile] = (0, import_react.useState)(false);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
    className:
      "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
          className: "hidden items-center gap-1 lg:flex",
          children: nav.map((n) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Link,
              {
                to: n.to,
                className:
                  "rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
                activeProps: { className: "text-foreground bg-secondary" },
                activeOptions: { exact: true },
                children: n.label,
              },
              n.to,
            ),
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              variant: "soft",
              size: "icon",
              className: "size-10",
              asChild: true,
              "aria-label": user ? "My account" : "Sign in",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: user ? "/account" : "/auth",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {}),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              variant: "soft",
              size: "icon",
              className: "relative size-10",
              onClick: () => setOpen(true),
              "aria-label": "Open order",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}),
                count > 0 &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground",
                    children: count,
                  }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              variant: "hero",
              className: "hidden h-10 px-5 sm:inline-flex",
              asChild: true,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/menu",
                children: "Order Now",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
              open: mobile,
              onOpenChange: setMobile,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
                  asChild: true,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Button,
                    {
                      variant: "soft",
                      size: "icon",
                      className: "size-10 lg:hidden",
                      "aria-label": "Open menu",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        Menu,
                        {},
                      ),
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
                  side: "right",
                  className: "bg-background",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
                      className: "sr-only",
                      children: "Navigation",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "mt-8 flex flex-col gap-1",
                      children: [
                        nav.map((n) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Link,
                            {
                              to: n.to,
                              onClick: () => setMobile(false),
                              className:
                                "rounded-xl px-4 py-3 font-display text-lg font-bold hover:bg-secondary",
                              children: n.label,
                            },
                            n.to,
                          ),
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                          variant: "hero",
                          size: "xl",
                          className: "mt-4",
                          asChild: true,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Link,
                            {
                              to: "/menu",
                              onClick: () => setMobile(false),
                              children: "Order Now",
                            },
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function SiteFooter() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
    className: "mt-24 bg-charcoal text-cream",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "md:col-span-2 space-y-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "[&_span]:text-cream",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "max-w-sm text-sm text-cream/70",
                children: [
                  "Pizzas, burgers, sandwiches, pasta, shakes and combos made for sharing in ",
                  site.city,
                  ".",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "text-sm text-cream/70",
                children: [
                  "Free home delivery on orders of ₹",
                  site.delivery.minOrder,
                  "+ within ",
                  site.delivery.radiusKm,
                  " km.",
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-2 text-sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                className: "font-display text-base font-bold",
                children: "Explore",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/menu",
                className: "block text-cream/70 hover:text-cream",
                children: "Menu",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/offers",
                className: "block text-cream/70 hover:text-cream",
                children: "Offers & Combos",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/party-hall",
                className: "block text-cream/70 hover:text-cream",
                children: "Party Hall",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/about",
                className: "block text-cream/70 hover:text-cream",
                children: "About",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-2 text-sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                className: "font-display text-base font-bold",
                children: "Visit / Call",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                href: telHref,
                className:
                  "flex items-center gap-2 text-cream/70 hover:text-cream",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
                    className: "size-4",
                  }),
                  " ",
                  site.phone,
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                href: site.mapsUrl,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "flex items-center gap-2 text-cream/70 hover:text-cream",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                    className: "size-4",
                  }),
                  " Get directions",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/privacy",
                className: "block pt-2 text-cream/70 hover:text-cream",
                children: "Privacy Policy",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                to: "/terms",
                className: "block text-cream/70 hover:text-cream",
                children: "Terms & Conditions",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "border-t border-cream/10 py-5 text-center text-xs text-cream/50",
        children: [
          "© ",
          /* @__PURE__ */ new Date().getFullYear(),
          " ",
          site.name,
          ". All rights reserved.",
        ],
      }),
    ],
  });
}
function CartSheet() {
  const { lines, open, setOpen, setQty, clear } = useCart();
  const total = subtotal(lines);
  const remaining = site.delivery.minOrder - total;
  const [loc, setLoc] = (0, import_react.useState)(null);
  const [address, setAddress] = (0, import_react.useState)("");
  const [locStatus, setLocStatus] = (0, import_react.useState)("idle");
  const shareLocation = () => {
    if (!navigator.geolocation) return setLocStatus("error");
    setLocStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setLoc(mapsPinLink(p.coords.latitude, p.coords.longitude));
        setLocStatus("idle");
      },
      () => setLocStatus("error"),
      {
        enableHighAccuracy: true,
        timeout: 15e3,
      },
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
    open,
    onOpenChange: setOpen,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
      className: "flex w-full flex-col bg-background sm:max-w-md",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
              className: "font-display text-2xl",
              children: "Your order",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
              children: "Review, then send it to us on WhatsApp.",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex-1 space-y-3 overflow-y-auto px-4",
          children: [
            lines.length === 0 &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "py-12 text-center text-muted-foreground",
                children:
                  "Nothing here yet — add something tasty from the menu.",
              }),
            lines.map((l) => {
              const k = lineKey(l);
              return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className:
                    "flex items-center gap-3 rounded-2xl bg-card p-3 shadow-card",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "font-semibold leading-tight",
                          children: l.name,
                        }),
                        l.size &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "text-xs text-muted-foreground",
                            children: l.size,
                          }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className: "price text-primary",
                          children: ["₹", l.price * l.qty],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                          size: "icon",
                          variant: "soft",
                          className: "size-8",
                          onClick: () => setQty(k, l.qty - 1),
                          "aria-label": "Decrease",
                          children:
                            l.qty === 1
                              ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  Trash2,
                                  {},
                                )
                              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  Minus,
                                  {},
                                ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "w-6 text-center font-bold",
                          children: l.qty,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                          size: "icon",
                          variant: "soft",
                          className: "size-8",
                          onClick: () => setQty(k, l.qty + 1),
                          "aria-label": "Increase",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Plus,
                            {},
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                k,
              );
            }),
          ],
        }),
        lines.length > 0 &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-3 border-t p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex justify-between text-lg",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "font-semibold",
                    children: "Subtotal",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "price",
                    children: ["₹", total],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children:
                  remaining > 0
                    ? `Add ₹${remaining} more for free home delivery.`
                    : "🎉 Free home delivery unlocked (within 3 km).",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                className: "block text-sm font-semibold",
                htmlFor: "delivery-address",
                children: "Delivery address",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
                id: "delivery-address",
                value: address,
                onChange: (e) => setAddress(e.target.value),
                placeholder: "House no., street, area, landmark",
                rows: 2,
                maxLength: 300,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                variant: "outline",
                className: "w-full",
                onClick: shareLocation,
                disabled: locStatus === "loading",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
                  " ",
                  loc
                    ? "Location added ✓ (tap to update)"
                    : locStatus === "loading"
                      ? "Getting your location…"
                      : "Add my delivery location",
                ],
              }),
              locStatus === "error" &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xs text-destructive",
                  children:
                    "Couldn't get your location. Type your address above instead.",
                }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                variant: "whatsapp",
                size: "xl",
                className: "w-full",
                asChild: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: waLink(buildOrderMessage(lines, loc, address)),
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Send order on WhatsApp",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs text-muted-foreground",
                children:
                  "Sending a WhatsApp message doesn't confirm your order — the restaurant will reply to confirm.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: clear,
                className:
                  "text-xs font-semibold text-muted-foreground underline",
                children: "Clear order",
              }),
            ],
          }),
      ],
    }),
  });
}
var Toaster$1 = ({ ...props }) => {
  const { theme = "system" } = z();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
    theme,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...props,
  });
};
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-[60vh] items-center justify-center px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-extrabold text-primary",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold",
          children: "This slice went missing",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
          to: "/",
          className:
            "mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
          children: "Go home",
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "Something went wrong. Try refreshing.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className:
            "mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
          children: "Try again",
        }),
      ],
    }),
  });
}
var Route$12 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Subday Pizza — Pizza & Fast Food in Gurugram" },
      {
        name: "description",
        content:
          "Fresh pizzas, burgers, shakes and combos in Gurugram. Order on WhatsApp.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
        ],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$12.useRouteContext();
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (
        event !== "SIGNED_IN" &&
        event !== "SIGNED_OUT" &&
        event !== "USER_UPDATED"
      )
        return;
      router.invalidate();
      if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
    });
    return () => data.subscription.unsubscribe();
  }, [router, queryClient]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSheet, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
          position: "top-center",
        }),
      ],
    }),
  });
}
var $$splitComponentImporter$11 = () => import("./routes-CT319O_p.mjs");
var Route$11 = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subday Pizza — Good Times. Great Pizza. | Gurugram" },
      {
        name: "description",
        content:
          "Freshly made pizzas, cheesy burgers, shakes and value combos in Gurugram. Free delivery on ₹399+ within 3 km.",
      },
      {
        property: "og:title",
        content: "Subday Pizza — Good Times. Great Pizza.",
      },
      {
        property: "og:description",
        content:
          "Pizzas, burgers, shakes and combos in Gurugram. Order on WhatsApp.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$11, "component"),
});
var $$splitComponentImporter$10 = () => import("./route-Di7iQBCH.mjs");
var Route$10 = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) throw redirect({ to: "/auth" });
  },
  component: lazyRouteComponent($$splitComponentImporter$10, "component"),
});
var $$splitComponentImporter$9 = () => import("./about--cv24278.mjs");
var Route$9 = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Subday Pizza" },
      {
        name: "description",
        content:
          "Subday Pizza is a local pizza and fast-food spot in Gurugram serving pizzas, burgers, sandwiches, pasta and shakes.",
      },
      {
        property: "og:title",
        content: "About Subday Pizza",
      },
      {
        property: "og:description",
        content: "Your local pizza and fast-food destination in Gurugram.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
});
var $$splitComponentImporter$8 = () => import("./account-D7gmeKA4.mjs");
var Route$8 = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My account — Subday Pizza" },
      {
        name: "description",
        content: "Your Subday Pizza account details.",
      },
      {
        property: "og:title",
        content: "My account — Subday Pizza",
      },
      {
        property: "og:description",
        content: "Your Subday Pizza account details.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
});
var $$splitComponentImporter$7 = () => import("./auth-5Nwf33Mj.mjs");
var Route$7 = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Subday Pizza" },
      {
        name: "description",
        content: "Sign in to Subday Pizza with Google or an email code.",
      },
      {
        property: "og:title",
        content: "Sign in — Subday Pizza",
      },
      {
        property: "og:description",
        content: "Sign in with Google or an email code.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
});
var $$splitComponentImporter$6 = () => import("./contact-CtvFg4NC.mjs");
var Route$6 = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Subday Pizza Gurugram" },
      {
        name: "description",
        content:
          "Call Subday Pizza on 8796130029, order on WhatsApp or get directions in Gurugram.",
      },
      {
        property: "og:title",
        content: "Contact Subday Pizza",
      },
      {
        property: "og:description",
        content: "Call, WhatsApp or find us on Google Maps.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
});
var $$splitComponentImporter$5 = () => import("./menu-BABCXOHs.mjs");
var Route$5 = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Prices — Subday Pizza Gurugram" },
      {
        name: "description",
        content:
          "Full Subday Pizza menu: veg pizzas, burgers, sandwiches, pasta, fries, wraps, mojitos, shakes and coffee with prices in ₹.",
      },
      {
        property: "og:title",
        content: "Subday Pizza Menu",
      },
      {
        property: "og:description",
        content: "Browse pizzas, burgers, shakes and more with prices.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
});
var $$splitComponentImporter$4 = () => import("./offers-CyhcAq24.mjs");
var Route$4 = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Combos — Subday Pizza" },
      {
        name: "description",
        content:
          "Meal for Two ₹450, Meal for Three ₹550, Meal for Four ₹800 plus pizza and burger deals at Subday Pizza.",
      },
      {
        property: "og:title",
        content: "Subday Pizza Offers & Combos",
      },
      {
        property: "og:description",
        content: "Value combos from ₹450 and buy-2 pizza deals.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
var $$splitComponentImporter$3 = () => import("./party-hall-DRmib51A.mjs");
var Route$3 = createFileRoute("/party-hall")({
  head: () => ({
    meta: [
      { title: "Party Hall — Subday Pizza Gurugram" },
      {
        name: "description",
        content:
          "Book the Subday Pizza party hall: ₹400/hour, ₹1,000 for 3 hours, party food package ₹1,500.",
      },
      {
        property: "og:title",
        content: "Subday Pizza Party Hall",
      },
      {
        property: "og:description",
        content: "Birthdays and get-togethers with pizza, burgers and shakes.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
var $$splitComponentImporter$2 = () => import("./privacy-D1nxHyDG.mjs");
var Route$2 = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Subday Pizza" },
      {
        name: "description",
        content: "How Subday Pizza handles your information.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Subday Pizza",
      },
      {
        property: "og:description",
        content: "How we handle your information.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
var $$splitComponentImporter$1 = () => import("./terms-DR9AAIp_.mjs");
var Route$1 = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Subday Pizza" },
      {
        name: "description",
        content: "Terms for ordering and offers at Subday Pizza.",
      },
      {
        property: "og:title",
        content: "Terms & Conditions — Subday Pizza",
      },
      {
        property: "og:description",
        content: "Ordering and offer terms.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
var $$splitComponentImporter = () => import("./admin-Cg5333_Q.mjs");
var Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Subday Pizza" },
      {
        name: "description",
        content: "Manage menu, offers, party hall pricing and orders.",
      },
      {
        property: "og:title",
        content: "Admin — Subday Pizza",
      },
      {
        property: "og:description",
        content: "Restaurant admin panel.",
      },
      {
        name: "robots",
        content: "noindex",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
var IndexRoute = Route$11.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$12,
});
var AuthenticatedRouteRoute = Route$10.update({
  id: "/_authenticated",
  getParentRoute: () => Route$12,
});
var AboutRoute = Route$9.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$12,
});
var AccountRoute = Route$8.update({
  id: "/account",
  path: "/account",
  getParentRoute: () => Route$12,
});
var AuthRoute = Route$7.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$12,
});
var ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$12,
});
var MenuRoute = Route$5.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$12,
});
var OffersRoute = Route$4.update({
  id: "/offers",
  path: "/offers",
  getParentRoute: () => Route$12,
});
var PartyHallRoute = Route$3.update({
  id: "/party-hall",
  path: "/party-hall",
  getParentRoute: () => Route$12,
});
var PrivacyRoute = Route$2.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$12,
});
var TermsRoute = Route$1.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$12,
});
var AuthenticatedRouteRouteChildren = {
  AuthenticatedAdminRoute: Route.update({
    id: "/admin",
    path: "/admin",
    getParentRoute: () => AuthenticatedRouteRoute,
  }),
};
var rootRouteChildren = {
  IndexRoute,
  AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(
    AuthenticatedRouteRouteChildren,
  ),
  AboutRoute,
  AccountRoute,
  AuthRoute,
  ContactRoute,
  MenuRoute,
  OffersRoute,
  PartyHallRoute,
  PrivacyRoute,
  TermsRoute,
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
