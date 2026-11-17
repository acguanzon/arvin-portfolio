"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Palette from the "ARVIN JOHN GUANZON Logo" design.
const GROUND = "#0B0D10";
const INK = "#F2F0EA";
const ACCENT = "#C9A66B"; // gold — switch to "#d7ff3e" to match the site accent

// Positions (as % of viewport) are derived from the original 1280×720 artboard.
const SPARKLES: Array<{ x: number; y: number; s: number; delay: number }> = [
  { x: 8.6, y: 15.3, s: 1.1, delay: 0 },
  { x: 19.5, y: 41.7, s: 0.7, delay: -0.9 },
  { x: 13.3, y: 75, s: 0.9, delay: -1.8 },
  { x: 32.8, y: 12.5, s: 0.6, delay: -2.7 },
  { x: 25.8, y: 88.9, s: 0.7, delay: -3.6 },
  { x: 89.8, y: 18, s: 1.1, delay: -4.5 },
  { x: 81.3, y: 50, s: 0.7, delay: -5.4 },
  { x: 93, y: 77.8, s: 0.9, delay: -6.3 },
  { x: 67.2, y: 11, s: 0.7, delay: -7.2 },
  { x: 72.7, y: 90.3, s: 0.6, delay: -8.1 },
];

const DRAW = [0.65, 0, 0.35, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [closing, setClosing] = useState(false);
  const reduce = useReducedMotion();

  // Timing: the logo finishes drawing at ~4.5s, holds briefly, then lifts.
  const hold = reduce ? 150 : 5200;
  const exit = reduce ? 100 : 750;

  useEffect(() => {
    const t1 = setTimeout(() => setClosing(true), hold);
    const t2 = setTimeout(onFinish, hold + exit);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hold, exit, onFinish]);

  // Lock page scroll while the intro covers the screen.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const finish = () => {
    setClosing(true);
    setTimeout(onFinish, exit);
  };

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[90] overflow-hidden flex items-center justify-center"
      style={{ background: GROUND }}
      animate={{ y: closing ? "-100%" : "0%" }}
      transition={{ duration: exit / 1000, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Twinkling stars */}
      {SPARKLES.map((s, i) => (
        <motion.svg
          key={i}
          width="22"
          height="22"
          viewBox="-12 -12 24 24"
          className="absolute pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={{ scale: s.s * 0.7, opacity: 0.15 }}
          animate={{ scale: [s.s * 0.7, s.s * 1.15, s.s * 0.7], opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        >
          <path
            d="M0 -12 L2.5 -2.5 L12 0 L2.5 2.5 L0 12 L-2.5 2.5 L-12 0 L-2.5 -2.5Z"
            fill={INK}
          />
        </motion.svg>
      ))}

      {/* AG monogram + wordmark */}
      <div className="relative flex flex-col items-center gap-8 md:gap-10">
        <svg
          width="190"
          height="190"
          viewBox="10 10 104 104"
          role="img"
          aria-label="AG monogram drawing itself"
          className="w-[150px] h-[150px] md:w-[190px] md:h-[190px]"
        >
          {/* G arc */}
          <motion.path
            d="M94.2 35 A42 42 0 1 0 104 62"
            fill="none"
            stroke={INK}
            strokeWidth="5"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.15, duration: 1.9, ease: DRAW }}
          />
          {/* A legs */}
          <motion.polyline
            points="34,92 62,30 90,92"
            fill="none"
            stroke={INK}
            strokeWidth="5"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 1.5, ease: DRAW }}
          />
          {/* Gold accent bar */}
          <motion.line
            x1="48"
            y1="62"
            x2="104"
            y2="62"
            stroke={ACCENT}
            strokeWidth="5"
            strokeLinecap="butt"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.2, duration: 0.9, ease: DRAW }}
          />
        </svg>

        <div className="flex flex-col items-center gap-5 md:gap-6">
          <motion.div
            className="text-base sm:text-lg md:text-2xl font-light whitespace-nowrap"
            style={{
              color: INK,
              fontFamily: "var(--font-jost), 'Jost', Arial, sans-serif",
              letterSpacing: "0.44em",
              paddingLeft: "0.44em",
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.85, duration: 1.5, ease: EASE_OUT }}
          >
            ARVIN&nbsp;JOHN&nbsp;GUANZON
          </motion.div>

          <motion.div
            className="h-[2px]"
            style={{ background: ACCENT, width: "3.2rem" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 4.0, duration: 0.8, ease: DRAW }}
          />
        </div>
      </div>

      {/* Skip */}
      <button
        onClick={finish}
        aria-label="Skip intro"
        className="absolute bottom-6 right-6 px-4 py-2.5 rounded-full text-[11px] font-bold tracking-widest transition-colors"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(242,240,234,0.25)",
          color: INK,
        }}
      >
        SKIP&nbsp;→
      </button>
    </motion.div>
  );
}
