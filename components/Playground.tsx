"use client";
import { SectionHeading, Magnetic } from "./UI";
import { Dices } from "lucide-react";

const COLORS = ["#d7ff3e", "#8b5cf6", "#22d3ee", "#fb7185", "#fbbf24"];

export default function Playground({
  color, setColor,
  speed, setSpeed,
  distort, setDistort,
}: {
  color: string; setColor: (c: string) => void;
  speed: number; setSpeed: (n: number) => void;
  distort: number; setDistort: (n: number) => void;
}) {
  return (
    <section id="playground" className="w-[min(1100px,92vw)] mx-auto py-24">
      <SectionHeading
        index="06 / PLAYGROUND"
        title="Control the blob"
        hint="This is live: these controls drive the big hero 3D scene at the top. Scroll up after tweaking."
      />
      <div className="glass rounded-3xl p-8 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-xs tracking-widest text-white/50 mb-4">BLOB COLOR</p>
          <div className="flex gap-3">
            {COLORS.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                aria-label={c}
                className={`w-11 h-11 rounded-full border-2 transition-transform hover:scale-110 ${
                  color === c ? "border-white scale-110" : "border-transparent"
                }`}
                style={{ background: c }}
              />
            ))}
          </div>
          <button
            onClick={() => setColor(COLORS[Math.floor(Math.random() * COLORS.length)])}
            className="mt-4 text-xs flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:border-lime"
          >
            <Dices size={14} /> Surprise me
          </button>
        </div>
        <div>
          <p className="text-xs tracking-widest text-white/50 mb-4">
            MORPH SPEED — {speed.toFixed(1)}x
          </p>
          <input
            type="range" min={0.2} max={6} step={0.1} value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full accent-[#d7ff3e]"
          />
          <p className="text-xs tracking-widest text-white/50 mt-6 mb-4">
            GOOEYNESS — {distort.toFixed(2)}
          </p>
          <input
            type="range" min={0} max={1.2} step={0.05} value={distort}
            onChange={(e) => setDistort(Number(e.target.value))}
            className="w-full accent-[#d7ff3e]"
          />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <Magnetic>
            <a href="#top" className="bg-lime text-black font-bold px-6 py-3 rounded-full text-center block">
              ↑ See it in action
            </a>
          </Magnetic>
          <p className="text-xs text-white/40">
            Tip for your portfolio story: recruiters remember <em>playable</em> portfolios. Keep this section.
          </p>
        </div>
      </div>
    </section>
  );
}
