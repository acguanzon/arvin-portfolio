"use client";
import { motion } from "framer-motion";
import { ArrowDown, MousePointer2, Sparkles, FileDown } from "lucide-react";
import HeroScene from "./HeroScene";
import { Magnetic } from "./UI";
import { profile } from "@/lib/data";

export default function Hero({
  color,
  speed,
  distort,
}: {
  color: string;
  speed: number;
  distort: number;
}) {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <HeroScene color={color} speed={speed} distort={distort} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />
      </div>

      <div className="relative z-10 w-[min(1100px,92vw)] mx-auto pt-32 pb-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs tracking-widest pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          {profile.location.toUpperCase()} — AVAILABLE FOR WORK
        </motion.div>

        <h1 className="font-display font-extrabold leading-[0.9] mt-6 text-[13vw] md:text-[7.5rem]">
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="block"
          >
            I BUILD
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="block text-stroke"
          >
            THINGS YOU
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="block"
          >
            CAN <span style={{ color }}>TOUCH.</span>
          </motion.span>
        </h1>

        <div className="mt-8 flex flex-col md:flex-row gap-8 md:items-end justify-between pointer-events-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-md text-white/70 text-lg"
          >
            {profile.role} making {profile.sub}
          </motion.p>
          <div className="flex gap-4 flex-wrap">
            <Magnetic>
              <a
                href="#work"
                className="bg-lime text-black font-bold px-7 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
              >
                See work <ArrowDown size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/resume" className="bg-white text-black font-bold px-7 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                <FileDown size={18} /> Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#playground" className="glass px-7 py-4 rounded-full flex items-center gap-2">
                <MousePointer2 size={18} className="text-lime" /> Play with 3D
              </a>
            </Magnetic>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 flex items-center gap-3 text-xs tracking-[0.25em] text-white/50"
        >
          <Sparkles size={14} className="text-lime" />
          MOVE YOUR MOUSE — CLICK & SCROLL TO FLY
        </motion.div>
      </div>
    </section>
  );
}
