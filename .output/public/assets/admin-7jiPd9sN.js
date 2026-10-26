import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { t as n } from "./react-BiuhUkGL.js";
import { n as r, r as i, s as a, t as o, u as s } from "./catalog-iSjdVlqq.js";
import {
  B as c,
  S as l,
  U as u,
  V as d,
  b as f,
  c as p,
  d as m,
  f as h,
  g,
  h as _,
  l as v,
  m as y,
  p as b,
  r as x,
  s as S,
  t as C,
  u as w,
  v as T,
  w as ee,
  x as E,
  y as D,
} from "./index-CElauyXZ.js";
import { t as O } from "./input-CSjAzpNs.js";
var k = e(n(), 1),
  te = Object.defineProperty,
  ne = (e, t) => te(e, `name`, { value: t, configurable: !0 });
function re(e) {
  let [t, n] = k.useState(void 0);
  return (
    h(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = 0,
          r = new ResizeObserver((r) => {
            if (!Array.isArray(r) || !r.length) return;
            let i = r[0];
            (window.cancelAnimationFrame(t),
              (t = window.requestAnimationFrame(() => {
                let t, r;
                if (`borderBoxSize` in i) {
                  let e = i.borderBoxSize,
                    n = Array.isArray(e) ? e[0] : e;
                  ((t = n.inlineSize), (r = n.blockSize));
                } else ((t = e.offsetWidth), (r = e.offsetHeight));
                n({ width: t, height: r });
              })));
          });
        return (
          r.observe(e, { box: `border-box` }),
          () => {
            (window.cancelAnimationFrame(t), r.unobserve(e));
          }
        );
      }
      n(void 0);
    }, [e]),
    t
  );
}
ne(re, `useSize`);
var A = t(),
  ie = Object.defineProperty,
  j = (e, t) => ie(e, `name`, { value: t, configurable: !0 }),
  M = `Switch`,
  [ae, oe] = b(M),
  [se, N] = ae(M);
function ce(e) {
  let {
      __scopeSwitch: t,
      checked: n,
      children: r,
      defaultChecked: i,
      disabled: a,
      form: o,
      name: s,
      onCheckedChange: c,
      required: l,
      value: u = `on`,
      internal_do_not_use_render: d,
    } = e,
    [f, p] = w({ prop: n, defaultProp: i ?? !1, onChange: c, caller: M }),
    [m, h] = k.useState(null),
    [g, _] = k.useState(null),
    [v, y] = k.useState(null),
    b = {
      checked: f,
      setChecked: p,
      disabled: a,
      control: m,
      setControl: h,
      name: s,
      form: o,
      value: u,
      userClick: v,
      onUserClick: y,
      required: l,
      defaultChecked: i,
      isFormControl: !m || !!o || !!m.closest(`form`),
      bubbleInput: g,
      setBubbleInput: _,
    };
  return (0, A.jsx)(se, { scope: t, ...b, children: ge(d) ? d(b) : r });
}
j(ce, `SwitchProvider`);
var le = `SwitchTrigger`,
  ue = k.forwardRef(
    j(function ({ __scopeSwitch: e, onClick: t, ...n }, r) {
      let {
          control: i,
          form: a,
          value: o,
          disabled: s,
          checked: c,
          required: l,
          setControl: u,
          setChecked: d,
          onUserClick: f,
          isFormControl: p,
          bubbleInput: m,
        } = N(le, e),
        h = D(r, u),
        g = k.useRef(c);
      return (
        k.useEffect(() => {
          let e = a ? i?.ownerDocument.getElementById(a) : i?.form;
          if (e instanceof HTMLFormElement) {
            let t = j(() => d(g.current), `reset`);
            return (
              e.addEventListener(`reset`, t),
              () => e.removeEventListener(`reset`, t)
            );
          }
        }, [i, a, d]),
        (0, A.jsx)(v.button, {
          type: `button`,
          role: `switch`,
          "aria-checked": c,
          "aria-required": l,
          "data-state": P(c),
          "data-disabled": s ? `` : void 0,
          disabled: s,
          value: o,
          ...n,
          ref: h,
          onClick: y(t, (e) => {
            let t = e.isPropagationStopped();
            (f({ requestedChecked: !c, hasConsumerStoppedPropagation: t }),
              d((e) => !e),
              m && p && (t || e.stopPropagation()));
          }),
        })
      );
    }, `SwitchTrigger`),
  ),
  de = k.forwardRef(
    j(function (e, t) {
      let {
        __scopeSwitch: n,
        name: r,
        checked: i,
        defaultChecked: a,
        required: o,
        disabled: s,
        value: c,
        onCheckedChange: l,
        form: u,
        ...d
      } = e;
      return (0, A.jsx)(ce, {
        __scopeSwitch: n,
        checked: i,
        defaultChecked: a,
        disabled: s,
        required: o,
        onCheckedChange: l,
        name: r,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: e }) =>
          (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsx)(ue, { ...d, ref: t, __scopeSwitch: n }),
              e && (0, A.jsx)(he, { __scopeSwitch: n }),
            ],
          }),
      });
    }, `Switch`),
  ),
  fe = `SwitchThumb`,
  pe = k.forwardRef(
    j(function (e, t) {
      let { __scopeSwitch: n, ...r } = e,
        i = N(fe, n);
      return (0, A.jsx)(v.span, {
        "data-state": P(i.checked),
        "data-disabled": i.disabled ? `` : void 0,
        ...r,
        ref: t,
      });
    }, `SwitchThumb`),
  ),
  me = `SwitchBubbleInput`,
  he = k.forwardRef(
    j(function ({ __scopeSwitch: e, onClick: t, ...n }, r) {
      let {
          control: i,
          userClick: a,
          checked: o,
          defaultChecked: s,
          required: c,
          disabled: l,
          name: u,
          value: d,
          form: f,
          bubbleInput: p,
          setBubbleInput: m,
        } = N(me, e),
        h = D(r, m),
        g = re(i),
        _ = k.useRef(!1),
        b = k.useRef(o),
        x = k.useRef(a),
        S = k.useRef(null);
      k.useEffect(() => {
        let e = p;
        if (!e) return;
        let t = window.HTMLInputElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, `checked`).set;
        if (!n) return;
        let r = b.current !== o;
        b.current = o;
        let i = a !== null && a !== x.current;
        if (((x.current = a), i))
          ((S.current = r ? null : a),
            r && n.call(e, o),
            e.dispatchEvent(
              new Event(`click`, { bubbles: !a.hasConsumerStoppedPropagation }),
            ));
        else if (r) {
          let t = S.current;
          S.current = null;
          let r = t?.requestedChecked === o;
          ((_.current = !0),
            n.call(e, o),
            e.dispatchEvent(
              new Event(`click`, {
                bubbles: !(r && t.hasConsumerStoppedPropagation),
              }),
            ),
            (_.current = !1));
        }
      }, [p, o, a]);
      let C = k.useRef(o);
      return (0, A.jsx)(v.input, {
        type: `checkbox`,
        "aria-hidden": !0,
        defaultChecked: s ?? C.current,
        required: c,
        disabled: l,
        name: u,
        value: d,
        form: f,
        ...n,
        tabIndex: -1,
        ref: h,
        onClick: y(t, (e) => {
          _.current && e.stopPropagation();
        }),
        style: {
          ...n.style,
          ...g,
          position: `absolute`,
          pointerEvents: `none`,
          opacity: 0,
          margin: 0,
          transform: `translateX(-100%)`,
        },
      });
    }, `SwitchBubbleInput`),
  );
function ge(e) {
  return typeof e == `function`;
}
j(ge, `isFunction`);
function P(e) {
  return e ? `checked` : `unchecked`;
}
j(P, `getState`);
var F = k.forwardRef(({ className: e, ...t }, n) =>
  (0, A.jsx)(de, {
    className: g(
      `peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`,
      e,
    ),
    ...t,
    ref: n,
    children: (0, A.jsx)(pe, {
      className: g(
        `pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0`,
      ),
    }),
  }),
);
F.displayName = de.displayName;
var _e = Object.defineProperty,
  I = (e, t) => _e(e, `name`, { value: t, configurable: !0 });
function ve(e) {
  let t = e + `CollectionProvider`,
    [n, r] = b(t),
    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = I((e) => {
      let { scope: t, children: n } = e,
        r = k.useRef(null),
        a = k.useRef(new Map()).current;
      return (0, A.jsx)(i, {
        scope: t,
        itemMap: a,
        collectionRef: r,
        children: n,
      });
    }, `CollectionProvider`);
  o.displayName = t;
  let s = e + `CollectionSlot`,
    c = T(s),
    l = k.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = a(s, n),
        o = D(t, i.collectionRef);
      return (0, A.jsx)(c, { ref: o, children: r });
    });
  l.displayName = s;
  let u = e + `CollectionItemSlot`,
    d = `data-radix-collection-item`,
    f = T(u),
    p = k.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = k.useRef(null),
        s = D(t, o),
        c = a(u, n);
      return (
        k.useEffect(
          () => (
            c.itemMap.set(o, { ref: o, ...i }),
            () => void c.itemMap.delete(o)
          ),
        ),
        (0, A.jsx)(f, { [d]: ``, ref: s, children: r })
      );
    });
  p.displayName = u;
  function m(t) {
    let n = a(e + `CollectionConsumer`, t);
    return k.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${d}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return (I(m, `useCollection`), [{ Provider: o, Slot: l, ItemSlot: p }, m, r]);
}
I(ve, `createCollection`);
var ye = new WeakMap(),
  L = class e extends Map {
    static {
      I(this, `OrderedDict`);
    }
    #e;
    constructor(e) {
      (super(e), (this.#e = [...super.keys()]), ye.set(this, !0));
    }
    set(e, t) {
      return (
        ye.get(this) && !this.has(e) && this.#e.push(e),
        super.set(e, t),
        this
      );
    }
    insert(e, t, n) {
      let r = this.has(t),
        i = r ? this.size : this.size + 1,
        a = z(e),
        o = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
      if (r ? this.#e.indexOf(t) === o : o === this.size)
        return (this.set(t, n), this);
      let s = this.#e.filter((e) => e !== t);
      s.splice(o, 0, t);
      let c = s.map((e) => [e, e === t ? n : this.get(e)]);
      this.clear();
      for (let [e, t] of c) this.set(e, t);
      return this;
    }
    with(t, n, r) {
      let i = new e(this);
      return (i.insert(t, n, r), i);
    }
    before(e) {
      let t = this.#e.indexOf(e) - 1;
      if (!(t < 0)) return this.entryAt(t);
    }
    setBefore(e, t, n) {
      let r = this.#e.indexOf(e);
      if (r === -1) return this;
      let i = this.#e.indexOf(t),
        a = i !== -1 && i < r ? r - 1 : r;
      return this.insert(a, t, n);
    }
    after(e) {
      let t = this.#e.indexOf(e);
      if (((t = t === -1 || t === this.size - 1 ? -1 : t + 1), t !== -1))
        return this.entryAt(t);
    }
    setAfter(e, t, n) {
      let r = this.#e.indexOf(e);
      if (r === -1) return this;
      let i = this.#e.indexOf(t),
        a = i !== -1 && i <= r ? r : r + 1;
      return this.insert(a, t, n);
    }
    first() {
      return this.entryAt(0);
    }
    last() {
      return this.entryAt(-1);
    }
    clear() {
      return ((this.#e = []), super.clear());
    }
    delete(e) {
      let t = super.delete(e);
      return (t && this.#e.splice(this.#e.indexOf(e), 1), t);
    }
    deleteAt(e) {
      let t = this.keyAt(e);
      return t !== void 0 && this.delete(t);
    }
    at(e) {
      let t = R(this.#e, e);
      if (t !== void 0) return this.get(t);
    }
    entryAt(e) {
      let t = R(this.#e, e);
      if (t !== void 0) return [t, this.get(t)];
    }
    indexOf(e) {
      return this.#e.indexOf(e);
    }
    keyAt(e) {
      return R(this.#e, e);
    }
    from(e, t) {
      let n = this.indexOf(e);
      if (n === -1) return;
      let r = n + t;
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.at(r)
      );
    }
    keyFrom(e, t) {
      let n = this.indexOf(e);
      if (n === -1) return;
      let r = n + t;
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.keyAt(r)
      );
    }
    find(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return r;
        n++;
      }
    }
    findIndex(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return n;
        n++;
      }
      return -1;
    }
    filter(t, n) {
      let r = [],
        i = 0;
      for (let e of this) (Reflect.apply(t, n, [e, i, this]) && r.push(e), i++);
      return new e(r);
    }
    map(t, n) {
      let r = [],
        i = 0;
      for (let e of this)
        (r.push([e[0], Reflect.apply(t, n, [e, i, this])]), i++);
      return new e(r);
    }
    reduce(...e) {
      let [t, n] = e,
        r = e.length > 1;
      if (!r && this.size === 0)
        throw TypeError(`Reduce of empty OrderedDict with no initial value`);
      let i = 0,
        a = n;
      for (let e of this)
        ((a = i === 0 && !r ? e : Reflect.apply(t, this, [a, e, i, this])),
          i++);
      return a;
    }
    reduceRight(...e) {
      let [t, n] = e,
        r = e.length > 1;
      if (!r && this.size === 0)
        throw TypeError(`Reduce of empty OrderedDict with no initial value`);
      let i = n;
      for (let e = this.size - 1; e >= 0; e--) {
        let n = this.entryAt(e);
        i =
          e === this.size - 1 && !r
            ? n
            : Reflect.apply(t, this, [i, n, e, this]);
      }
      return i;
    }
    sort(e) {
      if (typeof e != `function`)
        throw TypeError(`OrderedDict.sort requires a compare function`);
      let t = [...this.entries()].sort(e);
      this.clear();
      for (let [e, n] of t) this.set(e, n);
      return this;
    }
    toSorted(t) {
      if (typeof t != `function`)
        throw TypeError(`OrderedDict.toSorted requires a compare function`);
      let n = [...this.entries()].sort(t);
      return new e(n);
    }
    toReversed() {
      let t = new e();
      for (let e = this.size - 1; e >= 0; e--) {
        let n = this.keyAt(e),
          r = this.get(n);
        t.set(n, r);
      }
      return t;
    }
    toSpliced(...t) {
      let n = [...this.entries()];
      return (n.splice(...t), new e(n));
    }
    slice(t, n) {
      let r = new e();
      for (let e of this.#e.slice(t, n)) r.set(e, this.get(e));
      return r;
    }
    every(e, t) {
      let n = 0;
      for (let r of this) {
        if (!Reflect.apply(e, t, [r, n, this])) return !1;
        n++;
      }
      return !0;
    }
    some(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return !0;
        n++;
      }
      return !1;
    }
  };
function R(e, t) {
  if (`at` in Array.prototype) return Array.prototype.at.call(e, t);
  let n = be(e, t);
  return n === -1 ? void 0 : e[n];
}
I(R, `at`);
function be(e, t) {
  let n = e.length,
    r = z(t),
    i = r >= 0 ? r : n + r;
  return i < 0 || i >= n ? -1 : i;
}
I(be, `toSafeIndex`);
function z(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
I(z, `toSafeInteger`);
function xe(e) {
  let t = e + `CollectionProvider`,
    [n, r] = b(t),
    [i, a] = n(t);
  i.displayName = e + `CollectionStableContextProvider`;
  let [o, s] = n(t);
  o.displayName = e + `CollectionStatefulContextProvider`;
  let c = I(
    ({ state: e, ...t }) =>
      e ? (0, A.jsx)(u, { ...t, state: e }) : (0, A.jsx)(l, { ...t }),
    `CollectionProvider`,
  );
  c.displayName = t;
  let l = I((e) => {
    let t = v();
    return (0, A.jsx)(u, { ...e, state: t });
  }, `CollectionInit`);
  l.displayName = e + `CollectionInit`;
  let u = I((e) => {
    let { scope: t, children: n, state: r } = e,
      a = k.useRef(null),
      [s, c] = k.useState(null),
      l = D(a, c),
      [u, d] = r,
      f = k.useRef(new L()),
      p = k.useCallback(() => {
        let e = f.current;
        return (we(e) || e.sort(B), e);
      }, []);
    return (
      k.useEffect(() => {
        if (!s) return;
        let e = Te(() => {
          d((e) => {
            let t = e.toSorted(B);
            return t.some(([t], n) => e.keyAt(n) !== t) ? t : e;
          });
        });
        return (
          e.observe(s, { childList: !0, subtree: !0 }),
          () => {
            e.disconnect();
          }
        );
      }, [s, d]),
      (0, A.jsx)(i, {
        scope: t,
        collectionElementRef: l,
        collectionElementRefObject: a,
        getCollection: p,
        setCollection: d,
        registryRef: f,
        children: (0, A.jsx)(o, {
          scope: t,
          collectionElement: s,
          collection: u,
          children: n,
        }),
      })
    );
  }, `CollectionProviderImpl`);
  u.displayName = e + `CollectionProviderImpl`;
  let d = e + `CollectionSlot`,
    f = T(d),
    p = k.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = a(d, n),
        o = D(t, i.collectionElementRef);
      return (0, A.jsx)(f, { ref: o, children: r });
    });
  p.displayName = d;
  let m = e + `CollectionItemSlot`,
    g = T(m),
    _ = k.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = k.useRef(null),
        { setCollection: s, registryRef: c } = a(m, n),
        l = k.useRef(i);
      Se(l.current, i) || (l.current = i);
      let u = l.current,
        d = k.useCallback(
          (e) => {
            let t = c.current;
            e
              ? t.set(e, { ...l.current, element: e })
              : o.current && t.delete(o.current);
          },
          [c],
        ),
        f = D(t, d, o);
      h(() => {
        let e = o.current,
          t = c.current;
        e && t.has(e) && t.set(e, { ...u, element: e });
      }, [u, c]);
      let p = k.useRef(null);
      return (
        k.useEffect(() => {
          let e = o.current,
            t = p.current;
          ((t?.element ?? null) === e && (!e || t?.itemData === u)) ||
            ((p.current = e ? { element: e, itemData: u } : null),
            s((n) => {
              let r = new L(n);
              return (
                t && t.element !== e && r.delete(t.element),
                e && r.set(e, { ...u, element: e }),
                r.sort(B)
              );
            }));
        }),
        k.useEffect(
          () => () => {
            let e = p.current;
            ((p.current = null),
              e &&
                s((t) => {
                  if (!t.has(e.element)) return t;
                  let n = new L(t);
                  return (n.delete(e.element), n);
                }));
          },
          [s],
        ),
        (0, A.jsx)(g, { "data-radix-collection-item": ``, ref: f, children: r })
      );
    });
  _.displayName = m;
  function v() {
    return k.useState(new L());
  }
  I(v, `useInitCollection`);
  function y(t) {
    let { collection: n } = s(e + `CollectionConsumer`, t);
    return n;
  }
  I(y, `useCollection`);
  function x(t) {
    let { getCollection: n } = a(e + `CollectionConsumer`, t);
    return n;
  }
  return (
    I(x, `useGetCollection`),
    [
      { Provider: c, Slot: p, ItemSlot: _ },
      {
        createCollectionScope: r,
        useCollection: y,
        useGetCollection: x,
        useInitCollection: v,
      },
    ]
  );
}
I(xe, `createCollection`);
function Se(e, t) {
  if (e === t) return !0;
  if (typeof e != `object` || typeof t != `object` || e == null || t == null)
    return !1;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
I(Se, `shallowEqual`);
function Ce(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
I(Ce, `isElementPreceding`);
function we(e) {
  let t;
  for (let n of e.keys()) {
    if (t) {
      let e = t.compareDocumentPosition(n);
      if (
        !(e & Node.DOCUMENT_POSITION_DISCONNECTED) &&
        e & Node.DOCUMENT_POSITION_PRECEDING
      )
        return !1;
    }
    t = n;
  }
  return !0;
}
I(we, `isInDocumentOrder`);
function B(e, t) {
  return !e[1].element || !t[1].element
    ? 0
    : Ce(e[1].element, t[1].element)
      ? -1
      : 1;
}
I(B, `sortByDocumentPosition`);
function Te(e) {
  return new MutationObserver((t) => {
    for (let n of t)
      if (n.type === `childList`) {
        e();
        return;
      }
  });
}
I(Te, `getChildListObserver`);
var Ee = Object.defineProperty,
  De = (e, t) => Ee(e, `name`, { value: t, configurable: !0 }),
  Oe = { LTR: `ltr`, RTL: `rtl` },
  ke = k.createContext(void 0);
function V(e) {
  let t = k.useContext(ke);
  return e || t || Oe.LTR;
}
De(V, `useDirection`);
var Ae = Object.defineProperty,
  H = (e, t) => Ae(e, `name`, { value: t, configurable: !0 }),
  U = !1;
function je() {
  let [e, t] = k.useState(U);
  return (
    k.useEffect(() => {
      U || ((U = !0), t(!0));
    }, []),
    e
  );
}
H(je, `useIsHydrated`);
var Me = k.useSyncExternalStore;
function Ne() {
  return () => {};
}
H(Ne, `subscribe`);
function Pe() {
  return Me(
    Ne,
    () => !0,
    () => !1,
  );
}
H(Pe, `useIsHydratedModern`);
var Fe = typeof Me == `function` ? Pe : je,
  Ie = Object.defineProperty,
  W = (e, t) => Ie(e, `name`, { value: t, configurable: !0 }),
  G = `rovingFocusGroup.onEntryFocus`,
  Le = { bubbles: !1, cancelable: !0 },
  K = `RovingFocusGroup`,
  [q, Re, ze] = ve(K),
  [Be, Ve] = b(K, [ze]),
  He = { Vertical: `vertical`, Horizontal: `horizontal` },
  Ue = { LTR: `ltr`, RTL: `rtl` },
  [We, Ge] = Be(K),
  Ke = k.forwardRef(
    W(function (e, t) {
      return (0, A.jsx)(q.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, A.jsx)(q.Slot, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, A.jsx)(qe, { ...e, ref: t }),
        }),
      });
    }, `RovingFocusGroup`),
  ),
  qe = k.forwardRef(
    W(function (e, t) {
      let {
          __scopeRovingFocusGroup: n,
          orientation: r,
          loop: i = !1,
          dir: a,
          currentTabStopId: o,
          defaultCurrentTabStopId: s,
          onCurrentTabStopIdChange: c,
          onEntryFocus: l,
          preventScrollOnEntryFocus: u = !1,
          ...d
        } = e,
        f = k.useRef(null),
        m = D(t, f),
        h = V(a),
        [g, _] = w({ prop: o, defaultProp: s ?? null, onChange: c, caller: K }),
        [b, x] = k.useState(!1),
        S = p(l),
        C = Re(n),
        T = k.useRef(!1),
        [ee, E] = k.useState(0);
      return (
        k.useEffect(() => {
          let e = f.current;
          if (e)
            return (
              e.addEventListener(G, S),
              () => e.removeEventListener(G, S)
            );
        }, [S]),
        (0, A.jsx)(We, {
          scope: n,
          orientation: r,
          dir: h,
          loop: i,
          currentTabStopId: g,
          onItemFocus: k.useCallback((e) => _(e), [_]),
          onItemShiftTab: k.useCallback(() => x(!0), []),
          onFocusableItemAdd: k.useCallback(() => E((e) => e + 1), []),
          onFocusableItemRemove: k.useCallback(() => E((e) => e - 1), []),
          children: (0, A.jsx)(v.div, {
            tabIndex: b || ee === 0 ? -1 : 0,
            "data-orientation": r,
            ...d,
            ref: m,
            style: { outline: `none`, ...e.style },
            onMouseDown: y(e.onMouseDown, () => {
              T.current = !0;
            }),
            onFocus: y(e.onFocus, (e) => {
              let t = !T.current;
              if (e.target === e.currentTarget && t && !b) {
                let t = new CustomEvent(G, Le);
                if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                  let e = C().filter((e) => e.focusable);
                  J(
                    [e.find((e) => e.active), e.find((e) => e.id === g), ...e]
                      .filter(Boolean)
                      .map((e) => e.ref.current),
                    u,
                  );
                }
              }
              T.current = !1;
            }),
            onBlur: y(e.onBlur, () => x(!1)),
          }),
        })
      );
    }, `RovingFocusGroupImpl`),
  ),
  Je = `RovingFocusGroupItem`,
  Ye = k.forwardRef(
    W(function (e, t) {
      let {
          __scopeRovingFocusGroup: n,
          focusable: r = !0,
          active: i = !1,
          tabStopId: a,
          children: o,
          ...s
        } = e,
        c = m(),
        l = a || c,
        u = Ge(Je, n),
        d = u.currentTabStopId === l,
        f = Re(n),
        {
          onFocusableItemAdd: p,
          onFocusableItemRemove: g,
          currentTabStopId: _,
        } = u,
        b = Fe();
      return (
        h(() => {
          if (!(!b || !r)) return (p(), () => g());
        }, [b, r, p, g]),
        k.useEffect(() => {
          if (!(b || !r)) return (p(), () => g());
        }, [b, r, p, g]),
        (0, A.jsx)(q.ItemSlot, {
          scope: n,
          id: l,
          focusable: r,
          active: i,
          children: (0, A.jsx)(v.span, {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...s,
            ref: t,
            onMouseDown: y(e.onMouseDown, (e) => {
              r ? u.onItemFocus(l) : e.preventDefault();
            }),
            onFocus: y(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: y(e.onKeyDown, (e) => {
              if (e.key === `Tab` && e.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (e.target !== e.currentTarget) return;
              let t = Qe(e, u.orientation, u.dir);
              if (t !== void 0) {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                e.preventDefault();
                let n = f()
                  .filter((e) => e.focusable)
                  .map((e) => e.ref.current);
                if (t === `last`) n.reverse();
                else if (t === `prev` || t === `next`) {
                  t === `prev` && n.reverse();
                  let r = n.indexOf(e.currentTarget);
                  n = u.loop ? $e(n, r + 1) : n.slice(r + 1);
                }
                setTimeout(() => J(n));
              }
            }),
            children:
              typeof o == `function`
                ? o({ isCurrentTabStop: d, hasTabStop: _ != null })
                : o,
          }),
        })
      );
    }, `RovingFocusGroupItem`),
  ),
  Xe = {
    ArrowLeft: `prev`,
    ArrowUp: `prev`,
    ArrowRight: `next`,
    ArrowDown: `next`,
    PageUp: `first`,
    Home: `first`,
    PageDown: `last`,
    End: `last`,
  };
function Ze(e, t) {
  return t === Ue.RTL
    ? e === `ArrowLeft`
      ? `ArrowRight`
      : e === `ArrowRight`
        ? `ArrowLeft`
        : e
    : e;
}
W(Ze, `getDirectionAwareKey`);
function Qe(e, t, n) {
  let r = Ze(e.key, n);
  if (
    !(t === He.Vertical && [`ArrowLeft`, `ArrowRight`].includes(r)) &&
    !(t === He.Horizontal && [`ArrowUp`, `ArrowDown`].includes(r))
  )
    return Xe[r];
}
W(Qe, `getFocusIntent`);
function J(e, t = !1) {
  let n = document.activeElement;
  for (let r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
W(J, `focusFirst`);
function $e(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
W($e, `wrapArray`);
var et = Object.defineProperty,
  Y = (e, t) => et(e, `name`, { value: t, configurable: !0 }),
  tt = { Automatic: `automatic`, Manual: `manual` },
  X = `Tabs`,
  [nt, rt] = b(X, [Ve]),
  it = Ve(),
  [at, Z] = nt(X),
  ot = k.forwardRef(
    Y(function (e, t) {
      let {
          __scopeTabs: n,
          value: r,
          onValueChange: i,
          defaultValue: a,
          orientation: o = `horizontal`,
          dir: s,
          activationMode: c = tt.Automatic,
          ...l
        } = e,
        u = V(s),
        [d, f] = w({ prop: r, onChange: i, defaultProp: a ?? ``, caller: X });
      return (0, A.jsx)(at, {
        scope: n,
        baseId: m(),
        value: d,
        onValueChange: f,
        orientation: o,
        dir: u,
        activationMode: c,
        children: (0, A.jsx)(v.div, {
          dir: u,
          "data-orientation": o,
          ...l,
          ref: t,
        }),
      });
    }, `Tabs`),
  ),
  st = `TabsList`,
  ct = k.forwardRef(
    Y(function (e, t) {
      let { __scopeTabs: n, loop: r = !0, ...i } = e,
        a = Z(st, n),
        o = it(n);
      return (0, A.jsx)(Ke, {
        asChild: !0,
        ...o,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: (0, A.jsx)(v.div, {
          role: `tablist`,
          "aria-orientation": a.orientation,
          ...i,
          ref: t,
        }),
      });
    }, `TabsList`),
  ),
  lt = `TabsTrigger`,
  ut = k.forwardRef(
    Y(function (e, t) {
      let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e,
        o = Z(lt, n),
        s = it(n),
        c = pt(o.baseId, r),
        l = mt(o.baseId, r),
        u = r === o.value;
      return (0, A.jsx)(Ye, {
        asChild: !0,
        ...s,
        focusable: !i,
        active: u,
        children: (0, A.jsx)(v.button, {
          type: `button`,
          role: `tab`,
          "aria-selected": u,
          "aria-controls": l,
          "data-state": u ? `active` : `inactive`,
          "data-disabled": i ? `` : void 0,
          disabled: i,
          id: c,
          ...a,
          ref: t,
          onMouseDown: y(e.onMouseDown, (e) => {
            !i && e.button === 0 && e.ctrlKey === !1
              ? (e.currentTarget.focus(), o.onValueChange(r))
              : e.preventDefault();
          }),
          onKeyDown: y(e.onKeyDown, (e) => {
            i ||
              e.target !== e.currentTarget ||
              ([` `, `Enter`].includes(e.key) && o.onValueChange(r));
          }),
          onFocus: y(e.onFocus, () => {
            let e = o.activationMode !== tt.Manual;
            !u && !i && e && o.onValueChange(r);
          }),
        }),
      });
    }, `TabsTrigger`),
  ),
  dt = `TabsContent`,
  ft = k.forwardRef(
    Y(function (e, t) {
      let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e,
        s = Z(dt, n),
        c = pt(s.baseId, r),
        l = mt(s.baseId, r),
        u = r === s.value,
        d = k.useRef(u);
      return (
        k.useEffect(() => {
          let e = requestAnimationFrame(() => (d.current = !1));
          return () => cancelAnimationFrame(e);
        }, []),
        (0, A.jsx)(S, {
          present: i || u,
          children: ({ present: n }) =>
            (0, A.jsx)(v.div, {
              "data-state": u ? `active` : `inactive`,
              "data-orientation": s.orientation,
              role: `tabpanel`,
              "aria-labelledby": c,
              hidden: !n,
              id: l,
              tabIndex: 0,
              ...o,
              ref: t,
              style: {
                ...e.style,
                animationDuration: d.current ? `0s` : void 0,
              },
              children: n && a,
            }),
        })
      );
    }, `TabsContent`),
  );
function pt(e, t) {
  return `${e}-trigger-${t}`;
}
Y(pt, `makeTriggerId`);
function mt(e, t) {
  return `${e}-content-${t}`;
}
Y(mt, `makeContentId`);
var ht = ot,
  gt = k.forwardRef(({ className: e, ...t }, n) =>
    (0, A.jsx)(ct, {
      ref: n,
      className: g(
        `inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground`,
        e,
      ),
      ...t,
    }),
  );
gt.displayName = ct.displayName;
var Q = k.forwardRef(({ className: e, ...t }, n) =>
  (0, A.jsx)(ut, {
    ref: n,
    className: g(
      `inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow`,
      e,
    ),
    ...t,
  }),
);
Q.displayName = ut.displayName;
var $ = k.forwardRef(({ className: e, ...t }, n) =>
  (0, A.jsx)(ft, {
    ref: n,
    className: g(
      `mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
      e,
    ),
    ...t,
  }),
);
$.displayName = ft.displayName;
function _t() {
  let e = s({
    queryKey: [`is-admin`],
    queryFn: async () => {
      let { data: e } = await d.auth.getUser();
      if (!e.user) return !1;
      let { data: t } = await d.rpc(`has_role`, {
        _user_id: e.user.id,
        _role: `admin`,
      });
      return !!t;
    },
  });
  return e.isLoading
    ? (0, A.jsx)(`p`, {
        className: `py-20 text-center text-muted-foreground`,
        children: `Checking access…`,
      })
    : e.data
      ? (0, A.jsxs)(`div`, {
          className: `mx-auto max-w-6xl px-4 py-10`,
          children: [
            (0, A.jsx)(`h1`, {
              className: `text-4xl font-extrabold`,
              children: `Admin panel`,
            }),
            (0, A.jsxs)(ht, {
              defaultValue: `orders`,
              className: `mt-6`,
              children: [
                (0, A.jsxs)(gt, {
                  children: [
                    (0, A.jsx)(Q, { value: `orders`, children: `Orders` }),
                    (0, A.jsx)(Q, { value: `menu`, children: `Menu` }),
                    (0, A.jsx)(Q, { value: `offers`, children: `Offers` }),
                    (0, A.jsx)(Q, { value: `party`, children: `Party hall` }),
                  ],
                }),
                (0, A.jsx)($, {
                  value: `orders`,
                  children: (0, A.jsx)(yt, {}),
                }),
                (0, A.jsx)($, { value: `menu`, children: (0, A.jsx)(bt, {}) }),
                (0, A.jsx)($, {
                  value: `offers`,
                  children: (0, A.jsx)(St, {}),
                }),
                (0, A.jsx)($, { value: `party`, children: (0, A.jsx)(wt, {}) }),
              ],
            }),
          ],
        })
      : (0, A.jsxs)(`div`, {
          className: `mx-auto max-w-md py-20 text-center`,
          children: [
            (0, A.jsx)(`h1`, {
              className: `text-3xl font-extrabold`,
              children: `Admins only`,
            }),
            (0, A.jsx)(`p`, {
              className: `mt-2 text-muted-foreground`,
              children: `This account doesn't have admin access.`,
            }),
            (0, A.jsx)(_, {
              variant: `hero`,
              className: `mt-6`,
              asChild: !0,
              children: (0, A.jsx)(u, { to: `/`, children: `Go home` }),
            }),
          ],
        });
}
var vt = [`new`, `confirmed`, `delivered`, `cancelled`];
function yt() {
  let e = c(),
    t = s({
      queryKey: [`admin-orders`],
      queryFn: async () => {
        let { data: e, error: t } = await d
          .from(`orders`)
          .select(`*`)
          .order(`created_at`, { ascending: !1 })
          .limit(200);
        if (t) throw t;
        return e;
      },
      refetchInterval: 3e4,
    }),
    n = async (t, n) => {
      let { error: r } = await d
        .from(`orders`)
        .update({ status: n })
        .eq(`id`, t);
      if (r) return C.error(`Couldn't update order`);
      e.invalidateQueries({ queryKey: [`admin-orders`] });
    };
  return t.isLoading
    ? (0, A.jsx)(`p`, {
        className: `py-10 text-muted-foreground`,
        children: `Loading orders…`,
      })
    : t.data?.length
      ? (0, A.jsx)(`div`, {
          className: `mt-4 grid gap-4 md:grid-cols-2`,
          children: t.data.map((e) =>
            (0, A.jsxs)(
              `article`,
              {
                className: `rounded-3xl bg-card p-5 shadow-card`,
                children: [
                  (0, A.jsxs)(`div`, {
                    className: `flex items-start justify-between gap-3`,
                    children: [
                      (0, A.jsxs)(`div`, {
                        children: [
                          (0, A.jsx)(`p`, {
                            className: `font-bold`,
                            children: e.customer_name || `Customer`,
                          }),
                          (0, A.jsx)(`p`, {
                            className: `text-xs text-muted-foreground`,
                            children: new Date(e.created_at).toLocaleString(
                              `en-IN`,
                            ),
                          }),
                        ],
                      }),
                      (0, A.jsx)(`select`, {
                        value: e.status,
                        onChange: (t) => n(e.id, t.target.value),
                        className: `rounded-full border bg-background px-3 py-1 text-sm font-semibold`,
                        "aria-label": `Order status`,
                        children: vt.map((e) =>
                          (0, A.jsx)(`option`, { value: e, children: e }, e),
                        ),
                      }),
                    ],
                  }),
                  (0, A.jsx)(`ul`, {
                    className: `mt-3 space-y-1 text-sm`,
                    children: e.items.map((e, t) =>
                      (0, A.jsxs)(
                        `li`,
                        {
                          children: [
                            e.qty,
                            ` × `,
                            e.name,
                            e.size ? ` (${e.size})` : ``,
                            ` — ₹`,
                            e.price * e.qty,
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  (0, A.jsxs)(`p`, {
                    className: `price mt-2 text-lg text-primary`,
                    children: [`₹`, e.subtotal],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `mt-3 space-y-1 text-sm`,
                    children: [
                      e.phone &&
                        (0, A.jsxs)(`a`, {
                          href: `tel:${e.phone}`,
                          className: `flex items-center gap-2 font-semibold`,
                          children: [
                            (0, A.jsx)(l, { className: `size-4` }),
                            e.phone,
                          ],
                        }),
                      (0, A.jsxs)(`p`, {
                        children: [
                          (0, A.jsx)(`span`, {
                            className: `font-semibold`,
                            children: `Address:`,
                          }),
                          ` `,
                          e.address ||
                            (0, A.jsx)(`span`, {
                              className: `text-muted-foreground`,
                              children: `not given`,
                            }),
                        ],
                      }),
                      e.location &&
                        (0, A.jsxs)(`a`, {
                          href: e.location,
                          target: `_blank`,
                          rel: `noreferrer`,
                          className: `flex items-center gap-2 font-semibold text-primary`,
                          children: [
                            (0, A.jsx)(ee, { className: `size-4` }),
                            `Open map pin`,
                          ],
                        }),
                    ],
                  }),
                ],
              },
              e.id,
            ),
          ),
        })
      : (0, A.jsx)(`p`, {
          className: `py-10 text-muted-foreground`,
          children: `No orders yet. Orders appear here when customers tap “Send order on WhatsApp”.`,
        });
}
function bt() {
  let e = c(),
    { data: t = [] } = s(o),
    [n, r] = (0, k.useState)(a[0].id),
    i = t.filter((e) => e.category === n),
    l = () => e.invalidateQueries({ queryKey: [`catalog`, `menu`] }),
    u = async (e, t) => {
      let { error: n } = await d.from(`menu_items`).update(t).eq(`id`, e);
      n ? C.error(`Couldn't save`) : (C.success(`Saved`), l());
    },
    f = async () => {
      let e = prompt(`New item name`);
      if (!e?.trim()) return;
      let r = !!a.find((e) => e.id === n)?.sizes,
        { error: i } = await d
          .from(`menu_items`)
          .insert({
            id: `${n}-${e.toLowerCase().replace(/[^a-z0-9]+/g, `-`)}-${Date.now().toString(36)}`,
            name: e.trim(),
            category: n,
            prices: r ? [0, 0, 0] : [0],
            sort: t.length,
          });
      i ? C.error(`Couldn't add`) : l();
    },
    p = async (e, t) => {
      if (!confirm(`Delete ${t}?`)) return;
      let { error: n } = await d.from(`menu_items`).delete().eq(`id`, e);
      n ? C.error(`Couldn't delete`) : l();
    };
  return (0, A.jsxs)(`div`, {
    className: `mt-4 space-y-4`,
    children: [
      (0, A.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-3`,
        children: [
          (0, A.jsx)(`select`, {
            value: n,
            onChange: (e) => r(e.target.value),
            className: `h-10 rounded-full border bg-background px-4 font-semibold`,
            "aria-label": `Category`,
            children: a.map((e) =>
              (0, A.jsxs)(
                `option`,
                { value: e.id, children: [e.emoji, ` `, e.name] },
                e.id,
              ),
            ),
          }),
          (0, A.jsxs)(_, {
            variant: `hero`,
            onClick: f,
            children: [(0, A.jsx)(E, {}), ` Add item`],
          }),
        ],
      }),
      i.map((e) =>
        (0, A.jsx)(
          xt,
          {
            item: e,
            sizes: a.find((e) => e.id === n)?.sizes,
            onSave: (t) => u(e.id, t),
            onDelete: () => p(e.id, e.name),
          },
          e.id,
        ),
      ),
    ],
  });
}
function xt({ item: e, sizes: t, onSave: n, onDelete: r }) {
  let [i, a] = (0, k.useState)(e.name),
    [o, s] = (0, k.useState)(e.prices.map(String)),
    [c, l] = (0, k.useState)(e.note ?? ``);
  return (
    (0, k.useEffect)(() => {
      (a(e.name), s(e.prices.map(String)), l(e.note ?? ``));
    }, [e]),
    (0, A.jsxs)(`div`, {
      className: `flex flex-wrap items-end gap-3 rounded-2xl bg-card p-4 shadow-card`,
      children: [
        (0, A.jsxs)(`label`, {
          className: `flex-1 min-w-48 text-xs font-semibold`,
          children: [
            `Name`,
            (0, A.jsx)(O, { value: i, onChange: (e) => a(e.target.value) }),
          ],
        }),
        o.map((e, n) =>
          (0, A.jsxs)(
            `label`,
            {
              className: `w-24 text-xs font-semibold`,
              children: [
                o.length > 1 ? (t?.[n] ?? `Size ${n + 1}`) : `Price`,
                ` ₹`,
                (0, A.jsx)(O, {
                  type: `number`,
                  min: 0,
                  value: e,
                  onChange: (e) =>
                    s(o.map((t, r) => (r === n ? e.target.value : t))),
                }),
              ],
            },
            n,
          ),
        ),
        (0, A.jsxs)(`label`, {
          className: `min-w-40 flex-1 text-xs font-semibold`,
          children: [
            `Note`,
            (0, A.jsx)(O, { value: c, onChange: (e) => l(e.target.value) }),
          ],
        }),
        (0, A.jsxs)(`label`, {
          className: `flex items-center gap-2 text-xs font-semibold`,
          children: [
            (0, A.jsx)(F, {
              checked: e.available !== !1,
              onCheckedChange: (e) => n({ available: e }),
            }),
            `Available`,
          ],
        }),
        (0, A.jsxs)(`label`, {
          className: `flex items-center gap-2 text-xs font-semibold`,
          children: [
            (0, A.jsx)(F, {
              checked: !!e.featured,
              onCheckedChange: (e) => n({ featured: e }),
            }),
            `Favourite`,
          ],
        }),
        (0, A.jsx)(_, {
          onClick: () =>
            n({
              name: i.trim(),
              note: c.trim() || null,
              prices: o.map((e) => Math.max(0, Math.round(Number(e) || 0))),
            }),
          children: `Save`,
        }),
        (0, A.jsx)(_, {
          variant: `ghost`,
          size: `icon`,
          onClick: r,
          "aria-label": `Delete item`,
          children: (0, A.jsx)(f, {}),
        }),
      ],
    })
  );
}
function St() {
  let e = c(),
    { data: t = [] } = s(r),
    n = () => e.invalidateQueries({ queryKey: [`catalog`, `offers`] }),
    i = async (e) => {
      let { error: r } = await d
        .from(`offers`)
        .insert({
          id: `${e}-${Date.now().toString(36)}`,
          kind: e,
          title: e === `combo` ? `New combo` : `New offer`,
          price: e === `combo` ? 0 : null,
          sort: t.length + 20,
        });
      r ? C.error(`Couldn't add`) : n();
    };
  return (0, A.jsxs)(`div`, {
    className: `mt-4 space-y-4`,
    children: [
      (0, A.jsxs)(`div`, {
        className: `flex gap-3`,
        children: [
          (0, A.jsxs)(_, {
            variant: `hero`,
            onClick: () => i(`combo`),
            children: [(0, A.jsx)(E, {}), ` Add combo`],
          }),
          (0, A.jsxs)(_, {
            variant: `soft`,
            onClick: () => i(`deal`),
            children: [(0, A.jsx)(E, {}), ` Add offer`],
          }),
        ],
      }),
      t.map((e) => (0, A.jsx)(Ct, { offer: e, onDone: n }, e.id)),
    ],
  });
}
function Ct({ offer: e, onDone: t }) {
  let [n, r] = (0, k.useState)(e.title),
    [i, a] = (0, k.useState)(String(e.price ?? ``)),
    [o, s] = (0, k.useState)(
      e.kind === `combo`
        ? e.items.join(`
`)
        : (e.text ?? ``),
    );
  (0, k.useEffect)(() => {
    (r(e.title),
      a(String(e.price ?? ``)),
      s(
        e.kind === `combo`
          ? e.items.join(`
`)
          : (e.text ?? ``),
      ));
  }, [e]);
  let c = async (n) => {
    let { error: r } = await d.from(`offers`).update(n).eq(`id`, e.id);
    r ? C.error(`Couldn't save`) : (C.success(`Saved`), t());
  };
  return (0, A.jsxs)(`div`, {
    className: `grid gap-3 rounded-2xl bg-card p-4 shadow-card md:grid-cols-[1fr_8rem_2fr_auto]`,
    children: [
      (0, A.jsxs)(`label`, {
        className: `text-xs font-semibold`,
        children: [
          e.kind === `combo` ? `Combo` : `Offer`,
          ` title`,
          (0, A.jsx)(O, { value: n, onChange: (e) => r(e.target.value) }),
        ],
      }),
      e.kind === `combo`
        ? (0, A.jsxs)(`label`, {
            className: `text-xs font-semibold`,
            children: [
              `Price ₹`,
              (0, A.jsx)(O, {
                type: `number`,
                min: 0,
                value: i,
                onChange: (e) => a(e.target.value),
              }),
            ],
          })
        : (0, A.jsx)(`span`, {}),
      (0, A.jsxs)(`label`, {
        className: `text-xs font-semibold`,
        children: [
          e.kind === `combo` ? `Items (one per line)` : `Description`,
          (0, A.jsx)(x, {
            rows: 3,
            value: o,
            onChange: (e) => s(e.target.value),
          }),
        ],
      }),
      (0, A.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [
          (0, A.jsxs)(`label`, {
            className: `flex items-center gap-2 text-xs font-semibold`,
            children: [
              (0, A.jsx)(F, {
                checked: e.active,
                onCheckedChange: (e) => c({ active: e }),
              }),
              `Show`,
            ],
          }),
          (0, A.jsx)(_, {
            onClick: () =>
              c(
                e.kind === `combo`
                  ? {
                      title: n.trim(),
                      price: Math.max(0, Math.round(Number(i) || 0)),
                      items: o
                        .split(
                          `
`,
                        )
                        .map((e) => e.trim())
                        .filter(Boolean),
                    }
                  : { title: n.trim(), text: o.trim() },
              ),
            children: `Save`,
          }),
          (0, A.jsxs)(_, {
            variant: `ghost`,
            size: `sm`,
            onClick: async () => {
              if (!confirm(`Delete ${e.title}?`)) return;
              let { error: n } = await d.from(`offers`).delete().eq(`id`, e.id);
              n ? C.error(`Couldn't delete`) : t();
            },
            children: [(0, A.jsx)(f, {}), ` Delete`],
          }),
        ],
      }),
    ],
  });
}
function wt() {
  let e = c(),
    { data: t } = s(i),
    [n, r] = (0, k.useState)({ pkg: ``, hr: ``, three: ``, items: `` });
  (0, k.useEffect)(() => {
    t &&
      r({
        pkg: String(t.packagePrice),
        hr: String(t.hourlyRate),
        three: String(t.threeHourRate),
        items: t.packageItems.join(`
`),
      });
  }, [t]);
  let a = (e) => Math.max(0, Math.round(Number(e) || 0));
  return (0, A.jsxs)(`div`, {
    className: `mt-4 max-w-xl space-y-4 rounded-3xl bg-card p-6 shadow-card`,
    children: [
      (0, A.jsxs)(`div`, {
        className: `grid grid-cols-3 gap-3`,
        children: [
          (0, A.jsxs)(`label`, {
            className: `text-xs font-semibold`,
            children: [
              `Food package ₹`,
              (0, A.jsx)(O, {
                type: `number`,
                value: n.pkg,
                onChange: (e) => r({ ...n, pkg: e.target.value }),
              }),
            ],
          }),
          (0, A.jsxs)(`label`, {
            className: `text-xs font-semibold`,
            children: [
              `Hall per hour ₹`,
              (0, A.jsx)(O, {
                type: `number`,
                value: n.hr,
                onChange: (e) => r({ ...n, hr: e.target.value }),
              }),
            ],
          }),
          (0, A.jsxs)(`label`, {
            className: `text-xs font-semibold`,
            children: [
              `3 hours ₹`,
              (0, A.jsx)(O, {
                type: `number`,
                value: n.three,
                onChange: (e) => r({ ...n, three: e.target.value }),
              }),
            ],
          }),
        ],
      }),
      (0, A.jsxs)(`label`, {
        className: `block text-xs font-semibold`,
        children: [
          `Package includes (one per line)`,
          (0, A.jsx)(x, {
            rows: 7,
            value: n.items,
            onChange: (e) => r({ ...n, items: e.target.value }),
          }),
        ],
      }),
      (0, A.jsx)(_, {
        variant: `hero`,
        onClick: async () => {
          let { error: t } = await d
            .from(`site_settings`)
            .update({
              party_package_price: a(n.pkg),
              party_hourly_rate: a(n.hr),
              party_three_hour_rate: a(n.three),
              party_package_items: n.items
                .split(
                  `
`,
                )
                .map((e) => e.trim())
                .filter(Boolean),
            })
            .eq(`id`, 1);
          if (t) return C.error(`Couldn't save`);
          (C.success(`Party hall pricing saved`),
            e.invalidateQueries({ queryKey: [`catalog`, `party`] }));
        },
        children: `Save`,
      }),
    ],
  });
}
export { _t as component };
