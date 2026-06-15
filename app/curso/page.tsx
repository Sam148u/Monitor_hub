import Link from "next/link";
import { ArrowRight, CheckCircle2, Target } from "lucide-react";
import { CourseRoadmap } from "@/components/course-roadmap";
import { course, roadmap } from "@/data/syllabus";

export default function CoursePage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_30%),#09090b] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Caso practico
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {course.title}
            </h1>
            <div className="glass-panel mt-7 rounded-2xl p-5">
              <Target className="size-6 text-cyan-300" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold text-white">Proposito del curso</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{course.purpose}</p>
            </div>
          </div>

          <div className="grid gap-5">
            <article className="glass-panel rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-white">Competencias</h2>
              <div className="mt-5 grid gap-3">
                {course.competencies.map((competency) => (
                  <div key={competency} className="flex gap-3 rounded-xl bg-white/[0.03] p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-300" aria-hidden="true" />
                    <p className="text-sm leading-6 text-zinc-300">{competency}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-panel rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-white">Resultados de aprendizaje</h2>
              <div className="mt-5 grid gap-3">
                {course.results.map((result) => (
                  <div key={result} className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-6 text-blue-50">
                    {result}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-7 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Roadmap visual
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Retos que el monitor puede usar para orientar al estudiante.
            </h2>
          </div>
          <CourseRoadmap steps={roadmap} />
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/juego"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
          >
            Practicar con Monitor Quest
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
