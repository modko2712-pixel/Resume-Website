import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "นางสาวทตพร แก้วมณี (Tataphorn Kaewmanee) | Applied AI & IoT Engineer Portfolio",
  description: "พอร์ตโฟลิโอและเรซูเม่ของ นางสาวทตพร แก้วมณี นักศึกษาวิศวกรรมปัญญาประดิษฐ์ประยุกต์ มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตรัตนภูมิ ผู้เชี่ยวชาญด้าน IoT/OT, Arduino, Node-RED, Edge Computing และ Web Development",
  keywords: [
    "ทตพร แก้วมณี",
    "Tataphorn Kaewmanee",
    "AI Engineer",
    "IoT Engineer",
    "Hardware Engineer",
    "Node-RED",
    "Arduino",
    "Edge Computing",
    "Web Developer",
    "RMUTSV",
    "มทร.ศรีวิชัย",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
