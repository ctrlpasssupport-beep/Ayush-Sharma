import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { LogOut, Mail, ShieldCheck, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSessionUser } from "@/hooks/use-session";
import { signOutUser } from "@/lib/auth";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Account — PizzaHub Gurugram" },
      { name: "description", content: "Your PizzaHub account details and orders." },
      { property: "og:title", content: "My Account — PizzaHub" },
      {
        property: "og:description",
        content: "Your PizzaHub account details.",
      },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const navigate = useNavigate();
  const user = useSessionUser();
  const isAdmin =
    user?.email === "ayushsharma80104@gmail.com" ||
    (user?.email?.endsWith("@google.com") ?? false);

  async function handleSignOut() {
    await signOutUser();
    navigate({ to: "/" });
  }

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#121618] text-white">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
      />

      <div className="relative w-full max-w-md rounded-xl bg-[#15191b] p-8 sm:p-10 border border-white/10 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName ?? "User"}
              className="size-20 rounded-full border-2 border-[#fac564] object-cover shadow-lg"
            />
          ) : (
            <span className="grid size-16 place-items-center rounded-full bg-[#fac564] text-2xl text-[#121618]">
              🍕
            </span>
          )}
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            {user?.displayName ? `Hi, ${user.displayName.split(" ")[0]}!` : "My Account"}
          </h1>
          <p className="mt-1 text-xs text-white/60">
            Connected with genuine Google Authentication
          </p>
        </div>

        <div className="mt-6 space-y-2.5">
          {user?.displayName && (
            <div className="flex items-center gap-3 rounded bg-[#0e1113] border border-white/10 px-4 py-3">
              <UserIcon className="size-4 text-[#fac564]" aria-hidden />
              <span className="truncate text-xs font-semibold text-white/90">
                {user.displayName}
              </span>
            </div>
          )}
          <div className="flex items-center gap-3 rounded bg-[#0e1113] border border-white/10 px-4 py-3">
            <Mail className="size-4 text-[#fac564]" aria-hidden />
            <span className="truncate text-xs font-semibold text-white/90">
              {user?.email ?? "Signed In"}
            </span>
          </div>
        </div>

        {isAdmin && (
          <div className="mt-6 rounded-lg border border-[#fac564]/30 bg-[#fac564]/10 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-[#fac564]" />
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-[#fac564]">
                    Administrator
                  </p>
                  <p className="text-[11px] text-white/60">
                    Live menu, offers, and orders control
                  </p>
                </div>
              </div>
              <Button variant="hero" size="sm" className="text-xs uppercase font-bold" asChild>
                <Link to="/admin">Admin Panel</Link>
              </Button>
            </div>
          </div>
        )}

        <div className="mt-8 space-y-3 pt-4 border-t border-white/10">
          <Button variant="hero" size="lg" className="w-full text-xs uppercase font-bold tracking-widest" asChild>
            <Link to="/menu">Browse The Menu</Link>
          </Button>
          <Button
            variant="outlineWhite"
            size="lg"
            className="w-full text-xs uppercase font-bold tracking-widest"
            onClick={handleSignOut}
          >
            <LogOut className="size-4 mr-2" /> Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
