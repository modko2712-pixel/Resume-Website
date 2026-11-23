"use client";

import React from "react";
import { Language } from "@/types";
import { aboutContent } from "@/data/portfolioData";
import { Cpu, Layers, Wrench, GraduationCap, Check } from "lucide-react";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const content = aboutContent[lang];

  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-slate-700" />,
      title: lang === "th" ? "ระบบควบคุมอัตโนมัติ IoT & OT" : "IoT & OT Automation",
      desc: lang === "th"
        ? "พัฒนาโปรแกรมควบคุมอุปกรณ์อัตโนมัติผ่าน Node-RED และ Arduino เชื่อมต่อเซนเซอร์เพื่อส่งข้อมูลแบบ Real-time และเชื่อมต่อ Edge Computing"
        : "Programming automated devices with Node-RED and Arduino, telemetry sensors, and local Edge Computing nodes.",
    },
    {
      icon: <Layers className="w-5 h-5 text-slate-700" />,
      title: lang === "th" ? "พัฒนา Web Application & Dashboard" : "Web Application & Telemetry",
      desc: lang === "th"
        ? "พัฒนาหน้าจอ Dashboard แสดงผลข้อมูลและสถานะการทำงานของอุปกรณ์แบบ Real-time ใช้งานง่าย รองรับทั้งคอมพิวเตอร์และมือถือ"
        : "Building responsive web dashboards to visualize live device status, telemetry metrics, and alerts cleanly.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-slate-700" />,
      title: lang === "th" ? "งานดูแลและซ่อมบำรุงฮาร์ดแวร์" : "Hardware Maintenance & Assembly",
      desc: lang === "th"
        ? "จัดสเปก ประกอบ และทดสอบ Benchmark คอมพิวเตอร์สายประมวลผล AI วิเคราะห์และแก้ปัญหาฮาร์ดแวร์ (Troubleshooting)"
        : "Workstation specification, physical PC assembly, stability benchmarking, and deep hardware troubleshooting.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
            {lang === "th" ? "ประวัติและความพร้อมในการทำงาน" : "Profile & Background"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {content.title}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {content.subtitle}
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-slate-600" />
              <span>{lang === "th" ? "สรุปประวัติและความเชี่ยวชาญ" : "Executive Summary"}</span>
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {content.bio}
            </p>

            <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900 block">
                  {lang === "th" ? "การศึกษาปัจจุบัน:" : "Current Education:"}
                </span>
                <span>{content.educationBrief}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                {lang === "th" ? "เป้าหมายการฝึกงาน" : "Career Objective"}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                {lang === "th" ? "พัฒนาและเพิ่มประสิทธิภาพกระบวนการ" : "Process Improvement & Automation"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {content.careerGoal}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{lang === "th" ? "พร้อมเริ่มฝึกงานทันที" : "Immediate Availability"}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
