"use client";

import React, { useState } from "react";
import { Language } from "@/types";
import { contactInfo, skillGroupsData, projectsData, educationData, aboutContent } from "@/data/portfolioData";
import { X, Printer, Phone, Mail, MapPin, Globe } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function ResumeModal({ isOpen, onClose, lang: initialLang }: ResumeModalProps) {
  const [modalLang, setModalLang] = useState<Language>(initialLang);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 no-print-backdrop">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-slate-300 overflow-hidden max-h-[92vh] flex flex-col my-auto">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print bg-slate-900 text-white px-5 py-3 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">
              {modalLang === "th" ? "เรซูเม่ - ทตพร แก้วมณี" : "Resume - Tataphorn Kaewmanee"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Lang toggle */}
            <button
              onClick={() => setModalLang(modalLang === "th" ? "en" : "th")}
              className="text-xs font-medium px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span>{modalLang.toUpperCase()}</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="px-3 py-1 bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{modalLang === "th" ? "พิมพ์ / PDF" : "Print / PDF"}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white text-slate-800 font-sans">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Header with Photo & Bio */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-300">
              <div className="flex items-start gap-5">
                <div className="w-24 h-32 rounded-lg overflow-hidden bg-slate-100 border border-slate-300 shrink-0 shadow-2xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt={contactInfo.nameTh}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-slate-900 leading-tight">
                    {contactInfo.nameTh}
                  </h1>
                  <p className="text-sm font-semibold text-slate-700">
                    ({contactInfo.nameEn})
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {modalLang === "th"
                      ? "นักศึกษาวิศวกรรมปัญญาประดิษฐ์ประยุกต์ ชั้นปีที่ 4"
                      : "4th-Year Applied Artificial Intelligence Engineering"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {modalLang === "th"
                      ? "มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ"
                      : "Rajamangala University of Technology Srivijaya"}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-slate-400" />
                      {contactInfo.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-slate-400" />
                      {contactInfo.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {contactInfo.locationTh}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Roles */}
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
              <span className="font-bold text-slate-800 mr-2">
                {modalLang === "th" ? "ตำแหน่งที่สนใจ:" : "Target Roles:"}
              </span>
              <span className="text-slate-700">
                {(modalLang === "th" ? contactInfo.targetRolesTh : contactInfo.targetRolesEn).join(" / ")}
              </span>
            </div>

            {/* About Me */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                {modalLang === "th" ? "เกี่ยวกับฉัน (ABOUT ME)" : "ABOUT ME"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                {aboutContent[modalLang].bio}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                {modalLang === "th" ? "ทักษะทางเทคนิค (TECHNICAL SKILLS)" : "TECHNICAL SKILLS"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                  <span className="font-bold text-slate-900 block">Programming Languages:</span>
                  <span className="text-slate-700">Python, C/C++, HTML, CSS, JavaScript, SQL</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                  <span className="font-bold text-slate-900 block">Hardware & IoT/OT:</span>
                  <span className="text-slate-700">Arduino, Node-RED, Sensor Integration, Embedded Systems, Microcontrollers</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                  <span className="font-bold text-slate-900 block">AI & Data Analysis:</span>
                  <span className="text-slate-700">Google Colab, Data Preprocessing, Basic Machine Learning Models</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                  <span className="font-bold text-slate-900 block">Systems & Infrastructure:</span>
                  <span className="text-slate-700">Hardware Assembly & Troubleshooting, PC Configuration, System Maintenance</span>
                </div>
                <div className="col-span-1 sm:col-span-2 bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="font-bold text-slate-900 mr-2">Tools & Platforms:</span>
                  <span className="text-slate-700">Git, GitHub, VS Code, Arduino IDE</span>
                </div>
              </div>
            </div>

            {/* Projects & Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                {modalLang === "th" ? "ประสบการณ์และโปรเจกต์ (PROJECTS & EXPERIENCE)" : "PROJECTS & EXPERIENCE"}
              </h2>
              <div className="space-y-3.5 text-xs">
                {projectsData.map((project, idx) => (
                  <div key={project.id}>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {idx + 1}. {project.title[modalLang]}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 mt-1 pl-1">
                      {project.highlights[modalLang].map((hl, hIdx) => (
                        <li key={hIdx} className="leading-relaxed">
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                {modalLang === "th" ? "ประวัติการศึกษา (EDUCATION)" : "EDUCATION"}
              </h2>
              <div className="space-y-2 text-xs">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900">{edu.degree[modalLang]}</span>
                      <span className="text-slate-600 block">{edu.institution[modalLang]}</span>
                    </div>
                    <span className="text-slate-500 font-mono shrink-0">
                      {edu.period[modalLang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer (Hidden when printing) */}
        <div className="no-print bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>{modalLang === "th" ? "ข้อมูลตรงตามเอกสารต้นฉบับ" : "Matching original resume data"}</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-medium transition-colors"
          >
            {modalLang === "th" ? "ปิด" : "Close"}
          </button>
        </div>

      </div>
    </div>
  );
}
