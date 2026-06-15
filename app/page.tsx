import { ArrowRight, BrainCircuit, ShieldCheck, UsersRound } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-y border-white/10 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Experiencia SaaS educativa
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Una ruta pensada para aprender haciendo.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Rol claro",
                text: "Define limites del monitor: orientar, acompanhar, registrar y escalar cuando corresponde.",
              },
              {
                icon: BrainCircuit,
                title: "Criterio aplicado",
                text: "Convierte responsabilidades institucionales en decisiones concretas frente a casos reales.",
              },
              {
                icon: UsersRound,
                title: "Enfoque humano",
                text: "Prioriza seguimiento, permanencia y comunicacion clara con estudiantes.",
              },
            ].map((item) => (
              <article key={item.title} className="glass-panel rounded-2xl p-5">
                <item.icon className="size-6 text-cyan-300" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>
          <Link
            href="/responsabilidades"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
          >
            Continuar ruta
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
