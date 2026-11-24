"use client";

import React from "react";
import { Language } from "@/types";
import { contactInfo } from "@/data/portfolioData";
import {
  Rocket,
  FileText,
  Sparkles,
  Flame,
  Trophy,
  Users,
  BookOpen,
  Star,
  Cpu,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

interface HeroProps {
  lang: Language;
  onOpenResume: () => void;
  totalXp: number;
}

export default function Hero({ lang, onOpenResume, totalXp }: HeroProps) {
  const stats = [
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      value: "6+",
      label: lang === "th" ? "คอร์สแล็บลงมือทำ" : "Hands-on Labs",
      tone: "clay-lavender",
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      value: "6.2K+",
      label: lang === "th" ? "ผู้เรียนและผู้ทดสอบ" : "Active Learners",
      tone: "clay-mint",
    },
    {
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-400" />,
      value: "4.9/5",
      label: lang === "th" ? "คะแนนความพึงพอใจ" : "Student Rating",
      tone: "clay-butter",
    },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative Soft 3D Clay Floating Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-16 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-300/40 to-purple-300/20 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-orange-300/35 to-pink-300/20 blur-2xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Playful Educational Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Vibrant Pill Badge */}
            <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs sm:text-sm font-bold text-indigo-800">
                {lang === "th"
                  ? "แพลตฟอร์มเรียนรู้ AI, IoT & Web แบบลงมือทำจริง + พอร์ตโฟลิโอ"
                  : "Interactive AI, IoT & Web Learning Hub + Engineering Portfolio"}
              </span>
            </div>

            {/* Chunky Playful Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-clay-ink leading-[1.14] tracking-tight mb-5">
              {lang === "th" ? (
                <>
                  เรียนรู้ <span className="text-indigo-600">AI &amp; IoT</span>{" "}
                  อย่างสนุก ผ่านแล็บลงมือทำ{" "}
                  <span className="text-orange-500">สไตล์ Claymorphism</span>
                </>
              ) : (
                <>
                  Master <span className="text-indigo-600">Applied AI &amp; IoT</span>{" "}
                  Through Playful{" "}
                  <span className="text-orange-500">Hands-On Labs</span>
                </>
              )}
            </h1>

            {/* Engaging Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-7 max-w-xl font-semibold">
              {lang === "th"
                ? "สร้างระบบ Arduino, Node-RED, Edge AI บน Google Colab และ Next.js Telemetry Dashboard พร้อมระบบติดตามความก้าวหน้าสะสม XP และห้องทดลองฮาร์ดแวร์สด — สร้างสรรค์โดย นางสาวทตพร แก้วมณี (วิศวกรรมปัญญาประดิษฐ์ประยุกต์ มทร.ศรีวิชัย)"
                : "Build real Arduino, Node-RED, Google Colab ML, and Next.js Telemetry Dashboards with gamified progress tracking and a live hardware sandbox — crafted by Tataphorn Kaewmanee (Applied AI Engineering, RMUTSV)."}
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#enroll"
                className="clay-btn-cta w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
              >
                <Rocket className="w-5 h-5" />
                <span>{lang === "th" ? "เริ่มเรียนฟรีตอนนี้" : "Start Learning Free"}</span>
              </a>

              <a
                href="#progress-demo"
                className="clay-btn-primary w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
              >
                <PlayCircle className="w-5 h-5" />
                <span>{lang === "th" ? "ลองเล่น Progress Demo" : "Try Progress Demo"}</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="clay-btn-soft w-full sm:w-auto px-5 py-3.5 text-sm flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>{lang === "th" ? "เปิดดู CV" : "Official CV"}</span>
              </button>
            </div>

            {/* 3 Clay Stat Mini-Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`${stat.tone} p-3.5 sm:p-4 text-center flex flex-col items-center justify-center`}
                >
                  <div className="w-9 h-9 rounded-2xl bg-white/90 shadow-clay-sm flex items-center justify-center mb-1.5">
                    {stat.icon}
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-bold text-clay-ink leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-600 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tactile 3D Clay Mentor & Live XP Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Clay Showcase Card */}
              <div className="clay-card p-5 sm:p-6 relative">
                {/* Floating Top-Right Live Streak Pill */}
                <div className="clay-pill bg-gradient-to-r from-orange-100 to-amber-100 px-3.5 py-1.5 inline-flex items-center gap-1.5 absolute -top-4 right-5 z-20">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-400" />
                  <span className="text-xs font-extrabold text-orange-900">
                    {lang === "th" ? "สตรีค 12 วันติด!" : "12-Day Streak!"}
                  </span>
                </div>

                {/* Portrait + Creator Info */}
                <div className="flex items-center gap-4 mb-5 pt-1">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden border-[3.5px] border-white shadow-clay-sm shrink-0 bg-indigo-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/profile.jpg"
                      alt={contactInfo.nameTh}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[11px] font-extrabold mb-1">
                      <Cpu className="w-3 h-3" />
                      {lang === "th" ? "ผู้สอน & วิศวกร AI/IoT" : "Lead Mentor & AI Engineer"}
                    </span>
                    <h2 className="font-heading text-lg sm:text-xl font-bold text-clay-ink leading-tight">
                      {lang === "th" ? contactInfo.nameTh : contactInfo.nameEn}
                    </h2>
                    <p className="text-xs font-bold text-slate-600 mt-0.5">
                      {lang === "th"
                        ? "วศ.บ. วิศวกรรมปัญญาประดิษฐ์ประยุกต์ มทร.ศรีวิชัย"
                        : "B.Eng. Applied AI Engineering, RMUTSV"}
                    </p>
                  </div>
                </div>

                {/* Mini Interactive Progress Preview Card inside Hero */}
                <div className="clay-lavender p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-indigo-950 flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      {lang === "th" ? "คะแนน XP สะสมของคุณ" : "Your Live Demo XP"}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white text-indigo-700 text-xs font-extrabold shadow-clay-sm">
                      {totalXp} XP
                    </span>
                  </div>
                  <div className="h-3.5 w-full rounded-full bg-white/80 p-0.5 shadow-inner overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-orange-400 transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.max(18, Math.round((totalXp / 1800) * 100)))}%` }}
                    />
                  </div>
                  <p className="text-[11px] font-bold text-indigo-900/75 mt-2">
                    {lang === "th"
                      ? "เลื่อนลงไปติ๊กบทเรียนใน Progress Demo เพื่ออัปเลเวลสดๆ ได้เลย!"
                      : "Scroll to the Progress Demo to check off lessons and level up live!"}
                  </p>
                </div>

                {/* Highlight Skills Chips */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    {
                      label: "Arduino & Node-RED",
                      sub: lang === "th" ? "ควบคุมฮาร์ดแวร์สด" : "Live OT Control",
                      tone: "clay-sky",
                    },
                    {
                      label: "Google Colab AI",
                      sub: lang === "th" ? "ฝึกโมเดล ML จริง" : "Hands-on ML",
                      tone: "clay-peach",
                    },
                  ].map((chip, idx) => (
                    <div key={idx} className={`${chip.tone} p-3 flex items-start gap-2`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-extrabold text-clay-ink block leading-tight">
                          {chip.label}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600 block">
                          {chip.sub}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
