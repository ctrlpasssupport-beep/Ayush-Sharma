import { r as e, t } from "./jsx-runtime-BkSabwWG.js";
import { t as n } from "./react-BiuhUkGL.js";
import {
  A as r,
  B as i,
  D as a,
  F as o,
  I as s,
  L as c,
  M as l,
  N as u,
  O as d,
  P as f,
  R as p,
  V as m,
  i as h,
  j as g,
  k as _,
  z as v,
} from "./index-CElauyXZ.js";
var y = class extends r {
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p = new Set();
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#o = null),
      this.bindMethods(),
      this.setOptions(t));
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      x(this.#t, this.options) ? this.#m() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return S(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return S(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(e) {
    let t = this.options,
      n = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof o(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !s(this.options, t) &&
        this.#e
          .getQueryCache()
          .notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this,
          }));
    let r = this.hasListeners();
    (r && C(this.#t, n, this.options, t) && this.#m(),
      this.updateResult(),
      r &&
        (this.#t !== n ||
          o(this.options.enabled, this.#t) !== o(t.enabled, this.#t) ||
          o(this.options.staleTime, this.#t) !== o(t.staleTime, this.#t)) &&
        this.#g());
    let i = this.#_();
    r &&
      (this.#t !== n ||
        o(this.options.enabled, this.#t) !== o(t.enabled, this.#t) ||
        i !== this.#f) &&
      this.#v(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      s(this.getCurrentResult(), n) ||
        ((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
      n
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (e, n) => (this.trackProp(n), t?.(n), Reflect.get(e, n)),
    });
  }
  trackProp(e) {
    this.#p.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      n = this.#e.getQueryCache().build(this.#e, t),
      r = () => {},
      i,
      a = new Promise((e) => {
        ((i = e),
          (r = this.#e.getQueryCache().subscribe((i) => {
            i.type === `updated` &&
              i.query.queryHash === n.queryHash &&
              n.state.data !== void 0 &&
              (r(), e(this.createResult(n, t)));
          })));
      });
    return Promise.race([
      n
        .fetch(t)
        .then(() => {
          let e = this.createResult(n, t);
          return (i?.(e), e);
        })
        .finally(() => {
          r();
        }),
      a,
    ]);
  }
  fetch(e) {
    return this.#m({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #m(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(u)), t);
  }
  #h(e) {
    return !g() && o(this.options.enabled, this.#t) !== !1 && l(e);
  }
  #g() {
    this.#b();
    let e = o(this.options.staleTime, this.#t);
    if (this.#r.isStale || !this.#h(e)) return;
    let t = p(this.#r.dataUpdatedAt, e) + 1;
    this.#u = v.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #_() {
    return o(this.options.refetchInterval, this.#t) ?? !1;
  }
  #v(e) {
    (this.#x(),
      (this.#f = e),
      !(this.#f === 0 || !this.#h(this.#f)) &&
        (this.#d = v.setInterval(() => {
          (this.options.refetchIntervalInBackground || _.isFocused()) &&
            this.#m();
        }, this.#f)));
  }
  #y() {
    (this.#g(), this.#v(this.#_()));
  }
  #b() {
    this.#u !== void 0 && (v.clearTimeout(this.#u), (this.#u = void 0));
  }
  #x() {
    this.#d !== void 0 && (v.clearInterval(this.#d), (this.#d = void 0));
  }
  createResult(e, t) {
    let n = this.#t,
      r = this.options,
      i = this.#r,
      s = this.#i,
      c = this.#a,
      l = e === n ? this.#n : e.state,
      { state: u } = e,
      d = { ...u },
      p = !1,
      m;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        o = !i && x(e, t),
        s = i && C(e, n, t, r);
      ((o || s) && (d = { ...d, ...a(u.data, e.options) }),
        t._optimisticResults === `isRestoring` && (d.fetchStatus = `idle`));
    }
    let { error: h, errorUpdatedAt: g, status: _ } = d;
    m = d.data;
    let v = !1;
    if (t.placeholderData !== void 0 && m === void 0 && _ === `pending`) {
      let e;
      (i?.isPlaceholderData && t.placeholderData === c?.placeholderData
        ? ((e = i.data), (v = !0))
        : (e =
            typeof t.placeholderData == `function`
              ? t.placeholderData(this.#l?.state.data, this.#l)
              : t.placeholderData),
        e !== void 0 && ((_ = `success`), (m = f(i?.data, e, t)), (p = !0)));
    }
    if (t.select && m !== void 0 && !v)
      if (i && m === s?.data && t.select === this.#s) m = this.#c;
      else
        try {
          ((this.#s = t.select),
            (m = t.select(m)),
            (m = f(i?.data, m, t)),
            (this.#c = m),
            (this.#o = null));
        } catch (e) {
          this.#o = e;
        }
    else m === void 0 && (this.#o = null);
    this.#o &&
      ((h = this.#o), (m = this.#c), (g = Date.now()), (_ = `error`), (p = !1));
    let y = d.fetchStatus === `fetching`,
      b = _ === `pending`,
      S = _ === `error`,
      T = b && y,
      E = m !== void 0;
    return {
      status: _,
      fetchStatus: d.fetchStatus,
      isPending: b,
      isSuccess: _ === `success`,
      isError: S,
      isInitialLoading: T,
      isLoading: T,
      data: m,
      dataUpdatedAt: d.dataUpdatedAt,
      error: h,
      errorUpdatedAt: g,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: e.isFetched(),
      isFetchedAfterMount:
        d.dataUpdateCount > l.dataUpdateCount ||
        d.errorUpdateCount > l.errorUpdateCount,
      isFetching: y,
      isRefetching: y && !b,
      isLoadingError: S && !E,
      isPaused: d.fetchStatus === `paused`,
      isPlaceholderData: p,
      isRefetchError: S && E,
      isStale: w(e, t),
      refetch: this.refetch,
      isEnabled: o(t.enabled, e) !== !1,
    };
  }
  updateResult() {
    let e = this.#r,
      t = this.createResult(this.#t, this.options);
    if (
      ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#l = this.#t),
      s(t, e))
    )
      return;
    this.#r = t;
    let n = (() => {
      if (!e) return !0;
      let { notifyOnChangeProps: t } = this.options,
        n = typeof t == `function` ? t() : t;
      if (n === `all` || (!n && !this.#p.size)) return !0;
      let r = new Set(n ?? this.#p);
      return (
        this.options.throwOnError && r.add(`error`),
        Object.keys(this.#r).some((t) => {
          let n = t;
          return this.#r[n] !== e[n] && r.has(n);
        })
      );
    })();
    d.batch(() => {
      (n &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: `observerResultsUpdated` }));
    });
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
};
function b(e, t) {
  return (
    o(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    (e.state.status !== `error` || o(t.retryOnMount, e) !== !1)
  );
}
function x(e, t) {
  return b(e, t) || (e.state.data !== void 0 && S(e, t, t.refetchOnMount));
}
function S(e, t, n) {
  if (o(t.enabled, e) !== !1 && o(t.staleTime, e) !== `static`) {
    let r = o(n, e);
    return r === `always` || (r !== !1 && w(e, t));
  }
  return !1;
}
function C(e, t, n, r) {
  return (
    (e !== t || o(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    w(e, n)
  );
}
function w(e, t) {
  return o(t.enabled, e) !== !1 && e.isStaleByTime(o(t.staleTime, e));
}
var T = e(n(), 1),
  E = T.createContext(!1),
  D = () => T.useContext(E);
(E.Provider, t());
function O() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var k = T.createContext(O()),
  A = () => T.useContext(k),
  j = (e, t, n) => {
    let r =
      n?.state.status === `error` && typeof e.throwOnError == `function`
        ? c(e.throwOnError, [n.state.error, n])
        : e.throwOnError;
    (e.suspense || r) && (t.isReset() || (e.retryOnMount = !1));
  },
  M = (e) => {
    T.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  N = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: i,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || c(n, [e.error, r])),
  P = (e) => {
    if (e.suspense) {
      let t = 1e3,
        n = (e) => (e === `static` ? e : Math.max(e ?? t, t)),
        r = e.staleTime;
      ((e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r)),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t)));
    }
  },
  F = (e, t) => e?.suspense && t.isPending,
  I = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function L(e, t, n) {
  let r = D(),
    a = A(),
    o = i(n),
    s = o.defaultQueryOptions(e),
    c = o.getQueryCache().get(s.queryHash),
    l = e.subscribed !== !1;
  ((s._optimisticResults = r ? `isRestoring` : l ? `optimistic` : void 0),
    P(s),
    j(s, a, c),
    M(a));
  let [f] = T.useState(() => new t(o, s)),
    p = f.getOptimisticResult(s),
    m = !r && l;
  if (
    (T.useSyncExternalStore(
      T.useCallback(
        (e) => {
          let t = m ? f.subscribe(d.batchCalls(e)) : u;
          return (f.updateResult(), t);
        },
        [f, m],
      ),
      () => f.getCurrentResult(),
      () => f.getCurrentResult(),
    ),
    T.useEffect(() => {
      f.setOptions(s);
    }, [s, f]),
    F(s, p))
  )
    throw I(s, f, a);
  if (
    N({
      result: p,
      errorResetBoundary: a,
      throwOnError: s.throwOnError,
      query: c,
      suspense: s.suspense,
    })
  )
    throw p.error;
  return s.notifyOnChangeProps ? p : f.trackResult(p);
}
function R(e, t) {
  return L(e, y, t);
}
function z(e) {
  return e;
}
var B = [`Small`, `Medium`, `Large`],
  V = [
    { id: `pizza-maniya`, name: `Pizza Maniya`, emoji: `🍕`, sizes: B },
    { id: `classic-veg`, name: `Classic Veg Pizza`, emoji: `🍕`, sizes: B },
    { id: `simply-veg`, name: `Simply Veg Pizza`, emoji: `🍕`, sizes: B },
    { id: `special-veg`, name: `Special Veg Pizza`, emoji: `🍕`, sizes: B },
    { id: `kullad`, name: `Kullad Pizza`, emoji: `🏺` },
    { id: `burgers`, name: `Burgers`, emoji: `🍔` },
    { id: `sandwiches`, name: `Sandwiches`, emoji: `🥪` },
    { id: `pasta`, name: `Pasta`, emoji: `🍝` },
    { id: `garlic-bread`, name: `Garlic Bread`, emoji: `🥖` },
    { id: `fries`, name: `French Fries`, emoji: `🍟` },
    { id: `wraps`, name: `Wraps`, emoji: `🌯` },
    { id: `mojito`, name: `Mojito`, emoji: `🍹` },
    { id: `shakes`, name: `Shakes`, emoji: `🥤` },
    { id: `cold-coffee`, name: `Cold Coffee`, emoji: `🧋` },
    { id: `hot-coffee`, name: `Hot Coffee`, emoji: `☕` },
    { id: `other`, name: `Desserts`, emoji: `🍫` },
  ],
  H = (e, t) =>
    t.map(([t, n, r]) => ({
      id: `${e}-${t.toLowerCase().replace(/[^a-z0-9]+/g, `-`)}`,
      name: t,
      category: e,
      prices: n,
      ...r,
    })),
  U = (e, t, n) => [e, t, n],
  W = [
    ...H(`pizza-maniya`, [
      [`Four Season`, U(200, 350, 500), { featured: !0 }],
      [`Paneer Bite`, U(200, 350, 500)],
      [`Spicy Lover`, U(200, 350, 500)],
      [`All Toppings`, U(200, 350, 500)],
      [
        `8 Flavoured in One Pizza`,
        [650],
        { note: `Separate sauce charged extra` },
      ],
    ]),
    ...H(`classic-veg`, [
      [`Country Feast`, U(150, 300, 380)],
      [`Farm House`, U(150, 300, 380), { featured: !0 }],
      [`Tandoori Paneer`, U(150, 300, 380), { featured: !0 }],
      [`Zesty Special`, U(150, 300, 380)],
      [`Tandoori Chilli`, U(150, 300, 380)],
    ]),
    ...H(`simply-veg`, [
      [`Cheese Capsicum`, U(100, 180, 280)],
      [`Cheese Corn`, U(100, 180, 280), { featured: !0 }],
      [`Cheese Onion`, U(100, 180, 280)],
      [`Cheese Tomato`, U(100, 180, 280)],
    ]),
    ...H(`special-veg`, [
      [`Cheese Black Olive`, U(130, 230, 330)],
      [`Cheese Paneer`, U(130, 230, 330)],
      [`Cheese Mushroom`, U(130, 230, 330)],
    ]),
    ...H(`kullad`, [
      [`Tandoori Kullad Pizza`, [130]],
      [`All Topping Kullad Pizza`, [150]],
    ]),
    ...H(`burgers`, [
      [`Aloo Tikki`, [50]],
      [`Cheese Aloo Tikki`, [70]],
      [`Double Cheese Burger`, [80], { featured: !0 }],
      [`Veggie King Burger`, [80]],
      [`Cheese Veggie King Burger`, [90]],
      [`Cheese Corn Burger`, [90]],
      [`Cheese Paneer Fillet`, [100]],
    ]),
    ...H(`sandwiches`, [
      [`Mix Veg Sandwich`, [80]],
      [`Pasta Sandwich`, [100]],
      [`Cheese Corn Sandwich`, [100]],
      [`Tandoori Sandwich`, [110]],
      [`Cheese Paneer Sandwich`, [120]],
    ]),
    ...H(`pasta`, [
      [`White Sauce Pasta`, [120]],
      [`Red Sauce Pasta`, [120]],
      [`Mix Sauce Pasta`, [150]],
    ]),
    ...H(`garlic-bread`, [
      [`Stick Garlic Bread`, [100]],
      [`Stuff Garlic Bread`, [120]],
      [`Cheese Bite`, [150]],
    ]),
    ...H(`fries`, [
      [`Crispy French Fries`, [80]],
      [`Masala Fries`, [90]],
      [`Peri Peri Fries`, [120], { featured: !0 }],
    ]),
    ...H(`wraps`, [
      [`Spicy Wrap`, [80]],
      [`Veg. Spicy Wrap`, [90]],
      [`Paneer Wrap`, [120]],
    ]),
    ...H(`mojito`, [
      [`Classic Mojito`, [90]],
      [`Green Apple Mojito`, [100]],
      [`Soft Mojito`, [100]],
      [`Zeera Lemon Mojito`, [120]],
      [`Lemon Mojito`, [120]],
      [`Watermelon Mojito`, [120]],
      [`Fresh Mojito`, [140]],
    ]),
    ...H(`shakes`, [
      [`Oreo with Kit Kat Shake`, [130], { featured: !0 }],
      [`Chocolate Shake`, [100]],
      [`Strawberry Shake`, [100]],
      [`Butter Scotch Shake`, [100]],
      [`Banana Shake`, [80]],
      [`Mango Shake`, [90]],
    ]),
    ...H(`cold-coffee`, [
      [`Classic Cold Coffee`, [80], { featured: !0 }],
      [`Ice Cold Coffee`, [100]],
      [`Chocolate Cold Coffee`, [120]],
      [`Strong Cold Coffee`, [120]],
    ]),
    ...H(`hot-coffee`, [
      [`Regular Hot Coffee`, [50]],
      [`Black Hot Coffee`, [60]],
      [`Strong Hot Coffee`, [70]],
      [`Chocolate Hot Coffee`, [100]],
      [`Creamy Hot Coffee`, [100]],
      [`Brown Hot Coffee`, [110]],
    ]),
    ...H(`other`, [[`Chocolava Cake`, [80]]]),
  ],
  G = (e) =>
    e.prices.length > 1
      ? (V.find((t) => t.id === e.category)?.sizes ?? [])
      : [],
  K = [
    {
      id: `two`,
      title: `Meal for Two`,
      price: 450,
      items: [
        `Medium Cheese Burst Pizza`,
        `Grilled Cheese Sandwich`,
        `Cold Drink (600 ml)`,
      ],
    },
    {
      id: `three`,
      title: `Meal for Three`,
      price: 550,
      items: [
        `Medium Super Magic Pizza`,
        `Small Super Veg Pizza`,
        `Cold Drink (600 ml)`,
        `White Sauce Pasta`,
      ],
    },
    {
      id: `four`,
      title: `Meal for Four`,
      price: 800,
      items: [
        `Veg Supreme Pizza`,
        `2 Aloo Tikki Burgers`,
        `2 Grilled Sandwiches`,
        `Cold Drink (1.25 L)`,
        `French Fries`,
      ],
    },
  ],
  q = [
    {
      id: `pizza-deal`,
      title: `Pizza Offer`,
      text: `Buy 2 mix Large pizzas, get 1 Regular pizza free.`,
    },
    {
      id: `burger-deal`,
      title: `Burger Offer`,
      text: `Buy 2 mix Medium pizzas, get 1 Aloo Tikki burger free.`,
    },
  ],
  J = `Valid while the restaurant runs the offer. Please confirm availability when ordering.`,
  Y = [
    ...K.map((e, t) => ({
      ...e,
      kind: `combo`,
      text: null,
      active: !0,
      sort: t,
    })),
    ...q.map((e, t) => ({
      id: e.id,
      kind: `deal`,
      title: e.title,
      price: null,
      items: [],
      text: e.text,
      active: !0,
      sort: 10 + t,
    })),
  ],
  X = z({
    queryKey: [`catalog`, `menu`],
    queryFn: async () => {
      try {
        let { data: e, error: t } = await m
          .from(`menu_items`)
          .select(`*`)
          .order(`sort`);
        return t || !e || e.length === 0
          ? W
          : e.map((e) => ({
              id: e.id,
              name: e.name,
              category: e.category,
              prices: e.prices,
              note: e.note ?? void 0,
              featured: e.featured,
              available: e.available,
            }));
      } catch {
        return W;
      }
    },
  }),
  Z = z({
    queryKey: [`catalog`, `offers`],
    queryFn: async () => {
      try {
        let { data: e, error: t } = await m
          .from(`offers`)
          .select(`*`)
          .order(`sort`);
        return t || !e || e.length === 0 ? Y : e;
      } catch {
        return Y;
      }
    },
  }),
  Q = z({
    queryKey: [`catalog`, `party`],
    queryFn: async () => {
      try {
        let { data: e, error: t } = await m
          .from(`site_settings`)
          .select(`*`)
          .eq(`id`, 1)
          .single();
        return t || !e
          ? h.partyHall
          : {
              packagePrice: e.party_package_price,
              hourlyRate: e.party_hourly_rate,
              threeHourRate: e.party_three_hour_rate,
              packageItems: e.party_package_items,
            };
      } catch {
        return h.partyHall;
      }
    },
  }),
  $ = () => R({ ...X, placeholderData: W }).data ?? W,
  ee = () =>
    (R({ ...Z, placeholderData: Y }).data ?? Y).filter((e) => e.active),
  te = () => R({ ...Q, placeholderData: h.partyHall }).data ?? h.partyHall;
export {
  ee as a,
  J as c,
  $ as i,
  G as l,
  Z as n,
  te as o,
  Q as r,
  V as s,
  X as t,
  R as u,
};
