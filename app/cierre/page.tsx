"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ArrowRight, BadgeCheck, HeartHandshake, RotateCcw } from "lucide-react";

type StoredResult = {
  score: number | null;
  total: number | null;
};

function getResultSnapshot(): string {
  if (typeof window === "undefined") {
    return "";
  }

  const storedScore = window.localStorage.getItem("monitorhub-score");
  const storedTotal = window.localStorage.getItem("monitorhub-total");

  if (!storedScore || !storedTotal) {
    return "";
  }

  return `${storedScore}:${storedTotal}`;
}

function parseResultSnapshot(snapshot: string): StoredResult {
  if (!snapshot) {
    return { score: null, total: null };
  }

  const [score, total] = snapshot.split(":").map(Number);

  return { score, total };
}

function subscribeToResultUpdates(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);

  return () => window.removeEventListener("storage", onStoreChange);
}

export default function ClosingPage() {
  const snapshot = useSyncExternalStore(
    subscribeToResultUpdates,
    getResultSnapshot,
    () => "",
  );
  const { score, total } = parseResultSnapshot(snapshot);

  const hasResult = score !== null && total !== null;

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_28%),#09090b] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Cierre
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              La monitoria es orientacion con criterio, evidencia y empatia.
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              El valor del monitor no esta en resolver por el estudiante, sino
              en ayudarle a encontrar rutas, comprender recursos y sostener su
              proceso academico con autonomia.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "Comprender responsabilidades C, D, G, K y M.",
                "Aplicar el rol al curso Herramientas Digitales.",
                "Tomar decisiones con retroalimentacion inmediata.",
              ].map((learning) => (
                <div key={learning} className="glass-panel rounded-2xl p-5">
                  <BadgeCheck className="size-6 text-cyan-300" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-6 text-zinc-300">{learning}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="glass-panel rounded-2xl p-6">
            <HeartHandshake className="size-8 text-cyan-300" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold text-white">Resultado obtenido</h2>
            {hasResult ? (
              <p className="mt-4 text-lg text-zinc-300">
                Completaste Monitor Quest con{" "}
                <span className="font-semibold text-cyan-200">
                  {score}/{total}
                </span>{" "}
                respuestas correctas.
              </p>
            ) : (
              <p className="mt-4 text-lg text-zinc-300">
                Aun no hay resultado guardado. Completa Monitor Quest para ver
                tu desempeno en esta seccion.
              </p>
            )}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm leading-6 text-zinc-300">
                Mensaje final: un buen monitor crea confianza, ordena la
                informacion y convierte las dudas en acciones posibles.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/juego"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
              >
                <RotateCcw className="size-4" aria-hidden="true" />
                Practicar de nuevo
              </Link>
              <Link
                href="/"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
              >
                Volver al inicio
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
