import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { useSessionUser } from "@/hooks/use-session";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/offers", label: "Combos" },
  { to: "/party-hall", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 group py-1"
      aria-label="PizzaHub home"
    >
      <span className="grid size-10 place-items-center rounded-full bg-[#fac564] text-xl text-[#121618] shadow-md transition-transform group-hover:scale-105">
        🍕
      </span>
      <div className="flex flex-col leading-tight">
        <span className="font-display text-2xl font-bold uppercase tracking-wider text-white">
          PIZZA<span className="text-[#fac564]">HUB</span>
        </span>
        <span className="font-cursive text-sm text-[#fac564] tracking-wider -mt-1">
          Delicious
        </span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const { lines, setOpen } = useCart();
  const user = useSessionUser();
  const [mobile, setMobile] = useState(false);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121618]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-[#fac564]"
              activeProps={{ className: "!text-[#fac564] font-bold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="soft"
            size="icon"
            className="size-10 overflow-hidden rounded-full border-white/20 bg-white/5 hover:border-[#fac564]"
            asChild
            aria-label={user ? "My account" : "Sign in"}
          >
            <Link to={user ? "/account" : "/auth"}>
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName ?? "Account"}
                  className="size-full rounded-full object-cover"
                />
              ) : (
                <User className="size-4 text-white hover:text-[#fac564]" />
              )}
            </Link>
          </Button>

          <Button
            variant="soft"
            size="icon"
            className="relative size-10 rounded-full border-white/20 bg-white/5 hover:border-[#fac564]"
            onClick={() => setOpen(true)}
            aria-label="Open order"
          >
            <ShoppingBag className="size-4 text-white" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#fac564] text-[11px] font-extrabold text-[#121618]">
                {count}
              </span>
            )}
          </Button>

          <Button
            variant="hero"
            size="default"
            className="hidden sm:inline-flex px-5 py-2 text-xs font-bold uppercase tracking-wider"
            asChild
          >
            <Link to="/menu">Order Now</Link>
          </Button>

          <Sheet open={mobile} onOpenChange={setMobile}>
            <SheetTrigger asChild>
              <Button
                variant="soft"
                size="icon"
                className="size-10 lg:hidden rounded-full border-white/20 bg-white/5"
                aria-label="Open menu"
              >
                <Menu className="size-5 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#121618] border-white/10 text-white">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-8 flex flex-col gap-2">
                <div className="mb-4 pb-4 border-b border-white/10">
                  <Logo />
                </div>
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setMobile(false)}
                    className="rounded-lg px-4 py-3 font-display text-sm font-bold uppercase tracking-widest text-white/80 hover:bg-white/5 hover:text-[#fac564]"
                    activeProps={{ className: "!text-[#fac564] bg-white/5" }}
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                  <Button
                    variant="hero"
                    className="w-full py-3 text-xs uppercase font-bold tracking-widest"
                    asChild
                  >
                    <Link to="/menu" onClick={() => setMobile(false)}>
                      Order Now
                    </Link>
                  </Button>
                  <Button
                    variant="outlineWhite"
                    className="w-full py-3 text-xs uppercase font-bold tracking-widest"
                    asChild
                  >
                    <Link to={user ? "/account" : "/auth"} onClick={() => setMobile(false)}>
                      {user ? "My Account" : "Sign in / Admin"}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
