globalThis.__nitro_main__ = import.meta.url;
import {
  n as defineLazyEventHandler,
  r as HTTPError,
  t as H3Core,
} from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) return mod.fetch(req);
      if (!promise)
        promise = loader().then((_mod) => (mod = _mod.default || _mod));
      return promise.then((mod) => mod.fetch(req));
    },
  };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
  "/favicon.ico": {
    type: "image/vnd.microsoft.icon",
    etag: '"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y"',
    mtime: "2026-10-26T13:39:01.788Z",
    size: 20373,
    path: "../public/favicon.ico",
  },
  "/robots.txt": {
    type: "text/plain; charset=utf-8",
    etag: '"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0"',
    mtime: "2026-10-26T13:39:01.788Z",
    size: 160,
    path: "../public/robots.txt",
  },
  "/assets/MenuCard-DCefqzhD.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"b3a-WeEF+PVj6Qfmq/ihPxqI7kD4kRE"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 2874,
    path: "../public/assets/MenuCard-DCefqzhD.js",
  },
  "/assets/Offers-CjQxfOq6.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"752-tVsU0Modcx5ZPl3nKgx6pulGX1E"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 1874,
    path: "../public/assets/Offers-CjQxfOq6.js",
  },
  "/assets/PageHeader-BfJsdPcN.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1f8-b3O/2BWAf6mgYGWq2q98fDRHGQM"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 504,
    path: "../public/assets/PageHeader-BfJsdPcN.js",
  },
  "/assets/about-DEowDGRi.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"440-kIgPmMB3zzrm7NpsbGx19fpLaiI"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 1088,
    path: "../public/assets/about-DEowDGRi.js",
  },
  "/assets/account-CMRmpxcH.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"560-eqjvtpube3Ju8CMG1MBYz7lElpk"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 1376,
    path: "../public/assets/account-CMRmpxcH.js",
  },
  "/assets/admin-7jiPd9sN.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"7b0c-XsT/f1PRRIuO89Sq1TDWjIvxW+M"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 31500,
    path: "../public/assets/admin-7jiPd9sN.js",
  },
  "/assets/auth-CJBh5hnA.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"56d4-4InPJpATzYX41VVdjfEO998w1eA"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 22228,
    path: "../public/assets/auth-CJBh5hnA.js",
  },
  "/assets/catalog-iSjdVlqq.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"345f-Yf8KVMr+QZkjISZjWeFTtZAFlWU"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 13407,
    path: "../public/assets/catalog-iSjdVlqq.js",
  },
  "/assets/check-BucXF59w.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"71-8SwXQ+QA5Iq0Cr8shsI8xkOU28I"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 113,
    path: "../public/assets/check-BucXF59w.js",
  },
  "/assets/combo-Bi3pMYRv.jpg": {
    type: "image/jpeg",
    etag: '"2e326-8FdofJ63zfgo/Nh2W1pyIJNGueA"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 189222,
    path: "../public/assets/combo-Bi3pMYRv.jpg",
  },
  "/assets/combo-Dpde6eNl.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"32-jzp4Dlx4vgAE979qOkWfjbnFt2I"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 50,
    path: "../public/assets/combo-Dpde6eNl.js",
  },
  "/assets/contact-18EDAH5p.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"554-r32inMCQjyvx+XP7/wRlaKomHwo"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 1364,
    path: "../public/assets/contact-18EDAH5p.js",
  },
  "/assets/hero-pizza-CKfFawd3.jpg": {
    type: "image/jpeg",
    etag: '"5fb30-UhaYX1Ja7rT5aXs6X8qT4oHJuKk"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 391984,
    path: "../public/assets/hero-pizza-CKfFawd3.jpg",
  },
  "/assets/input-CSjAzpNs.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"289-g0kKmHD6JXXOW1dWXggh4z1BDoM"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 649,
    path: "../public/assets/input-CSjAzpNs.js",
  },
  "/assets/jsx-runtime-BkSabwWG.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"3c1-VkW1xFbt56H2FC99QIi6PTzaFIo"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 961,
    path: "../public/assets/jsx-runtime-BkSabwWG.js",
  },
  "/assets/mail-BNTbLGiX.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"ca-TvBg0jqk59q3cCc2l2iUl4Km3S8"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 202,
    path: "../public/assets/mail-BNTbLGiX.js",
  },
  "/assets/menu-DmElOw50.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"98f-rOfEj0ljDPQA9KmELNDjxqOj3zs"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 2447,
    path: "../public/assets/menu-DmElOw50.js",
  },
  "/assets/message-circle-DBLaYLBS.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"e6-QRHsG9tNf/OmJEgC46Ey6SrcnJY"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 230,
    path: "../public/assets/message-circle-DBLaYLBS.js",
  },
  "/assets/not-found-DIgawKw1.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"37-RTB6YH5iXRKeXz1Sn6ZQ+vS0lnc"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 55,
    path: "../public/assets/not-found-DIgawKw1.js",
  },
  "/assets/offers-B-vych2G.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1a0-1b4uJl4zGbTKoKodBBehDXKpfgc"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 416,
    path: "../public/assets/offers-B-vych2G.js",
  },
  "/assets/party-BPdZ4bSt.jpg": {
    type: "image/jpeg",
    etag: '"3084d-cmM8bR4D7LMwJA906qDwRredhig"',
    mtime: "2026-10-26T13:39:00.499Z",
    size: 198733,
    path: "../public/assets/party-BPdZ4bSt.jpg",
  },
  "/assets/party-hall-BFFDUsEW.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"931-IXsv4TbL76muhxc6cFIGM9xWG5Q"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 2353,
    path: "../public/assets/party-hall-BFFDUsEW.js",
  },
  "/assets/index-CElauyXZ.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"ac9e1-ihmsFjr5TPKjXxmG67j2eDkdNZg"',
    mtime: "2026-10-26T13:39:00.497Z",
    size: 707041,
    path: "../public/assets/index-CElauyXZ.js",
  },
  "/assets/privacy-CXad01ro.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2e5-TcbTQacMbLLNn4WuuVYh6W7wPfA"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 741,
    path: "../public/assets/privacy-CXad01ro.js",
  },
  "/assets/react-BiuhUkGL.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1ebf-RwZSbIxNH7jHDTdGVimxmj+v6Hc"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 7871,
    path: "../public/assets/react-BiuhUkGL.js",
  },
  "/assets/route-DM7Y0mzj.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"8d-NGg7dOFwPPos3vkLfDs+kjNlSlQ"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 141,
    path: "../public/assets/route-DM7Y0mzj.js",
  },
  "/assets/routes-DgFE3LXH.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1e15-3AuoBdWyQRtRgC7hPypMiyGtpNs"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 7701,
    path: "../public/assets/routes-DgFE3LXH.js",
  },
  "/assets/styles-BQhURTLb.css": {
    type: "text/css; charset=utf-8",
    etag: '"17ce6-kBhqQ69RO5//N0wPFSGF1/13KO4"',
    mtime: "2026-10-26T13:39:00.499Z",
    size: 97510,
    path: "../public/assets/styles-BQhURTLb.css",
  },
  "/assets/terms-Bpx3cxMS.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2ec-sajHO1+eOLVFIjAjyU1BjaFbeP0"',
    mtime: "2026-10-26T13:39:00.498Z",
    size: 748,
    path: "../public/assets/terms-Bpx3cxMS.js",
  },
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (public_assets_data_default[id]) return true;
  for (const base in publicAssetBases) if (id.startsWith(base)) return true;
  return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = (m) =>
  function headersRouteRule(event) {
    for (const [key, value] of Object.entries(m.options || {}))
      event.res.headers.set(key, value);
  };
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [
    {
      name: "headers",
      route: "/assets/**",
      handler: headers,
      options: { "cache-control": "public, max-age=31536000, immutable" },
    },
  ];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/");
    if (s.length > 1) {
      if (s[1] === "assets")
        r.unshift({
          data: $0,
          params: { _: s.slice(2).join("/") },
        });
    }
    return r;
  };
})();
var _lazy_6qWkqV = defineLazyEventHandler(
  () => import("./_chunks/renderer-template.mjs"),
);
var findRoute = /* @__PURE__ */ (() => {
  const data = {
    route: "/**",
    handler: _lazy_6qWkqV,
  };
  return (_m, p) => {
    return {
      data,
      params: { _: p.slice(1) },
    };
  };
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(
    typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2),
    res,
  );
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL))
      return {
        status: 302,
        headers: new Headers({
          location: `${baseURL}${url.pathname.slice(1)}${url.search}`,
        }),
      };
  }
  const headers = new Headers(unhandled ? {} : error.headers);
  headers.set("content-type", "application/json; charset=utf-8");
  return {
    status,
    statusText,
    headers,
    body: {
      error: true,
      ...(unhandled
        ? {
            status,
            unhandled: true,
          }
        : typeof error.toJSON === "function"
          ? error.toJSON()
          : {
              status,
              statusText,
              message: error.message,
            }),
    },
  };
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
  for (const handler of errorHandlers)
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) return response;
    } catch (error) {
      console.error(error);
    }
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors)
        errors.push({
          error,
          context: errorCtx,
        });
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return error_handler_default(error, event);
    },
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError,
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) =>
    findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length)
      middleware.push(...routeRules.routeRuleMiddleware);
    if (route?.data?.middleware?.length)
      middleware.push(...route.data.middleware);
    return middleware;
  };
  return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) return instance;
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) return hooks;
  return (nitroApp.hooks = new HookableCore());
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) return { routeRuleMiddleware: [] };
  const routeRules = {};
  for (const layer of m)
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (
          typeof currentRule.options === "object" &&
          typeof rule.options === "object"
        )
          currentRule.options = {
            ...currentRule.options,
            ...rule.options,
          };
        else currentRule.options = rule.options;
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params,
        };
      } else if (rule.options !== false)
        routeRules[rule.name] = {
          ...rule,
          params: layer.params,
        };
    }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort(
    (a, b) => (a.handler?.order || 0) - (b.handler?.order || 0),
  );
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) continue;
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware,
  };
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context,
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) return res;
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:scheduled", {
          controller,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:email", {
          message,
          event: message,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:queue", {
          batch,
          event: batch,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:tail", {
          traces,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:trace", {
          traces,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx,
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({
  fetch(cfRequest, env, context, url) {
    if (env.ASSETS && isPublicAssetURL(url.pathname))
      return env.ASSETS.fetch(cfRequest);
  },
});
//#endregion
export { cloudflare_module_default as default };
