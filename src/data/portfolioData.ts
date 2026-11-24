import {
  ContactInfo,
  CourseItem,
  EducationItem,
  EnrollmentPlan,
  ProgressTrack,
  ProjectItem,
  TestimonialItem,
} from "@/types";

export interface SkillGroup {
  id: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  skills: {
    name: string;
    detailTh?: string;
    detailEn?: string;
  }[];
}

export const contactInfo: ContactInfo = {
  nameTh: "นางสาวทตพร แก้วมณี",
  nameEn: "Tataphorn Kaewmanee",
  phone: "092-820-0394",
  email: "tataphorn.k@rmutsvmail.com",
  locationTh: "ปากพนัง, นครศรีธรรมราช",
  locationEn: "Pak Phanang, Nakhon Si Thammarat",
  targetRolesTh: [
    "AI Engineer",
    "IoT & Hardware Engineer",
    "Web Developer",
    "IT Process Improvement Intern",
    "IT Services Sales",
  ],
  targetRolesEn: [
    "AI Engineer",
    "IoT & Hardware Engineer",
    "Web Developer",
    "IT Process Improvement Intern",
    "IT Services Sales",
  ],
};

export const aboutContent = {
  th: {
    title: "รู้จักผู้สอน & วิศวกรผู้สร้างแพลตฟอร์ม",
    subtitle: "นักศึกษาวิศวกรรมปัญญาประดิษฐ์ประยุกต์ ชั้นปีที่ 4 • มทร.ศรีวิชัย",
    bio: "นักศึกษาวิศวกรรมปัญญาประดิษฐ์ประยุกต์ ชั้นปีที่ 4 มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ มีความสนใจและความเชี่ยวชาญด้านการพัฒนาระบบควบคุม IoT/OT, การพัฒนา Web Application และการบำรุงรักษาระบบฮาร์ดแวร์ มีประสบการณ์เขียนโปรแกรมสั่งการอุปกรณ์ผ่าน Arduino และ Node-RED ร่วมกับการประมวลผลโมเดลบน Google Colab พร้อมถ่ายทอดความรู้ผ่านแล็บลงมือทำจริง และพร้อมนำทักษะไปพัฒนาระบบอัตโนมัติให้แก่องค์กร",
    educationBrief: "วศ.บ. วิศวกรรมปัญญาประดิษฐ์ประยุกต์ (มทร.ศรีวิชัย) | ปวส. เทคโนโลยีธุรกิจดิจิทัล",
    careerGoal:
      "มุ่งมั่นนำความรู้ทั้งด้านซอฟต์แวร์ ฮาร์ดแวร์ และระบบเครือข่าย มาสร้างสื่อการเรียนรู้เชิงปฏิบัติการและระบบอัตโนมัติที่ลดต้นทุนและเพิ่มประสิทธิภาพจริง",
  },
  en: {
    title: "Meet Your Instructor & Platform Builder",
    subtitle: "4th-Year Applied AI Engineering Student • RMUTSV",
    bio: "Senior student in Applied Artificial Intelligence Engineering at Rajamangala University of Technology Srivijaya (Rattaphum Campus). Proficient in IoT/OT control systems, Web Application development, and computer hardware maintenance. Experienced in programming microcontrollers with Arduino and Node-RED, combined with AI/ML model execution on Google Colab — turning hands-on engineering into playful, accessible labs.",
    educationBrief: "B.Eng. in Applied AI Engineering (RMUTSV) | Higher Voc. Cert. in Digital Business Tech",
    careerGoal:
      "Dedicated to combining embedded hardware, AI models, and modern web UX to build joyful learning labs and real-world automation systems.",
  },
};

export const coursesData: CourseItem[] = [
  {
    id: "arduino-nodered-lab",
    category: "iot",
    tone: "lavender",
    badge: { th: "ยอดนิยม", en: "Most Popular" },
    title: {
      th: "Arduino & Node-RED OT Automation Lab",
      en: "Arduino & Node-RED OT Automation Lab",
    },
    description: {
      th: "สร้างระบบสั่งการฮาร์ดแวร์และเซนเซอร์ DHT22 แบบ Real-time ด้วย Node-RED Flow และโปรโตคอล MQTT ตั้งแต่เริ่มต้นจนใช้งานจริง",
      en: "Build real-time hardware automation with Arduino microcontrollers, DHT22 sensors, Node-RED flow orchestration, and MQTT.",
    },
    level: { th: "เริ่มต้น – กลาง", en: "Beginner – Mid" },
    duration: { th: "8 สัปดาห์", en: "8 Weeks" },
    lessonsCount: 16,
    studentsCount: "1,240+",
    rating: 4.9,
    xpReward: 450,
    tools: ["Arduino C++", "Node-RED", "MQTT", "DHT22"],
    syllabus: {
      th: [
        "พื้นฐานไมโครคอนโทรลเลอร์และการอ่านค่าเซนเซอร์ Analog/Digital",
        "ออกแบบ Flow อัตโนมัติบน Node-RED พร้อมแจ้งเตือนอัจฉริยะ",
        "เชื่อมต่อโปรโตคอล MQTT และสั่งการรีเลย์แบบ Two-way",
        "โปรเจกต์จบ: ตู้ควบคุมอุณหภูมิอัตโนมัติระดับ Edge",
      ],
      en: [
        "Microcontroller fundamentals & Analog/Digital sensor wiring",
        "Visual automation flows in Node-RED with smart alert routing",
        "Bi-directional MQTT messaging and physical relay actuation",
        "Capstone Lab: Autonomous Edge thermal chamber controller",
      ],
    },
  },
  {
    id: "nextjs-iot-dashboard",
    category: "web",
    tone: "sky",
    badge: { th: "โปรเจกต์จริง", en: "Project-Based" },
    title: {
      th: "สร้าง Web Telemetry Dashboard ด้วย Next.js & Tailwind",
      en: "Real-Time IoT Telemetry Dashboards with Next.js",
    },
    description: {
      th: "ออกแบบและพัฒนาเว็บแดชบอร์ดแสดงสถานะเซนเซอร์ กราฟสด และแผงควบคุมรีเลย์ที่รองรับทั้งเดสก์ท็อปและมือถือ",
      en: "Craft interactive web telemetry dashboards with live sensor charts, responsive controls, and clean TypeScript architecture.",
    },
    level: { th: "ระดับกลาง", en: "Intermediate" },
    duration: { th: "6 สัปดาห์", en: "6 Weeks" },
    lessonsCount: 14,
    studentsCount: "980+",
    rating: 5.0,
    xpReward: 420,
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    syllabus: {
      th: [
        "โครงสร้าง Next.js App Router และ State Management สำหรับข้อมูลสด",
        "สร้างกราฟ Telemetry และปุ่ม Toggle สั่งงานแบบ Responsive",
        "จัดการสตรีมข้อมูล MQTT / WebSocket และหน้าจอ Log Monitor",
        "Deploy แดชบอร์ดขึ้นคลาวด์พร้อมระบบสลับ 2 ภาษา",
      ],
      en: [
        "Next.js App Router architecture for live streaming telemetry",
        "Interactive gauges, sparklines, and tactile actuator toggles",
        "MQTT / WebSocket ingestion tables and anomaly alerts",
        "Production deployment with bilingual TH/EN UX",
      ],
    },
  },
  {
    id: "applied-ai-colab",
    category: "ai",
    tone: "peach",
    badge: { th: "สาย AI มือใหม่", en: "AI Starter" },
    title: {
      th: "Applied Machine Learning บน Google Colab",
      en: "Applied Machine Learning on Google Colab",
    },
    description: {
      th: "เรียนรู้การเตรียมข้อมูล (Data Preprocessing) ฝึกโมเดลจำแนกประเภทและตรวจจับความผิดปกติ พร้อมเชื่อมผลทำนายเข้าสู่ระบบควบคุม",
      en: "Master data cleaning, classification & anomaly detection models in Google Colab and connect inference to real devices.",
    },
    level: { th: "เริ่มต้น", en: "Beginner" },
    duration: { th: "6 สัปดาห์", en: "6 Weeks" },
    lessonsCount: 12,
    studentsCount: "1,520+",
    rating: 4.9,
    xpReward: 380,
    tools: ["Python", "Google Colab", "Scikit-Learn", "Pandas"],
    syllabus: {
      th: [
        "Python & Pandas สำหรับการทำความสะอาดข้อมูลจากเซนเซอร์",
        "ฝึกและวัดผลโมเดล Classification & Regression บน Colab",
        "สร้างโมเดล Anomaly Detection ตรวจจับความร้อนผิดปกติ",
        "ส่งออกผลลัพธ์ Inference เชื่อมต่อกับระบบแจ้งเตือน",
      ],
      en: [
        "Python & Pandas pipelines for noisy sensor datasets",
        "Training and evaluating classification & regression models",
        "Building thermal Anomaly Detection models in Colab",
        "Exporting inference confidence into automation workflows",
      ],
    },
  },
  {
    id: "edge-computing-mastery",
    category: "iot",
    tone: "mint",
    badge: { th: "แล็บเข้มข้น", en: "Hands-on Lab" },
    title: {
      th: "Edge Computing & Smart Sensor Integration",
      en: "Edge Computing & Smart Sensor Integration",
    },
    description: {
      th: "ออกแบบสถาปัตยกรรมประมวลผลที่อุปกรณ์หน้างาน (On-Premise Edge) ลดความหน่วงและทำงานออฟไลน์ได้อย่างเสถียร",
      en: "Architect low-latency on-premise Edge nodes that pre-process telemetry locally and keep operating even offline.",
    },
    level: { th: "ระดับกลาง – สูง", en: "Mid – Advanced" },
    duration: { th: "5 สัปดาห์", en: "5 Weeks" },
    lessonsCount: 10,
    studentsCount: "640+",
    rating: 4.8,
    xpReward: 500,
    tools: ["Edge AI", "Embedded C", "Serial", "Node-RED"],
    syllabus: {
      th: [
        "หลักการ Edge vs Cloud และการลดภาระ Bandwidth",
        "การบีบอัดและกรองสัญญาณข้อมูลที่โหนดหน้างาน",
        "ระบบ Fail-safe เมื่อเครือข่ายขาดการเชื่อมต่อ",
        "ทดสอบ Stress Test และวัด Latency จริง",
      ],
      en: [
        "Edge vs Cloud trade-offs and payload optimization",
        "Signal filtering and local threshold decision logic",
        "Offline fail-safe actuation during network outages",
        "Latency profiling and sustained stress benchmarking",
      ],
    },
  },
  {
    id: "ai-workstation-hardware",
    category: "hardware",
    tone: "butter",
    badge: { th: "สายฮาร์ดแวร์", en: "Hardware Pro" },
    title: {
      th: "จัดสเปก ประกอบ และดูแล PC สายประมวลผล AI",
      en: "AI Workstation Assembly & Hardware Diagnostics",
    },
    description: {
      th: "คัดเลือกอุปกรณ์ ประกอบเครื่อง ทดสอบ Benchmark จัดการระบบระบายความร้อน และแก้ปัญหาฮาร์ดแวร์ระดับมืออาชีพ",
      en: "Spec out high-compute workstations, assemble hardware cleanly, optimize thermals, and master root-cause troubleshooting.",
    },
    level: { th: "เริ่มต้น", en: "Beginner" },
    duration: { th: "4 สัปดาห์", en: "4 Weeks" },
    lessonsCount: 9,
    studentsCount: "790+",
    rating: 4.9,
    xpReward: 320,
    tools: ["PC Assembly", "Benchmarking", "BIOS/UEFI", "OS Tuning"],
    syllabus: {
      th: [
        "การเลือก CPU, GPU, RAM และ PSU ให้สมดุลกับงาน AI & Dev",
        "ขั้นตอนการประกอบ จัดสาย และการออกแบบทิศทางลม (Airflow)",
        "ตั้งค่า BIOS/UEFI, ติดตั้ง OS และ Driver ให้เสถียร",
        "การทดสอบ Stress Test และวิเคราะห์อาการเสียเชิงลึก",
      ],
      en: [
        "Balancing CPU, GPU, RAM, and PSU for AI & engineering loads",
        "Clean build techniques, cabling, and thermal airflow design",
        "BIOS/UEFI tuning, OS hardening, and driver optimization",
        "Sustained load benchmarking and fault diagnostics",
      ],
    },
  },
  {
    id: "python-sql-automation",
    category: "ai",
    tone: "rose",
    badge: { th: "ครบจบในคอร์สเดียว", en: "Career Ready" },
    title: {
      th: "Python & SQL สำหรับระบบอัตโนมัติในองค์กร",
      en: "Python & SQL for IT Process Automation",
    },
    description: {
      th: "เขียนสคริปต์ Python จัดการข้อมูลอัตโนมัติ เชื่อมต่อฐานข้อมูล SQL และลดงานซ้ำซ้อนเพื่อเพิ่มประสิทธิภาพทีมไอที",
      en: "Automate repetitive IT workflows using Python scripts, structured SQL databases, and clean reporting pipelines.",
    },
    level: { th: "เริ่มต้น", en: "Beginner" },
    duration: { th: "5 สัปดาห์", en: "5 Weeks" },
    lessonsCount: 11,
    studentsCount: "1,110+",
    rating: 4.9,
    xpReward: 360,
    tools: ["Python", "SQL", "Git", "VS Code"],
    syllabus: {
      th: [
        "พื้นฐาน Python Scripting และการจัดการไฟล์ข้อมูลอัตโนมัติ",
        "ออกแบบตารางและเขียนคำสั่ง SQL เพื่อบันทึก Log ระบบ",
        "สร้างรายงานสรุปผลอัตโนมัติและแจ้งเตือนปัญหา",
        "จัดเก็บเวอร์ชันโค้ดอย่างเป็นระบบด้วย Git & GitHub",
      ],
      en: [
        "Python scripting essentials for operational automation",
        "Relational SQL schema design for telemetry and event logs",
        "Automated report generation and anomaly notifications",
        "Team collaboration workflows with Git & GitHub",
      ],
    },
  },
];

export const progressTracksData: ProgressTrack[] = [
  {
    id: "iot-track",
    tone: "lavender",
    name: {
      th: "เส้นทาง IoT & Node-RED Builder",
      en: "IoT & Node-RED Builder Track",
    },
    subtitle: {
      th: "ติ๊กถูกบทเรียนด้านล่างเพื่อลองระบบติดตามความก้าวหน้าและสะสม XP แบบเรียลไทม์",
      en: "Check off lessons below to test live progress bars, XP rewards, and badge unlocks",
    },
    badgeName: {
      th: "เหรียญนักสร้างระบบ Edge IoT",
      en: "Edge IoT Architect Badge",
    },
    weeklyMinutes: [35, 50, 42, 65, 58, 80, 48],
    lessons: [
      {
        id: "iot-1",
        title: { th: "ต่อวงจร Arduino Uno + เซนเซอร์ DHT22", en: "Wire Arduino Uno + DHT22 Sensor" },
        duration: "15 min",
        xp: 80,
        defaultCompleted: true,
      },
      {
        id: "iot-2",
        title: { th: "สร้าง Node-RED Flow อ่านค่า Serial & MQTT", en: "Build Node-RED Serial & MQTT Flow" },
        duration: "25 min",
        xp: 110,
        defaultCompleted: true,
      },
      {
        id: "iot-3",
        title: { th: "ตั้งกฎแจ้งเตือนอุณหภูมิเกิน 35°C อัตโนมัติ", en: "Automate 35°C Thermal Threshold Alert" },
        duration: "20 min",
        xp: 120,
        defaultCompleted: true,
      },
      {
        id: "iot-4",
        title: { th: "สั่งเปิดพัดลมระบายความร้อนผ่าน Relay 1", en: "Trigger Cooling Fan via Relay 1" },
        duration: "18 min",
        xp: 130,
        defaultCompleted: false,
      },
      {
        id: "iot-5",
        title: { th: "ส่งข้อมูลขึ้น Live Web Telemetry Dashboard", en: "Stream Telemetry to Live Web Dashboard" },
        duration: "30 min",
        xp: 160,
        defaultCompleted: false,
      },
    ],
  },
  {
    id: "ai-track",
    tone: "peach",
    name: {
      th: "เส้นทาง Applied AI & Google Colab",
      en: "Applied AI & Google Colab Track",
    },
    subtitle: {
      th: "ฝึกเตรียมข้อมูล สอนโมเดล ML และเชื่อมผลทำนายเข้ากับระบบอัตโนมัติ",
      en: "Clean datasets, train ML models in Colab, and wire live inference outputs",
    },
    badgeName: {
      th: "เหรียญนักพัฒนาโมเดล AI ประยุกต์",
      en: "Applied AI Explorer Badge",
    },
    weeklyMinutes: [25, 40, 55, 45, 70, 62, 75],
    lessons: [
      {
        id: "ai-1",
        title: { th: "ทำความสะอาดข้อมูลเซนเซอร์ด้วย Pandas", en: "Clean Sensor Telemetry with Pandas" },
        duration: "20 min",
        xp: 90,
        defaultCompleted: true,
      },
      {
        id: "ai-2",
        title: { th: "แยก Train/Test และทำ Feature Scaling", en: "Train/Test Split & Feature Scaling" },
        duration: "22 min",
        xp: 100,
        defaultCompleted: true,
      },
      {
        id: "ai-3",
        title: { th: "สร้างโมเดลตรวจจับความผิดปกติ (Anomaly Detection)", en: "Train Thermal Anomaly Detection Model" },
        duration: "30 min",
        xp: 150,
        defaultCompleted: false,
      },
      {
        id: "ai-4",
        title: { th: "ประเมินความแม่นยำและ Confidence Score", en: "Evaluate Accuracy & Confidence Score" },
        duration: "18 min",
        xp: 110,
        defaultCompleted: false,
      },
      {
        id: "ai-5",
        title: { th: "เชื่อมผลทำนายเข้ากับ Node-RED Action", en: "Connect Model Inference to Node-RED" },
        duration: "25 min",
        xp: 150,
        defaultCompleted: false,
      },
    ],
  },
  {
    id: "web-track",
    tone: "mint",
    name: {
      th: "เส้นทาง Interactive Web & UI Builder",
      en: "Interactive Web & UI Builder Track",
    },
    subtitle: {
      th: "สร้างเว็บแอป Next.js พร้อม Claymorphism UI และสถานะข้อมูลแบบเรียลไทม์",
      en: "Build responsive Next.js apps with tactile Claymorphism UI and live telemetry",
    },
    badgeName: {
      th: "เหรียญนักออกแบบเว็บแดชบอร์ด",
      en: "Clay UI Dashboard Maker Badge",
    },
    weeklyMinutes: [40, 35, 60, 52, 68, 74, 85],
    lessons: [
      {
        id: "web-1",
        title: { th: "วางระบบ Design Tokens & Claymorphism CSS", en: "Set Up Claymorphism Design Tokens" },
        duration: "16 min",
        xp: 90,
        defaultCompleted: true,
      },
      {
        id: "web-2",
        title: { th: "สร้าง Component การ์ดคอร์สและฟิลเตอร์หมวดหมู่", en: "Build Interactive Course Cards & Filters" },
        duration: "24 min",
        xp: 120,
        defaultCompleted: true,
      },
      {
        id: "web-3",
        title: { th: "ออกแบบกราฟ Sparkline แสดงแนวโน้มข้อมูลสด", en: "Design Live Telemetry Sparkline Chart" },
        duration: "25 min",
        xp: 130,
        defaultCompleted: true,
      },
      {
        id: "web-4",
        title: { th: "เพิ่มระบบสลับภาษา TH/EN และ Print A4 Resume", en: "Add TH/EN Switcher & A4 Print Resume" },
        duration: "20 min",
        xp: 120,
        defaultCompleted: true,
      },
      {
        id: "web-5",
        title: { th: "ปรับแต่ง Accessibility & Mobile Responsive", en: "Polish Accessibility & Mobile Responsiveness" },
        duration: "15 min",
        xp: 140,
        defaultCompleted: false,
      },
    ],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t-1",
    tone: "lavender",
    initials: "PK",
    name: { th: "พิชญา กิตติวัฒน์", en: "Pitchaya Kittiwat" },
    role: { th: "นักศึกษาวิศวกรรมคอมพิวเตอร์ ปี 3", en: "3rd-Year Computer Engineering Student" },
    course: { th: "Arduino & Node-RED Lab", en: "Arduino & Node-RED Lab" },
    rating: 5,
    quote: {
      th: "จากที่ไม่เคยจับบอร์ด Arduino เลย พอได้ลองทำตามแล็บทีละขั้นและทดสอบบนหน้าจอ Telemetry Sandbox ก็สามารถต่อระบบวัดอุณหภูมิส่งเข้าเว็บได้ในสัปดาห์แรก สนุกและเข้าใจง่ายมากค่ะ!",
      en: "I had never touched an Arduino before. Following the step-by-step labs and playing with the live Telemetry Sandbox helped me ship my first sensor-to-web project in week one!",
    },
    outcome: { th: "สร้างโปรเจกต์ Smart Greenhouse สำเร็จ", en: "Built a Smart Greenhouse prototype" },
  },
  {
    id: "t-2",
    tone: "mint",
    initials: "NS",
    name: { th: "ณัฐพล ศรีสุวรรณ", en: "Nattapol Srisuwan" },
    role: { th: "Junior IoT & Automation Technician", en: "Junior IoT & Automation Technician" },
    course: { th: "Edge Computing Mastery", en: "Edge Computing Mastery" },
    rating: 5,
    quote: {
      th: "ระบบติดตามความก้าวหน้าและโจทย์จำลองความร้อน (Thermal Spike) ทำให้เห็นภาพการทำงานของ Edge AI ชัดเจนมาก นำโครงสร้าง Node-RED ไปปรับใช้กับโรงงานได้จริงเลยครับ",
      en: "The progress tracker and thermal-spike simulations made Edge AI concepts click immediately. I adapted the exact Node-RED flow pattern for our factory monitoring pilot.",
    },
    outcome: { th: "ลดเวลาตรวจสอบเซนเซอร์หน้างาน 40%", en: "Cut manual sensor checks by 40%" },
  },
  {
    id: "t-3",
    tone: "peach",
    initials: "CM",
    name: { th: "ชลธิชา มณีรัตน์", en: "Chonticha Maneerat" },
    role: { th: "นักศึกษาเทคโนโลยีธุรกิจดิจิทัล", en: "Digital Business Tech Student" },
    course: { th: "Applied ML on Google Colab", en: "Applied ML on Google Colab" },
    rating: 5,
    quote: {
      th: "เนื้อหา AI ถูกย่อยให้เป็นมิตรและไม่น่ากลัวเลยค่ะ มีเช็กลิสต์ให้ติ๊กสะสม XP ทุกวัน ทำให้มีกำลังใจเรียนจนจบคอร์สและทำแดชบอร์ดพอร์ตโฟลิโอส่งอาจารย์ได้คะแนนเต็ม",
      en: "AI felt approachable and fun instead of intimidating. Checking off daily milestones and earning XP kept me motivated all the way to an A+ capstone dashboard.",
    },
    outcome: { th: "ผ่านการคัดเลือกฝึกงานสาย Data & AI", en: "Landed a Data & AI internship" },
  },
  {
    id: "t-4",
    tone: "sky",
    initials: "TV",
    name: { th: "ธนกฤต วงศ์สุวรรณ", en: "Thanakrit Wongsuwan" },
    role: { th: "Frontend & Web Developer Intern", en: "Frontend & Web Developer Intern" },
    course: { th: "Next.js Telemetry Dashboard", en: "Next.js Telemetry Dashboard" },
    rating: 5,
    quote: {
      th: "ชอบการสอนที่เชื่อมโลก Hardware กับ Next.js เข้าด้วยกันครับ ได้เรียนรู้ทั้งการจัดการ State ข้อมูลสดและการออกแบบ UI ที่สะอาด สวย และใช้งานง่ายบนมือถือ",
      en: "Loved how this bridges hardware and Next.js! I learned live telemetry state patterns alongside playful, accessible responsive UI design.",
    },
    outcome: { th: "พัฒนาเว็บมอนิเตอร์ให้ทีมวิศวกร 2 ระบบ", en: "Shipped 2 live monitoring web apps" },
  },
];

export const enrollmentPlansData: EnrollmentPlan[] = [
  {
    id: "starter-free",
    tone: "sky",
    name: { th: "Starter Sandbox", en: "Starter Sandbox" },
    price: { th: "ฟรี", en: "Free" },
    period: { th: "ตลอดชีพ", en: "Forever" },
    description: {
      th: "เหมาะสำหรับผู้เริ่มต้นที่อยากทดลองเล่นแล็บ IoT และเริ่มต้นเส้นทาง AI",
      en: "Perfect for curious learners exploring IoT sandboxes and starter AI labs.",
    },
    features: {
      th: [
        "เข้าถึง Interactive IoT & Edge Sandbox ไม่จำกัด",
        "บทเรียนเริ่มต้น 2 คอร์ส + ระบบติดตามความก้าวหน้า",
        "คู่มือพื้นฐาน Arduino & Google Colab",
      ],
      en: [
        "Unlimited access to Interactive IoT & Edge Sandbox",
        "2 starter tracks with live XP & progress tracking",
        "Beginner wiring & Google Colab cheat sheets",
      ],
    },
    ctaLabel: { th: "เริ่มเรียนฟรีเลย", en: "Start Free Now" },
  },
  {
    id: "pro-maker",
    tone: "lavender",
    popular: true,
    name: { th: "All-Access Maker Lab", en: "All-Access Maker Lab" },
    price: { th: "฿590", en: "$19" },
    period: { th: "/ เดือน", en: "/ month" },
    description: {
      th: "ปลดล็อกทุกคอร์ส AI, Node-RED, Next.js Dashboard และรีวิวโค้ดจากผู้สอน",
      en: "Unlock all 6 hands-on tracks, downloadable templates, and mentor code reviews.",
    },
    features: {
      th: [
        "เรียนได้ครบทุก 6 คอร์ส + อัปเดตแล็บใหม่ทุกเดือน",
        "ซอร์สโค้ด Node-RED Flow, Arduino & Next.js พร้อมใช้",
        "เกียรติบัตรดิจิทัลและเหรียญความสำเร็จครบทุก Track",
        "ปรึกษาโปรเจกต์กับผู้สอน (คุณทตพร) โดยตรง",
      ],
      en: [
        "Full access to all 6 courses & monthly new labs",
        "Production-ready Node-RED, Arduino & Next.js templates",
        "Verified digital certificates & completion badges",
        "Direct project feedback with Tataphorn",
      ],
    },
    ctaLabel: { th: "สมัครเรียนแบบจัดเต็ม", en: "Enroll All-Access" },
  },
  {
    id: "hire-collab",
    tone: "peach",
    name: { th: "Workshop / สมัครฝึกงาน", en: "Workshop / Hire Me" },
    price: { th: "ติดต่อโดยตรง", en: "Let's Talk" },
    period: { th: "องค์กร & ทีม", en: "Teams & HR" },
    description: {
      th: "สำหรับองค์กรที่สนใจเชิญร่วมฝึกงาน ร่วมงานด้าน AI/IoT/Web หรือจัดเวิร์กช็อป",
      en: "For companies offering AI/IoT/Web internships, roles, or custom team workshops.",
    },
    features: {
      th: [
        "รับชมและดาวน์โหลด Resume (CV) ฉบับทางการ A4",
        "นัดสัมภาษณ์ตำแหน่ง AI, IoT, Web หรือ IT Process",
        "พร้อมเริ่มงานทันที ทั้ง Onsite และ Hybrid",
      ],
      en: [
        "Instant access to printable official A4 Resume (CV)",
        "Direct interview scheduling for AI, IoT & Web roles",
        "Available immediately for Onsite or Hybrid teams",
      ],
    },
    ctaLabel: { th: "ติดต่อ / นัดสัมภาษณ์", en: "Book Interview / Inquiry" },
  },
];

export const skillGroupsData: SkillGroup[] = [
  {
    id: "hardware-iot",
    titleTh: "Hardware & IoT / OT Automation",
    titleEn: "Hardware & IoT / OT Automation",
    descriptionTh: "การควบคุมอุปกรณ์ฮาร์ดแวร์ วงจรไฟฟ้า เซนเซอร์ และระบบอัตโนมัติอุตสาหกรรม",
    descriptionEn: "Microcontroller programming, sensor telemetry, and industrial OT automation",
    skills: [
      {
        name: "Arduino Microcontrollers",
        detailTh: "เขียนโค้ด C/C++ ควบคุมเซนเซอร์และ Actuator",
        detailEn: "Embedded C/C++ firmware & actuation",
      },
      {
        name: "Node-RED",
        detailTh: "ออกแบบ Flow ระบบควบคุมและเชื่อมต่อข้อมูลอัตโนมัติ",
        detailEn: "Flow-based IoT orchestration & logic",
      },
      {
        name: "Sensor Integration",
        detailTh: "เชื่อมต่อเซนเซอร์ตรวจวัด (DHT, Analog, Digital)",
        detailEn: "Environmental & analog sensor telemetry",
      },
      {
        name: "Edge Computing",
        detailTh: "ออกแบบการประมวลผลข้อมูลที่อุปกรณ์หน้างานก่อนส่งต่อ",
        detailEn: "On-premise edge data pre-processing",
      },
      {
        name: "Embedded Systems",
        detailTh: "วงจรอิเล็กทรอนิกส์และระบบสมองกลฝังตัว",
        detailEn: "Embedded system architecture",
      },
    ],
  },
  {
    id: "programming-web",
    titleTh: "Programming & Web Development",
    titleEn: "Programming & Web Development",
    descriptionTh: "ภาษาคอมพิวเตอร์และการพัฒนาเว็บแดชบอร์ดแสดงผลข้อมูลแบบ Real-time",
    descriptionEn: "Core languages and web application development for monitoring systems",
    skills: [
      {
        name: "Python",
        detailTh: "สคริปต์จัดการข้อมูล, ทดสอบโมเดล AI และระบบอัตโนมัติ",
        detailEn: "Data manipulation, scripting & ML modeling",
      },
      {
        name: "C / C++",
        detailTh: "เขียนโปรแกรมระบบสมองกลฝังตัวและการประมวลผลพื้นฐาน",
        detailEn: "Embedded systems & firmware logic",
      },
      {
        name: "JavaScript / TypeScript",
        detailTh: "พัฒนา Web Dashboard และ Logic การทำงาน",
        detailEn: "Interactive web & frontend telemetry",
      },
      {
        name: "Next.js & React",
        detailTh: "พัฒนาหน้าจอ Dashboard แสดงสถานะแบบเรียลไทม์",
        detailEn: "Modern web dashboards & telemetry UI",
      },
      {
        name: "HTML & CSS / Tailwind",
        detailTh: "จัดรูปแบบหน้าเว็บ Responsive สวยงามและสะอาดตา",
        detailEn: "Clean, responsive & accessible interfaces",
      },
      {
        name: "SQL",
        detailTh: "ออกแบบและเรียกดูข้อมูลในฐานข้อมูล",
        detailEn: "Database queries & data logging",
      },
    ],
  },
  {
    id: "ai-data",
    titleTh: "AI & Data Processing",
    titleEn: "AI & Data Processing",
    descriptionTh: "การเตรียมข้อมูล การสร้างและทดสอบโมเดล Machine Learning",
    descriptionEn: "Data preprocessing, training, and testing machine learning models",
    skills: [
      {
        name: "Google Colab",
        detailTh: "สภาพแวดล้อมฝึกฝนและทดสอบโมเดล AI ผ่านคลาวด์",
        detailEn: "Cloud ML experimentation & training",
      },
      {
        name: "Data Preprocessing",
        detailTh: "การทำความสะอาด จัดการ และเตรียมข้อมูลก่อนสอนโมเดล",
        detailEn: "Data cleansing, normalization & preparation",
      },
      {
        name: "Basic Machine Learning Models",
        detailTh: "โมเดลจำแนกประเภทและการทำนายข้อมูลพื้นฐาน",
        detailEn: "Classification & regression algorithms",
      },
      {
        name: "Model Integration",
        detailTh: "การนำผลทำนายของโมเดลมาเชื่อมโยงกับระบบสั่งการ",
        detailEn: "Connecting inference outputs to actuators",
      },
    ],
  },
  {
    id: "systems-hardware",
    titleTh: "Systems & Hardware Maintenance",
    titleEn: "Systems & Hardware Maintenance",
    descriptionTh: "การจัดสเปก ประกอบ ตรวจซ่อม และบำรุงรักษาคอมพิวเตอร์ประมวลผลสูง",
    descriptionEn: "Workstation assembly, benchmarking, troubleshooting, and OS maintenance",
    skills: [
      {
        name: "PC Hardware Assembly",
        detailTh: "จัดสเปกและประกอบเครื่องคอมพิวเตอร์สำหรับงานประมวลผล",
        detailEn: "Component selection & high-compute assembly",
      },
      {
        name: "Hardware Troubleshooting",
        detailTh: "วิเคราะห์และแก้ไขปัญหาฮาร์ดแวร์ อุปกรณ์ และความร้อน",
        detailEn: "Diagnostic procedures & thermal solutions",
      },
      {
        name: "System Maintenance & OS",
        detailTh: "ติดตั้ง ปรับแต่ง และดูแลรักษาระบบปฏิบัติการ",
        detailEn: "OS configuration & driver optimization",
      },
      {
        name: "Performance Benchmarking",
        detailTh: "ทดสอบเสถียรภาพและประสิทธิภาพระบบ",
        detailEn: "Stress testing & system stability check",
      },
    ],
  },
  {
    id: "tools",
    titleTh: "Tools & Platforms",
    titleEn: "Tools & Platforms",
    descriptionTh: "เครื่องมือและโปรแกรมสนับสนุนการทำงาน",
    descriptionEn: "Development environments, version control, and collaboration tools",
    skills: [
      {
        name: "Git & GitHub",
        detailTh: "การจัดการเวอร์ชันของโค้ดและการส่งงาน",
        detailEn: "Version control & repository management",
      },
      {
        name: "VS Code",
        detailTh: "โปรแกรมเขียนโค้ดหลัก",
        detailEn: "Primary development IDE",
      },
      {
        name: "Arduino IDE",
        detailTh: "คอมไพล์และอัปโหลดโค้ดลงไมโครคอนโทรลเลอร์",
        detailEn: "Firmware flashing & serial debugging",
      },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "iot-ot-control",
    category: "iot",
    title: {
      th: "ระบบควบคุมอัตโนมัติ OT & IoT แบบ Real-time",
      en: "Real-time OT & IoT Industrial Automation System",
    },
    subtitle: {
      th: "เขียนโปรแกรมควบคุมอุปกรณ์อัตโนมัติด้วย Node-RED และ Arduino เชื่อมโยงระดับ Edge Computing",
      en: "Automated hardware control with Node-RED and Arduino with Edge Computing connectivity",
    },
    description: {
      th: "โปรเจกต์พัฒนาระบบควบคุมอุปกรณ์อัตโนมัติ โดยใช้ Node-RED ทำหน้าที่เป็น Flow Orchestrator และ Arduino ทำหน้าที่ควบคุมวงจร เซนเซอร์ และอุปกรณ์เอาต์พุต รับ-ส่งข้อมูลสถานะการทำงานแบบ Real-time และเชื่อมต่อกับระบบประมวลผลระดับ Edge เพื่อให้ระบบทำงานได้รวดเร็วและมีความเสถียร",
      en: "Developed an automation control pipeline utilizing Node-RED as a flow-based orchestrator and Arduino microcontrollers to drive electronics and telemetry sensors. Designed for low-latency real-time data streaming and local Edge Computing nodes.",
    },
    highlights: {
      th: [
        "เขียนโปรแกรมควบคุมอุปกรณ์อัตโนมัติด้วย Node-RED และ Arduino",
        "เชื่อมต่อเซนเซอร์เพื่อรับ-ส่ง และประมวลผลข้อมูลแบบ Real-time",
        "ออกแบบการเชื่อมต่อฮาร์ดแวร์กับระบบประมวลผลระดับ Edge (Edge Computing)",
        "ลดภาระการส่งข้อมูลไปยังคลาวด์ด้วยการประมวลผลเบื้องต้นที่อุปกรณ์หน้างาน",
      ],
      en: [
        "Automated hardware control programming using Node-RED and Arduino microcontrollers",
        "Bi-directional sensor interfacing for real-time telemetry streaming and alerts",
        "Edge computing architecture allowing local offline intelligence and edge computing",
        "Optimized data payload to enhance network throughput and reliability",
      ],
    },
    technologies: ["Node-RED", "Arduino C++", "MQTT", "Edge Computing", "Sensors", "Serial Communication"],
  },
  {
    id: "web-dashboard",
    category: "web",
    title: {
      th: "เว็บแอปพลิเคชัน & Real-time Telemetry Dashboard",
      en: "Web Application & Real-time Telemetry Dashboard",
    },
    subtitle: {
      th: "ออกแบบและพัฒนา Web Dashboard แสดงผลข้อมูลและสถานะการทำงานของอุปกรณ์แบบ Real-time",
      en: "Designed and implemented interactive web dashboards monitoring device metrics live",
    },
    description: {
      th: "พัฒนาเว็บแอปพลิเคชันสำหรับการมอนิเตอร์และควบคุมระบบฮาร์ดแวร์จากระยะไกล ออกแบบ UI ที่สะอาด สบายตา ใช้งานง่าย แสดงผลข้อมูลสถานะเซนเซอร์ รีเลย์ และค่าประมวลผล พร้อมรองรับการแสดงผลทั้งบนคอมพิวเตอร์และโทรศัพท์มือถือ",
      en: "Built high-performance web dashboards for telemetry visualization and remote actuation. Incorporates clean data representations, live streaming charts, operational alerts, and device status feeds.",
    },
    highlights: {
      th: [
        "ออกแบบและพัฒนา Web Application ด้วย Next.js และ React",
        "พัฒนา Dashboard แสดงผลข้อมูลและสถานะการทำงานแบบ Real-time",
        "การจัดวางเลย์เอาต์แบบ Responsive รองรับการใช้งานทั้งบนหน้าจอมือถือและเดสก์ท็อป",
        "เชื่อมต่อข้อมูลสถานะอุปกรณ์แบบ Interactive เพื่อให้ผู้ดูแลระบบตรวจสอบได้สะดวก",
      ],
      en: [
        "Engineered responsive modern web applications using Next.js & React ecosystem",
        "Crafted real-time visualization widgets and status monitors",
        "Cross-platform responsive layout optimized for mobile and desktop workstations",
        "Integrated interactive simulated sandbox for hardware telemetry testing",
      ],
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST / WebSocket"],
  },
  {
    id: "hardware-maintenance",
    category: "hardware",
    title: {
      th: "งานดูแล บำรุงรักษา และจัดสเปกคอมพิวเตอร์สายประมวลผล",
      en: "High-Compute Hardware Assembly & System Diagnostics",
    },
    subtitle: {
      th: "จัดสเปก ประกอบ ทดสอบประสิทธิภาพ และแก้ปัญหาฮาร์ดแวร์คอมพิวเตอร์",
      en: "Workstation architecture specification, hardware assembly, benchmarking & OS maintenance",
    },
    description: {
      th: "ประสบการณ์ด้านการคัดเลือกสเปกคอมพิวเตอร์ให้ตอบโจทย์งานประมวลผล AI และงานวิศวกรรม ประกอบเครื่องคอมพิวเตอร์ ทดสอบ Benchmark ประสิทธิภาพ ตรวจวิเคราะห์และแก้ปัญหาฮาร์ดแวร์เชิงลึก (Troubleshooting) และดูแลรักษาระบบปฏิบัติการให้ทำงานได้อย่างราบรื่น",
      en: "Specialized in tailoring workstation specifications for demanding AI training and engineering workflows. Hands-on assembly, stress benchmarking, deep hardware diagnostics, thermal optimization, and operating system hardening.",
    },
    highlights: {
      th: [
        "จัดสเปก ประกอบ และทดสอบประสิทธิภาพคอมพิวเตอร์สายประมวลผล",
        "แก้ไขปัญหาฮาร์ดแวร์ (Troubleshooting) และดูแลรักษาระบบปฏิบัติการ",
        "ตรวจเช็กความร้อนและการระบายอากาศภายในเคสเพื่อยืดอายุการใช้งาน",
        "ดูแลรักษา ซ่อมแซม และติดตั้ง Driver ให้ระบบทำงานเสถียรที่สุด",
      ],
      en: [
        "Curated compute specifications and assembled specialized computing workstations",
        "Root-cause diagnosis and hardware troubleshooting across components",
        "Operating system maintenance, backup, and driver optimization",
        "Thermal management and stress testing under sustained workloads",
      ],
    },
    technologies: ["Hardware Assembly", "Benchmarking", "OS Maintenance", "Troubleshooting", "BIOS/UEFI Diagnostics"],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: {
      th: "ปริญญาตรี - วศ.บ. วิศวกรรมปัญญาประดิษฐ์ประยุกต์",
      en: "Bachelor of Engineering (B.Eng.) in Applied Artificial Intelligence Engineering",
    },
    institution: {
      th: "มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ",
      en: "Rajamangala University of Technology Srivijaya (Rattaphum Campus)",
    },
    period: {
      th: "ปัจจุบัน (ชั้นปีที่ 4)",
      en: "Present (4th Year)",
    },
    details: {
      th: [
        "ศึกษาการประยุกต์ใช้โมเดล AI ร่วมกับระบบสมองกลฝังตัวและอุปกรณ์ควบคุมอุตสาหกรรม (IoT & Edge Computing)",
        "ทักษะการเขียนโปรแกรม การประมวลผลภาพ และการพัฒนาโซลูชันเพื่อแก้โจทย์วิศวกรรมจริง",
        "ปฏิบัติการฮาร์ดแวร์และเขียนโค้ดร่วมกับอุปกรณ์จริงตลอดหลักสูตร",
      ],
      en: [
        "Focused on real-world AI deployment with embedded microcontrollers and IoT/Edge hardware",
        "Core coursework in machine learning, software engineering, telemetry architectures, and data processing",
        "Extensive laboratory and hands-on capstone engineering projects with physical devices",
      ],
    },
  },
  {
    degree: {
      th: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) - สาขาเทคโนโลยีธุรกิจดิจิทัล",
      en: "Higher Vocational Certificate in Digital Business Technology",
    },
    institution: {
      th: "วิทยาลัยอาชีวศึกษา",
      en: "Vocational College",
    },
    period: {
      th: "พ.ศ. 2565 – 2567",
      en: "2022 – 2024",
    },
    details: {
      th: [
        "ปูพื้นฐานการเขียนโปรแกรม การจัดการฐานข้อมูล และระบบสารสนเทศดิจิทัล",
        "ทักษะการปรับปรุงกระบวนการทำงาน (IT Process Improvement) เพื่อเพิ่มประสิทธิภาพในองค์กร",
      ],
      en: [
        "Foundational studies in programming, database administration, and enterprise digital solutions",
        "Practical competencies in IT workflow automation and business process optimization",
      ],
    },
  },
];
