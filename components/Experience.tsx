"use client";
import { SectionHeading } from "./UI";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="w-[min(1100px,92vw)] mx-auto py-10 pb-24">
      <SectionHeading index="04 / JOURNEY" title="Experience" />
      <div className="relative pl-6 border-l border-white/10 flex flex-col gap-8">
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-lime shadow-[0_0_15px_#d7ff3e]" />
            <p className="font-mono text-xs text-lime tracking-widest">{e.period}</p>
            <h3 className="font-display text-xl font-bold mt-1">
              {e.role} — <span className="text-white/50 font-body font-normal">{e.place}</span>
            </h3>
            <p className="text-white/60 mt-1 max-w-xl">{e.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
