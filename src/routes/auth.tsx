import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { supabase } from "@/integrations/supabase/client";
import { sendLoginCode, verifyLoginCode } from "@/lib/email-login.functions";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — PizzaHub Gurugram" },
      {
        name: "description",
        content: "Sign in to PizzaHub with your Google Account or email code.",
      },
      { property: "og:title", content: "Sign in — PizzaHub" },
      {
        property: "og:description",
        content: "Sign in with Google to access order history and admin dashboard.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const send = useServerFn(sendLoginCode);
  const verify = useServerFn(verifyLoginCode);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);

  async function google() {
    setBusy(true);
    try {
      const { signInWithGoogle } = await import("@/lib/auth");
      const user = await signInWithGoogle();
      toast.success(`Welcome back, ${user.displayName || user.email}!`);
      navigate({ to: "/account" });
    } catch (err: unknown) {
      console.error(err);
      toast.error("Google sign-in was canceled or could not be completed.");
    } finally {
      setBusy(false);
    }
  }

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const r = await send({ data: { email } }).catch(
      () => ({ ok: false, error: "Something went wrong." }) as const,
    );
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
    const r = await verify({ data: { email, code } }).catch(
      () => ({ ok: false, error: "Something went wrong." }) as const,
    );
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
    toast.success("Welcome to PizzaHub!");
    navigate({ to: "/account" });
  }

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#121618] text-white">
      {/* Background with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
      />

      <div className="relative w-full max-w-md rounded-xl bg-[#15191b] p-8 sm:p-10 border border-white/10 shadow-2xl">
        <div className="text-center">
          <span className="grid size-14 mx-auto place-items-center rounded-full bg-[#fac564] text-2xl text-[#121618] mb-4 shadow-lg">
            🍕
          </span>
          <span className="font-cursive text-xl text-[#fac564]">Welcome Back</span>
          <h1 className="font-display text-3xl font-bold uppercase tracking-wider text-white mt-1">
            Pizza<span className="text-[#fac564]">Hub</span> Account
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-white/60">
            Sign in with Google to save your delivery addresses and access restaurant administration.
          </p>
        </div>

        {/* Google Authentication Button */}
        <Button
          variant="hero"
          size="lg"
          className="mt-8 w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(250,197,100,0.3)]"
          disabled={busy}
          onClick={google}
        >
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
            <path
              fill="currentColor"
              d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.67 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.96S8.78 6.26 12 6.26c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.7 14.55 2.75 12 2.75 6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c5.34 0 8.88-3.75 8.88-9.04 0-.6-.07-1.06-.15-1.51z"
            />
          </svg>
          Continue with Google
        </Button>

        <div className="my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/40">
          <span className="h-px flex-1 bg-white/10" /> or email code{" "}
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {step === "email" ? (
          <form onSubmit={sendCode} className="space-y-4">
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none rounded"
              aria-label="Email"
            />
            <Button
              type="submit"
              variant="outlineWhite"
              size="lg"
              className="w-full py-3 text-xs uppercase font-bold tracking-widest"
              disabled={busy}
            >
              <Mail className="size-4 mr-2" /> {busy ? "Sending…" : "Email me a sign-in code"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-xs text-white/70 text-center">
              Enter the 6-digit code sent to <b className="text-[#fac564]">{email}</b>
            </p>
            <div className="flex justify-center py-2">
              <InputOTP
                maxLength={6}
                value={code}
                onChange={setCode}
                onComplete={verifyCode}
              >
                <InputOTPGroup className="gap-1.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className="size-11 rounded border-white/20 bg-[#0e1113] text-lg text-white"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button
              variant="hero"
              size="lg"
              className="w-full py-3 text-xs uppercase font-bold tracking-widest"
              disabled={busy || code.length !== 6}
              onClick={verifyCode}
            >
              {busy ? "Checking…" : "Sign In"}
            </Button>
            <div className="text-center">
              <button
                type="button"
                className="text-xs text-white/50 hover:text-[#fac564] underline transition-colors"
                onClick={() => {
                  setStep("email");
                  setCode("");
                }}
              >
                Use a different email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
