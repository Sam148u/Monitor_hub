"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${10 + ((index * 23) % 74)}%`,
  delay: index * 0.35,
  duration: 5 + (index % 5),
}));

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="grid-mask absolute inset-0 opacity-60" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute size-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_24px_rgba(34,211,238,0.7)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-12, 18, -12], opacity: [0.25, 0.9, 0.25] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
