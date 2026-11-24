"use client";

import React, { useState, useEffect } from "react";
import { Language } from "@/types";
import { Menu, X, FileText, Globe, Sparkles, Rocket } from "lucide-react";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenResume: () => void;
  enrolledCount?: number;
}

export default function Navbar({
  lang,
  onLanguageChange,
  onOpenResume,
  enrolledCount = 0,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#courses", label: lang === "th" ? "คอร์สเรียน" : "Courses" },
    { href: "#progress-demo", label: lang === "th" ? "ทดลอง Progress" : "Progress Demo" },
    { href: "#iot-showcase", label: lang === "th" ? "IoT Lab" : "IoT Lab" },
    { href: "#testimonials", label: lang === "th" ? "รีวิวผู้เรียน" : "Reviews" },
    { href: "#about", label: lang === "th" ? "ผู้สอน & CV" : "Instructor" },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 no-print">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-200 rounded-clay border-[3px] border-white/90 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-clay py-2.5"
            : "bg-white/80 backdrop-blur-sm shadow-clay-sm py-3"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 text-clay-ink group cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 rounded-2xl"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center font-heading font-bold text-base shadow-clay-btn border-2 border-white/70 shrink-0 group-hover:scale-105 transition-transform duration-200">
              TK
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-clay-ink text-base sm:text-lg flex items-center gap-1.5">
                <span>TK PlayLab</span>
                <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
              </span>
              <span className="text-[11px] text-indigo-700/80 font-semibold block">
                {lang === "th" ? "ทตพร แก้วมณี • AI & IoT Academy" : "Tataphorn • AI & IoT Academy"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-bold text-clay-ink/80 hover:text-indigo-700 hover:bg-indigo-50/90 rounded-2xl transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onLanguageChange(lang === "th" ? "en" : "th")}
              className="clay-btn-soft flex items-center gap-1.5 text-xs px-3.5 py-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
              aria-label="Switch Language"
              title="สลับภาษา / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>{lang === "th" ? "EN" : "ไทย"}</span>
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="clay-btn-soft flex items-center gap-1.5 text-xs px-3.5 py-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
            >
              <FileText className="w-3.5 h-3.5 text-violet-600" />
              <span>{lang === "th" ? "ดู CV" : "View CV"}</span>
            </button>

            <a
              href="#enroll"
              className="clay-btn-cta flex items-center gap-1.5 text-xs sm:text-sm px-4 py-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
            >
              <Rocket className="w-4 h-4" />
              <span>{lang === "th" ? "สมัครเรียนฟรี" : "Enroll Free"}</span>
              {enrolledCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.5 text-[10px] font-extrabold bg-white text-orange-600 rounded-full">
                  {enrolledCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onLanguageChange(lang === "th" ? "en" : "th")}
              className="clay-btn-soft px-3 py-1.5 text-xs"
              aria-label="Switch Language"
            >
              {lang === "th" ? "EN" : "ไทย"}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="clay-btn-soft p-2 text-clay-ink"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t-2 border-indigo-100/80 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-clay-ink hover:bg-indigo-50 rounded-2xl transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="clay-btn-soft flex items-center justify-center gap-1.5 py-2.5 text-xs"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>{lang === "th" ? "ดูเรซูเม่ (CV)" : "View CV"}</span>
              </button>

              <a
                href="#enroll"
                onClick={() => setMobileMenuOpen(false)}
                className="clay-btn-cta flex items-center justify-center gap-1.5 py-2.5 text-xs"
              >
                <Rocket className="w-4 h-4" />
                <span>{lang === "th" ? "สมัครเรียนฟรี" : "Enroll Free"}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
