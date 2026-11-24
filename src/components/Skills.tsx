"use client";

import React from "react";
import { Language } from "@/types";
import { skillGroupsData } from "@/data/portfolioData";
import { Cpu, Code2, BrainCircuit, Wrench, Terminal, Sparkles } from "lucide-react";

interface SkillsProps {
  lang: Language;
}

export default function Skills({ lang }: SkillsProps) {
  const toneOrder = ["clay-lavender", "clay-sky", "clay-peach", "clay-mint", "clay-butter"];

  const getIcon = (id: string) => {
    switch (id) {
      case "hardware-iot":
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case "programming-web":
        return <Code2 className="w-5 h-5 text-sky-600" />;
      case "ai-data":
        return <BrainCircuit className="w-5 h-5 text-orange-600" />;
      case "systems-hardware":
        return <Wrench className="w-5 h-5 text-emerald-600" />;
      default:
        return <Terminal className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-violet-700">
              {lang === "th" ? "คลังทักษะทางเทคนิค" : "Technical Toolkit"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clay-ink tracking-tight">
            {lang === "th" ? "ทักษะทางเทคนิค (Technical Skills)" : "Technical Skills & Stack"}
          </h2>
          <p className="mt-2 text-base text-slate-700 font-semibold">
            {lang === "th"
              ? "รวบรวมทักษะที่นำไปประยุกต์ใช้จริงทั้งฝั่ง Hardware, Software, AI และการดูแลระบบคอมพิวเตอร์"
              : "Practical competencies applied across hardware, web software, AI modeling, and systems infrastructure."}
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroupsData.map((group, gIdx) => (
            <div
              key={group.id}
              className={`${toneOrder[gIdx % toneOrder.length]} p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/95 shadow-clay-sm flex items-center justify-center shrink-0">
                    {getIcon(group.id)}
                  </div>
                  <h3 className="font-heading font-bold text-clay-ink text-base leading-snug">
                    {lang === "th" ? group.titleTh : group.titleEn}
                  </h3>
                </div>

                <p className="text-xs font-semibold text-slate-600 mb-4 pb-3 border-b-2 border-white/70">
                  {lang === "th" ? group.descriptionTh : group.descriptionEn}
                </p>

                <div className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white/85 rounded-2xl p-2.5 border border-white shadow-sm"
                    >
                      <div className="text-xs font-extrabold text-clay-ink">{skill.name}</div>
                      {(skill.detailTh || skill.detailEn) && (
                        <div className="text-[11px] font-semibold text-slate-600 mt-0.5">
                          {lang === "th" ? skill.detailTh : skill.detailEn}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
