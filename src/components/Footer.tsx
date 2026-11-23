"use client";

import React from "react";
import { Language } from "@/types";
import { contactInfo } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="font-bold text-white text-sm block">
              {contactInfo.nameTh} ({contactInfo.nameEn})
            </span>
            <span className="text-slate-400 mt-0.5 block">
              {lang === "th"
                ? "วิศวกรรมปัญญาประดิษฐ์ประยุกต์ • มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ"
                : "Applied AI & IoT Engineering • RMUTSV Rattaphum Campus"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">
              {lang === "th" ? "เกี่ยวกับฉัน" : "About"}
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              {lang === "th" ? "ทักษะ" : "Skills"}
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              {lang === "th" ? "ผลงาน" : "Projects"}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {lang === "th" ? "ติดต่อ" : "Contact"}
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-2">
          <span>
            © {new Date().getFullYear()} {contactInfo.nameEn}.
          </span>
          <span>
            Portfolio & Resume Web Application
          </span>
        </div>
      </div>
    </footer>
  );
}
