"use client";

import React from "react";
import { Language } from "@/types";
import { educationData } from "@/data/portfolioData";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

interface EducationProps {
  lang: Language;
}

export default function Education({ lang }: EducationProps) {
  const tones = ["clay-mint", "clay-butter"];

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
              {lang === "th" ? "วุฒิการศึกษาและเส้นทางการเรียนรู้" : "Academic Credentials"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clay-ink tracking-tight">
            {lang === "th" ? "ประวัติการศึกษา (Education)" : "Education Background"}
          </h2>
          <p className="mt-2 text-base text-slate-700 font-semibold">
            {lang === "th"
              ? "เส้นทางการศึกษาจากสายเทคโนโลยีธุรกิจดิจิทัล ต่อยอดสู่วิศวกรรมปัญญาประดิษฐ์ประยุกต์"
              : "Academic journey from Digital Business Technology to Applied Artificial Intelligence Engineering."}
          </p>
        </div>

        {/* Education Clay Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationData.map((item, idx) => (
            <div key={idx} className={`${tones[idx % tones.length]} p-6 sm:p-8 flex flex-col justify-between`}>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-indigo-800 text-xs font-extrabold shadow-clay-sm">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    {idx === 0
                      ? lang === "th"
                        ? "ปริญญาตรี"
                        : "Bachelor's Degree"
                      : lang === "th"
                        ? "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)"
                        : "Higher Vocational Cert."}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-clay-ink bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    <span>{item.period[lang]}</span>
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-clay-ink mb-1">
                  {item.degree[lang]}
                </h3>
                <p className="text-sm font-extrabold text-slate-700 mb-5">
                  {item.institution[lang]}
                </p>
              </div>

              <div className="bg-white/85 rounded-2xl p-4 border-2 border-white space-y-2.5">
                {item.details[lang].map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-clay-ink/90 leading-relaxed">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
