"use client";

import React, { useState } from "react";
import { EnrollmentPlan, Language } from "@/types";
import { contactInfo, coursesData, enrollmentPlansData } from "@/data/portfolioData";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  Copy,
  CheckCircle2,
  Rocket,
  Sparkles,
  FileText,
  Star,
} from "lucide-react";

interface ContactProps {
  lang: Language;
  enrolledCourses: string[];
  onOpenResume: () => void;
}

export default function Contact({ lang, enrolledCourses, onOpenResume }: ContactProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("pro-maker");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedPlan =
    enrollmentPlansData.find((p) => p.id === selectedPlanId) ?? enrollmentPlansData[1];

  const toneClassMap: Record<EnrollmentPlan["tone"], string> = {
    lavender: "clay-lavender",
    peach: "clay-peach",
    mint: "clay-mint",
    sky: "clay-sky",
    butter: "clay-butter",
    rose: "clay-rose",
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSelectPlan = (plan: EnrollmentPlan) => {
    setSelectedPlanId(plan.id);
    setFormData((prev) => ({
      ...prev,
      subject:
        lang === "th"
          ? `สมัครแพ็กเกจ: ${plan.name.th}`
          : `Enrollment Inquiry: ${plan.name.en}`,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(async () => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      try {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#4F46E5", "#F97316", "#10B981", "#F59E0B", "#0EA5E9"],
        });
      } catch {
        // Confetti fallback
      }
      setTimeout(() => setSubmitted(false), 6500);
    }, 650);
  };

  const enrolledTitles = coursesData
    .filter((c) => enrolledCourses.includes(c.id))
    .map((c) => c.title[lang]);

  return (
    <section id="enroll" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Vibrant Claymorphism Enrollment CTA Hero Banner */}
        <div className="rounded-clay-lg border-[4px] border-white/80 bg-gradient-to-br from-indigo-600 via-violet-600 to-orange-500 p-7 sm:p-10 text-white shadow-clay-hover mb-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-xs font-extrabold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-amber-300" />
                {lang === "th"
                  ? "เปิดรับสมัครรุ่นใหม่ & พร้อมรับโอกาสฝึกงาน"
                  : "Enrollment Open • Internship Ready"}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-3">
                {lang === "th"
                  ? "พร้อมสร้างโปรเจกต์ AI & IoT สนุกๆ ไปด้วยกันหรือยัง?"
                  : "Ready to Start Building Smart AI & IoT Projects?"}
              </h2>
              <p className="text-sm sm:text-base text-indigo-50 font-semibold leading-relaxed">
                {lang === "th"
                  ? "เลือกแผนการเรียนที่เหมาะกับคุณ หรือทักหาคุณทตพรโดยตรงเพื่อสมัครเรียน นัดสัมภาษณ์ฝึกงาน หรือร่วมพัฒนาโปรเจกต์ระบบอัตโนมัติ"
                  : "Pick a learning pass below to start right away, or reach out directly to Tataphorn for internships, workshops, and AI/IoT engineering roles."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="clay-btn-cta px-6 py-3.5 text-sm sm:text-base inline-flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                <span>{lang === "th" ? "ลงทะเบียนเลย" : "Enroll Now"}</span>
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="clay-btn-soft px-5 py-3.5 text-sm inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>{lang === "th" ? "ดูเรซูเม่ A4" : "View A4 CV"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Claymorphism Enrollment Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {enrollmentPlansData.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                className={`${toneClassMap[plan.tone]} p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-200 ${
                  isSelected ? "ring-4 ring-indigo-500/70 -translate-y-1" : "hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-orange-500 text-white text-xs font-extrabold border-2 border-white shadow-clay-sm inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-200 text-amber-200" />
                    {lang === "th" ? "แนะนำยอดนิยม" : "Most Popular"}
                  </span>
                )}

                <div>
                  <h3 className="font-heading text-xl font-bold text-clay-ink mb-1">
                    {plan.name[lang]}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="font-heading text-3xl font-bold text-indigo-700">
                      {plan.price[lang]}
                    </span>
                    <span className="text-xs font-extrabold text-slate-600">
                      {plan.period[lang]}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-5">
                    {plan.description[lang]}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {plan.features[lang].map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-clay-ink">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 px-4 text-sm flex items-center justify-center gap-2 ${
                    plan.popular ? "clay-btn-cta" : "clay-btn-primary"
                  }`}
                >
                  <Rocket className="w-4 h-4" />
                  <span>{plan.ctaLabel[lang]}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Contact & Enrollment Form Grid */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-28">
          {/* Left 5 Cols: Direct Contact Clay Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-2">
              <h3 className="font-heading text-2xl font-bold text-clay-ink">
                {lang === "th" ? "ช่องทางติดต่อโดยตรง" : "Direct Contact"}
              </h3>
              <p className="text-sm font-semibold text-slate-600 mt-1">
                {lang === "th"
                  ? "ติดต่อสอบถามคอร์สเรียน หรือเสนอโอกาสฝึกงานด้าน AI, IoT และ Web"
                  : "Reach out for course enrollment, internships, or engineering opportunities."}
              </p>
            </div>

            {/* Phone */}
            <div className="clay-sky p-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/95 shadow-clay-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-sky-900/70 block">
                    {lang === "th" ? "เบอร์โทรศัพท์" : "Phone"}
                  </span>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="font-heading text-base font-bold text-clay-ink hover:text-indigo-700"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(contactInfo.phone, "phone")}
                className="clay-btn-soft p-2 text-clay-ink"
                aria-label="Copy phone number"
                title="Copy phone"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-indigo-600" />
                )}
              </button>
            </div>

            {/* Email */}
            <div className="clay-lavender p-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-white/95 shadow-clay-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-extrabold text-indigo-900/70 block">
                    {lang === "th" ? "อีเมล" : "Email"}
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-heading text-sm sm:text-base font-bold text-clay-ink hover:text-indigo-700 break-all block"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(contactInfo.email, "email")}
                className="clay-btn-soft p-2 text-clay-ink shrink-0"
                aria-label="Copy email address"
                title="Copy email"
              >
                {copiedField === "email" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-indigo-600" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="clay-mint p-5 flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-white/95 shadow-clay-sm flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-emerald-900/70 block">
                  {lang === "th" ? "ที่อยู่" : "Location"}
                </span>
                <span className="font-heading text-base font-bold text-clay-ink block">
                  {lang === "th" ? contactInfo.locationTh : contactInfo.locationEn}
                </span>
                <span className="text-xs font-semibold text-slate-700 block mt-0.5">
                  {lang === "th"
                    ? "พร้อมปฏิบัติงาน Onsite หรือรูปแบบ Hybrid"
                    : "Available for onsite or hybrid roles"}
                </span>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Interactive Enrollment & Message Form */}
          <div className="lg:col-span-7 clay-card p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="font-heading text-xl font-bold text-clay-ink">
                {lang === "th"
                  ? "ฟอร์มลงทะเบียนเรียน / ติดต่อคุณทตพร"
                  : "Enroll or Send a Message"}
              </h3>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-extrabold">
                {selectedPlan.name[lang]}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-5">
              {lang === "th"
                ? "กรอกข้อมูลด้านล่างเพื่อรับสิทธิ์ทดลองเรียนฟรี สมัครคอร์ส หรือนัดสัมภาษณ์งาน"
                : "Fill out the form below to claim your seat, enroll in courses, or schedule an interview."}
            </p>

            {/* Show enrolled course chips if user selected any from CourseCatalog */}
            {enrolledTitles.length > 0 && (
              <div className="clay-peach p-3.5 mb-5">
                <span className="text-xs font-extrabold text-orange-900 block mb-1.5">
                  {lang === "th"
                    ? `คอร์สที่คุณเลือกไว้ (${enrolledTitles.length}):`
                    : `Selected Courses (${enrolledTitles.length}):`}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {enrolledTitles.map((title, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-white/95 text-orange-800 text-[11px] font-extrabold"
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {submitted && (
              <div className="mb-5 p-4 rounded-2xl bg-emerald-100 border-2 border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === "th"
                    ? "ลงทะเบียนและบันทึกข้อความเรียบร้อยแล้วค่ะ! ขอบคุณที่ร่วมสนุกกับ TK PlayLab"
                    : "Enrollment & message received! Thank you for joining TK PlayLab."}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-extrabold text-clay-ink mb-1.5"
                  >
                    {lang === "th" ? "ชื่อผู้สมัคร / บริษัท *" : "Your Name / Company *"}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === "th" ? "เช่น สมชาย ใจดี" : "e.g. Alex Chen"}
                    className="clay-input w-full px-4 py-2.5 text-clay-ink text-sm font-semibold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-extrabold text-clay-ink mb-1.5"
                  >
                    {lang === "th" ? "อีเมลติดต่อกลับ *" : "Email Address *"}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="clay-input w-full px-4 py-2.5 text-clay-ink text-sm font-semibold"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-extrabold text-clay-ink mb-1.5"
                >
                  {lang === "th" ? "หัวข้อ / คอร์สที่สนใจ *" : "Topic / Preferred Track *"}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={
                    lang === "th"
                      ? "เช่น สมัครคอร์ส Arduino & Node-RED หรือ นัดสัมภาษณ์ฝึกงาน"
                      : "e.g. Enroll in IoT Lab or Internship Interview"
                  }
                  className="clay-input w-full px-4 py-2.5 text-clay-ink text-sm font-semibold"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-extrabold text-clay-ink mb-1.5"
                >
                  {lang === "th" ? "เป้าหมายการเรียนหรือรายละเอียดเพิ่มเติม *" : "Learning Goals or Message *"}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    lang === "th"
                      ? "เล่าโปรเจกต์ที่อยากสร้าง หรือรายละเอียดตำแหน่งงานที่ต้องการติดต่อ..."
                      : "Tell us what you want to build or share role details..."
                  }
                  className="clay-input w-full px-4 py-2.5 text-clay-ink text-sm font-semibold resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="clay-btn-cta w-full sm:w-auto px-7 py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? lang === "th"
                      ? "กำลังส่งข้อมูล..."
                      : "Submitting..."
                    : lang === "th"
                      ? "ยืนยันลงทะเบียน / ส่งข้อความ"
                      : "Complete Enrollment / Send"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
