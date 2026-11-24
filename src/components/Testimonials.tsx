"use client";

import React from "react";
import { Language, TestimonialItem } from "@/types";
import { testimonialsData } from "@/data/portfolioData";
import { Star, Quote, CheckCircle2, HeartHandshake } from "lucide-react";

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const toneClassMap: Record<TestimonialItem["tone"], string> = {
    lavender: "clay-lavender",
    peach: "clay-peach",
    mint: "clay-mint",
    sky: "clay-sky",
    butter: "clay-butter",
    rose: "clay-rose",
  };

  const avatarGradientMap: Record<TestimonialItem["tone"], string> = {
    lavender: "from-indigo-500 to-violet-500",
    peach: "from-orange-500 to-rose-500",
    mint: "from-emerald-500 to-teal-500",
    sky: "from-sky-500 to-blue-600",
    butter: "from-amber-500 to-orange-500",
    rose: "from-pink-500 to-rose-500",
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-4">
            <HeartHandshake className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600">
              {lang === "th" ? "เสียงตอบรับจากผู้เรียนจริง" : "Student Testimonials"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clay-ink tracking-tight">
            {lang === "th"
              ? "ผู้เรียนและเพื่อนวิศวกรพูดถึงเราอย่างไร"
              : "Loved by Curious Makers & Students"}
          </h2>
          <p className="mt-3 text-base text-slate-700 font-semibold">
            {lang === "th"
              ? "เรื่องราวความสำเร็จจากการลงมือทำแล็บ Arduino, Node-RED, Edge AI และ Next.js Dashboard"
              : "Real outcomes from learners building Arduino, Node-RED, Edge AI, and Next.js Dashboard projects."}
          </p>
        </div>

        {/* Testimonials Clay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {testimonialsData.map((item) => (
            <article
              key={item.id}
              className={`${toneClassMap[item.tone]} p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1`}
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-amber-500 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/90 text-clay-ink text-[11px] font-extrabold shadow-clay-sm">
                    {item.course[lang]}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-5">
                  <Quote className="w-6 h-6 text-indigo-400/50 mb-1.5" />
                  <p className="text-sm sm:text-base font-semibold text-clay-ink/90 leading-relaxed">
                    &ldquo;{item.quote[lang]}&rdquo;
                  </p>
                </div>
              </div>

              <div>
                {/* Outcome Badge */}
                <div className="bg-white/85 rounded-2xl px-3.5 py-2 border-2 border-white mb-4 inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-extrabold text-emerald-800">
                    {item.outcome[lang]}
                  </span>
                </div>

                {/* Learner Avatar & Name */}
                <div className="flex items-center gap-3.5 pt-3 border-t-2 border-white/70">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${avatarGradientMap[item.tone]} text-white font-heading font-bold text-sm flex items-center justify-center border-2 border-white/80 shadow-clay-sm shrink-0`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-clay-ink leading-tight">
                      {item.name[lang]}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600">
                      {item.role[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
