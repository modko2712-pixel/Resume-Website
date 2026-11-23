"use client";

import React, { useState } from "react";
import { Language } from "@/types";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import IoTShowcase from "@/components/IoTShowcase";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [lang, setLang] = useState<Language>("th");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <IoTShowcase lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Full Official Resume Modal (Printable / PDF) */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
