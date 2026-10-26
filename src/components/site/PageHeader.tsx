import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function PageHeader({
  eyebrow,
  title,
  children,
  bgImage = "/images/bg_3.jpg",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  bgImage?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-[#121618] border-b border-white/10">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        {eyebrow && (
          <p className="font-cursive text-2xl sm:text-3xl text-[#fac564] mb-2 tracking-wide">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-widest text-white">
          {title}
        </h1>
        
        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          <Link to="/" className="hover:text-[#fac564] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#fac564]">{title}</span>
        </div>

        {children && (
          <div className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
