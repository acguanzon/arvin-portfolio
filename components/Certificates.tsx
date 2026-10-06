"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ZoomIn } from "lucide-react";
import { SectionHeading } from "./UI";

const certs = [
  {
    title: "IBM Bob 2.0 Hackathon",
    org: "LABLAB x NativelyAI",
    date: "Sep 25–27, 2026",
    desc: "Certificate of Completion for outstanding performance, attendance, successfully completing & submitting a solution based on Codex, Antigravity.",
    image: "/certificate.png",
  },
];

export default function Certificates() {
  const [open, setOpen] = useState(false);
  return (
    <section id="certificates" className="w-[min(1100px,92vw)] mx-auto py-10 pb-24">
      <SectionHeading
        index="05 / PROOF"
        title="Certificates"
        hint="Click to zoom. Add more PNGs to public/ and extend the list."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c) => (
          <motion.button
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setOpen(true)}
            data-hover
            className="group glass rounded-3xl overflow-hidden text-left hover:border-lime/40 transition-colors"
          >
            <div className="relative h-72 overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 right-4 glass px-3 py-2 rounded-full text-xs flex items-center gap-2">
                <ZoomIn size={14} className="text-lime" /> Click to expand
              </span>
            </div>
            <div className="p-6">
              <p className="flex items-center gap-2 text-lime text-xs tracking-widest">
                <Award size={14} /> {c.org.toUpperCase()} — {c.date.toUpperCase()}
              </p>
              <h3 className="font-display text-2xl font-bold mt-2">{c.title}</h3>
              <p className="text-white/60 text-sm mt-2">{c.desc}</p>
            </div>
          </motion.button>
        ))}

        {/* placeholder for next cert */}
        <div className="rounded-3xl border border-dashed border-white/15 p-8 flex flex-col justify-center text-white/40 text-sm">
          <p className="font-display text-xl font-bold text-white/60">Your next certificate here</p>
          <p className="mt-2">
            Drop another PNG in <code className="text-lime">public/</code> and add it to{" "}
            <code className="text-lime">components/Certificates.tsx</code>.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[80] bg-black/90 backdrop-blur flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/certificate.png" alt="IBM Bob 2.0 certificate" className="w-full rounded-2xl border border-white/20" />
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-lime text-black flex items-center justify-center"
                aria-label="close"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
