"use client";

import Link from "next/link";
import { useState } from "react";

const mobileLinks = [
  { href: "/ia", label: "IA", className: "text-purple-300 hover:bg-purple-500/10" },
  { href: "/programacao", label: "Programação", className: "text-blue-300 hover:bg-blue-500/10" },
  { href: "/aplicativos", label: "Aplicativos", className: "text-emerald-300 hover:bg-emerald-500/10" },
  { href: "/projetos-codigos", label: "Projetos & Códigos", className: "text-pink-300 hover:bg-pink-500/10" },
  { href: "/comunidade", label: "Comunidade", className: "text-purple-300 hover:bg-purple-500/10" },
  { href: "/noticias", label: "Notícias", className: "text-slate-200 hover:bg-white/10" },
  { href: "/about", label: "Sobre", className: "text-slate-200 hover:bg-white/10" },
  { href: "/contato", label: "Contato", className: "text-slate-200 hover:bg-white/10" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex items-center justify-center rounded-lg bg-purple-950/50 px-4 py-2.5 text-sm font-bold text-purple-300 shadow-lg shadow-purple-500/10 transition-colors hover:bg-purple-900/60"
      >
        <span className="mr-2">{open ? "✕" : "☰"}</span>
        Menu
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute left-4 right-4 top-full mt-3 grid gap-2 rounded-xl border border-white/10 bg-slate-900/98 p-3 shadow-2xl shadow-black/50 backdrop-blur-md"
        >
          {mobileLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-4 py-3 font-medium transition-colors ${item.className}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
