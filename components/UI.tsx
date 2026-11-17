"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6">
      <div>
        <p className="font-mono text-xs tracking-[0.3em] text-lime">{index}</p>
        <h2 className="font-display text-4xl md:text-6xl font-800 font-extrabold leading-none mt-2">
          {title}
        </h2>
        {hint && <p className="mt-3 text-mist max-w-md">{hint}</p>}
      </div>
      <div className="hidden md:block h-px flex-1 bg-white/10 mb-4" />
    </div>
  );
}

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setTouch(true);
      return;
    }
    document.documentElement.classList.add("hide-cursor");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, [x, y]);

  if (touch) return null;
  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x, y }}
    >
      <motion.div
        animate={{
          width: hovering ? 36 : 16,
          height: hovering ? 36 : 16,
          backgroundColor: hovering ? "rgba(215,255,62,0.15)" : "transparent",
        }}
        transition={{ duration: 0.15 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-lime/70 flex items-center justify-center"
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
    </motion.div>
  );
}

export function useInViewOnce(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          ob.disconnect();
        }
      },
      { threshold }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return { ref, seen };
}
