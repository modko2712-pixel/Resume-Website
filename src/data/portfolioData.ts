import { ContactInfo, EducationItem, ProjectItem } from "@/types";

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
    title: "เกี่ยวกับฉัน",
    subtitle: "นักศึกษาวิศวกรรมปัญญาประดิษฐ์ประยุกต์ ชั้นปีที่ 4",
    bio: "นักศึกษาวิศวกรรมปัญญาประดิษฐ์ประยุกต์ ชั้นปีที่ 4 มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ มีความสนใจและความเชี่ยวชาญด้านการพัฒนาระบบควบคุม IoT/OT, การพัฒนา Web Application และการบำรุงรักษาระบบฮาร์ดแวร์ มีประสบการณ์เขียนโปรแกรมสั่งการอุปกรณ์ผ่าน Arduino และ Node-RED ร่วมกับการประมวลผลโมเดลบน Google Colab พร้อมที่จะนำทักษะทางเทคโนโลยีและ Hardware มาประยุกต์ใช้เพื่อพัฒนาโซลูชันระบบอัตโนมัติให้แก่องค์กรระหว่างการฝึกงาน",
    educationBrief: "วศ.บ. วิศวกรรมปัญญาประดิษฐ์ประยุกต์ (มทร.ศรีวิชัย) | ปวส. เทคโนโลยีธุรกิจดิจิทัล",
    careerGoal: "มุ่งมั่นนำความรู้ทั้งด้านซอฟต์แวร์ ฮาร์ดแวร์ และระบบเครือข่าย มาพัฒนาระบบอัตโนมัติเพื่อลดต้นทุนและเพิ่มประสิทธิภาพกระบวนการทำงานจริงในองค์กร",
  },
  en: {
    title: "About Me",
    subtitle: "4th-Year Applied AI Engineering Student",
    bio: "Senior student in Applied Artificial Intelligence Engineering at Rajamangala University of Technology Srivijaya (Rattaphum Campus). Proficient in IoT/OT control systems, Web Application development, and computer hardware maintenance. Experienced in programming microcontrollers with Arduino and Node-RED, combined with AI/ML model execution on Google Colab. Prepared to apply technical and hardware skills to deliver automation solutions during internship and professional work.",
    educationBrief: "B.Eng. in Applied AI Engineering (RMUTSV) | Higher Voc. Cert. in Digital Business Tech",
    careerGoal: "Dedicated to integrating software, embedded hardware, and network systems to streamline operational workflows and drive measurable business impact.",
  },
};

export const skillGroupsData: SkillGroup[] = [
  {
    id: "hardware-iot",
    titleTh: "Hardware & IoT / OT Automation",
    titleEn: "Hardware & IoT / OT Automation",
    descriptionTh: "การควบคุมอุปกรณ์ฮาร์ดแวร์ วงจรไฟฟ้า เซนเซอร์ และระบบอัตโนมัติอุตสาหกรรม",
    descriptionEn: "Microcontroller programming, sensor telemetry, and industrial OT automation",
    skills: [
      { name: "Arduino Microcontrollers", detailTh: "เขียนโค้ด C/C++ ควบคุมเซนเซอร์และ Actuator", detailEn: "Embedded C/C++ firmware & actuation" },
      { name: "Node-RED", detailTh: "ออกแบบ Flow ระบบควบคุมและเชื่อมต่อข้อมูลอัตโนมัติ", detailEn: "Flow-based IoT orchestration & logic" },
      { name: "Sensor Integration", detailTh: "เชื่อมต่อเซนเซอร์ตรวจวัด (DHT, Analog, Digital)", detailEn: "Environmental & analog sensor telemetry" },
      { name: "Edge Computing", detailTh: "ออกแบบการประมวลผลข้อมูลที่อุปกรณ์หน้างานก่อนส่งต่อ", detailEn: "On-premise edge data pre-processing" },
      { name: "Embedded Systems", detailTh: "วงจรอิเล็กทรอนิกส์และระบบสมองกลฝังตัว", detailEn: "Embedded system architecture" },
    ],
  },
  {
    id: "programming-web",
    titleTh: "Programming & Web Development",
    titleEn: "Programming & Web Development",
    descriptionTh: "ภาษาคอมพิวเตอร์และการพัฒนาเว็บแดชบอร์ดแสดงผลข้อมูลแบบ Real-time",
    descriptionEn: "Core languages and web application development for monitoring systems",
    skills: [
      { name: "Python", detailTh: "สคริปต์จัดการข้อมูล, ทดสอบโมเดล AI และระบบอัตโนมัติ", detailEn: "Data manipulation, scripting & ML modeling" },
      { name: "C / C++", detailTh: "เขียนโปรแกรมระบบสมองกลฝังตัวและการประมวลผลพื้นฐาน", detailEn: "Embedded systems & firmware logic" },
      { name: "JavaScript / TypeScript", detailTh: "พัฒนา Web Dashboard และ Logic การทำงาน", detailEn: "Interactive web & frontend telemetry" },
      { name: "Next.js & React", detailTh: "พัฒนาหน้าจอ Dashboard แสดงสถานะแบบเรียลไทม์", detailEn: "Modern web dashboards & telemetry UI" },
      { name: "HTML & CSS / Tailwind", detailTh: "จัดรูปแบบหน้าเว็บ Responsive สวยงามและสะอาดตา", detailEn: "Clean, responsive & accessible interfaces" },
      { name: "SQL", detailTh: "ออกแบบและเรียกดูข้อมูลในฐานข้อมูล", detailEn: "Database queries & data logging" },
    ],
  },
  {
    id: "ai-data",
    titleTh: "AI & Data Processing",
    titleEn: "AI & Data Processing",
    descriptionTh: "การเตรียมข้อมูล การสร้างและทดสอบโมเดล Machine Learning",
    descriptionEn: "Data preprocessing, training, and testing machine learning models",
    skills: [
      { name: "Google Colab", detailTh: "สภาพแวดล้อมฝึกฝนและทดสอบโมเดล AI ผ่านคลาวด์", detailEn: "Cloud ML experimentation & training" },
      { name: "Data Preprocessing", detailTh: "การทำความสะอาด จัดการ และเตรียมข้อมูลก่อนสอนโมเดล", detailEn: "Data cleansing, normalization & preparation" },
      { name: "Basic Machine Learning Models", detailTh: "โมเดลจำแนกประเภทและการทำนายข้อมูลพื้นฐาน", detailEn: "Classification & regression algorithms" },
      { name: "Model Integration", detailTh: "การนำผลทำนายของโมเดลมาเชื่อมโยงกับระบบสั่งการ", detailEn: "Connecting inference outputs to actuators" },
    ],
  },
  {
    id: "systems-hardware",
    titleTh: "Systems & Hardware Maintenance",
    titleEn: "Systems & Hardware Maintenance",
    descriptionTh: "การจัดสเปก ประกอบ ตรวจซ่อม และบำรุงรักษาคอมพิวเตอร์ประมวลผลสูง",
    descriptionEn: "Workstation assembly, benchmarking, troubleshooting, and OS maintenance",
    skills: [
      { name: "PC Hardware Assembly", detailTh: "จัดสเปกและประกอบเครื่องคอมพิวเตอร์สำหรับงานประมวลผล", detailEn: "Component selection & high-compute assembly" },
      { name: "Hardware Troubleshooting", detailTh: "วิเคราะห์และแก้ไขปัญหาฮาร์ดแวร์ อุปกรณ์ และความร้อน", detailEn: "Diagnostic procedures & thermal solutions" },
      { name: "System Maintenance & OS", detailTh: "ติดตั้ง ปรับแต่ง และดูแลรักษาระบบปฏิบัติการ", detailEn: "OS configuration & driver optimization" },
      { name: "Performance Benchmarking", detailTh: "ทดสอบเสถียรภาพและประสิทธิภาพระบบ", detailEn: "Stress testing & system stability check" },
    ],
  },
  {
    id: "tools",
    titleTh: "Tools & Platforms",
    titleEn: "Tools & Platforms",
    descriptionTh: "เครื่องมือและโปรแกรมสนับสนุนการทำงาน",
    descriptionEn: "Development environments, version control, and collaboration tools",
    skills: [
      { name: "Git & GitHub", detailTh: "การจัดการเวอร์ชันของโค้ดและการส่งงาน", detailEn: "Version control & repository management" },
      { name: "VS Code", detailTh: "โปรแกรมเขียนโค้ดหลัก", detailEn: "Primary development IDE" },
      { name: "Arduino IDE", detailTh: "คอมไพล์และอัปโหลดโค้ดลงไมโครคอนโทรลเลอร์", detailEn: "Firmware flashing & serial debugging" },
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
