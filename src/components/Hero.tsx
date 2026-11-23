"use client";

import React from "react";
import { Language } from "@/types";
import { contactInfo } from "@/data/portfolioData";
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  Activity,
  Briefcase
} from "lucide-react";

interface HeroProps {
  lang: Language;
  onOpenResume: () => void;
}

export default function Hero({ lang, onOpenResume }: HeroProps) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>
                {lang === "th" 
                  ? "เปิดรับโอกาสฝึกงาน & ร่วมงานด้าน AI / IoT / Web / IT" 
                  : "Available for Internship & Full-Time Engineering Roles"}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-2">
              {lang === "th" ? contactInfo.nameTh : contactInfo.nameEn}
            </h1>

            {/* English Name / Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 mb-4">
              {lang === "th" 
                ? "นักศึกษาวิศวกรรมปัญญาประดิษฐ์ประยุกต์ (ชั้นปีที่ 4)" 
                : "Senior Applied AI & IoT Engineering Student"}
            </p>

            {/* University */}
            <p className="text-sm text-slate-500 mb-6 font-medium">
              {lang === "th"
                ? "มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ"
                : "Rajamangala University of Technology Srivijaya (Rattaphum Campus)"}
            </p>

            {/* Short Bio */}
            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-xl">
              {lang === "th"
                ? "มีความเชี่ยวชาญด้านการพัฒนาระบบควบคุม IoT/OT, การพัฒนา Web Application และการจัดบำรุงรักษาระบบฮาร์ดแวร์ มีประสบการณ์เขียนโค้ดสั่งการอุปกรณ์ผ่าน Arduino และ Node-RED ร่วมกับการประมวลผลโมเดลบน Google Colab พร้อมนำทักษะและ Hardware มาประยุกต์ใช้เพื่อพัฒนาระบบอัตโนมัติให้แก่องค์กร"
                : "Specialized in IoT/OT control systems, Web Application development, and hardware maintenance. Experienced in hardware automation with Arduino and Node-RED integrated with Google Colab ML workflows. Ready to apply technical and hardware expertise to deliver robust automated solutions."}
            </p>

            {/* Target Roles */}
            <div className="mb-8 w-full">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                {lang === "th" ? "ตำแหน่งที่สนใจ (Target Roles)" : "Target Roles"}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(lang === "th" ? contactInfo.targetRolesTh : contactInfo.targetRolesEn).map((role, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>{lang === "th" ? "ดูเรซูเม่ฉบับเต็ม (CV)" : "View Resume (CV)"}</span>
              </button>

              <a
                href="#iot-showcase"
                className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-lg border border-slate-300 transition-colors flex items-center justify-center gap-2"
              >
                <Activity className="w-4 h-4 text-slate-500" />
                <span>{lang === "th" ? "ทดลองเล่น IoT Dashboard" : "Try IoT Dashboard"}</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-4 py-2.5 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors text-center"
              >
                {lang === "th" ? "ติดต่อฉัน" : "Contact Me"}
              </a>
            </div>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-4 border-t border-slate-100 w-full">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1.5 hover:text-slate-900">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-slate-900">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{contactInfo.email}</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{lang === "th" ? contactInfo.locationTh : contactInfo.locationEn}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Actual Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-200 relative border border-slate-200">
                  {/* Real Portrait Photo extracted from PDF */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt={contactInfo.nameTh}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className="p-3 text-center">
                  <span className="text-xs font-bold text-slate-900 block">
                    {lang === "th" ? contactInfo.nameTh : contactInfo.nameEn}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {lang === "th" ? "วิศวกรรมปัญญาประดิษฐ์ประยุกต์ มทร.ศรีวิชัย" : "Applied AI Engineering, RMUTSV"}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
