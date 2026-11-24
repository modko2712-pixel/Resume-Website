# TK PlayLab — Tataphorn Kaewmanee (AI & IoT Learning Platform + Portfolio)

เว็บไซต์แพลตฟอร์มการเรียนรู้สไตล์ **Playful Claymorphism** ที่พัฒนาต่อยอดจาก `Resume-Website` ของ **นางสาวทตพร แก้วมณี (Tataphorn Kaewmanee)** ด้วยมาตรฐาน **UI/UX Pro Max (`uipro init --ai antigravity`)** บน **Next.js 14 (App Router), TypeScript และ Tailwind CSS**

---

## ไฮไลต์การอัปเกรด UI (UI/UX Pro Max + Claymorphism)

1. **ติดตั้ง `uipro init --ai antigravity` พร้อม Design System Master**:
   - มีไฟล์สกิล UI/UX Pro Max ครบชุดใน `.agent/skills/ui-ux-pro-max/`
   - บันทึกกฎการออกแบบหลักไว้ที่ `design-system/MASTER.md`
   - ใช้ชุดสี Educational App (`#4F46E5` Indigo, `#F97316` Orange CTA, `#10B981` Mint, `#0EA5E9` Sky) ผสาน Claymorphism Pastels และฟอนต์ `Fredoka` + `Nunito` + `Noto Sans Thai`
2. **Course Catalog Preview (Claymorphism Cards)**:
   - คอร์สเชิงปฏิบัติการ 6 หลักสูตรด้าน Arduino, Node-RED, Edge AI, Google Colab, Next.js Dashboard และ PC Hardware
   - ฟิลเตอร์หมวดหมู่แบบ Clay Pills, ป๊อปอัปดู Syllabus และปุ่มลงทะเบียนพร้อมเอฟเฟกต์ Confetti
3. **Interactive Progress Tracking Demo**:
   - สลับเส้นทางการเรียนได้ 3 Tracks, ติ๊กถูกบทเรียนเพื่ออัปเดตแถบความคืบหน้า 3D, คะแนน XP, Level, กราฟเวลารายสัปดาห์ และปลดล็อกเหรียญรางวัลแบบ Real-time
4. **Live IoT & Edge Telemetry Lab (`IoTShowcase`)**:
   - ยกเครื่องแผงควบคุม Arduino/Node-RED/MQTT เดิมเป็น Claymorphism เต็มรูปแบบ พร้อมปุ่มสลับรีเลย์และจำลอง Thermal Spike
5. **Student Testimonials & Enrollment CTA**:
   - การ์ดรีวิวผู้เรียนสไตล์ Claymorphism + แบนเนอร์และแพ็กเกจสมัครเรียน (Free Starter, All-Access Maker Lab, Workshop/Hire Me)
6. **คงข้อมูลเรซูเม่จริง 100% + โหมดสลับ 2 ภาษา (TH/EN) + พิมพ์ CV ขนาด A4**:
   - รักษาข้อมูลประวัติ ทักษะ โปรเจกต์ การศึกษา และ `ResumeModal` พิมพ์ PDF/A4 ไว้ครบถ้วน

---

## วิธีการรันโปรเจกต์

```powershell
cd "C:\Users\IT-MOD\.gemini\antigravity\scratch\Resume-Website"
npm install
npm run dev
```

เปิดเบราว์เซอร์ที่ **http://localhost:3000**
