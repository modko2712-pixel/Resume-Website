"use client";

import React from "react";
import { Language } from "@/types";
import { projectsData } from "@/data/portfolioData";
import { CheckCircle2, ArrowUpRight, FolderKanban } from "lucide-react";

interface ExperienceProps {
  lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
  const tones = ["clay-lavender", "clay-sky", "clay-peach"];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-4">
            <FolderKanban className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
              {lang === "th" ? "ผลงานวิศวกรรมและโปรเจกต์เด่น" : "Featured Engineering Projects"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clay-ink tracking-tight">
            {lang === "th"
              ? "ประสบการณ์และโปรเจกต์จริง"
              : "Real-World Projects & Experience"}
          </h2>
          <p className="mt-2 text-base text-slate-700 font-semibold">
            {lang === "th"
              ? "ผลงานด้านการเขียนโปรแกรมควบคุมฮาร์ดแวร์ เว็บแดชบอร์ดเรียลไทม์ และการดูแลระบบคอมพิวเตอร์สายประมวลผล"
              : "Hands-on engineering builds covering OT/IoT automation, real-time web telemetry, and workstation diagnostics."}
          </p>
        </div>

        {/* Project Clay Cards */}
        <div className="space-y-6">
          {projectsData.map((project, idx) => (
            <article key={project.id} className={`${tones[idx % tones.length]} p-6 sm:p-8`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-white/95 shadow-clay-sm flex items-center justify-center font-heading font-bold text-indigo-700 text-sm shrink-0">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-clay-ink">
                    {project.title[lang]}
                  </h3>
                </div>

                {project.id === "iot-ot-control" && (
                  <a
                    href="#iot-showcase"
                    className="clay-btn-primary px-4 py-2 text-xs inline-flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <span>{lang === "th" ? "เปิดห้องทดลองสด" : "Open Live Sandbox"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="text-sm font-extrabold text-indigo-800/85 mb-3">
                {project.subtitle[lang]}
              </p>

              <p className="text-sm text-slate-700 font-semibold leading-relaxed mb-5">
                {project.description[lang]}
              </p>

              <div className="bg-white/85 rounded-2xl p-4 sm:p-5 mb-5 border-2 border-white shadow-clay-sm">
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 block mb-3">
                  {lang === "th" ? "การดำเนินงานสำคัญ" : "Key Execution Highlights"}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.highlights[lang].map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-clay-ink/90">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-white/95 text-clay-ink text-xs font-extrabold rounded-xl border border-white shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
