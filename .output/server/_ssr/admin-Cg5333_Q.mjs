import { n as __toESM } from "../_runtime.mjs";
import {
  c as require_react,
  s as require_jsx_runtime,
} from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn, t as Button } from "./button-vq0BKko2.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-D-3bcQUa.mjs";
import {
  l as Phone,
  p as MapPin,
  r as Trash2,
  s as Plus,
} from "../_libs/lucide-react.mjs";
import { t as Textarea } from "./textarea-D4FaEWc1.mjs";
import { t as Input } from "./input-Jk7YAuX-.mjs";
import {
  i as useQueryClient,
  n as useQuery,
} from "../_libs/tanstack__react-query.mjs";
import {
  a as partyQuery,
  i as offersQuery,
  n as menuQuery,
  t as categories,
} from "./catalog-Clsn0hX3.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import {
  n as SwitchThumb,
  t as Switch$1,
} from "../_libs/@radix-ui/react-switch+[...].mjs";
import {
  i as TabsTrigger$1,
  n as TabsContent$1,
  r as TabsList$1,
  t as Tabs$1,
} from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Cg5333_Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, {
      className: cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
Switch.displayName = Switch$1.displayName;
var Tabs = Tabs$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList$1, {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    ),
    ...props,
  }),
);
TabsList.displayName = TabsList$1.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger$1, {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className,
    ),
    ...props,
  }),
);
TabsTrigger.displayName = TabsTrigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    ),
    ...props,
  }),
);
TabsContent.displayName = TabsContent$1.displayName;
function AdminPage() {
  const role = useQuery({
    queryKey: ["is-admin"],
    queryFn: async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return false;
      const { data } = await supabase.rpc("has_role", {
        _user_id: u.user.id,
        _role: "admin",
      });
      return !!data;
    },
  });
  if (role.isLoading)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      className: "py-20 text-center text-muted-foreground",
      children: "Checking access…",
    });
  if (!role.data)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-md py-20 text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-3xl font-extrabold",
          children: "Admins only",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-muted-foreground",
          children: "This account doesn't have admin access.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          variant: "hero",
          className: "mt-6",
          asChild: true,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            children: "Go home",
          }),
        }),
      ],
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "mx-auto max-w-6xl px-4 py-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-4xl font-extrabold",
        children: "Admin panel",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
        defaultValue: "orders",
        className: "mt-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
                value: "orders",
                children: "Orders",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
                value: "menu",
                children: "Menu",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
                value: "offers",
                children: "Offers",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
                value: "party",
                children: "Party hall",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
            value: "orders",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              OrdersTab,
              {},
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
            value: "menu",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTab, {}),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
            value: "offers",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              OffersTab,
              {},
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
            value: "party",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyTab, {}),
          }),
        ],
      }),
    ],
  });
}
var STATUSES = ["new", "confirmed", "delivered", "cancelled"];
function OrdersTab() {
  const qc = useQueryClient();
  const orders = useQuery({
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return data;
    },
    refetchInterval: 3e4,
  });
  const setStatus = async (id, status) => {
    const { error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", id);
    if (error) return toast.error("Couldn't update order");
    qc.invalidateQueries({ queryKey: ["admin-orders"] });
  };
  if (orders.isLoading)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      className: "py-10 text-muted-foreground",
      children: "Loading orders…",
    });
  if (!orders.data?.length)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      className: "py-10 text-muted-foreground",
      children:
        "No orders yet. Orders appear here when customers tap “Send order on WhatsApp”.",
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "mt-4 grid gap-4 md:grid-cols-2",
    children: orders.data.map((o) =>
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "article",
        {
          className: "rounded-3xl bg-card p-5 shadow-card",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-start justify-between gap-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "font-bold",
                      children: o.customer_name || "Customer",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "text-xs text-muted-foreground",
                      children: new Date(o.created_at).toLocaleString("en-IN"),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
                  value: o.status,
                  onChange: (e) => setStatus(o.id, e.target.value),
                  className:
                    "rounded-full border bg-background px-3 py-1 text-sm font-semibold",
                  "aria-label": "Order status",
                  children: STATUSES.map((s) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "option",
                      {
                        value: s,
                        children: s,
                      },
                      s,
                    ),
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
              className: "mt-3 space-y-1 text-sm",
              children: o.items.map((l, i) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "li",
                  {
                    children: [
                      l.qty,
                      " × ",
                      l.name,
                      l.size ? ` (${l.size})` : "",
                      " — ₹",
                      l.price * l.qty,
                    ],
                  },
                  i,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className: "price mt-2 text-lg text-primary",
              children: ["₹", o.subtotal],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "mt-3 space-y-1 text-sm",
              children: [
                o.phone &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                    href: `tel:${o.phone}`,
                    className: "flex items-center gap-2 font-semibold",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
                        className: "size-4",
                      }),
                      o.phone,
                    ],
                  }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "font-semibold",
                      children: "Address:",
                    }),
                    " ",
                    o.address ||
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-muted-foreground",
                        children: "not given",
                      }),
                  ],
                }),
                o.location &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                    href: o.location,
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "flex items-center gap-2 font-semibold text-primary",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                        className: "size-4",
                      }),
                      "Open map pin",
                    ],
                  }),
              ],
            }),
          ],
        },
        o.id,
      ),
    ),
  });
}
function MenuTab() {
  const qc = useQueryClient();
  const { data = [] } = useQuery(menuQuery);
  const [cat, setCat] = (0, import_react.useState)(categories[0].id);
  const items = data.filter((m) => m.category === cat);
  const refresh = () => qc.invalidateQueries({ queryKey: ["catalog", "menu"] });
  const save = async (id, patch) => {
    const { error } = await supabase
      .from("menu_items")
      .update(patch)
      .eq("id", id);
    if (error) toast.error("Couldn't save");
    else {
      toast.success("Saved");
      refresh();
    }
  };
  const add = async () => {
    const name = prompt("New item name");
    if (!name?.trim()) return;
    const sized = !!categories.find((c) => c.id === cat)?.sizes;
    const { error } = await supabase.from("menu_items").insert({
      id: `${cat}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now().toString(36)}`,
      name: name.trim(),
      category: cat,
      prices: sized ? [0, 0, 0] : [0],
      sort: data.length,
    });
    if (error) toast.error("Couldn't add");
    else refresh();
  };
  const remove = async (id, name) => {
    if (!confirm(`Delete ${name}?`)) return;
    const { error } = await supabase.from("menu_items").delete().eq("id", id);
    if (error) toast.error("Couldn't delete");
    else refresh();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "mt-4 space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-wrap items-center gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
            value: cat,
            onChange: (e) => setCat(e.target.value),
            className:
              "h-10 rounded-full border bg-background px-4 font-semibold",
            "aria-label": "Category",
            children: categories.map((c) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "option",
                {
                  value: c.id,
                  children: [c.emoji, " ", c.name],
                },
                c.id,
              ),
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
            variant: "hero",
            onClick: add,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}),
              " Add item",
            ],
          }),
        ],
      }),
      items.map((m) =>
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          MenuRow,
          {
            item: m,
            sizes: categories.find((c) => c.id === cat)?.sizes,
            onSave: (p) => save(m.id, p),
            onDelete: () => remove(m.id, m.name),
          },
          m.id,
        ),
      ),
    ],
  });
}
function MenuRow({ item, sizes, onSave, onDelete }) {
  const [name, setName] = (0, import_react.useState)(item.name);
  const [prices, setPrices] = (0, import_react.useState)(
    item.prices.map(String),
  );
  const [note, setNote] = (0, import_react.useState)(item.note ?? "");
  (0, import_react.useEffect)(() => {
    setName(item.name);
    setPrices(item.prices.map(String));
    setNote(item.note ?? "");
  }, [item]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "flex flex-wrap items-end gap-3 rounded-2xl bg-card p-4 shadow-card",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "flex-1 min-w-48 text-xs font-semibold",
        children: [
          "Name",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
            value: name,
            onChange: (e) => setName(e.target.value),
          }),
        ],
      }),
      prices.map((p, i) =>
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "label",
          {
            className: "w-24 text-xs font-semibold",
            children: [
              prices.length > 1 ? (sizes?.[i] ?? `Size ${i + 1}`) : "Price",
              " ₹",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                type: "number",
                min: 0,
                value: p,
                onChange: (e) =>
                  setPrices(
                    prices.map((x, j) => (j === i ? e.target.value : x)),
                  ),
              }),
            ],
          },
          i,
        ),
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "min-w-40 flex-1 text-xs font-semibold",
        children: [
          "Note",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
            value: note,
            onChange: (e) => setNote(e.target.value),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "flex items-center gap-2 text-xs font-semibold",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
            checked: item.available !== false,
            onCheckedChange: (v) => onSave({ available: v }),
          }),
          "Available",
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "flex items-center gap-2 text-xs font-semibold",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
            checked: !!item.featured,
            onCheckedChange: (v) => onSave({ featured: v }),
          }),
          "Favourite",
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        onClick: () =>
          onSave({
            name: name.trim(),
            note: note.trim() || null,
            prices: prices.map((x) => Math.max(0, Math.round(Number(x) || 0))),
          }),
        children: "Save",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        variant: "ghost",
        size: "icon",
        onClick: onDelete,
        "aria-label": "Delete item",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}),
      }),
    ],
  });
}
function OffersTab() {
  const qc = useQueryClient();
  const { data = [] } = useQuery(offersQuery);
  const refresh = () =>
    qc.invalidateQueries({ queryKey: ["catalog", "offers"] });
  const add = async (kind) => {
    const { error } = await supabase.from("offers").insert({
      id: `${kind}-${Date.now().toString(36)}`,
      kind,
      title: kind === "combo" ? "New combo" : "New offer",
      price: kind === "combo" ? 0 : null,
      sort: data.length + 20,
    });
    if (error) toast.error("Couldn't add");
    else refresh();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "mt-4 space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
            variant: "hero",
            onClick: () => add("combo"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}),
              " Add combo",
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
            variant: "soft",
            onClick: () => add("deal"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}),
              " Add offer",
            ],
          }),
        ],
      }),
      data.map((o) =>
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          OfferRow,
          {
            offer: o,
            onDone: refresh,
          },
          o.id,
        ),
      ),
    ],
  });
}
function OfferRow({ offer, onDone }) {
  const [title, setTitle] = (0, import_react.useState)(offer.title);
  const [price, setPrice] = (0, import_react.useState)(
    String(offer.price ?? ""),
  );
  const [body, setBody] = (0, import_react.useState)(
    offer.kind === "combo" ? offer.items.join("\n") : (offer.text ?? ""),
  );
  (0, import_react.useEffect)(() => {
    setTitle(offer.title);
    setPrice(String(offer.price ?? ""));
    setBody(
      offer.kind === "combo" ? offer.items.join("\n") : (offer.text ?? ""),
    );
  }, [offer]);
  const update = async (patch) => {
    const { error } = await supabase
      .from("offers")
      .update(patch)
      .eq("id", offer.id);
    if (error) toast.error("Couldn't save");
    else {
      toast.success("Saved");
      onDone();
    }
  };
  const save = () =>
    update(
      offer.kind === "combo"
        ? {
            title: title.trim(),
            price: Math.max(0, Math.round(Number(price) || 0)),
            items: body
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean),
          }
        : {
            title: title.trim(),
            text: body.trim(),
          },
    );
  const remove = async () => {
    if (!confirm(`Delete ${offer.title}?`)) return;
    const { error } = await supabase.from("offers").delete().eq("id", offer.id);
    if (error) toast.error("Couldn't delete");
    else onDone();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "grid gap-3 rounded-2xl bg-card p-4 shadow-card md:grid-cols-[1fr_8rem_2fr_auto]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "text-xs font-semibold",
        children: [
          offer.kind === "combo" ? "Combo" : "Offer",
          " title",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
            value: title,
            onChange: (e) => setTitle(e.target.value),
          }),
        ],
      }),
      offer.kind === "combo"
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className: "text-xs font-semibold",
            children: [
              "Price ₹",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                type: "number",
                min: 0,
                value: price,
                onChange: (e) => setPrice(e.target.value),
              }),
            ],
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "text-xs font-semibold",
        children: [
          offer.kind === "combo" ? "Items (one per line)" : "Description",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
            rows: 3,
            value: body,
            onChange: (e) => setBody(e.target.value),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className: "flex items-center gap-2 text-xs font-semibold",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
                checked: offer.active,
                onCheckedChange: (v) => update({ active: v }),
              }),
              "Show",
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            onClick: save,
            children: "Save",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
            variant: "ghost",
            size: "sm",
            onClick: remove,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}),
              " Delete",
            ],
          }),
        ],
      }),
    ],
  });
}
function PartyTab() {
  const qc = useQueryClient();
  const { data } = useQuery(partyQuery);
  const [f, setF] = (0, import_react.useState)({
    pkg: "",
    hr: "",
    three: "",
    items: "",
  });
  (0, import_react.useEffect)(() => {
    if (data)
      setF({
        pkg: String(data.packagePrice),
        hr: String(data.hourlyRate),
        three: String(data.threeHourRate),
        items: data.packageItems.join("\n"),
      });
  }, [data]);
  const n = (s) => Math.max(0, Math.round(Number(s) || 0));
  const save = async () => {
    const { error } = await supabase
      .from("site_settings")
      .update({
        party_package_price: n(f.pkg),
        party_hourly_rate: n(f.hr),
        party_three_hour_rate: n(f.three),
        party_package_items: f.items
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
      })
      .eq("id", 1);
    if (error) return toast.error("Couldn't save");
    toast.success("Party hall pricing saved");
    qc.invalidateQueries({ queryKey: ["catalog", "party"] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "mt-4 max-w-xl space-y-4 rounded-3xl bg-card p-6 shadow-card",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-3 gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className: "text-xs font-semibold",
            children: [
              "Food package ₹",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                type: "number",
                value: f.pkg,
                onChange: (e) =>
                  setF({
                    ...f,
                    pkg: e.target.value,
                  }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className: "text-xs font-semibold",
            children: [
              "Hall per hour ₹",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                type: "number",
                value: f.hr,
                onChange: (e) =>
                  setF({
                    ...f,
                    hr: e.target.value,
                  }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
            className: "text-xs font-semibold",
            children: [
              "3 hours ₹",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                type: "number",
                value: f.three,
                onChange: (e) =>
                  setF({
                    ...f,
                    three: e.target.value,
                  }),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: "block text-xs font-semibold",
        children: [
          "Package includes (one per line)",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
            rows: 7,
            value: f.items,
            onChange: (e) =>
              setF({
                ...f,
                items: e.target.value,
              }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        variant: "hero",
        onClick: save,
        children: "Save",
      }),
    ],
  });
}
//#endregion
export { AdminPage as component };
