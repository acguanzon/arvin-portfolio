"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./UI";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="w-[min(1100px,92vw)] mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
        style={{
          background: "radial-gradient(60% 100% at 50% 0%, rgba(215,255,62,0.18), transparent), #0e0e0e",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p className="font-mono text-xs tracking-[0.3em] text-lime">07 / CONTACT</p>
        <h2 className="font-display text-5xl md:text-7xl font-extrabold mt-4 leading-none">
          LET'S WORK
          <br />
          <span className="text-stroke">TOGETHER</span>
        </h2>
        <p className="mt-5 text-white/60 max-w-md mx-auto">
          Open to internships, OJT and collabs — tell me about your project and I'll reply within two days.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="bg-lime text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 justify-center text-lg"
            >
              <Mail size={20} /> Email me
            </a>
          </Magnetic>
          <Magnetic>
            <a href="/resume" className="bg-white text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 justify-center text-lg">
              View resume
            </a>
          </Magnetic>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              className="glass px-6 py-4 rounded-full flex items-center gap-2 hover:border-lime/50"
            >
              {s.label} <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </motion.div>
      <footer className="mt-10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40 font-mono">
        <span>© 2026 {profile.name} — built with Next.js + R3F</span>
        <span>EDIT: <code className="text-lime">lib/data.ts</code> + <code className="text-lime">app/page.tsx</code></span>
      </footer>
    </section>
  );
}
