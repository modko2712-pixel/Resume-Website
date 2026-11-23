"use client";

import React from "react";
import { Language } from "@/types";
import { educationData } from "@/data/portfolioData";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

interface EducationProps {
  lang: Language;
}

export default function Education({ lang }: EducationProps) {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
            {lang === "th" ? "วุฒิการศึกษา" : "Academic Credentials"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {lang === "th" ? "ประวัติการศึกษา (Education)" : "Education"}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {lang === "th"
              ? "เส้นทางการศึกษาจากสายเทคโนโลยีธุรกิจดิจิทัล ต่อยอดสู่วิศวกรรมปัญญาประดิษฐ์ประยุกต์"
              : "Educational progression from digital business technology to applied AI engineering."}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-4xl">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1">
                    <GraduationCap className="w-4 h-4 text-slate-600" />
                    <span>{idx === 0 ? (lang === "th" ? "ปริญญาตรี" : "Bachelor's Degree") : (lang === "th" ? "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)" : "Higher Vocational Certificate")}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.degree[lang]}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mt-0.5">
                    {item.institution[lang]}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period[lang]}</span>
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {item.details[lang].map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
