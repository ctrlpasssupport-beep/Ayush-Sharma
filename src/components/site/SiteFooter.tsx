import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { site, telHref } from "@/data/site";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#0e1113] text-white">
      {/* Background overlay with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
      />
      
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        {/* About Section */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-white/70 leading-relaxed">
            Authentic handcrafted pizzas, freshly made crusts, cheesy burgers, and rich shakes made for sharing in {site.city}.
          </p>
          <p className="text-xs text-[#fac564] font-semibold uppercase tracking-wider">
            Free home delivery on orders of ₹{site.delivery.minOrder}+ within {site.delivery.radiusKm} km.
          </p>
          <div className="flex gap-3 pt-2">
            <span className="grid size-9 place-items-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-[#fac564] hover:text-[#fac564] transition-colors cursor-pointer">
              🍕
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-[#fac564] hover:text-[#fac564] transition-colors cursor-pointer">
              🍔
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-[#fac564] hover:text-[#fac564] transition-colors cursor-pointer">
              🥤
            </span>
          </div>
        </div>

        {/* Recent Kitchen Specials / Blog */}
        <div className="space-y-4">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#fac564]">
            Kitchen Specials
          </h4>
          <div className="space-y-3">
            <Link to="/menu" className="flex items-center gap-3 group">
              <img
                src="/images/image_1.jpg"
                alt="Signature Pizza"
                className="size-14 rounded object-cover border border-white/10 group-hover:border-[#fac564] transition-colors"
              />
              <div className="text-xs">
                <p className="font-semibold text-white/90 group-hover:text-[#fac564] transition-colors line-clamp-1">
                  8-Flavoured in One Pizza
                </p>
                <span className="text-white/50">Chef's Signature</span>
              </div>
            </Link>
            <Link to="/menu" className="flex items-center gap-3 group">
              <img
                src="/images/image_2.jpg"
                alt="Kullad Pizza"
                className="size-14 rounded object-cover border border-white/10 group-hover:border-[#fac564] transition-colors"
              />
              <div className="text-xs">
                <p className="font-semibold text-white/90 group-hover:text-[#fac564] transition-colors line-clamp-1">
                  Clay Pot Kullad Pizza
                </p>
                <span className="text-white/50">Gurugram's Favourite</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Explore / Services */}
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#fac564]">
            Explore
          </h4>
          <div className="flex flex-col space-y-2">
            <Link to="/menu" className="text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors">
              Full Menu
            </Link>
            <Link to="/offers" className="text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors">
              Hot Deals & Combos
            </Link>
            <Link to="/party-hall" className="text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors">
              Party Hall & Catering
            </Link>
            <Link to="/about" className="text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors">
              About Our Restaurant
            </Link>
            <Link to="/contact" className="text-xs uppercase tracking-wider text-white/70 hover:text-[#fac564] transition-colors">
              Contact & Directions
            </Link>
            <Link to="/admin" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#fac564] hover:underline pt-2">
              <ShieldCheck className="size-3.5" /> Admin Dashboard
            </Link>
          </div>
        </div>

        {/* Have a Question / Contact info */}
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#fac564]">
            Have a Question?
          </h4>
          <div className="space-y-3 text-xs text-white/75">
            <a
              href={telHref}
              className="flex items-center gap-2.5 text-white/80 hover:text-[#fac564] transition-colors"
            >
              <Phone className="size-4 text-[#fac564] shrink-0" />
              <span>{site.phone}</span>
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2.5 text-white/80 hover:text-[#fac564] transition-colors"
            >
              <MapPin className="size-4 text-[#fac564] shrink-0 mt-0.5" />
              <span>Sector 4, Gurugram, Haryana</span>
            </a>
            <div className="flex items-center gap-2.5 text-white/70">
              <Clock className="size-4 text-[#fac564] shrink-0" />
              <span>Open Daily: 11:00 AM – 11:00 PM</span>
            </div>
            <div className="flex items-center gap-2.5 text-white/70">
              <Mail className="size-4 text-[#fac564] shrink-0" />
              <span>support@subdaypizza.com</span>
            </div>
          </div>
          <div className="flex gap-4 pt-2 text-[11px] text-white/50">
            <Link to="/privacy" className="hover:text-white/80">Privacy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white/80">Terms</Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/50">
        Copyright © {new Date().getFullYear()} All rights reserved | <span className="text-[#fac564]">PizzaHub</span> Gurugram
      </div>
    </footer>
  );
}
