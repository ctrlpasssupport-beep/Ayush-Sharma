import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { t as n } from "./react-BiuhUkGL.js";
import { t as r } from "./mail-BNTbLGiX.js";
import {
  C as i,
  G as a,
  J as o,
  K as s,
  V as c,
  W as l,
  X as u,
  Y as d,
  g as f,
  h as p,
  q as m,
  t as h,
} from "./index-CElauyXZ.js";
import { t as g } from "./input-CSjAzpNs.js";
function _(e) {
  if (Array.isArray(e)) return e.flatMap((e) => _(e));
  if (typeof e != `string`) return [];
  let t = [],
    n = 0,
    r,
    i,
    a,
    o,
    s,
    c = () => {
      for (; n < e.length && /\s/.test(e.charAt(n));) n += 1;
      return n < e.length;
    },
    l = () => ((i = e.charAt(n)), i !== `=` && i !== `;` && i !== `,`);
  for (; n < e.length;) {
    for (r = n, s = !1; c();)
      if (((i = e.charAt(n)), i === `,`)) {
        for (a = n, n += 1, c(), o = n; n < e.length && l();) n += 1;
        n < e.length && e.charAt(n) === `=`
          ? ((s = !0), (n = o), t.push(e.slice(r, a)), (r = n))
          : (n = a + 1);
      } else n += 1;
    (!s || n >= e.length) && t.push(e.slice(r));
  }
  return t;
}
function v(e) {
  return e instanceof Headers
    ? e
    : Array.isArray(e) || typeof e == `object`
      ? new Headers(e)
      : null;
}
function y(...e) {
  return e.reduce((e, t) => {
    let n = v(t);
    if (!n) return e;
    for (let [t, r] of n.entries())
      t === `set-cookie`
        ? _(r).forEach((t) => e.append(`set-cookie`, t))
        : e.set(t, r);
    return e;
  }, new Headers());
}
var b = e(n(), 1);
function x(e) {
  let t = a();
  return b.useCallback(
    async (...n) => {
      try {
        let t = await e(...n);
        if (m(t)) throw t;
        return t;
      } catch (e) {
        if (m(e))
          return (
            (e.options._fromLocation = t.stores.location.get()),
            t.navigate(t.resolveRedirect(e).options)
          );
        throw e;
      }
    },
    [t, e],
  );
}
function S(e) {
  return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function C(e, t) {
  let n = Object.create(null);
  if (e) for (let t of Object.keys(e)) S(t) && (n[t] = e[t]);
  if (t && typeof t == `object`)
    for (let e of Object.keys(t)) S(e) && (n[e] = t[e]);
  return n;
}
function w(e) {
  if (!e) return Object.create(null);
  let t = Object.create(null);
  for (let n of Object.keys(e)) S(n) && (t[n] = e[n]);
  return t;
}
var T = () => {
    throw Error(
      `createServerOnlyFn() functions can only be called on the server!`,
    );
  },
  E = (e, t) => {
    let n = t || e || {};
    n.method === void 0 && (n.method = `GET`);
    let r = (e) => E(void 0, { ...n, validator: e, inputValidator: e });
    return Object.assign((e) => E(void 0, { ...n, ...e }), {
      options: n,
      middleware: (e) => {
        let t = [...(n.middleware || [])];
        e.forEach((e) => {
          u in e
            ? e.options.middleware && t.push(...e.options.middleware)
            : t.push(e);
        });
        let r = E(void 0, { ...n, middleware: t });
        return ((r[u] = !0), r);
      },
      validator: r,
      inputValidator: r,
      handler: (...e) => {
        let [t, r] = e,
          i = { ...n, extractedFn: t, serverFn: r },
          a = [...(i.middleware || []), A(i)];
        return (
          (t.method = n.method),
          Object.assign(
            async (e) => {
              let n = await D(a, `client`, {
                  ...t,
                  ...i,
                  data: e?.data,
                  headers: e?.headers,
                  signal: e?.signal,
                  fetch: e?.fetch,
                  context: w(),
                }),
                r = o(n.error);
              if (r) throw r;
              if (n.error) throw n.error;
              return n.result;
            },
            {
              ...t,
              method: n.method,
              __executeServer: async (e) => {
                let r = T(),
                  i = r.contextAfterGlobalMiddlewares;
                return await D(a, `server`, {
                  ...t,
                  data: e.data,
                  method: e.method ?? n.method,
                  serverFnMeta: t.serverFnMeta,
                  context: C(e.context, i),
                  request: r.request,
                }).then((e) => ({
                  result: e.result,
                  error: e.error,
                  context: e.sendContext,
                }));
              },
            },
          )
        );
      },
    });
  };
async function D(e, t, n) {
  let r = O([...(d()?.functionMiddleware || []), ...e]);
  if (t === `server`) {
    let e = T({ throwIfNotFound: !1 });
    e?.executedRequestMiddlewares &&
      (r = r.filter((t) => !e.executedRequestMiddlewares.has(t)));
  }
  let i = async (e) => {
    let n = r.shift();
    if (!n) return e;
    try {
      let r = `validator` in n.options ? n.options.validator : void 0;
      (!r && `inputValidator` in n.options && (r = n.options.inputValidator),
        r && t === `server` && (e.data = await k(r, e.data)));
      let a;
      if (
        (t === `client`
          ? `client` in n.options && (a = n.options.client)
          : `server` in n.options && (a = n.options.server),
        a)
      ) {
        let t = async (t = {}) => {
            let n = await i({
              ...e,
              ...t,
              context: C(e.context, t.context),
              sendContext: C(e.sendContext, t.sendContext),
              headers: y(e.headers, t.headers),
              _callSiteFetch: e._callSiteFetch,
              fetch: e._callSiteFetch ?? t.fetch ?? e.fetch,
              result:
                t.result === void 0
                  ? t instanceof Response
                    ? t
                    : e.result
                  : t.result,
              error: t.error ?? e.error,
            });
            if (n.error) throw n.error;
            return n;
          },
          n = await a({ ...e, next: t });
        if (m(n)) return { ...e, error: n };
        if (n instanceof Response) return { ...e, result: n };
        if (!n)
          throw Error(
            `User middleware returned undefined. You must call next() or return a result in your middlewares.`,
          );
        return n;
      }
      return i(e);
    } catch (t) {
      return { ...e, error: t };
    }
  };
  return i({
    ...n,
    headers: n.headers || {},
    sendContext: n.sendContext || {},
    context: n.context || w(),
    _callSiteFetch: n.fetch,
  });
}
function O(e, t = 100) {
  let n = new Set(),
    r = [],
    i = (e, a) => {
      if (a > t)
        throw Error(
          `Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`,
        );
      e.forEach((e) => {
        (e.options.middleware && i(e.options.middleware, a + 1),
          n.has(e) || (n.add(e), r.push(e)));
      });
    };
  return (i(e, 0), r);
}
async function k(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = await e[`~standard`].validate(t);
    if (n.issues) throw Error(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  if (`parse` in e) return e.parse(t);
  if (typeof e == `function`) return e(t);
  throw Error(`Invalid validator type!`);
}
function A(e) {
  return {
    "~types": void 0,
    options: {
      inputValidator: e.validator ?? e.inputValidator,
      client: async ({ next: t, sendContext: n, fetch: r, ...i }) => {
        let a = { ...i, context: n, fetch: r };
        return t(await e.extractedFn?.(a));
      },
      server: async ({ next: t, ...n }) => {
        let r = await e.serverFn?.(n);
        return t({ ...n, result: r });
      },
    },
  };
}
var j = Object.defineProperty,
  M = Object.defineProperties,
  N = Object.getOwnPropertyDescriptors,
  P = Object.getOwnPropertySymbols,
  F = Object.prototype.hasOwnProperty,
  I = Object.prototype.propertyIsEnumerable,
  L = (e, t, n) =>
    t in e
      ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ee = (e, t) => {
    for (var n in (t ||= {})) F.call(t, n) && L(e, n, t[n]);
    if (P) for (var n of P(t)) I.call(t, n) && L(e, n, t[n]);
    return e;
  },
  te = (e, t) => M(e, N(t)),
  R = (e, t) => {
    var n = {};
    for (var r in e) F.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && P)
      for (var r of P(e)) t.indexOf(r) < 0 && I.call(e, r) && (n[r] = e[r]);
    return n;
  };
function ne(e) {
  return [setTimeout(e, 0), setTimeout(e, 10), setTimeout(e, 50)];
}
function re(e) {
  let t = b.useRef();
  return (
    b.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var z = 18,
  B = 40,
  V = `${B}px`;
function H(e) {
  let t = e.getBoundingClientRect().right,
    n = e;
  for (; n;) {
    if (getComputedStyle(n).overflowX !== `visible`)
      return n.getBoundingClientRect().left + n.clientLeft + n.clientWidth - t;
    n = n.parentElement;
  }
  return document.documentElement.clientWidth - t;
}
var U = [
  `[data-lastpass-icon-root]`,
  `com-1password-button`,
  `[data-dashlanecreated]`,
  `[style$="2147483647 !important;"]`,
].join(`,`);
function ie({
  containerRef: e,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: r,
}) {
  let [i, a] = b.useState(!1),
    [o, s] = b.useState(!1),
    [c, l] = b.useState(!1),
    u = b.useMemo(
      () =>
        n !== `none` &&
        (n === `increase-width` || n === `experimental-no-flickering`) &&
        i &&
        o,
      [i, o, n],
    ),
    d = b.useCallback(() => {
      let r = e.current,
        i = t.current;
      if (!r || !i || c || n === `none`) return;
      let o = r,
        u = o.getBoundingClientRect().left + o.offsetWidth,
        d = o.getBoundingClientRect().top + o.offsetHeight / 2,
        f = u - z,
        p = d;
      (document.querySelectorAll(U).length === 0 &&
        document.elementFromPoint(f, p) === r) ||
        (s(H(r) >= B), a(!0), l(!0));
    }, [e, t, c, n]);
  return (
    b.useEffect(() => {
      let t = e.current;
      if (!t || n === `none`) return;
      function r() {
        s(H(t) >= B);
      }
      r();
      let i = setInterval(r, 1e3);
      return () => {
        clearInterval(i);
      };
    }, [e, n]),
    b.useEffect(() => {
      let e = r || document.activeElement === t.current;
      if (n === `none` || !e) return;
      let i = setTimeout(d, 0),
        a = setTimeout(d, 2e3),
        o = setTimeout(d, 5e3),
        s = setTimeout(() => {
          l(!0);
        }, 6e3);
      return () => {
        (clearTimeout(i), clearTimeout(a), clearTimeout(o), clearTimeout(s));
      };
    }, [t, r, n, d]),
    { hasPWMBadge: i, willPushPWMBadge: u, PWM_BADGE_SPACE_WIDTH: V }
  );
}
var W = b.createContext({}),
  G = b.forwardRef((e, t) => {
    var n = e,
      {
        value: r,
        onChange: i,
        maxLength: a,
        textAlign: o = `left`,
        pattern: s,
        placeholder: c,
        inputMode: l = `numeric`,
        onComplete: u,
        pushPasswordManagerStrategy: d = `increase-width`,
        pasteTransformer: f,
        containerClassName: p,
        noScriptCSSFallback: m = q,
        nonce: h,
        render: g,
        children: _,
      } = n,
      v = R(n, [
        `value`,
        `onChange`,
        `maxLength`,
        `textAlign`,
        `pattern`,
        `placeholder`,
        `inputMode`,
        `onComplete`,
        `pushPasswordManagerStrategy`,
        `pasteTransformer`,
        `containerClassName`,
        `noScriptCSSFallback`,
        `nonce`,
        `render`,
        `children`,
      ]),
      y;
    let [x, S] = b.useState(
        typeof v.defaultValue == `string` ? v.defaultValue : ``,
      ),
      C = r ?? x,
      w = re(C),
      T = b.useCallback(
        (e) => {
          (i?.(e), S(e));
        },
        [i],
      ),
      E = b.useMemo(
        () => (s ? (typeof s == `string` ? new RegExp(s) : s) : null),
        [s],
      ),
      D = b.useRef(null),
      O = b.useRef(null),
      k = b.useRef({
        value: C,
        onChange: T,
        isIOS:
          typeof window < `u` &&
          (y = window == null ? void 0 : window.CSS)?.supports?.call(
            y,
            `-webkit-touch-callout`,
            `none`,
          ),
      }),
      A = b.useRef({
        prev: [
          D.current?.selectionStart,
          D.current?.selectionEnd,
          D.current?.selectionDirection,
        ],
      });
    (b.useImperativeHandle(t, () => D.current, []),
      b.useEffect(() => {
        let e = D.current,
          t = O.current;
        if (!e || !t) return;
        (k.current.value !== e.value && k.current.onChange(e.value),
          (A.current.prev = [
            e.selectionStart,
            e.selectionEnd,
            e.selectionDirection,
          ]));
        function n() {
          if (document.activeElement !== e) {
            (I(null), z(null));
            return;
          }
          let t = e.selectionStart,
            n = e.selectionEnd,
            r = e.selectionDirection,
            i = e.maxLength,
            a = e.value,
            o = A.current.prev,
            s = -1,
            c = -1,
            l;
          if (a.length !== 0 && t !== null && n !== null) {
            let r = t === n,
              u = t === a.length && a.length < i;
            if (r && !u) {
              let e = t;
              if (e === 0) ((s = 0), (c = 1), (l = `forward`));
              else if (e === i) ((s = e - 1), (c = e), (l = `backward`));
              else if (i > 1 && a.length > 1) {
                let t = 0;
                if (o[0] !== null && o[1] !== null) {
                  l = e < o[1] ? `backward` : `forward`;
                  let n = o[0] === o[1] && o[0] < i;
                  l === `backward` && !n && (t = -1);
                }
                ((s = t + e), (c = t + e + 1));
              }
            }
            s !== -1 && c !== -1 && s !== c && e.setSelectionRange(s, c, l);
          }
          let u = s === -1 ? t : s,
            d = c === -1 ? n : c,
            f = l ?? r;
          (I(u), z(d), (A.current.prev = [u, d, f]));
        }
        if (
          (document.addEventListener(`selectionchange`, n, { capture: !0 }),
          n(),
          document.activeElement === e && P(!0),
          !document.getElementById(`input-otp-style`))
        ) {
          let e = document.createElement(`style`);
          if (
            ((e.id = `input-otp-style`),
            h && e.setAttribute(`nonce`, h),
            document.head.appendChild(e),
            e.sheet)
          ) {
            let t = `background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;`;
            (K(
              e.sheet,
              `[data-input-otp]::selection { background: transparent !important; color: transparent !important; }`,
            ),
              K(e.sheet, `[data-input-otp]:autofill { ${t} }`),
              K(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`),
              K(
                e.sheet,
                `@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }`,
              ),
              K(
                e.sheet,
                `[data-input-otp] + * { pointer-events: all !important; }`,
              ));
          }
        }
        let r = () => {
          t && t.style.setProperty(`--root-height`, `${e.clientHeight}px`);
        };
        r();
        let i = typeof ResizeObserver > `u` ? null : new ResizeObserver(r);
        return (
          i?.observe(e),
          () => {
            (document.removeEventListener(`selectionchange`, n, {
              capture: !0,
            }),
              i?.disconnect());
          }
        );
      }, []));
    let [j, M] = b.useState(!1),
      [N, P] = b.useState(!1),
      [F, I] = b.useState(null),
      [L, z] = b.useState(null);
    (b.useEffect(() => {
      let e = ne(() => {
        var e;
        (e = D.current) == null || e.dispatchEvent(new Event(`input`));
        let t = D.current?.selectionStart,
          n = D.current?.selectionEnd,
          r = D.current?.selectionDirection;
        t !== null && n !== null && (I(t), z(n), (A.current.prev = [t, n, r]));
      });
      return () => {
        e.forEach((e) => clearTimeout(e));
      };
    }, [C, N]),
      b.useEffect(() => {
        w !== void 0 && C !== w && w.length < a && C.length === a && u?.(C);
      }, [a, u, w, C]));
    let B = ie({
        containerRef: O,
        inputRef: D,
        pushPasswordManagerStrategy: d,
        isFocused: N,
      }),
      V = b.useCallback(
        (e) => {
          let t = e.currentTarget.value.slice(0, a);
          if (t.length > 0 && E && !E.test(t)) {
            e.preventDefault();
            return;
          }
          (typeof w == `string` &&
            t.length < w.length &&
            document.dispatchEvent(new Event(`selectionchange`)),
            T(t));
        },
        [a, T, w, E],
      ),
      H = b.useCallback(() => {
        var e;
        if (D.current) {
          let t = Math.min(D.current.value.length, a - 1),
            n = D.current.value.length;
          ((e = D.current) == null || e.setSelectionRange(t, n), I(t), z(n));
        }
        P(!0);
      }, [a]),
      U = b.useCallback(
        (e) => {
          let t = D.current;
          if (!f && (!k.current.isIOS || !e.clipboardData || !t)) return;
          let n = e.clipboardData.getData(`text/plain`),
            r = f ? f(n) : n;
          e.preventDefault();
          let i = D.current?.selectionStart,
            o = D.current?.selectionEnd,
            s = (
              i === o
                ? C.slice(0, i) + r + C.slice(i)
                : C.slice(0, i) + r + C.slice(o)
            ).slice(0, a);
          if (s.length > 0 && E && !E.test(s)) return;
          ((t.value = s), T(s));
          let c = Math.min(s.length, a - 1),
            l = s.length;
          (t.setSelectionRange(c, l), I(c), z(l));
        },
        [a, T, f, E, C],
      ),
      G = b.useMemo(
        () => ({
          position: `relative`,
          cursor: v.disabled ? `default` : `text`,
          userSelect: `none`,
          WebkitUserSelect: `none`,
          pointerEvents: `none`,
        }),
        [v.disabled],
      ),
      J = b.useMemo(
        () => ({
          position: `absolute`,
          inset: 0,
          width: B.willPushPWMBadge
            ? `calc(100% + ${B.PWM_BADGE_SPACE_WIDTH})`
            : `100%`,
          clipPath: B.willPushPWMBadge
            ? `inset(0 ${B.PWM_BADGE_SPACE_WIDTH} 0 0)`
            : void 0,
          height: `100%`,
          display: `flex`,
          textAlign: o,
          opacity: `1`,
          color: `transparent`,
          pointerEvents: `all`,
          background: `transparent`,
          caretColor: `transparent`,
          border: `0 solid transparent`,
          outline: `0 solid transparent`,
          boxShadow: `none`,
          lineHeight: `1`,
          letterSpacing: `-.5em`,
          fontSize: `var(--root-height, 16px)`,
          fontFamily: `monospace`,
          fontVariantNumeric: `tabular-nums`,
        }),
        [B.PWM_BADGE_SPACE_WIDTH, B.willPushPWMBadge, o],
      ),
      Y = b.useMemo(
        () =>
          b.createElement(
            `input`,
            te(ee({ autoComplete: v.autoComplete || `one-time-code` }, v), {
              "data-input-otp": !0,
              "data-input-otp-placeholder-shown": C.length === 0 || void 0,
              "data-input-otp-mss": F,
              "data-input-otp-mse": L,
              inputMode: l,
              pattern: E?.source,
              "aria-placeholder": c,
              style: J,
              maxLength: a,
              value: C,
              ref: D,
              spellCheck: v.spellCheck ?? !1,
              onPaste: (e) => {
                var t;
                (U(e), (t = v.onPaste) == null || t.call(v, e));
              },
              onChange: V,
              onMouseOver: (e) => {
                var t;
                (M(!0), (t = v.onMouseOver) == null || t.call(v, e));
              },
              onMouseLeave: (e) => {
                var t;
                (M(!1), (t = v.onMouseLeave) == null || t.call(v, e));
              },
              onFocus: (e) => {
                var t;
                (H(), (t = v.onFocus) == null || t.call(v, e));
              },
              onBlur: (e) => {
                var t;
                (P(!1), (t = v.onBlur) == null || t.call(v, e));
              },
            }),
          ),
        [V, H, U, l, J, a, L, F, c, v, E?.source, C],
      ),
      X = b.useMemo(
        () => ({
          slots: Array.from({ length: a }).map((e, t) => {
            let n =
                N &&
                F !== null &&
                L !== null &&
                ((F === L && t === F) || (t >= F && t < L)),
              r = C[t] === void 0 ? null : C[t];
            return {
              char: r,
              placeholderChar: C[0] === void 0 ? (c?.[t] ?? null) : null,
              isActive: n,
              hasFakeCaret: n && r === null,
            };
          }),
          isFocused: N,
          isHovering: !v.disabled && j,
        }),
        [N, j, a, L, F, c, v.disabled, C],
      ),
      Z = b.useMemo(
        () => (g ? g(X) : b.createElement(W.Provider, { value: X }, _)),
        [_, X, g],
      );
    return b.createElement(
      b.Fragment,
      null,
      m !== null &&
        b.createElement(`noscript`, null, b.createElement(`style`, null, m)),
      b.createElement(
        `div`,
        {
          ref: O,
          "data-input-otp-container": !0,
          translate: `no`,
          style: G,
          className: p,
        },
        Z,
        b.createElement(
          `div`,
          { style: { position: `absolute`, inset: 0, pointerEvents: `none` } },
          Y,
        ),
      ),
    );
  });
G.displayName = `Input`;
function K(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.warn(`input-otp could not insert CSS rule:`, t);
  }
}
var q = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`,
  J = t(),
  Y = b.forwardRef(({ className: e, containerClassName: t, ...n }, r) =>
    (0, J.jsx)(G, {
      ref: r,
      containerClassName: f(
        `flex items-center gap-2 has-[:disabled]:opacity-50`,
        t,
      ),
      className: f(`disabled:cursor-not-allowed`, e),
      ...n,
    }),
  );
Y.displayName = `InputOTP`;
var X = b.forwardRef(({ className: e, ...t }, n) =>
  (0, J.jsx)(`div`, { ref: n, className: f(`flex items-center`, e), ...t }),
);
X.displayName = `InputOTPGroup`;
var Z = b.forwardRef(({ index: e, className: t, ...n }, r) => {
  let {
    char: i,
    hasFakeCaret: a,
    isActive: o,
  } = b.useContext(W).slots[e] ?? {};
  return (0, J.jsxs)(`div`, {
    ref: r,
    className: f(
      `relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md`,
      o && `z-10 ring-1 ring-ring`,
      t,
    ),
    ...n,
    children: [
      i,
      a &&
        (0, J.jsx)(`div`, {
          className: `pointer-events-none absolute inset-0 flex items-center justify-center`,
          children: (0, J.jsx)(`div`, {
            className: `h-4 w-px animate-caret-blink bg-foreground duration-1000`,
          }),
        }),
    ],
  });
});
Z.displayName = `InputOTPSlot`;
var ae = b.forwardRef(({ ...e }, t) =>
  (0, J.jsx)(`div`, {
    ref: t,
    role: `separator`,
    ...e,
    children: (0, J.jsx)(i, {}),
  }),
);
ae.displayName = `InputOTPSeparator`;
var oe = `authorization_response`,
  se = `/~oauth/initiate`,
  ce = [`https://oauth.lovable.app`, `https://lovable.dev`],
  le = `lovable://oauth-callback`,
  ue = `http://127.0.0.1/iframe-oauth/callback`,
  de = 500,
  fe = 12e4,
  pe = /LovableAppScheme\/([a-z0-9.+-]+)/i;
function me(e) {
  let t = pe.exec(e)?.[1];
  return t ? `${t}://oauth-callback` : le;
}
function he(e) {
  let t,
    n = new Promise((e) => {
      t = e;
    }),
    r = (n) => {
      if (!e.some((e) => n.origin === e)) return;
      let r = n.data;
      !r || typeof r != `object` || (r.type === oe && t(r.response));
    };
  return (
    window.addEventListener(`message`, r),
    {
      cleanup: () => {
        window.removeEventListener(`message`, r);
      },
      messagePromise: n,
    }
  );
}
function ge(e) {
  let t = window.screenX !== 0 || window.screenY !== 0 || !e,
    n = t ? window.outerWidth * 0.5 : window.screen.width * 0.5,
    r = t ? window.outerHeight * 0.5 : window.screen.height * 0.5;
  return {
    width: n,
    height: r,
    left: t
      ? window.screenX + (window.outerWidth - n) / 2
      : (window.screen.width - n) / 2,
    top: t
      ? window.screenY + (window.outerHeight - r) / 2
      : (window.screen.height - r) / 2,
  };
}
function Q(e, t) {
  return e.state === t
    ? e.error
      ? e.error === `legacy_flow`
        ? {
            error: Error(
              `This flow is not supported in Preview mode. Please open the app in a new tab to sign in.`,
            ),
          }
        : { error: Error(e.error_description ?? `Sign in failed`) }
      : !e.access_token || !e.refresh_token
        ? { error: Error(`No tokens received`) }
        : {
            tokens: {
              access_token: e.access_token,
              refresh_token: e.refresh_token,
            },
            error: null,
          }
    : { error: Error(`State is invalid`) };
}
function $() {
  let e = navigator.userAgent;
  return !!(
    /iPhone|iPad|iPod|Android/i.test(e) ||
    (/Macintosh/i.test(e) && navigator.maxTouchPoints > 1)
  );
}
function _e() {
  return typeof crypto < `u` && crypto.getRandomValues
    ? [...crypto.getRandomValues(new Uint8Array(16))]
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``)
    : Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function ve(e = {}) {
  let t = e.oauthBrokerUrl ?? se,
    n = e.supportedOAuthOrigins ?? ce;
  async function r(e, r = {}) {
    let i = !1;
    try {
      i = window.self !== window.top;
    } catch {
      i = !0;
    }
    let a = navigator.userAgent,
      o = /LovableApp\//.test(a),
      s = !o && /lovable/i.test(a),
      c = _e(),
      l = r.redirect_uri ?? window.location.origin;
    o && i ? (l = me(a)) : s && i && (l = ue);
    let u = new URLSearchParams({
      ...r.extraParams,
      provider: e,
      redirect_uri: l,
      state: c,
    });
    if (!i)
      return (
        (window.location.href = `${t}?${u.toString()}`),
        { error: null, redirected: !0 }
      );
    !o && !s && u.set(`response_mode`, `web_message`);
    let d = `${t}?${u.toString()}`,
      { messagePromise: f, cleanup: p } = he(
        s ? [...n, window.location.origin] : n,
      ),
      m;
    if ($()) m = window.open(d, `_blank`);
    else {
      let { width: e, height: t, left: n, top: r } = ge(i);
      m = window.open(d, `oauth`, `width=${e},height=${t},left=${n},top=${r}`);
    }
    if (!m && (o || s)) {
      let e,
        t = new Promise((t, n) => {
          e = setTimeout(() => {
            n(Error(`OAuth timed out waiting for response`));
          }, fe);
        });
      try {
        return Q(await Promise.race([f, t]), c);
      } catch (e) {
        return { error: e instanceof Error ? e : Error(String(e)) };
      } finally {
        (e && clearTimeout(e), p());
      }
    }
    if (!m) return (p(), { error: Error(`Popup was blocked`) });
    let h,
      g = new Promise((e, t) => {
        h = setInterval(() => {
          m.closed && (clearInterval(h), t(Error(`Sign in was cancelled`)));
        }, de);
      });
    try {
      return Q(await Promise.race([f, g]), c);
    } catch (e) {
      return { error: e instanceof Error ? e : Error(String(e)) };
    } finally {
      (clearInterval(h), p(), m?.close());
    }
  }
  return { signInWithOAuth: r };
}
function ye(e = {}) {
  return ve(e);
}
var be = ye(),
  xe = {
    auth: {
      signInWithOAuth: async (e, t) => {
        let n = await be.signInWithOAuth(e, {
          ...t,
          extraParams: { ...t?.extraParams },
        });
        if (n.redirected || n.error) return n;
        try {
          await c.auth.setSession(n.tokens);
        } catch (e) {
          return { error: e instanceof Error ? e : Error(String(e)) };
        }
        return n;
      },
    },
  },
  Se = E({ method: `POST` }).handler(
    s(`fc9cd6781336c6c219315543938fa409c79c3d30c6a0e332dff1bd6e0e3ad934`),
  ),
  Ce = E({ method: `POST` }).handler(
    s(`b13c8984066633bc5adb7290f4f67a31283729ac6f48c44b1f6455da5eb65c53`),
  );
function we() {
  let e = l(),
    t = x(Se),
    n = x(Ce),
    [i, a] = (0, b.useState)(``),
    [o, s] = (0, b.useState)(`email`),
    [u, d] = (0, b.useState)(``),
    [f, m] = (0, b.useState)(!1);
  async function _() {
    let t = await xe.auth.signInWithOAuth(`google`, {
      redirect_uri: window.location.origin,
    });
    if (t.error) {
      h.error(`Google sign-in failed. Please try again.`);
      return;
    }
    t.redirected || e({ to: `/account` });
  }
  async function v(e) {
    (e.preventDefault(), m(!0));
    let n = await t({ data: { email: i } }).catch(() => ({
      ok: !1,
      error: `Something went wrong.`,
    }));
    if ((m(!1), !n.ok)) {
      h.error(n.error);
      return;
    }
    (h.success(`Code sent — check your inbox.`), s(`code`));
  }
  async function y() {
    m(!0);
    let t = await n({ data: { email: i, code: u } }).catch(() => ({
      ok: !1,
      error: `Something went wrong.`,
    }));
    if (!t.ok) {
      (m(!1), h.error(t.error));
      return;
    }
    let { error: r } = await c.auth.verifyOtp({
      token_hash: t.tokenHash,
      type: `magiclink`,
    });
    if ((m(!1), r)) {
      h.error(`Sign-in failed. Request a new code.`);
      return;
    }
    (h.success(`Welcome to Subday Pizza!`), e({ to: `/account` }));
  }
  return (0, J.jsx)(`div`, {
    className: `mx-auto flex max-w-md flex-col px-4 py-16`,
    children: (0, J.jsxs)(`div`, {
      className: `rounded-[2rem] bg-card p-8 shadow-card fade-up`,
      children: [
        (0, J.jsx)(`p`, { className: `text-4xl`, children: `🍕` }),
        (0, J.jsx)(`h1`, {
          className: `mt-3 text-3xl font-extrabold`,
          children: `Welcome back`,
        }),
        (0, J.jsx)(`p`, {
          className: `mt-1 text-muted-foreground`,
          children: `Sign in to save your details and faster ordering.`,
        }),
        (0, J.jsxs)(p, {
          variant: `soft`,
          size: `xl`,
          className: `mt-8 w-full`,
          onClick: _,
          children: [
            (0, J.jsx)(`svg`, {
              viewBox: `0 0 24 24`,
              className: `size-5`,
              "aria-hidden": !0,
              children: (0, J.jsx)(`path`, {
                fill: `currentColor`,
                d: `M21.35 11.1H12v2.98h5.35c-.23 1.4-1.67 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.34 0 8.88-3.75 8.88-9.04 0-.6-.07-1.06-.15-1.51z`,
              }),
            }),
            `Continue with Google`,
          ],
        }),
        (0, J.jsxs)(`div`, {
          className: `my-6 flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground`,
          children: [
            (0, J.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
            ` or `,
            (0, J.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
          ],
        }),
        o === `email`
          ? (0, J.jsxs)(`form`, {
              onSubmit: v,
              className: `space-y-3`,
              children: [
                (0, J.jsx)(g, {
                  type: `email`,
                  required: !0,
                  maxLength: 255,
                  value: i,
                  onChange: (e) => a(e.target.value),
                  placeholder: `you@example.com`,
                  className: `h-12 rounded-full px-5`,
                  "aria-label": `Email`,
                }),
                (0, J.jsxs)(p, {
                  variant: `hero`,
                  size: `xl`,
                  className: `w-full`,
                  disabled: f,
                  children: [
                    (0, J.jsx)(r, {}),
                    ` `,
                    f ? `Sending…` : `Email me a code`,
                  ],
                }),
              ],
            })
          : (0, J.jsxs)(`div`, {
              className: `space-y-4`,
              children: [
                (0, J.jsxs)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: [
                    `Enter the 6-digit code sent to `,
                    (0, J.jsx)(`b`, {
                      className: `text-foreground`,
                      children: i,
                    }),
                  ],
                }),
                (0, J.jsx)(Y, {
                  maxLength: 6,
                  value: u,
                  onChange: d,
                  onComplete: y,
                  children: (0, J.jsx)(X, {
                    className: `w-full justify-between`,
                    children: Array.from({ length: 6 }).map((e, t) =>
                      (0, J.jsx)(
                        Z,
                        { index: t, className: `size-12 text-lg` },
                        t,
                      ),
                    ),
                  }),
                }),
                (0, J.jsx)(p, {
                  variant: `hero`,
                  size: `xl`,
                  className: `w-full`,
                  disabled: f || u.length !== 6,
                  onClick: y,
                  children: f ? `Checking…` : `Sign in`,
                }),
                (0, J.jsx)(`button`, {
                  className: `text-sm font-semibold text-muted-foreground underline`,
                  onClick: () => {
                    (s(`email`), d(``));
                  },
                  children: `Use a different email`,
                }),
              ],
            }),
      ],
    }),
  });
}
export { we as component };
