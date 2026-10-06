"use client";
import { profile, skillGroups, softSkills, experience, projects } from "@/lib/data";
import { Printer, ArrowLeft, Mail, Github, Instagram } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="no-print sticky top-0 z-10 bg-black text-white px-5 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-sm hover:text-lime">
          <ArrowLeft size={16} /> Back to portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="bg-lime text-black font-bold text-sm px-5 py-2 rounded-full flex items-center gap-2"
        >
          <Printer size={16} /> Print / Save as PDF
        </button>
      </div>

      <style>{`@media print { .no-print { display: none !important; } body { background: white; } }`}</style>

      <div className="max-w-3xl mx-auto p-8 md:p-12">
        <header className="flex gap-6 items-center border-b-2 border-black pb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.photo} alt={profile.name} className="w-24 h-24 rounded-full object-cover object-top border-2 border-black" />
          <div>
            <h1 className="text-3xl font-extrabold">{profile.name}</h1>
            <p className="font-semibold">{profile.role}</p>
            <p className="text-sm text-neutral-600 mt-1 flex flex-wrap gap-x-4 gap-y-1">
              <span className="flex items-center gap-1"><Mail size={13} /> {profile.email}</span>
              <span className="flex items-center gap-1"><Github size={13} /> github.com/acguanzon</span>
              <span className="flex items-center gap-1"><Instagram size={13} /> @arvin.guanzon.3388</span>
            </p>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="font-bold tracking-widest text-sm border-b border-neutral-300 pb-1">SUMMARY</h2>
          <p className="text-sm mt-2 leading-relaxed">
            BSIT 3rd-year student and developer focused on backend development, system architecture
            and software engineering. Self-taught from 2023, now building database-driven web apps
            with PHP/MySQL (MVC), REST APIs, plus modern frontend. Lead Programmer for a
            student-government project and Lead Researcher on university builds. Skilled prompt
            engineer using AI-assisted workflows to prototype fast without sacrificing quality.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="font-bold tracking-widest text-sm border-b border-neutral-300 pb-1">TECHNICAL SKILLS</h2>
          <div className="mt-2 space-y-1.5 text-sm">
            {skillGroups.map((g) => (
              <p key={g.title}><b>{g.title}:</b> {g.items.join(", ")}</p>
            ))}
            <p><b>Soft skills:</b> {softSkills.join(", ")}</p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-bold tracking-widest text-sm border-b border-neutral-300 pb-1">PROJECTS</h2>
          <div className="mt-2 space-y-3 text-sm">
            {projects.map((p) => (
              <div key={p.id}>
                <p><b>{p.title}</b> ({p.year}) — {p.description}</p>
                <p className="text-neutral-600">Stack: {p.stack.join(", ")}. Role: {p.role}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-bold tracking-widest text-sm border-b border-neutral-300 pb-1">EXPERIENCE & EDUCATION</h2>
          <div className="mt-2 space-y-3 text-sm">
            {experience.map((e) => (
              <div key={e.role}>
                <p><b>{e.role}</b> — {e.place} <span className="text-neutral-500">({e.period})</span></p>
                <p className="text-neutral-700">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-bold tracking-widest text-sm border-b border-neutral-300 pb-1">CERTIFICATIONS</h2>
          <p className="text-sm mt-2">
            <b>IBM Bob 2.0 Hackathon — Certificate of Completion</b> (LABLAB x NativelyAI, Sep 25–27, 2026).
            Outstanding performance & submitted solution based on Codex / Antigravity.
          </p>
        </section>
      </div>
    </main>
  );
}
