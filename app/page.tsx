"use client";
import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Playground from "@/components/Playground";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import { CustomCursor, Loader } from "@/components/UI";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [playId, setPlayId] = useState(0);
  const [color, setColor] = useState("#d7ff3e");
  const [speed, setSpeed] = useState(2);
  const [distort, setDistort] = useState(0.45);

  useEffect(() => {
    // Safety fallback in case the video can't play — full video (~14s) reveals the site on end.
    const t = setTimeout(() => setReady(true), 25000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader key={playId} done={ready} onFinish={() => setReady(true)} />
      {ready && (
        <button
          onClick={() => {
            setPlayId((n) => n + 1);
            setReady(false);
          }}
          title="Replay intro"
          aria-label="Replay intro video"
          className="fixed bottom-5 left-5 z-[65] w-9 h-9 rounded-full glass flex items-center justify-center opacity-30 hover:opacity-100 hover:border-lime transition-all"
        >
          <RotateCcw size={14} />
        </button>
      )}
      <CustomCursor />
      <Navbar />
      <main>
        <Hero color={color} speed={speed} distort={distort} />
        <Marquee
          items={["KOTLIN", "JETPACK COMPOSE", "ANDROID", "FIREBASE", "NEXT.JS", "REACT THREE FIBER", "REST APIS", "MYSQL", "PROMPT ENGINEERING"]}
        />
        <About />
        <Projects />
        <GitHubStats />
        <Experience />
        <Certificates />
        <Playground
          color={color} setColor={setColor}
          speed={speed} setSpeed={setSpeed}
          distort={distort} setDistort={setDistort}
        />
        <Contact />
      </main>
    </>
  );
}
