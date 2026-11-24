"use client";

import React, { useState } from "react";
import { CourseItem, Language } from "@/types";
import { coursesData } from "@/data/portfolioData";
import {
  BookOpen,
  Clock,
  Star,
  Sparkles,
  CheckCircle2,
  Cpu,
  Code2,
  BrainCircuit,
  Wrench,
  Layers,
  X,
  Users,
  PlusCircle,
  Check,
} from "lucide-react";

interface CourseCatalogProps {
  lang: Language;
  enrolledCourses: string[];
  onToggleEnroll: (courseId: string) => void;
}

type CategoryFilter = "all" | "iot" | "web" | "ai" | "hardware";

export default function CourseCatalog({
  lang,
  enrolledCourses,
  onToggleEnroll,
}: CourseCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [previewCourse, setPreviewCourse] = useState<CourseItem | null>(null);

  const categories: { id: CategoryFilter; labelTh: string; labelEn: string; icon: React.ReactNode }[] = [
    { id: "all", labelTh: "ทั้งหมด (6)", labelEn: "All Courses (6)", icon: <Layers className="w-4 h-4" /> },
    { id: "iot", labelTh: "IoT & Edge", labelEn: "IoT & Edge", icon: <Cpu className="w-4 h-4" /> },
    { id: "web", labelTh: "Web Dashboard", labelEn: "Web Dashboard", icon: <Code2 className="w-4 h-4" /> },
    { id: "ai", labelTh: "AI & Python", labelEn: "AI & Python", icon: <BrainCircuit className="w-4 h-4" /> },
    { id: "hardware", labelTh: "PC Hardware", labelEn: "PC Hardware", icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === activeCategory);

  const toneClassMap: Record<CourseItem["tone"], string> = {
    lavender: "clay-lavender",
    peach: "clay-peach",
    mint: "clay-mint",
    sky: "clay-sky",
    butter: "clay-butter",
    rose: "clay-rose",
  };

  const badgeColorMap: Record<CourseItem["tone"], string> = {
    lavender: "bg-indigo-600 text-white",
    peach: "bg-orange-500 text-white",
    mint: "bg-emerald-600 text-white",
    sky: "bg-sky-600 text-white",
    butter: "bg-amber-500 text-white",
    rose: "bg-rose-500 text-white",
  };

  const getCategoryIcon = (category: CourseItem["category"]) => {
    switch (category) {
      case "iot":
        return <Cpu className="w-5 h-5 text-indigo-700" />;
      case "web":
        return <Code2 className="w-5 h-5 text-sky-700" />;
      case "ai":
        return <BrainCircuit className="w-5 h-5 text-orange-600" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-700" />;
    }
  };

  const handleEnrollClick = async (courseId: string) => {
    const isAlready = enrolledCourses.includes(courseId);
    onToggleEnroll(courseId);
    if (!isAlready) {
      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#4F46E5", "#F97316", "#10B981", "#F59E0B", "#0EA5E9"],
        });
      } catch {
        // Confetti optional fallback
      }
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
              {lang === "th" ? "คลังคอร์สเรียนเชิงปฏิบัติการ" : "Course Catalog Preview"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clay-ink tracking-tight">
            {lang === "th"
              ? "เลือกเส้นทางการเรียนรู้ที่คุณชอบ"
              : "Explore Playful, Hands-On Courses"}
          </h2>
          <p className="mt-3 text-base text-slate-700 font-semibold">
            {lang === "th"
              ? "ทุกคอร์สออกแบบจากประสบการณ์ทำโปรเจกต์จริงด้าน IoT, Edge AI, Next.js และฮาร์ดแวร์ พร้อมกดดูเนื้อหาและเพิ่มเข้าแผนเรียนได้ทันที"
              : "Every course is built from real IoT, Edge AI, Next.js, and hardware engineering projects. Preview any syllabus or enroll in one click."}
          </p>
        </div>

        {/* Interactive Clay Filter Pills */}
        <div
          role="tablist"
          aria-label="Course Categories"
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 ${
                  isActive
                    ? "clay-btn-primary"
                    : "clay-btn-soft text-clay-ink/80 hover:text-indigo-700"
                }`}
              >
                {cat.icon}
                <span>{lang === "th" ? cat.labelTh : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Claymorphism Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCourses.map((course) => {
            const isEnrolled = enrolledCourses.includes(course.id);
            return (
              <article
                key={course.id}
                className={`${toneClassMap[course.tone]} p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5`}
              >
                <div>
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/95 shadow-clay-sm flex items-center justify-center shrink-0">
                      {getCategoryIcon(course.category)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm ${badgeColorMap[course.tone]}`}
                      >
                        {course.badge[lang]}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/95 text-amber-700 text-xs font-extrabold flex items-center gap-1 shadow-clay-sm">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                        {course.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-clay-ink leading-snug mb-2.5">
                    {course.title[lang]}
                  </h3>
                  <p className="text-sm text-slate-700 font-semibold leading-relaxed mb-4">
                    {course.description[lang]}
                  </p>

                  {/* Meta Info Strip */}
                  <div className="grid grid-cols-3 gap-2 bg-white/75 rounded-2xl p-2.5 border-2 border-white/90 mb-4 text-center">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 block">
                        {lang === "th" ? "ระยะเวลา" : "Duration"}
                      </span>
                      <span className="text-xs font-extrabold text-clay-ink flex items-center justify-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-indigo-500" />
                        {course.duration[lang]}
                      </span>
                    </div>
                    <div className="border-x border-indigo-100">
                      <span className="text-[10px] font-bold text-slate-500 block">
                        {lang === "th" ? "ผู้เรียน" : "Learners"}
                      </span>
                      <span className="text-xs font-extrabold text-clay-ink flex items-center justify-center gap-1 mt-0.5">
                        <Users className="w-3 h-3 text-emerald-600" />
                        {course.studentsCount}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 block">
                        {lang === "th" ? "รางวัล" : "Reward"}
                      </span>
                      <span className="text-xs font-extrabold text-orange-600 flex items-center justify-center gap-1 mt-0.5">
                        <Sparkles className="w-3 h-3" />
                        +{course.xpReward} XP
                      </span>
                    </div>
                  </div>

                  {/* Tool Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xl bg-white/90 text-clay-ink text-[11px] font-extrabold border border-white shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="flex items-center gap-2.5 pt-3 border-t-2 border-white/70">
                  <button
                    type="button"
                    onClick={() => setPreviewCourse(course)}
                    className="clay-btn-soft flex-1 py-2.5 px-3 text-xs sm:text-sm flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>{lang === "th" ? "ดูเนื้อหา" : "Syllabus"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleEnrollClick(course.id)}
                    className={`flex-1 py-2.5 px-3 text-xs sm:text-sm flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-4 ${
                      isEnrolled
                        ? "clay-btn-primary focus-visible:ring-indigo-300"
                        : "clay-btn-cta focus-visible:ring-orange-300"
                    }`}
                  >
                    {isEnrolled ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>{lang === "th" ? "ลงทะเบียนแล้ว" : "Enrolled"}</span>
                      </>
                    ) : (
                      <>
                        <PlusCircle className="w-4 h-4" />
                        <span>{lang === "th" ? "เริ่มเรียน" : "Enroll"}</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Syllabus Preview Clay Modal */}
      {previewCourse && (
        <div
          className="fixed inset-0 z-50 bg-indigo-950/50 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
          onClick={() => setPreviewCourse(null)}
        >
          <div
            className="clay-card w-full max-w-xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreviewCourse(null)}
              aria-label="Close Syllabus Preview"
              className="clay-btn-soft p-2 absolute top-5 right-5 text-clay-ink"
            >
              <X className="w-5 h-5" />
            </button>

            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold mb-3 ${badgeColorMap[previewCourse.tone]}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {previewCourse.badge[lang]} • {previewCourse.level[lang]}
            </span>

            <h3
              id="course-modal-title"
              className="font-heading text-2xl font-bold text-clay-ink pr-10 mb-2"
            >
              {previewCourse.title[lang]}
            </h3>
            <p className="text-sm text-slate-700 font-semibold leading-relaxed mb-5">
              {previewCourse.description[lang]}
            </p>

            <div className="clay-lavender p-4 sm:p-5 mb-6">
              <h4 className="font-heading text-sm font-bold text-indigo-950 uppercase tracking-wider mb-3">
                {lang === "th" ? "หัวข้อที่จะได้ลงมือทำ (Syllabus)" : "Hands-On Syllabus"}
              </h4>
              <ul className="space-y-2.5">
                {previewCourse.syllabus[lang].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-semibold text-clay-ink">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-bold text-slate-600">
                {previewCourse.lessonsCount} {lang === "th" ? "บทเรียน" : "Lessons"} •{" "}
                {previewCourse.duration[lang]} • +{previewCourse.xpReward} XP
              </div>

              <button
                type="button"
                onClick={() => {
                  handleEnrollClick(previewCourse.id);
                  setPreviewCourse(null);
                }}
                className="clay-btn-cta px-6 py-2.5 text-sm flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>
                  {enrolledCourses.includes(previewCourse.id)
                    ? lang === "th"
                      ? "ยกเลิกรายการ"
                      : "Remove from List"
                    : lang === "th"
                      ? "เพิ่มเข้าคอร์สของฉัน"
                      : "Enroll in Course"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
