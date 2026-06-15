import { QuizCard } from "@/components/quiz-card";

export default function GamePage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.14),transparent_28%),#09090b] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Monitor Quest
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Simulador de decisiones para situaciones reales.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Responde cada caso, recibe retroalimentacion inmediata y mide tu
            criterio de orientacion como monitor academico.
          </p>
        </div>
        <QuizCard />
      </div>
    </section>
  );
}
