import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TK PlayLab | Tataphorn Kaewmanee — Applied AI & IoT Learning Platform & Portfolio",
  description:
    "Playful Claymorphism Educational Platform & Portfolio by Tataphorn Kaewmanee (นางสาวทตพร แก้วมณี) — Learn Arduino, Node-RED, Edge AI, Google Colab & Next.js Telemetry with interactive labs and progress tracking.",
  keywords: [
    "ทตพร แก้วมณี",
    "Tataphorn Kaewmanee",
    "AI Learning Platform",
    "IoT Courses",
    "Claymorphism UI",
    "Node-RED",
    "Arduino",
    "Edge Computing",
    "Google Colab",
    "RMUTSV",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Noto+Sans+Thai:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-clay-bg text-clay-ink selection:bg-indigo-200 selection:text-indigo-950">
        {children}
      </body>
    </html>
  );
}
