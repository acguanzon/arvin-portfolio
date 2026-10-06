"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Users, BookOpen, Star } from "lucide-react";
import { SectionHeading } from "./UI";

type GHUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};
type GHRepo = { language: string | null; stargazers_count: number };

const FALLBACK: GHUser = {
  login: "acguanzon",
  avatar_url: "https://github.com/acguanzon.png",
  html_url: "https://github.com/acguanzon",
  bio: "BSIT student & developer",
  public_repos: 0,
  followers: 0,
  following: 0,
};

export default function GitHubStats() {
  const [user, setUser] = useState<GHUser>(FALLBACK);
  const [langs, setLangs] = useState<{ name: string; pct: number }[]>([]);
  const [stars, setStars] = useState(0);
  const [live, setLive] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const u = await fetch("https://api.github.com/users/acguanzon").then((r) => {
          if (!r.ok) throw new Error("gh");
          return r.json();
        });
        setUser(u);
        const repos: GHRepo[] = await fetch(
          "https://api.github.com/users/acguanzon/repos?per_page=100"
        ).then((r) => (r.ok ? r.json() : []));
        const counts: Record<string, number> = {};
        let s = 0;
        repos.forEach((r) => {
          if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
          s += r.stargazers_count || 0;
        });
        setStars(s);
        const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
        setLangs(
          Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([name, n]) => ({ name, pct: Math.round((n / total) * 100) }))
        );
        setLive(true);
      } catch {
        setLive(false);
      }
    })();
  }, []);

  const cards = [
    { icon: BookOpen, k: String(user.public_repos), v: "Public repos" },
    { icon: Users, k: String(user.followers), v: "Followers" },
    { icon: Star, k: String(stars), v: "Stars earned" },
  ];

  return (
    <section id="github" className="w-[min(1100px,92vw)] mx-auto py-10 pb-8">
      <SectionHeading index="03 / GITHUB" title="Open source" hint={live ? "Live from the GitHub API." : "Live GitHub data (falls back gracefully offline / rate-limited)."} />
      <div className="glass rounded-3xl p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-8 items-center">
        <motion.a
          href={user.html_url}
          target="_blank"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          data-hover
          className="flex items-center gap-5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full border-2 border-lime object-cover" />
          <div>
            <p className="font-display text-2xl font-bold flex items-center gap-2">
              <Github size={20} className="text-lime" /> @{user.login}
            </p>
            <p className="text-white/60 text-sm mt-1 max-w-xs">{user.bio || "BSIT student & developer"}</p>
            <span className="inline-block mt-2 text-xs font-bold bg-lime text-black px-4 py-2 rounded-full">
              Follow on GitHub →
            </span>
          </div>
        </motion.a>
        <div>
          <div className="grid grid-cols-3 gap-4">
            {cards.map((c) => (
              <div key={c.v} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                <c.icon size={18} className="mx-auto text-lime" />
                <p className="font-display text-3xl font-extrabold mt-1">{c.k}</p>
                <p className="text-xs text-white/50">{c.v}</p>
              </div>
            ))}
          </div>
          {langs.length > 0 && (
            <div className="mt-5 space-y-2.5">
              {langs.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{l.name}</span>
                    <span className="text-lime font-mono">{l.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-violet to-lime rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
