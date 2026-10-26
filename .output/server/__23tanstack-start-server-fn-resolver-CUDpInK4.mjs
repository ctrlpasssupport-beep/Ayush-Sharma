//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CUDpInK4.js
var manifest = {
  b13c8984066633bc5adb7290f4f67a31283729ac6f48c44b1f6455da5eb65c53: {
    functionName: "verifyLoginCode_createServerFn_handler",
    importer: () => import("./_ssr/email-login.functions-RuBB49yy.mjs"),
  },
  fc9cd6781336c6c219315543938fa409c79c3d30c6a0e332dff1bd6e0e3ad934: {
    functionName: "sendLoginCode_createServerFn_handler",
    importer: () => import("./_ssr/email-login.functions-RuBB49yy.mjs"),
  },
};
async function getServerFnById(id, access) {
  const serverFnInfo = manifest[id];
  if (!serverFnInfo)
    throw new Error("Server function info not found for " + id);
  const fnModule = (serverFnInfo.module ??= await serverFnInfo.importer());
  if (!fnModule)
    throw new Error("Server function module not resolved for " + id);
  const action = fnModule[serverFnInfo.functionName];
  if (!action)
    throw new Error(
      "Server function module export not resolved for serverFn ID: " + id,
    );
  return action;
}
//#endregion
export { getServerFnById as t };
