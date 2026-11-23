# Tataphorn Kaewmanee - Portfolio & IoT Showcase Website

เว็บไซต์ Portfolio ส่วนบุคคล และ Interactive Showcase ของ **นางสาวทตพร แก้วมณี (Tataphorn Kaewmanee)** นักศึกษาวิศวกรรมปัญญาประดิษฐ์ประยุกต์ ชั้นปีที่ 4 มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ พัฒนาด้วย **Next.js 14 (App Router), TypeScript และ Tailwind CSS**

---

## 🌟 ฟีเจอร์เด่นของเว็บไซต์ (Key Features)

1. **สไตล์ Minimal Clean & Professional**: โทนขาว-เทา เรียบหรู สะอาดตา สบายตา จัดวางเนื้อหาอย่างมีระเบียบตามมาตรฐานเว็บวิศวกรสมัยใหม่
2. **ระบบสลับ 2 ภาษา (Bilingual Support: TH / EN)**: รองรับการแสดงผลภาษาไทยและภาษาอังกฤษได้ทุกส่วนของเว็บไซต์
3. **IoT & Edge Computing Live Showcase (Interactive Sandbox)**:
   - จำลองการสตรีมข้อมูล telemetry ของเซนเซอร์ (อุณหภูมิ, ความชื้น, สถานะ Edge AI inference) แบบ Real-time
   - แผงควบคุมสวิตช์และรีเลย์ (Actuator Relays) ให้ผู้เยี่ยมชมกดเปิด/ปิดพัดลมระบายความร้อน หรือตัวเร่งประมวลผล AI ได้จริง
   - ปุ่มจำลองภาวะความร้อนสูง (Thermal Stress Test) เพื่อให้ AI ตรวจจับความผิดปกติ (Anomaly Detection)
   - หน้าจอ Serial Monitor / MQTT Console จำลองการรับส่งข้อมูลผ่าน Node-RED และ Arduino
4. **เรซูเม่ฉบับเต็มและปุ่มสั่งพิมพ์/ดาวน์โหลด PDF (Print/PDF Ready)**:
   - ป๊อปอัปหน้าเรซูเม่ตรงตามเอกสารต้นฉบับ
   - ปุ่มพิมพ์หรือบันทึกเป็น PDF (`window.print()`) พร้อม CSS จัดหน้าแบบ A4 สวยงาม
5. **แบบฟอร์มติดต่อ (Interactive Contact Form)**:
   - มีระบบตรวจสอบข้อมูล และเอฟเฟกต์ Confetti เมื่อกดส่งข้อความสำเร็จ
   - ปุ่มกดคัดลอกเบอร์โทรและอีเมลแบบ One-click copy
6. **ข้อมูลตรงตามเอกสารเรซูเม่ 100%**:
   - เบอร์โทรศัพท์: 092-820-0394
   - อีเมล: tataphorn.k@rmutsvmail.com
   - ที่อยู่: ปากพนัง นครศรีธรรมราช
   - ประวัติการศึกษา: วศ.บ. มทร.ศรีวิชัย (ปี 4) และ ปวส. สาขาเทคโนโลยีธุรกิจดิจิทัล
   - ทักษะและโปรเจกต์: Node-RED, Arduino, Edge Computing, Google Colab, Web Dashboard และ Hardware Diagnostics

---

## 🚀 วิธีการรันโปรเจกต์ (How to Run)

เปิด PowerShell หรือ Terminal แล้วใช้คำสั่ง:

```powershell
# 1. เข้าสู่โฟลเดอร์โปรเจกต์
cd "C:\Users\HP\.gemini\antigravity\scratch\tataphorn-portfolio"

# 2. รันเซิร์ฟเวอร์สำหรับใช้งานจริง (Production Server)
npm start

# หรือ รันในโหมดพัฒนา (Development Mode)
npm run dev
```

เปิดเว็บเบราว์เซอร์แล้วไปที่: **http://localhost:3000**

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
tataphorn-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # สไตล์หลักและคำสั่งพิมพ์ CV (Print media queries)
│   │   ├── layout.tsx           # SEO Metadata & Font setup
│   │   └── page.tsx             # หน้าเว็บหลัก
│   ├── components/
│   │   ├── Navbar.tsx           # แถบเมนูด้านบน พร้อมปุ่มสลับภาษาและปุ่มดู CV
│   │   ├── Hero.tsx             # หน้าแรก แนะนำตัวคุณทตพร พร้อมปุ่ม Call to Action
│   │   ├── About.tsx            # ข้อมูลเกี่ยวกับฉัน วิสัยทัศน์ และเสาหลัก 4 ด้าน
│   │   ├── Skills.tsx           # ทักษะทางเทคนิคพร้อมแท็บฟิลเตอร์และหลอดพลัง
│   │   ├── Experience.tsx       # รายละเอียดโปรเจกต์ OT/IoT, Web App, Hardware
│   │   ├── IoTShowcase.tsx      # Dashboard จำลองการทำงานของฮาร์ดแวร์ Real-time
│   │   ├── Education.tsx        # ประวัติการศึกษา วศ.บ. และ ปวส.
│   │   ├── Contact.tsx          # ช่องทางติดต่อ และฟอร์มส่งข้อความ
│   │   ├── ResumeModal.tsx      # หน้ารับชมและพิมพ์ Resume ฉบับทางการ
│   │   └── Footer.tsx           # ท้ายหน้าเว็บ
│   ├── data/
│   │   └── portfolioData.ts     # ฐานข้อมูลข้อความและรายละเอียด 2 ภาษา
│   └── types/
│       └── index.ts             # TypeScript Interfaces & Types
├── tailwind.config.ts           # การตั้งค่า Tailwind CSS
├── tsconfig.json                # การตั้งค่า TypeScript
├── next.config.mjs              # การตั้งค่า Next.js
└── package.json                 # แพ็กเกจที่ติดตั้ง
```
