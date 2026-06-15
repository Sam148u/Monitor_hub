"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { RoadmapStep } from "@/data/syllabus";

type CourseRoadmapProps = {
  steps: RoadmapStep[];
};

export function CourseRoadmap({ steps }: CourseRoadmapProps) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-blue-600 via-blue-500 to-transparent md:block" />
      <div className="grid gap-4">
        {steps.map((step, index) => (
          <motion.article
            key={step.id}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="glass-panel relative rounded-2xl p-5 md:ml-12"
          >
            <div className="absolute -left-12 top-5 hidden size-10 items-center justify-center rounded-full border border-blue-600/30 bg-background text-blue-500 md:flex">
              {step.id}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-400">Reto {step.id}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{step.description}</p>
              </div>
              <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm text-emerald-100 sm:max-w-xs">
                <CheckCircle2 className="mb-2 size-5 text-emerald-300" aria-hidden="true" />
                {step.outcome}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
