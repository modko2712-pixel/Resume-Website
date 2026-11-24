"use client";

import React from "react";
import { Language } from "@/types";
import { contactInfo } from "@/data/portfolioData";
import { ArrowUp, Sparkles } from "lucide-react";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pb-10 pt-4 px-4 sm:px-6 no-print">
      <div className="max-w-6xl mx-auto clay-card p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b-2 border-indigo-100">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center font-heading font-bold text-base shadow-clay-btn border-2 border-white/70 shrink-0">
              TK
            </div>
            <div>
              <span className="font-heading font-bold text-clay-ink text-base flex items-center gap-1.5">
                <span>TK PlayLab — {contactInfo.nameTh}</span>
                <Sparkles className="w-4 h-4 text-orange-500" />
              </span>
              <span className="text-xs font-semibold text-slate-600 block mt-0.5">
                {lang === "th"
                  ? "วิศวกรรมปัญญาประดิษฐ์ประยุกต์ • มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ"
                  : "Applied AI & IoT Engineering • RMUTSV Rattaphum Campus"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-clay-ink/80">
            <a href="#courses" className="hover:text-indigo-700 transition-colors cursor-pointer">
              {lang === "th" ? "คอร์สเรียน" : "Courses"}
            </a>
            <a href="#progress-demo" className="hover:text-indigo-700 transition-colors cursor-pointer">
              {lang === "th" ? "Progress Demo" : "Progress Demo"}
            </a>
            <a href="#iot-showcase" className="hover:text-indigo-700 transition-colors cursor-pointer">
              {lang === "th" ? "IoT Lab" : "IoT Lab"}
            </a>
            <a href="#testimonials" className="hover:text-indigo-700 transition-colors cursor-pointer">
              {lang === "th" ? "รีวิวผู้เรียน" : "Reviews"}
            </a>
            <a href="#enroll" className="hover:text-orange-600 transition-colors cursor-pointer">
              {lang === "th" ? "สมัครเรียน" : "Enroll"}
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="clay-btn-primary p-2.5 ml-1"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-slate-500 gap-2">
          <span>
            © {new Date().getFullYear()} {contactInfo.nameEn} • TK PlayLab
          </span>
          <span>
            {lang === "th"
              ? "ออกแบบด้วย Claymorphism Design System (UI/UX Pro Max)"
              : "Crafted with Claymorphism Design System (UI/UX Pro Max)"}
          </span>
        </div>
      </div>
    </footer>
  );
}
