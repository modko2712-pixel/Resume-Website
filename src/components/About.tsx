"use client";

import React from "react";
import { Language } from "@/types";
import { aboutContent } from "@/data/portfolioData";
import { Cpu, Layers, Wrench, GraduationCap, CheckCircle2, Sparkles } from "lucide-react";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const content = aboutContent[lang];

  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      tone: "clay-lavender",
      title: lang === "th" ? "ระบบควบคุมอัตโนมัติ IoT & OT" : "IoT & OT Automation",
      desc:
        lang === "th"
          ? "พัฒนาโปรแกรมควบคุมอุปกรณ์อัตโนมัติผ่าน Node-RED และ Arduino เชื่อมต่อเซนเซอร์ส่งข้อมูล Real-time และ Edge Computing"
          : "Programming automated devices with Node-RED and Arduino, telemetry sensors, and local Edge Computing nodes.",
    },
    {
      icon: <Layers className="w-5 h-5 text-sky-600" />,
      tone: "clay-sky",
      title: lang === "th" ? "พัฒนา Web Application & Dashboard" : "Web Application & Telemetry",
      desc:
        lang === "th"
          ? "พัฒนาหน้าจอ Dashboard แสดงผลข้อมูลและสถานะการทำงานของอุปกรณ์แบบ Real-time สวยงามและใช้งานง่ายบนทุกอุปกรณ์"
          : "Building responsive web dashboards to visualize live device status, telemetry metrics, and alerts cleanly.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-orange-600" />,
      tone: "clay-peach",
      title: lang === "th" ? "งานดูแลและซ่อมบำรุงฮาร์ดแวร์" : "Hardware Maintenance & Assembly",
      desc:
        lang === "th"
          ? "จัดสเปก ประกอบ และทดสอบ Benchmark คอมพิวเตอร์สายประมวลผล AI วิเคราะห์และแก้ปัญหาฮาร์ดแวร์อย่างเป็นระบบ"
          : "Workstation specification, physical PC assembly, stability benchmarking, and deep hardware troubleshooting.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
              {lang === "th" ? "ประวัติผู้สอน & ความพร้อมในการทำงาน" : "Instructor Profile & Portfolio"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clay-ink tracking-tight">
            {content.title}
          </h2>
          <p className="mt-2 text-base text-slate-700 font-semibold">{content.subtitle}</p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-8 clay-card p-6 sm:p-8">
            <h3 className="font-heading text-lg font-bold text-clay-ink mb-3 flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
              </div>
              <span>{lang === "th" ? "สรุปประวัติและความเชี่ยวชาญ" : "Executive Summary"}</span>
            </h3>

            <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed mb-6">
              {content.bio}
            </p>

            <div className="clay-lavender p-4 text-xs sm:text-sm text-clay-ink">
              <span className="font-extrabold text-indigo-800 block mb-0.5">
                {lang === "th" ? "การศึกษาปัจจุบัน:" : "Current Education:"}
              </span>
              <span className="font-bold">{content.educationBrief}</span>
            </div>
          </div>

          <div className="lg:col-span-4 clay-mint p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-emerald-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-clay-sm">
                {lang === "th" ? "เป้าหมายและวิสัยทัศน์" : "Mission & Objective"}
              </span>
              <h4 className="font-heading text-lg font-bold text-clay-ink mb-3">
                {lang === "th"
                  ? "พัฒนาการเรียนรู้และระบบอัตโนมัติ"
                  : "Automation & Joyful Learning"}
              </h4>
              <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                {content.careerGoal}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-white/70">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === "th"
                    ? "พร้อมเริ่มฝึกงาน & ร่วมงานทันที"
                    : "Available for Internship & Work"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className={`${item.tone} p-6 flex flex-col`}>
              <div className="w-12 h-12 rounded-2xl bg-white/95 shadow-clay-sm flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-heading text-lg font-bold text-clay-ink mb-2">{item.title}</h4>
              <p className="text-sm text-slate-700 font-semibold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
