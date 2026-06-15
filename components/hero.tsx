"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BookOpenCheck, Sparkles } from "lucide-react";
import { FloatingParticles } from "@/components/floating-particles";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-73px)] overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <FloatingParticles />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_28%),linear-gradient(180deg,#09090b_0%,#0b1120_55%,#09090b_100%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-180px)] max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
            <Sparkles aria-hidden="true" className="size-4" />
            Capacitacion interactiva para monitores academicos
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            MonitorHub
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Una experiencia web moderna para entrenar criterio, acompanamiento y
            toma de decisiones en la monitoria academica de la UNAD.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/responsabilidades"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
            >
              Iniciar Capacitacion
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/juego"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Ir al juego
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="glass-panel rounded-2xl p-5"
        >
          <div className="rounded-xl border border-white/10 bg-zinc-950/70 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-zinc-400">Panel de entrenamiento</p>
                <p className="mt-1 font-semibold text-white">Ruta Monitor UNAD</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Activo
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                ["Responsabilidades", "C, D, G, K, M"],
                ["Caso practico", "Herramientas Digitales"],
                ["Simulacion", "Monitor Quest"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="text-sm text-zinc-400">{label}</span>
                  <span className="text-sm font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-cyan-300/10 p-4">
                <BookOpenCheck className="mb-4 size-5 text-cyan-300" aria-hidden="true" />
                <p className="text-3xl font-semibold text-white">5</p>
                <p className="mt-1 text-sm text-zinc-400">competencias de monitoria</p>
              </div>
              <div className="rounded-xl bg-blue-500/10 p-4">
                <BarChart3 className="mb-4 size-5 text-blue-300" aria-hidden="true" />
                <p className="text-3xl font-semibold text-white">100%</p>
                <p className="mt-1 text-sm text-zinc-400">practica con retroalimentacion</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
