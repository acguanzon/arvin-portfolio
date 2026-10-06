"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "GitHub", href: "#github" },
  { label: "Certs", href: "#certificates" },
  { label: "Playground", href: "#playground" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed top-0 left-0 right-0 h-[2px] bg-lime z-[70] origin-left" />
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[70] w-[min(1100px,92vw)] transition-all ${
          scrolled ? "glass rounded-2xl shadow-2xl" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="font-display font-extrabold tracking-tight text-lg">
            ARVIN<span className="text-lime">.</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-white/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-lime transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-lime text-black font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Hire me
            </a>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden glass rounded-b-2xl px-5 pb-5 pt-2 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 border-b border-white/10">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
