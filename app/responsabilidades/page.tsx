import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResponsibilityCard } from "@/components/responsibility-card";
import { responsibilities } from "@/data/responsibilities";

export default function ResponsibilitiesPage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_32%),#09090b] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Responsabilidades del monitor
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Del documento institucional a la accion diaria.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Estas responsabilidades se presentan como decisiones operativas:
            que observar, como orientar y cuando activar apoyo academico.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {responsibilities.map((responsibility, index) => (
            <ResponsibilityCard
              key={responsibility.id}
              responsibility={responsibility}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/curso"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
          >
            Aplicar al caso practico
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
