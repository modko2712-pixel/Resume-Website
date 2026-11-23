"use client";

import React from "react";
import { Language } from "@/types";
import { skillGroupsData } from "@/data/portfolioData";
import { Cpu, Code2, BrainCircuit, Wrench, Terminal } from "lucide-react";

interface SkillsProps {
  lang: Language;
}

export default function Skills({ lang }: SkillsProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "hardware-iot":
        return <Cpu className="w-5 h-5 text-slate-700" />;
      case "programming-web":
        return <Code2 className="w-5 h-5 text-slate-700" />;
      case "ai-data":
        return <BrainCircuit className="w-5 h-5 text-slate-700" />;
      case "systems-hardware":
        return <Wrench className="w-5 h-5 text-slate-700" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
            {lang === "th" ? "ความสามารถทางเทคนิค" : "Technical Capabilities"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {lang === "th" ? "ทักษะทางเทคนิค (Technical Skills)" : "Technical Skills"}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {lang === "th"
              ? "รวบรวมทักษะที่นำไปประยุกต์ใช้จริงในโปรเจกต์ ทั้งฝั่ง Hardware, Software, AI และการบำรุงรักษาระบบ"
              : "Practical competencies applied in engineering projects across hardware, software, AI and infrastructure."}
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroupsData.map((group) => (
            <div
              key={group.id}
              className="bg-slate-50/70 p-6 rounded-xl border border-slate-200 flex flex-col justify-between"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    {getIcon(group.id)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {lang === "th" ? group.titleTh : group.titleEn}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-4 pb-3 border-b border-slate-200">
                  {lang === "th" ? group.descriptionTh : group.descriptionEn}
                </p>

                {/* Skill Items List */}
                <div className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="text-xs">
                      <div className="font-semibold text-slate-800">
                        {skill.name}
                      </div>
                      {(skill.detailTh || skill.detailEn) && (
                        <div className="text-[11px] text-slate-500 mt-0.5">
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
