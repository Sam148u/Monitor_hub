"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { quizQuestions } from "@/data/quiz";
import { ProgressBar } from "@/components/progress-bar";

export function QuizCard() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = quizQuestions[current];
  const answered = selected !== null;
  const isCorrect = selected === question.correctIndex;
  const progress = completed
    ? 100
    : Math.round((current / quizQuestions.length) * 100);

  const result = useMemo(() => {
    const percentage = Math.round((score / quizQuestions.length) * 100);

    if (percentage >= 80) {
      return "Criterio sobresaliente: puedes orientar situaciones frecuentes con claridad y enfoque institucional.";
    }

    if (percentage >= 50) {
      return "Buen avance: refuerza seguimiento, canales oficiales y limites del rol del monitor.";
    }

    return "Ruta de mejora: vuelve a revisar responsabilidades y practica los casos antes de cerrar la capacitacion.";
  }, [score]);

  function handleSelect(optionIndex: number) {
    if (answered) {
      return;
    }

    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) {
      setScore((value) => value + 1);
    }
  }

  function handleNext() {
    if (current === quizQuestions.length - 1) {
      const finalScore = selected === question.correctIndex ? score : score;
      window.localStorage.setItem("monitorhub-score", String(finalScore));
      window.localStorage.setItem("monitorhub-total", String(quizQuestions.length));
      setCompleted(true);
      return;
    }

    setCurrent((value) => value + 1);
    setSelected(null);
  }

  function handleReset() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setCompleted(false);
    window.localStorage.removeItem("monitorhub-score");
    window.localStorage.removeItem("monitorhub-total");
  }

  if (completed) {
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-2xl p-6"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-cyan-300">Resultado final</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              {score}/{quizQuestions.length} respuestas correctas
            </h2>
          </div>
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-center">
            <p className="font-mono text-3xl font-semibold text-cyan-200">{percentage}%</p>
          </div>
        </div>
        <p className="mt-5 text-zinc-300">{result}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleReset}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Reintentar
          </button>
          <a
            href="/cierre"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
          >
            Ver cierre
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </motion.section>
    );
  }

  return (
    <section className="glass-panel rounded-2xl p-5 sm:p-6">
      <ProgressBar value={progress} label="Avance de Monitor Quest" />
      <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
        <p className="text-sm font-semibold text-cyan-300">
          Caso {current + 1} de {quizQuestions.length}
        </p>
        <h2 className="mt-3 text-2xl font-semibold leading-snug text-white">{question.case}</h2>
      </div>

      <div className="mt-5 grid gap-3">
        {question.options.map((option, index) => {
          const optionIsCorrect = index === question.correctIndex;
          const optionIsSelected = selected === index;
          const stateClass =
            answered && optionIsCorrect
              ? "border-emerald-300/50 bg-emerald-300/10 text-emerald-50"
              : answered && optionIsSelected
                ? "border-rose-300/50 bg-rose-300/10 text-rose-50"
                : "border-white/10 bg-white/[0.03] text-zinc-200 hover:border-cyan-300/30 hover:bg-cyan-300/10";

          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(index)}
              disabled={answered}
              className={`focus-ring flex min-h-14 items-center justify-between gap-4 rounded-xl border p-4 text-left text-sm font-medium transition ${stateClass}`}
            >
              <span>{option}</span>
              {answered && optionIsCorrect ? (
                <CheckCircle2 className="size-5 shrink-0 text-emerald-300" aria-hidden="true" />
              ) : null}
              {answered && optionIsSelected && !optionIsCorrect ? (
                <XCircle className="size-5 shrink-0 text-rose-300" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>

      {answered ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4"
          aria-live="polite"
        >
          <p className={`font-semibold ${isCorrect ? "text-emerald-300" : "text-rose-300"}`}>
            {isCorrect ? "Respuesta correcta" : "Respuesta para revisar"}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{question.feedback}</p>
          <button
            type="button"
            onClick={handleNext}
            className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
          >
            {current === quizQuestions.length - 1 ? "Finalizar" : "Siguiente caso"}
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </motion.div>
      ) : null}
    </section>
  );
}
