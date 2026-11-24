"use client";

import React, { useMemo, useState } from "react";
import { Language } from "@/types";
import { progressTracksData } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCatalog from "@/components/CourseCatalog";
import ProgressDemo from "@/components/ProgressDemo";
import IoTShowcase from "@/components/IoTShowcase";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

function buildInitialCompletedLessons(): Record<string, boolean> {
  const initial: Record<string, boolean> = {};
  for (const track of progressTracksData) {
    for (const lesson of track.lessons) {
      initial[lesson.id] = lesson.defaultCompleted;
    }
  }
  return initial;
}

export default function Home() {
  const [lang, setLang] = useState<Language>("th");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(["arduino-nodered-lab"]);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>(() =>
    buildInitialCompletedLessons()
  );

  const totalXp = useMemo(() => {
    return progressTracksData
      .flatMap((t) => t.lessons)
      .reduce((sum, lesson) => (completedLessons[lesson.id] ? sum + lesson.xp : sum), 0);
  }, [completedLessons]);

  const handleToggleEnroll = (courseId: string) => {
    setEnrolledCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  const handleToggleLesson = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  const handleResetProgress = () => {
    setCompletedLessons(buildInitialCompletedLessons());
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Claymorphism Navigation Header */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
        enrolledCount={enrolledCourses.length}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Playful Claymorphism Hero */}
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
          totalXp={totalXp}
        />

        {/* 2. Course Catalog Preview (Claymorphism Cards + Syllabus Modal) */}
        <CourseCatalog
          lang={lang}
          enrolledCourses={enrolledCourses}
          onToggleEnroll={handleToggleEnroll}
        />

        {/* 3. Interactive Progress Tracking Demo */}
        <ProgressDemo
          lang={lang}
          completedLessons={completedLessons}
          onToggleLesson={handleToggleLesson}
          onResetProgress={handleResetProgress}
        />

        {/* 4. Interactive IoT & Edge Telemetry Sandbox */}
        <IoTShowcase lang={lang} />

        {/* 5. Student Testimonials */}
        <Testimonials lang={lang} />

        {/* 6. Instructor Profile, Skills, Projects & Education (Original Resume Data) */}
        <About lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />

        {/* 7. Enrollment CTA Plans & Contact Form */}
        <Contact
          lang={lang}
          enrolledCourses={enrolledCourses}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Claymorphism Footer */}
      <Footer lang={lang} />

      {/* Official Printable A4 Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
