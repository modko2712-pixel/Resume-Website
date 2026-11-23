"use client";

import React from "react";
import { Language } from "@/types";
import { projectsData } from "@/data/portfolioData";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

interface ExperienceProps {
  lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
            {lang === "th" ? "โปรเจกต์และผลงานเด่น" : "Projects & Engineering Work"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {lang === "th" ? "ประสบการณ์และโปรเจกต์ (Projects & Experience)" : "Featured Projects & Experience"}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {lang === "th"
              ? "ผลงานด้านการเขียนโปรแกรมควบคุมฮาร์ดแวร์ การส่งผ่านข้อมูลแบบเรียลไทม์ และการดูแลรักษาระบบคอมพิวเตอร์"
              : "Hands-on projects covering hardware automation, real-time telemetry streaming, and computer diagnostics."}
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-6">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {project.title[lang]}
                  </h3>
                </div>

                {project.id === "iot-ot-control" && (
                  <a
                    href="#iot-showcase"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    <span>{lang === "th" ? "ดูหน้าจำลองการทำงาน" : "View Live Demo"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-600 mb-4">
                {project.subtitle[lang]}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {project.description[lang]}
              </p>

              {/* Highlights */}
              <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-150">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  {lang === "th" ? "การดำเนินงานสำคัญ" : "Key Execution Highlights"}
                </span>
                <div className="space-y-2">
                  {project.highlights[lang].map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-400 mr-1.5">Tools:</span>
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
