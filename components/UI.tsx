"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
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

export function Loader({ done, onFinish }: { done: boolean; onFinish: () => void }) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Browsers block autoplay with sound — start muted, then unmute on first tap.
  useEffect(() => {
    const unmute = () => {
      setMuted(false);
      videoRef.current?.play().catch(() => {});
    };
    window.addEventListener("pointerdown", unmute, { once: true });
    return () => window.removeEventListener("pointerdown", unmute);
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <motion.div
      animate={{ y: done ? "-100%" : "0%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[90] bg-black flex items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/loading.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        onError={onFinish}
        className="w-[min(880px,86vw)] max-h-[72vh] rounded-2xl border border-white/15 shadow-2xl object-contain bg-black"
      />
      <div className="absolute bottom-6 right-6 flex gap-2">
        <button
          onClick={onFinish}
          className="glass px-4 py-2.5 rounded-full text-xs font-bold hover:border-lime"
        >
          SKIP
        </button>
        <button
          onClick={() => setMuted(!muted)}
          className="glass px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:border-lime"
        >
          {muted ? <VolumeX size={15} className="text-lime" /> : <Volume2 size={15} className="text-lime" />}
          {muted ? "TAP FOR SOUND" : "SOUND ON"}
        </button>
      </div>
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
