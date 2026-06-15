"use client";

import { motion } from "framer-motion";
import {
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
      className="glass-panel group rounded-2xl p-5 transition-colors hover:border-cyan-300/30"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-zinc-950">
          <Icon aria-hidden="true" className="size-6" />
        </div>
        <div>
          <div className="mb-3 inline-flex rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-cyan-200">
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
    </motion.article>
  );
}
