"use client";

import React, { useState } from "react";
import { Language } from "@/types";
import { progressTracksData } from "@/data/portfolioData";
import {
  Trophy,
  Flame,
  CheckCircle2,
  Circle,
  Sparkles,
  Award,
  RotateCcw,
  BarChart3,
  Zap,
  Lock,
  Unlock,
} from "lucide-react";

interface ProgressDemoProps {
  lang: Language;
  completedLessons: Record<string, boolean>;
  onToggleLesson: (lessonId: string) => void;
  onResetProgress: () => void;
}

export default function ProgressDemo({
  lang,
  completedLessons,
  onToggleLesson,
  onResetProgress,
}: ProgressDemoProps) {
  const [selectedTrackId, setSelectedTrackId] = useState<string>(progressTracksData[0].id);

  const currentTrack =
    progressTracksData.find((t) => t.id === selectedTrackId) ?? progressTracksData[0];

  const completedInTrack = currentTrack.lessons.filter((l) => completedLessons[l.id]).length;
  const totalInTrack = currentTrack.lessons.length;
  const progressPercent = Math.round((completedInTrack / totalInTrack) * 100);

  const allLessons = progressTracksData.flatMap((t) => t.lessons);
  const totalCompletedAll = allLessons.filter((l) => completedLessons[l.id]).length;
  const totalXp = allLessons.reduce(
    (acc, l) => (completedLessons[l.id] ? acc + l.xp : acc),
    0
  );
  const currentLevel = Math.max(1, Math.floor(totalXp / 350) + 1);

  const dayLabels =
    lang === "th"
      ? ["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"]
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleLessonClick = async (lessonId: string) => {
    const willBeCompleted = !completedLessons[lessonId];
    onToggleLesson(lessonId);

    // Fire celebratory confetti when finishing the last lesson in the active track
    if (willBeCompleted && completedInTrack + 1 === totalInTrack) {
      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.65 },
          colors: ["#4F46E5", "#F97316", "#10B981", "#F59E0B", "#EC4899"],
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const badges = [
    {
      id: "starter",
      title: lang === "th" ? "นักทดลองมือใหม่" : "First Lab Spark",
      req: lang === "th" ? "เรียนครบ 3 บทเรียน" : "Complete 3 lessons",
      unlocked: totalCompletedAll >= 3,
      tone: "clay-sky",
    },
    {
      id: "streak",
      title: lang === "th" ? "สะสม 800+ XP" : "800+ XP Achiever",
      req: lang === "th" ? "สะสมคะแนนครบ 800 XP" : "Earn 800 total XP",
      unlocked: totalXp >= 800,
      tone: "clay-butter",
    },
    {
      id: "master",
      title: currentTrack.badgeName[lang],
      req: lang === "th" ? "จบ Track ปัจจุบัน 100%" : "Finish active track 100%",
      unlocked: progressPercent === 100,
      tone: "clay-mint",
    },
  ];

  return (
    <section id="progress-demo" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-orange-500 fill-orange-400" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
                {lang === "th" ? "ทดลองระบบติดตามความก้าวหน้าสด" : "Interactive Progress Tracking Demo"}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clay-ink tracking-tight">
              {lang === "th"
                ? "เรียนสนุก เห็นความก้าวหน้าชัดทุกก้าว"
                : "Watch Your Skills Level Up in Real Time"}
            </h2>
            <p className="mt-2 text-base text-slate-700 font-semibold">
              {lang === "th"
                ? "ลองคลิกสลับเส้นทางการเรียนและติ๊กถูกแต่ละบทเรียนเพื่อดูแถบพลัง XP เหรียญรางวัล และสถิติอัปเดตทันที"
                : "Switch learning tracks and toggle lessons below to experience live XP counters, progress bars, and unlockable clay badges."}
            </p>
          </div>

          <button
            type="button"
            onClick={onResetProgress}
            className="clay-btn-soft px-4 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 self-start md:self-auto"
          >
            <RotateCcw className="w-4 h-4 text-indigo-600" />
            <span>{lang === "th" ? "รีเซ็ตเดโม" : "Reset Demo"}</span>
          </button>
        </div>

        {/* Main Claymorphism Dashboard Container */}
        <div className="clay-card p-5 sm:p-8">
          {/* Track Switcher Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-7">
            {progressTracksData.map((track) => {
              const isSelected = track.id === selectedTrackId;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrackId(track.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected ? "clay-btn-primary" : "clay-btn-soft text-clay-ink/80"
                  }`}
                >
                  {track.name[lang]}
                </button>
              );
            })}
          </div>

          {/* Top KPI Clay Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
            <div className="clay-lavender p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold text-indigo-900/75">
                  {lang === "th" ? "ความคืบหน้า Track" : "Track Progress"}
                </span>
                <Sparkles className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-clay-ink">
                {progressPercent}%
              </span>
              <span className="text-[11px] font-bold text-indigo-700 block mt-0.5">
                {completedInTrack}/{totalInTrack} {lang === "th" ? "บทเรียนเสร็จแล้ว" : "lessons done"}
              </span>
            </div>

            <div className="clay-butter p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold text-amber-900/75">
                  {lang === "th" ? "คะแนน XP รวม" : "Total Earned XP"}
                </span>
                <Trophy className="w-4 h-4 text-amber-600" />
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-clay-ink">
                {totalXp}
              </span>
              <span className="text-[11px] font-bold text-amber-800 block mt-0.5">
                Level {currentLevel} Maker
              </span>
            </div>

            <div className="clay-peach p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold text-orange-900/75">
                  {lang === "th" ? "สตรีคต่อเนื่อง" : "Daily Streak"}
                </span>
                <Flame className="w-4 h-4 text-orange-500 fill-orange-400" />
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-clay-ink">
                12 {lang === "th" ? "วัน" : "Days"}
              </span>
              <span className="text-[11px] font-bold text-orange-700 block mt-0.5">
                {lang === "th" ? "สถิติดีเยี่ยม!" : "Personal best!"}
              </span>
            </div>

            <div className="clay-mint p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold text-emerald-900/75">
                  {lang === "th" ? "เหรียญที่ปลดล็อก" : "Badges Unlocked"}
                </span>
                <Award className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-clay-ink">
                {badges.filter((b) => b.unlocked).length}/{badges.length}
              </span>
              <span className="text-[11px] font-bold text-emerald-700 block mt-0.5">
                {progressPercent === 100
                  ? lang === "th"
                    ? "ครบทุกเหรียญแล้ว!"
                    : "All mastered!"
                  : lang === "th"
                    ? "ติ๊กต่อเพื่อปลดล็อก"
                    : "Check off to unlock"}
              </span>
            </div>
          </div>

          {/* Interactive Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 7 Cols: Interactive Lesson Checklist + Glossy Clay Progress Bar */}
            <div className="lg:col-span-7 clay-well p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading text-lg font-bold text-clay-ink">
                    {currentTrack.name[lang]}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    {currentTrack.subtitle[lang]}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-indigo-700 text-xs font-extrabold shadow-clay-sm">
                  {progressPercent === 100
                    ? lang === "th"
                      ? "สำเร็จ 100%"
                      : "Completed!"
                    : `${progressPercent}%`}
                </span>
              </div>

              {/* Chunky 3D Progress Bar */}
              <div className="h-5 w-full rounded-full bg-white p-1 shadow-inner mb-5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${Math.max(4, progressPercent)}%` }}
                />
              </div>

              {/* Clickable Lesson Rows */}
              <div className="space-y-2.5">
                {currentTrack.lessons.map((lesson, idx) => {
                  const checked = !!completedLessons[lesson.id];
                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => handleLessonClick(lesson.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 ${
                        checked
                          ? "bg-emerald-50/95 border-emerald-300 shadow-clay-sm"
                          : "bg-white/95 border-white hover:border-indigo-200 shadow-clay-sm hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {checked ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                        ) : (
                          <Circle className="w-6 h-6 text-indigo-300 shrink-0" />
                        )}
                        <div>
                          <span
                            className={`text-sm font-bold block ${
                              checked ? "text-emerald-950 line-through decoration-emerald-400" : "text-clay-ink"
                            }`}
                          >
                            {idx + 1}. {lesson.title[lang]}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-500">
                            {lesson.duration}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-xl text-xs font-extrabold shrink-0 ${
                          checked
                            ? "bg-emerald-500 text-white"
                            : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        +{lesson.xp} XP
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Cols: Weekly Activity Bar Chart + Unlockable Clay Badges */}
            <div className="lg:col-span-5 space-y-5">
              {/* Weekly Study Minutes Chart */}
              <div className="clay-sky p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-sm font-bold text-clay-ink flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-sky-600" />
                    {lang === "th" ? "เวลาฝึกแล็บรายสัปดาห์ (นาที)" : "Weekly Study Activity (min)"}
                  </span>
                  <span className="text-xs font-extrabold text-sky-800 bg-white/90 px-2.5 py-0.5 rounded-full">
                    {currentTrack.weeklyMinutes.reduce((a, b) => a + b, 0)}{" "}
                    {lang === "th" ? "นาที" : "min"}
                  </span>
                </div>

                <div className="h-32 flex items-end justify-between gap-2 px-1">
                  {currentTrack.weeklyMinutes.map((mins, idx) => {
                    const heightPct = Math.max(20, Math.round((mins / 90) * 100));
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <span className="text-[10px] font-extrabold text-sky-900">{mins}</span>
                        <div
                          className="w-full rounded-t-2xl rounded-b-lg bg-gradient-to-t from-indigo-500 to-sky-400 border-2 border-white/80 shadow-sm transition-all duration-300"
                          style={{ height: `${heightPct}%` }}
                        />
                        <span className="text-[11px] font-bold text-slate-600">
                          {dayLabels[idx]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Unlockable Clay Badges */}
              <div className="clay-well p-5">
                <h4 className="font-heading text-sm font-bold text-clay-ink mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-orange-500" />
                  {lang === "th" ? "เหรียญความสำเร็จ (Live Badges)" : "Live Achievement Badges"}
                </h4>

                <div className="space-y-2.5">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all duration-300 ${
                        badge.unlocked
                          ? `${badge.tone} opacity-100`
                          : "bg-white/60 border-white/80 opacity-65"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            badge.unlocked
                              ? "bg-white text-emerald-600 shadow-clay-sm"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {badge.unlocked ? (
                            <Unlock className="w-4 h-4" />
                          ) : (
                            <Lock className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <span className="text-xs font-extrabold text-clay-ink block">
                            {badge.title}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-600">
                            {badge.req}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                          badge.unlocked
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {badge.unlocked
                          ? lang === "th"
                            ? "ปลดล็อก"
                            : "Unlocked"
                          : lang === "th"
                            ? "ล็อก"
                            : "Locked"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
