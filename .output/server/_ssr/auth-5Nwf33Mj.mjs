import { n as __toESM } from "../_runtime.mjs";
import {
  c as require_react,
  s as require_jsx_runtime,
} from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn, t as Button } from "./button-vq0BKko2.mjs";
import {
  U as isRedirect,
  b as useNavigate,
  x as useRouter,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-D-3bcQUa.mjs";
import { m as Mail, u as Minus } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-Jk7YAuX-.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CUDpInK4.mjs";
import {
  a as TSS_SERVER_FUNCTION,
  l as createServerFn,
} from "./createServerFn-DDDJMFWM.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as Nt, t as $t } from "../_libs/input-otp.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-5Nwf33Mj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
  const router = useRouter();
  return import_react.useCallback(
    async (...args) => {
      try {
        const res = await serverFn(...args);
        if (isRedirect(res)) throw res;
        return res;
      } catch (err) {
        if (isRedirect(err)) {
          err.options._fromLocation = router.stores.location.get();
          return router.navigate(router.resolveRedirect(err).options);
        }
        throw err;
      }
    },
    [router, serverFn],
  );
}
var InputOTP = import_react.forwardRef(
  ({ className, containerClassName, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)($t, {
      ref,
      containerClassName: cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName,
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props,
    }),
);
InputOTP.displayName = "InputOTP";
var InputOTPGroup = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: cn("flex items-center", className),
    ...props,
  }),
);
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = import_react.forwardRef(
  ({ index, className, ...props }, ref) => {
    const { char, hasFakeCaret, isActive } =
      import_react.useContext(Nt).slots[index] ?? {};
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      ref,
      className: cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className,
      ),
      ...props,
      children: [
        char,
        hasFakeCaret &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "pointer-events-none absolute inset-0 flex items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "h-4 w-px animate-caret-blink bg-foreground duration-1000",
            }),
          }),
      ],
    });
  },
);
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = import_react.forwardRef(({ ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    role: "separator",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {}),
  }),
);
InputOTPSeparator.displayName = "InputOTPSeparator";
var lovableAuth = createLovableAuth();
var lovable = {
  auth: {
    signInWithOAuth: async (provider, opts) => {
      const result = await lovableAuth.signInWithOAuth(provider, {
        ...opts,
        extraParams: { ...opts?.extraParams },
      });
      if (result.redirected) return result;
      if (result.error) return result;
      try {
        await supabase.auth.setSession(result.tokens);
      } catch (e) {
        return { error: e instanceof Error ? e : new Error(String(e)) };
      }
      return result;
    },
  },
};
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId, { origin: "server" }))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true,
  });
};
var emailSchema = objectType({
  email: stringType().trim().toLowerCase().email().max(255),
});
var sendLoginCode = createServerFn({ method: "POST" })
  .inputValidator((d) => emailSchema.parse(d))
  .handler(
    createSsrRpc(
      "fc9cd6781336c6c219315543938fa409c79c3d30c6a0e332dff1bd6e0e3ad934",
    ),
  );
var verifyLoginCode = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    emailSchema.extend({ code: stringType().regex(/^\d{6}$/) }).parse(d),
  )
  .handler(
    createSsrRpc(
      "b13c8984066633bc5adb7290f4f67a31283729ac6f48c44b1f6455da5eb65c53",
    ),
  );
function AuthPage() {
  const navigate = useNavigate();
  const send = useServerFn(sendLoginCode);
  const verify = useServerFn(verifyLoginCode);
  const [email, setEmail] = (0, import_react.useState)("");
  const [step, setStep] = (0, import_react.useState)("email");
  const [code, setCode] = (0, import_react.useState)("");
  const [busy, setBusy] = (0, import_react.useState)(false);
  async function google() {
    const r = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (r.error) {
      toast.error("Google sign-in failed. Please try again.");
      return;
    }
    if (r.redirected) return;
    navigate({ to: "/account" });
  }
  async function sendCode(e) {
    e.preventDefault();
    setBusy(true);
    const r = await send({ data: { email } }).catch(() => ({
      ok: false,
      error: "Something went wrong.",
    }));
    setBusy(false);
    if (!r.ok) {
      toast.error(r.error);
      return;
    }
    toast.success("Code sent — check your inbox.");
    setStep("code");
  }
  async function verifyCode() {
    setBusy(true);
    const r = await verify({
      data: {
        email,
        code,
      },
    }).catch(() => ({
      ok: false,
      error: "Something went wrong.",
    }));
    if (!r.ok) {
      setBusy(false);
      toast.error(r.error);
      return;
    }
    const { error } = await supabase.auth.verifyOtp({
      token_hash: r.tokenHash,
      type: "magiclink",
    });
    setBusy(false);
    if (error) {
      toast.error("Sign-in failed. Request a new code.");
      return;
    }
    toast.success("Welcome to Subday Pizza!");
    navigate({ to: "/account" });
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
          children: "Welcome back",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-1 text-muted-foreground",
          children: "Sign in to save your details and faster ordering.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
          variant: "soft",
          size: "xl",
          className: "mt-8 w-full",
          onClick: google,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
              viewBox: "0 0 24 24",
              className: "size-5",
              "aria-hidden": true,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                fill: "currentColor",
                d: "M21.35 11.1H12v2.98h5.35c-.23 1.4-1.67 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.34 0 8.88-3.75 8.88-9.04 0-.6-.07-1.06-.15-1.51z",
              }),
            }),
            "Continue with Google",
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "my-6 flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "h-px flex-1 bg-border",
            }),
            " or ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "h-px flex-1 bg-border",
            }),
          ],
        }),
        step === "email"
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
              onSubmit: sendCode,
              className: "space-y-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                  type: "email",
                  required: true,
                  maxLength: 255,
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "you@example.com",
                  className: "h-12 rounded-full px-5",
                  "aria-label": "Email",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                  variant: "hero",
                  size: "xl",
                  className: "w-full",
                  disabled: busy,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}),
                    " ",
                    busy ? "Sending…" : "Email me a code",
                  ],
                }),
              ],
            })
          : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "text-sm text-muted-foreground",
                  children: [
                    "Enter the 6-digit code sent to ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
                      className: "text-foreground",
                      children: email,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
                  maxLength: 6,
                  value: code,
                  onChange: setCode,
                  onComplete: verifyCode,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    InputOTPGroup,
                    {
                      className: "w-full justify-between",
                      children: Array.from({ length: 6 }).map((_, i) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          InputOTPSlot,
                          {
                            index: i,
                            className: "size-12 text-lg",
                          },
                          i,
                        ),
                      ),
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  variant: "hero",
                  size: "xl",
                  className: "w-full",
                  disabled: busy || code.length !== 6,
                  onClick: verifyCode,
                  children: busy ? "Checking…" : "Sign in",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  className:
                    "text-sm font-semibold text-muted-foreground underline",
                  onClick: () => {
                    setStep("email");
                    setCode("");
                  },
                  children: "Use a different email",
                }),
              ],
            }),
      ],
    }),
  });
}
//#endregion
export { AuthPage as component };
