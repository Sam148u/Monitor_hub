import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, Lightbulb, Sparkles } from "lucide-react";
import { responsibilities } from "@/data/responsibilities";

export function generateStaticParams() {
  return responsibilities.map((responsibility) => ({
    slug: responsibility.id.toLowerCase(),
  }));
}

export default async function ResponsibilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const responsibility = responsibilities.find((item) => item.id.toLowerCase() === slug);

  if (!responsibility) {
    notFound();
  }

  const currentIndex = responsibilities.findIndex((item) => item.id === responsibility.id);
  const previous = responsibilities[(currentIndex - 1 + responsibilities.length) % responsibilities.length];
  const next = responsibilities[(currentIndex + 1) % responsibilities.length];

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#09090b_0%,#111827_45%,#09090b_100%)] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/responsabilidades/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-blue-400/40 hover:bg-blue-500/10"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver a responsabilidades
          </Link>
          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            Guía interactiva • {responsibility.id}
          </span>
        </div>

        <article className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/90 shadow-2xl shadow-blue-950/30">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Responsabilidad {responsibility.id}
              </p>
              <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {responsibility.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
                {responsibility.description}
              </p>

              <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-5 text-blue-50 shadow-inner shadow-blue-950/20">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                  <Sparkles className="size-4" aria-hidden="true" />
                  Objetivo de la acción
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-100">{responsibility.objective}</p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Qué observar</p>
                  <ul className="mt-3 space-y-3 text-sm text-zinc-100">
                    {responsibility.whatToObserve.map((item) => (
                      <li key={item} className="flex gap-3 rounded-2xl bg-zinc-900/70 p-3">
                        <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Cómo orientar</p>
                  <ul className="mt-3 space-y-3 text-sm text-zinc-100">
                    {responsibility.howToGuide.map((item) => (
                      <li key={item} className="flex gap-3 rounded-2xl bg-zinc-900/70 p-3">
                        <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-200" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 shadow-inner shadow-blue-900/10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Ejemplo visual</p>
                <div className="mt-4 rounded-3xl border border-blue-500/20 bg-blue-500/8 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-blue-100">
                    <span>Indicador</span>
                    <span>Acción</span>
                  </div>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/8 p-3 text-sm text-emerald-50">
                      {responsibility.visualExample}
                    </div>
                    <div className="rounded-2xl border border-amber-400/20 bg-amber-400/8 p-3 text-sm text-amber-50">
                      {responsibility.interactionTip}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Cuándo activar apoyo</p>
                <ul className="mt-3 space-y-3 text-sm text-zinc-100">
                  {responsibility.whenToSupport.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-950/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Idea para exponer</p>
                <p className="mt-3 text-sm leading-7 text-zinc-100">
                  Use este caso como ejemplo de conversación: primero observe, luego orienta y, si el riesgo se mantiene, active apoyo. Esa secuencia hace la responsabilidad visible y fácil de recordar.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href={`/responsabilidades/${previous.id.toLowerCase()}/`}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Responsabilidad anterior</p>
            <p className="mt-2 text-xl font-semibold">{previous.title}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm text-blue-100">
              Explorar <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href={`/responsabilidades/${next.id.toLowerCase()}/`}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Siguiente responsabilidad</p>
            <p className="mt-2 text-xl font-semibold">{next.title}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm text-blue-100">
              Continuar <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
