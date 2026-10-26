import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/client.server-B820_Lwf.js
function isNewSupabaseApiKey(value) {
  return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input instanceof Request
        ? input.headers
        : void 0,
    );
    if (init?.headers)
      new Headers(init.headers).forEach((value, key) =>
        headers.set(key, value),
      );
    if (
      isNewSupabaseApiKey(supabaseKey) &&
      headers.get("Authorization") === `Bearer ${supabaseKey}`
    )
      headers.delete("Authorization");
    headers.set("apikey", supabaseKey);
    return fetch(input, {
      ...init,
      headers,
    });
  };
}
function createSupabaseAdminClient() {
  const SUPABASE_URL = processModule.env["SUPABASE_URL"];
  const SUPABASE_SERVICE_ROLE_KEY =
    processModule.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.warn(
      "[AI Studio] Supabase server credentials not configured. Using local fallback.",
    );
    const mockQueryBuilder = {
      select: () => mockQueryBuilder,
      order: () => mockQueryBuilder,
      eq: () => mockQueryBuilder,
      limit: () => mockQueryBuilder,
      single: async () => ({
        data: null,
        error: null,
      }),
      then: (resolve) =>
        Promise.resolve({
          data: [],
          error: null,
        }).then(resolve),
      insert: async () => ({
        data: null,
        error: null,
      }),
      update: async () => ({
        data: null,
        error: null,
      }),
      delete: async () => ({
        data: null,
        error: null,
      }),
    };
    return {
      from: () => mockQueryBuilder,
      auth: {
        admin: {
          createUser: async () => ({
            data: null,
            error: null,
          }),
          generateLink: async () => ({
            data: {
              properties: {
                email_otp: "123456",
                hashed_token: "mock",
              },
            },
            error: null,
          }),
        },
      },
    };
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    global: { fetch: createSupabaseFetch(SUPABASE_SERVICE_ROLE_KEY) },
    auth: {
      storage: void 0,
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
var _supabaseAdmin;
var supabaseAdmin = new Proxy(
  {},
  {
    get(_, prop, receiver) {
      if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
      return Reflect.get(_supabaseAdmin, prop, receiver);
    },
  },
);
//#endregion
export { supabaseAdmin };
