"use client";

import React, { useState, useEffect, useRef } from "react";
import { Language } from "@/types";
import { 
  Activity, 
  RotateCcw, 
  Play, 
  Pause, 
  Sliders, 
  Thermometer, 
  Droplets, 
  Cpu, 
  Check, 
  AlertCircle 
} from "lucide-react";

interface IoTShowcaseProps {
  lang: Language;
}

interface TelemetryLog {
  id: number;
  timestamp: string;
  topic: string;
  payload: string;
  status: "normal" | "alert" | "command";
}

export default function IoTShowcase({ lang }: IoTShowcaseProps) {
  const [isStreaming, setIsStreaming] = useState(true);
  const [temperature, setTemperature] = useState(28.4);
  const [humidity, setHumidity] = useState(61.8);
  const [fanRelay, setFanRelay] = useState(false);
  const [auxRelay, setAuxRelay] = useState(true);
  const [history, setHistory] = useState<number[]>([28.1, 28.2, 28.3, 28.2, 28.4, 28.5, 28.4]);
  
  const [logs, setLogs] = useState<TelemetryLog[]>([
    {
      id: 1,
      timestamp: "16:10:02",
      topic: "sensors/dht22",
      payload: '{"temperature": 28.4, "humidity": 61.8, "unit": "celsius"}',
      status: "normal",
    },
    {
      id: 2,
      timestamp: "16:10:04",
      topic: "edge/inference",
      payload: '{"status": "optimal", "confidence": 0.982, "node": "rmutsv-01"}',
      status: "normal",
    },
    {
      id: 3,
      timestamp: "16:10:06",
      topic: "actuators/relay_2",
      payload: '{"relay": 2, "state": "active", "latency_ms": 14}',
      status: "command",
    },
  ]);

  const logEndRef = useRef<HTMLDivElement>(null);

  // Live simulation tick
  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      setTemperature((prev) => {
        // If cooling fan is on, temperature decreases slightly
        const delta = fanRelay ? -0.12 + Math.random() * 0.08 : 0.06 + (Math.random() * 0.16 - 0.08);
        let next = +(prev + delta).toFixed(1);
        if (next < 24.0) next = 24.0;
        if (next > 42.0) next = 42.0;

        setHistory((h) => [...h.slice(-12), next]);

        // Append log
        const timeStr = new Date().toTimeString().split(" ")[0];
        const isHigh = next > 35.0;

        const newLog: TelemetryLog = {
          id: Date.now() + Math.random(),
          timestamp: timeStr,
          topic: isHigh ? "alerts/thermal" : "sensors/dht22",
          payload: isHigh
            ? `{"alert": "high_temperature", "temp": ${next}, "threshold": 35.0}`
            : `{"temperature": ${next}, "humidity": ${humidity}, "fan_relay": ${fanRelay ? 1 : 0}}`,
          status: isHigh ? "alert" : "normal",
        };

        setLogs((l) => [...l.slice(-18), newLog]);
        return next;
      });

      setHumidity((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
    }, 2000);

    return () => clearInterval(interval);
  }, [isStreaming, fanRelay, humidity]);

  const handleToggleFan = () => {
    const nextState = !fanRelay;
    setFanRelay(nextState);
    const timeStr = new Date().toTimeString().split(" ")[0];
    setLogs((l) => [
      ...l,
      {
        id: Date.now(),
        timestamp: timeStr,
        topic: "commands/relay_1",
        payload: `{"command": "set_fan", "value": ${nextState ? 1 : 0}, "source": "web_dashboard"}`,
        status: "command",
      },
    ]);
  };

  const handleToggleAux = () => {
    const nextState = !auxRelay;
    setAuxRelay(nextState);
    const timeStr = new Date().toTimeString().split(" ")[0];
    setLogs((l) => [
      ...l,
      {
        id: Date.now(),
        timestamp: timeStr,
        topic: "commands/relay_2",
        payload: `{"command": "set_aux", "value": ${nextState ? 1 : 0}, "source": "web_dashboard"}`,
        status: "command",
      },
    ]);
  };

  const handleInjectHeat = () => {
    setTemperature(36.8);
    const timeStr = new Date().toTimeString().split(" ")[0];
    setLogs((l) => [
      ...l,
      {
        id: Date.now(),
        timestamp: timeStr,
        topic: "test/thermal_spike",
        payload: '{"event": "simulated_thermal_load", "target_temp": 36.8}',
        status: "alert",
      },
    ]);
  };

  const handleReset = () => {
    setTemperature(28.4);
    setHumidity(61.8);
    setFanRelay(false);
  };

  const isOverheat = temperature > 35.0;

  return (
    <section id="iot-showcase" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              {lang === "th" ? "การจำลองระบบฮาร์ดแวร์จริง" : "Interactive Demonstration"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {lang === "th" ? "IoT & Edge Telemetry Dashboard" : "IoT & Edge Telemetry Dashboard"}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {lang === "th"
                ? "จำลองการทำงานของระบบ Node-RED, Arduino และการรับส่งข้อมูลผ่านโปรโตคอล MQTT"
                : "Simulating live hardware telemetry from Arduino and Node-RED over MQTT."}
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              {isStreaming ? <Pause className="w-3.5 h-3.5 text-slate-500" /> : <Play className="w-3.5 h-3.5 text-slate-500" />}
              <span>{isStreaming ? (lang === "th" ? "หยุดสตรีม" : "Pause") : (lang === "th" ? "เริ่มสตรีม" : "Resume")}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
              title="Reset values"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Clean Dashboard Panel */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
          
          {/* Top 4 Telemetry Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* Temperature */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{lang === "th" ? "อุณหภูมิเซนเซอร์" : "Temperature"}</span>
                <Thermometer className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className={`text-2xl sm:text-3xl font-bold font-mono ${isOverheat ? "text-amber-600" : "text-slate-900"}`}>
                  {temperature.toFixed(1)}
                </span>
                <span className="text-xs text-slate-500">°C</span>
              </div>
              <span className={`text-[11px] font-medium block mt-1.5 ${isOverheat ? "text-amber-600" : "text-slate-500"}`}>
                {isOverheat ? (lang === "th" ? "เกินเกณฑ์มาตรฐาน (Alert)" : "Above Threshold") : (lang === "th" ? "สถานะปกติ (DHT22)" : "Normal (DHT22)")}
              </span>
            </div>

            {/* Humidity */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{lang === "th" ? "ความชื้นสัมพัทธ์" : "Humidity"}</span>
                <Droplets className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">
                  {humidity.toFixed(1)}
                </span>
                <span className="text-xs text-slate-500">%RH</span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 block mt-1.5">
                {lang === "th" ? "สภาวะห้องทำงาน" : "Ambient Humidity"}
              </span>
            </div>

            {/* Hardware Link */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{lang === "th" ? "การเชื่อมต่อบอร์ด" : "Hardware Link"}</span>
                <Cpu className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-bold text-slate-900">
                  Arduino Uno
                </span>
              </div>
              <span className="text-[11px] font-medium text-emerald-600 block mt-1.5">
                115200 Baud / Online
              </span>
            </div>

            {/* Edge Inference */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{lang === "th" ? "โมเดลประมวลผล Edge" : "Edge Model State"}</span>
                <Activity className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-bold text-slate-900">
                  {isOverheat ? "Warning" : "Optimal"}
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 block mt-1.5">
                {lang === "th" ? "ความมั่นใจโมเดล 98%" : "Confidence 98%"}
              </span>
            </div>

          </div>

          {/* Middle Row: Trend Chart & Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-start">
            
            {/* Sparkline Chart (7 cols) */}
            <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-700">
                  {lang === "th" ? "แนวโน้มอุณหภูมิเซนเซอร์ (ย้อนหลัง)" : "Temperature History Trend"}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {lang === "th" ? "อัปเดตทุก 2 วินาที" : "2s poll interval"}
                </span>
              </div>

              {/* Clean Minimalist Bar Sparkline */}
              <div className="h-32 flex items-end gap-2 pt-2 px-1 border-b border-slate-100">
                {history.map((val, idx) => {
                  const min = 20;
                  const max = 42;
                  const heightPercent = Math.max(15, Math.min(100, ((val - min) / (max - min)) * 100));
                  const isHigh = val > 35;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t transition-all duration-300 ${
                          isHigh ? "bg-amber-500" : "bg-slate-800"
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                      <span className="text-[10px] font-mono text-slate-500">
                        {val}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                <span>T-24s</span>
                <span>Current: {temperature}°C</span>
              </div>
            </div>

            {/* Actuator Toggles (5 cols) */}
            <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-700">
                  {lang === "th" ? "สั่งการรีเลย์ฮาร์ดแวร์ (Actuators)" : "Actuator Control Relays"}
                </span>
                <Sliders className="w-3.5 h-3.5 text-slate-400" />
              </div>

              <div className="space-y-3 mb-4">
                {/* Fan Relay */}
                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                  <div>
                    <span className="text-xs font-semibold text-slate-900 block">
                      {lang === "th" ? "รีเลย์ 1: พัดลมระบายความร้อน" : "Relay 1: Chamber Fan"}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {lang === "th" ? "เปิดเพื่อลดอุณหภูมิเซนเซอร์" : "Decreases sensor temperature"}
                    </span>
                  </div>
                  <button
                    onClick={handleToggleFan}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      fanRelay ? "bg-slate-900" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        fanRelay ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Aux Relay */}
                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                  <div>
                    <span className="text-xs font-semibold text-slate-900 block">
                      {lang === "th" ? "รีเลย์ 2: วงจรสำรอง (Aux Circuit)" : "Relay 2: Auxiliary Node"}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {lang === "th" ? "ควบคุมวงจรเสริม" : "Secondary circuit load"}
                    </span>
                  </div>
                  <button
                    onClick={handleToggleAux}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      auxRelay ? "bg-slate-900" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        auxRelay ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Stress test button */}
              <button
                onClick={handleInjectHeat}
                className="w-full py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{lang === "th" ? "ทดสอบเพิ่มความร้อนจำลอง (Thermal Spike)" : "Simulate Thermal Spike"}</span>
              </button>
            </div>

          </div>

          {/* Bottom Row: Telemetry Log Table */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-700">
                {lang === "th" ? "ตารางบันทึกการส่งข้อมูล (MQTT Telemetry Stream)" : "MQTT Telemetry Ingestion Log"}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Topic: sensors/#
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-100">
                    <th className="pb-2 font-medium w-24">Time</th>
                    <th className="pb-2 font-medium w-40">Topic</th>
                    <th className="pb-2 font-medium">Payload Data</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {logs.slice(-6).map((log) => (
                    <tr key={log.id} className="text-slate-600">
                      <td className="py-2 text-slate-400">{log.timestamp}</td>
                      <td className="py-2 text-slate-900 font-semibold">{log.topic}</td>
                      <td className="py-2 text-slate-600 truncate max-w-xs sm:max-w-md">
                        {log.payload}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
