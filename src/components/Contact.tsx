"use client";

import React, { useState } from "react";
import { Language } from "@/types";
import { contactInfo } from "@/data/portfolioData";
import { Phone, Mail, MapPin, Send, Check, Copy, CheckCircle2 } from "lucide-react";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
            {lang === "th" ? "การติดต่อสื่อสาร" : "Contact & Inquiry"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {lang === "th" ? "ติดต่อสอบถามหรือเสนอโอกาสการทำงาน" : "Get In Touch"}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {lang === "th"
              ? "ยินดีรับข้อเสนอการฝึกงาน ตำแหน่งงานด้าน AI, IoT, Web Developer และ Hardware"
              : "Open to internship offers, employment opportunities, and engineering inquiries."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex items-start justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-slate-700" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 block">
                    {lang === "th" ? "เบอร์โทรศัพท์" : "Phone"}
                  </span>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-base font-bold text-slate-900 hover:text-blue-600"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(contactInfo.phone, "phone")}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md"
                title="Copy phone"
              >
                {copiedField === "phone" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex items-start justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-slate-700" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 block">
                    {lang === "th" ? "อีเมล" : "Email"}
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(contactInfo.email, "email")}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md"
                title="Copy email"
              >
                {copiedField === "email" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-slate-700" />
              </div>
              <div>
                <span className="text-xs font-medium text-slate-500 block">
                  {lang === "th" ? "ที่อยู่" : "Location"}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 block">
                  {lang === "th" ? contactInfo.locationTh : contactInfo.locationEn}
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  {lang === "th" ? "พร้อมปฏิบัติงาน ณ สถานที่จริง หรือรูปแบบ Hybrid" : "Available for onsite or hybrid work"}
                </span>
              </div>
            </div>

          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {lang === "th" ? "ส่งข้อความถึงคุณทตพร" : "Send a Message"}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {lang === "th" ? "กรอกข้อมูลด้านล่างเพื่อติดต่อหรือนัดสัมภาษณ์" : "Leave a message for interviews or inquiries."}
            </p>

            {submitted && (
              <div className="mb-5 p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {lang === "th"
                    ? "บันทึกข้อความเรียบร้อยแล้วค่ะ ขอบคุณสำหรับการติดต่อ"
                    : "Message sent successfully. Thank you for reaching out."}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === "th" ? "ชื่อผู้ติดต่อ / บริษัท *" : "Your Name / Company *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === "th" ? "อีเมลติดต่อกลับ *" : "Email Address *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === "th" ? "หัวข้อเรื่อง *" : "Subject *"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={lang === "th" ? "เช่น ติดต่อนัดสัมภาษณ์งานตำแหน่ง AI / IoT Engineer" : "e.g. Internship opportunity"}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === "th" ? "ข้อความ *" : "Message *"}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? (lang === "th" ? "กำลังส่ง..." : "Sending...") : (lang === "th" ? "ส่งข้อความ" : "Send Message")}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
