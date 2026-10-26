import {
  a as TSS_SERVER_FUNCTION,
  l as createServerFn,
} from "./createServerFn-DDDJMFWM.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/email-login.functions-RuBB49yy.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true,
  });
};
var GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
async function sha256(text) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
var emailSchema = objectType({
  email: stringType().trim().toLowerCase().email().max(255),
});
var sendLoginCode_createServerFn_handler = createServerRpc(
  {
    id: "fc9cd6781336c6c219315543938fa409c79c3d30c6a0e332dff1bd6e0e3ad934",
    name: "sendLoginCode",
    filename: "src/lib/email-login.functions.ts",
  },
  (opts) => sendLoginCode.__executeServer(opts),
);
var sendLoginCode = createServerFn({ method: "POST" })
  .inputValidator((d) => emailSchema.parse(d))
  .handler(sendLoginCode_createServerFn_handler, async ({ data }) => {
    const { supabaseAdmin } = await import("./client.server-B820_Lwf.mjs");
    const LOVABLE_API_KEY = processModule.env["LOVABLE_API_KEY"];
    const RESEND_API_KEY = processModule.env["RESEND_API_KEY"];
    if (!LOVABLE_API_KEY || !RESEND_API_KEY)
      return {
        ok: false,
        error: "Email service is not configured.",
      };
    const { data: recent } = await supabaseAdmin
      .from("email_login_codes")
      .select("created_at")
      .eq("email", data.email)
      .gte(
        "created_at",
        /* @__PURE__ */ new Date(Date.now() - 45e3).toISOString(),
      )
      .limit(1);
    if (recent && recent.length)
      return {
        ok: false,
        error: "Please wait a moment before requesting another code.",
      };
    const code = String(
      (crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0] ?? 0) %
        1e6,
    ).padStart(6, "0");
    await supabaseAdmin.from("email_login_codes").insert({
      email: data.email,
      code_hash: await sha256(`${data.email}:${code}`),
      expires_at: new Date(Date.now() + 6e5).toISOString(),
    });
    const res = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Subday Pizza <onboarding@resend.dev>",
        to: [data.email],
        subject: `${code} is your Subday Pizza login code`,
        html: `<div style="font-family:sans-serif;max-width:420px;margin:auto;padding:24px;background:#FFF7EC;border-radius:16px">
          <h2 style="color:#D94335;margin:0 0 8px">Subday Pizza</h2>
          <p style="color:#242320">Your login code is:</p>
          <p style="font-size:32px;font-weight:800;letter-spacing:8px;color:#242320">${code}</p>
          <p style="color:#74736D;font-size:13px">It expires in 10 minutes. If you didn't request it, ignore this email.</p></div>`,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`Resend failed [${res.status}]: ${body}`);
      return {
        ok: false,
        error: `Could not send email (${res.status}). ${body.slice(0, 200)}`,
      };
    }
    return { ok: true };
  });
var verifyLoginCode_createServerFn_handler = createServerRpc(
  {
    id: "b13c8984066633bc5adb7290f4f67a31283729ac6f48c44b1f6455da5eb65c53",
    name: "verifyLoginCode",
    filename: "src/lib/email-login.functions.ts",
  },
  (opts) => verifyLoginCode.__executeServer(opts),
);
var verifyLoginCode = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    emailSchema.extend({ code: stringType().regex(/^\d{6}$/) }).parse(d),
  )
  .handler(verifyLoginCode_createServerFn_handler, async ({ data }) => {
    const { supabaseAdmin } = await import("./client.server-B820_Lwf.mjs");
    const { data: rows } = await supabaseAdmin
      .from("email_login_codes")
      .select("*")
      .eq("email", data.email)
      .order("created_at", { ascending: false })
      .limit(1);
    const row = rows?.[0];
    if (!row || new Date(row.expires_at) < /* @__PURE__ */ new Date())
      return {
        ok: false,
        error: "Code expired. Request a new one.",
      };
    if (row.attempts >= 5)
      return {
        ok: false,
        error: "Too many attempts. Request a new code.",
      };
    if (row.code_hash !== (await sha256(`${data.email}:${data.code}`))) {
      await supabaseAdmin
        .from("email_login_codes")
        .update({ attempts: row.attempts + 1 })
        .eq("id", row.id);
      return {
        ok: false,
        error: "That code is not correct.",
      };
    }
    await supabaseAdmin
      .from("email_login_codes")
      .delete()
      .eq("email", data.email);
    await supabaseAdmin.auth.admin
      .createUser({
        email: data.email,
        email_confirm: true,
      })
      .catch(() => null);
    const { data: link, error } = await supabaseAdmin.auth.admin.generateLink({
      type: "magiclink",
      email: data.email,
    });
    if (error || !link.properties?.hashed_token)
      return {
        ok: false,
        error: "Could not sign you in. Try again.",
      };
    return {
      ok: true,
      tokenHash: link.properties.hashed_token,
    };
  });
//#endregion
export {
  sendLoginCode_createServerFn_handler,
  verifyLoginCode_createServerFn_handler,
};
