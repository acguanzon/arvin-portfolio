"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Github, User, Layers, Lightbulb, Smartphone, Terminal } from "lucide-react";
import { SectionHeading } from "./UI";
import { projects, type Project } from "@/lib/data";

function Card({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.12 }}
      data-hover
      className="group glass rounded-3xl overflow-hidden hover:border-lime/40 transition-colors flex flex-col text-left w-full"
    >
      <div className="relative h-56 overflow-hidden bg-black">
        {p.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3 group-hover:scale-[1.03] transition-transform duration-700"
            style={{ background: `radial-gradient(80% 100% at 50% 0%, ${p.color}33, transparent), #0a0a0a` }}
          >
            <span
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: p.color, color: "#000" }}
            >
              {p.icon === "terminal" ? <Terminal size={30} /> : <Smartphone size={30} />}
            </span>
            <span className="font-display font-extrabold text-xl text-white/90 px-6 text-center leading-tight">
              {p.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 font-mono text-xs px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur">
          {p.index} — {p.year}
        </span>
        <span className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center glass group-hover:bg-lime group-hover:text-black transition-all">
          <ArrowUpRight size={18} />
        </span>
        <span
          className="absolute bottom-3 left-4 text-[11px] font-bold px-2.5 py-1 rounded-full"
          style={{ background: p.color, color: "#000" }}
        >
          CASE STUDY — CLICK
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl font-bold group-hover:text-lime transition-colors">{p.title}</h3>
        <p className="mt-2 text-white/60 text-sm flex-1">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function CaseModal({ p, onClose }: { p: Project | null; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      {p && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ y: 40, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 40, scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
            className="w-[min(880px,95vw)] max-h-[90vh] overflow-y-auto rounded-3xl bg-panel border border-white/10"
          >
            <div className="relative h-64 md:h-80">
              {p.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top" />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: `radial-gradient(80% 100% at 50% 0%, ${p.color}33, transparent), #0a0a0a` }}
                >
                  <span
                    className="w-20 h-20 rounded-3xl flex items-center justify-center"
                    style={{ background: p.color, color: "#000" }}
                  >
                    {p.icon === "terminal" ? <Terminal size={38} /> : <Smartphone size={38} />}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              <button
                onClick={onClose}
                aria-label="close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-lime text-black flex items-center justify-center hover:scale-110"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <p className="font-mono text-xs text-lime tracking-widest">{p.index} — {p.year}</p>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold">{p.title}</h3>
              </div>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-[1fr_0.9fr] gap-8">
              <div>
                <p className="text-white/70 leading-relaxed">{p.long}</p>
                <div className="mt-5 flex items-start gap-2 text-sm">
                  <User size={16} className="text-lime mt-0.5" />
                  <span><b>My role:</b> {p.role}</span>
                </div>
                <div className="mt-3 flex items-start gap-2 text-sm">
                  <Layers size={16} className="text-lime mt-0.5" />
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-start gap-2 text-sm text-white/70">
                  <Lightbulb size={16} className="text-lime mt-0.5" />
                  <ul className="list-disc pl-4 space-y-1">
                    {p.learnings.map((l) => <li key={l}>{l}</li>)}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href={p.href} target="_blank" className="bg-lime text-black font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 hover:scale-[1.02]">
                  <Github size={18} /> View on GitHub
                </a>
                <a href="/resume" className="glass px-6 py-3.5 rounded-full text-center hover:border-lime/50">
                  Hiring? See my resume
                </a>
                <p className="text-xs text-white/40 mt-2">
                  Tip: replace each card's GitHub link in <code className="text-lime">lib/data.ts</code> with the real repo URL per project.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="work" className="w-[min(1100px,92vw)] mx-auto py-24">
      <SectionHeading index="02 / WORK" title="Selected work" hint="Click a card for the full case study — role, stack, learnings." />
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Card key={p.id} p={p} i={i} onOpen={() => setActive(p)} />
        ))}
      </div>
      <CaseModal p={active} onClose={() => setActive(null)} />
    </section>
  );
}
