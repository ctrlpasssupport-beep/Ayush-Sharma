import { n as __toESM } from "../_runtime.mjs";
import { c as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as supabase } from "./client-D-3bcQUa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-session-BwxwNWeq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useSessionUser() {
  const [user, setUser] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data } = supabase.auth.onAuthStateChange((_e, s) =>
      setUser(s?.user ?? null),
    );
    return () => data.subscription.unsubscribe();
  }, []);
  return user;
}
//#endregion
export { useSessionUser as t };
