"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "./UI";
import { skills, skillGroups, softSkills, profile } from "@/lib/data";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-[min(1100px,92vw)] mx-auto py-24">
      <SectionHeading index="01 / ABOUT" title="About me" hint="BSIT 3rd year, backend-leaning builder who loves turning ideas into working systems." />
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 flex flex-col items-center text-center"
        >
          <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-lime shadow-[0_0_40px_rgba(215,255,62,0.3)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover object-top" />
          </div>
          <h3 className="font-display text-2xl font-bold mt-4">{profile.name}</h3>
          <p className="text-lime text-sm mt-1">{profile.role}</p>
          <p className="mt-4 text-white/60 text-sm leading-relaxed">
            Hi, I'm Arvin — I started self-studying code in 2023, now in 3rd year BSIT
            focusing on backend, system architecture and software engineering.
            I led code for a student-government project and research for university builds.
          </p>
          <div className="mt-5 w-full text-left">
            <p className="text-xs tracking-widest text-white/50 mb-2">SOFT SKILLS</p>
            <div className="grid grid-cols-2 gap-2">
              {softSkills.map((s) => (
                <span key={s} className="text-xs flex items-center gap-1.5 text-white/70">
                  <Check size={13} className="text-lime" /> {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="glass rounded-3xl p-6">
            {skillGroups.map((g) => (
              <div key={g.title} className="mb-4 last:mb-0">
                <p className="text-xs tracking-widest text-lime mb-2">{g.title.toUpperCase()}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:border-lime/60 transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { k: "4+", v: "Years coding" },
              { k: "7", v: "Projects shipped" },
              { k: "3", v: "Android apps" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-3xl p-4 text-center"
              >
                <span className="font-display text-3xl font-extrabold text-lime block">{s.k}</span>
                <span className="text-white/70 text-xs">{s.v}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* skill bars */}
      <div id="skills" className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex justify-between text-sm mb-2">
              <span>{s.name}</span>
              <span className="text-lime font-mono">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-violet to-lime"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
