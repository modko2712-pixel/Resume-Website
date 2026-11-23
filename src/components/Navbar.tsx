"use client";

import React, { useState, useEffect } from "react";
import { Language } from "@/types";
import { Menu, X, FileText, Globe } from "lucide-react";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenResume: () => void;
}

export default function Navbar({ lang, onLanguageChange, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: lang === "th" ? "เกี่ยวกับฉัน" : "About" },
    { href: "#skills", label: lang === "th" ? "ทักษะ" : "Skills" },
    { href: "#projects", label: lang === "th" ? "ผลงาน" : "Projects" },
    { href: "#iot-showcase", label: lang === "th" ? "IoT Dashboard" : "IoT Showcase" },
    { href: "#education", label: lang === "th" ? "การศึกษา" : "Education" },
    { href: "#contact", label: lang === "th" ? "ติดต่อ" : "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo / Candidate Name */}
          <a
            href="#"
            className="flex items-center gap-3 text-slate-900 group"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide">
              TK
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base leading-tight block">
                {lang === "th" ? "ทตพร แก้วมณี" : "Tataphorn Kaewmanee"}
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                {lang === "th" ? "วิศวกรรมปัญญาประดิษฐ์ประยุกต์" : "Applied AI & IoT Engineering"}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(lang === "th" ? "en" : "th")}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
              title="สลับภาษา / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === "th" ? "EN" : "ไทย"}</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-lg transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === "th" ? "ดูเรซูเม่ (CV)" : "View CV"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onLanguageChange(lang === "th" ? "en" : "th")}
              className="px-2.5 py-1 text-slate-700 bg-white border border-slate-200 rounded-lg text-xs font-bold"
            >
              {lang.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-900 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === "th" ? "ดูเรซูเม่ฉบับเต็ม (CV)" : "View Full Resume"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
