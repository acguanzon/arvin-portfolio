"use client";
import { motion } from "framer-motion";

export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="border-y border-white/10 bg-panel/60 py-4 overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="inline-flex gap-10 font-display font-bold text-lg"
      >
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={i % 2 ? "text-stroke" : ""}>{s}</span>
            <span className="text-lime">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
