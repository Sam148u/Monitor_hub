"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpenCheck, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/responsabilidades", label: "Responsabilidades" },
  { href: "/curso", label: "Curso" },
  { href: "/juego", label: "Monitor Quest" },
  { href: "/cierre", label: "Cierre" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <img 
            src="/logounad.png" 
            alt="Logo UNAD" 
            className="h-10 w-auto"
          />
          <span>
            <span className="block text-sm font-semibold tracking-wide text-white">
              MonitorHub
            </span>
            <span className="block text-xs text-zinc-400">UNAD Training Lab</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring relative rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                {active ? (
                  <motion.span
                    layoutId="active-nav"
                   className="absolute inset-0 rounded-full bg-blue-600/15"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <Link
          href="/juego"
          className="focus-ring hidden items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 lg:flex"
        >
          <BookOpenCheck aria-hidden="true" className="size-4" />
          Practicar
        </Link>

        <button
          type="button"
          className="focus-ring inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/10 px-4 py-3 md:hidden"
        >
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`focus-ring rounded-lg px-3 py-3 text-sm font-medium ${
                    active
                      ? "bg-blue-600/15 text-blue-300"
                      : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
