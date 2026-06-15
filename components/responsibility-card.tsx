"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ChartNoAxesCombined,
  ClipboardCheck,
  Handshake,
  LucideIcon,
  UsersRound,
} from "lucide-react";
import type { Responsibility } from "@/data/responsibilities";

const icons: Record<Responsibility["icon"], LucideIcon> = {
  analysis: ChartNoAxesCombined,
  tracking: UsersRound,
  workshop: ClipboardCheck,
  bot: Bot,
  support: Handshake,
};

type ResponsibilityCardProps = {
  responsibility: Responsibility;
  index: number;
};

export function ResponsibilityCard({ responsibility, index }: ResponsibilityCardProps) {
  const Icon = icons[responsibility.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-panel group rounded-2xl p-5 transition-colors hover:border-blue-600/30"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-blue-600/30 bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon aria-hidden="true" className="size-6" />
        </div>
        <div>
          <div className="mb-3 inline-flex rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-blue-300">
            Responsabilidad {responsibility.id}
          </div>
          <h2 className="text-xl font-semibold text-white">{responsibility.title}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{responsibility.description}</p>
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-white/10 bg-zinc-950/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Ejemplo practico
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">{responsibility.example}</p>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm text-blue-100">
        <span>Ver guía interactiva</span>
        <ArrowRight className="size-4" aria-hidden="true" />
      </div>
    </motion.article>
  );
}
