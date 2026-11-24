"use client";

import React, { useState, useEffect } from "react";
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
  Flame,
  Radio,
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

  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      setTemperature((prev) => {
        const delta = fanRelay
          ? -0.18 + Math.random() * 0.08
          : 0.06 + (Math.random() * 0.16 - 0.08);
        let next = +(prev + delta).toFixed(1);
        if (next < 24.0) next = 24.0;
        if (next > 42.0) next = 42.0;

        setHistory((h) => [...h.slice(-11), next]);

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

        setLogs((l) => [...l.slice(-16), newLog]);
        return next;
      });

      setHumidity((prev) => {
        const nextHum = +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1);
        return Math.max(40, Math.min(85, nextHum));
      });
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
        payload: `{"command": "set_fan", "value": ${nextState ? 1 : 0}, "source": "tk_playlab"}`,
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
        payload: `{"command": "set_aux", "value": ${nextState ? 1 : 0}, "source": "tk_playlab"}`,
        status: "command",
      },
    ]);
  };

  const handleInjectHeat = () => {
    setTemperature(36.8);
    setHistory((h) => [...h.slice(-11), 36.8]);
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
    setHistory([28.1, 28.2, 28.3, 28.2, 28.4, 28.5, 28.4]);
  };

  const isOverheat = temperature > 35.0;

  return (
    <section id="iot-showcase" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="clay-pill bg-white/95 px-4 py-1.5 inline-flex items-center gap-2 mb-4">
              <Radio className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                {lang === "th" ? "ห้องทดลองฮาร์ดแวร์เสมือนจริง" : "Interactive Hardware Sandbox"}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-clay-ink tracking-tight">
              {lang === "th"
                ? "IoT & Edge Telemetry Lab"
                : "Live IoT & Edge Telemetry Lab"}
            </h2>
            <p className="mt-2 text-base text-slate-700 font-semibold">
              {lang === "th"
                ? "ทดลองสั่งเปิด-ปิดรีเลย์พัดลม ยิงสัญญาณความร้อนจำลอง และดูสตรีม MQTT จาก Arduino + Node-RED แบบเรียลไทม์"
                : "Toggle live hardware relays, trigger a simulated thermal spike, and inspect real-time Arduino & Node-RED MQTT packets."}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsStreaming(!isStreaming)}
              className={`px-4 py-2.5 text-xs sm:text-sm flex items-center gap-2 ${
                isStreaming ? "clay-btn-primary" : "clay-btn-soft"
              }`}
            >
              {isStreaming ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>
                {isStreaming
                  ? lang === "th"
                    ? "หยุดสตรีม"
                    : "Pause Stream"
                  : lang === "th"
                    ? "เริ่มสตรีม"
                    : "Resume Stream"}
              </span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="clay-btn-soft p-2.5 text-indigo-700"
              aria-label="Reset Telemetry Values"
              title="Reset values"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Clay Dashboard Panel */}
        <div className="clay-card p-5 sm:p-8">
          {/* Top 4 Telemetry Clay Tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className={`${isOverheat ? "clay-rose" : "clay-peach"} p-4 sm:p-5`}>
              <div className="flex items-center justify-between text-xs font-extrabold text-clay-ink/75 mb-2">
                <span>{lang === "th" ? "อุณหภูมิเซนเซอร์" : "Temperature"}</span>
                <Thermometer className={`w-5 h-5 ${isOverheat ? "text-rose-600" : "text-orange-600"}`} />
              </div>
              <div className="flex items-baseline gap-1">
                <span
                  className={`font-heading text-3xl font-bold ${
                    isOverheat ? "text-rose-600" : "text-clay-ink"
                  }`}
                >
                  {temperature.toFixed(1)}
                </span>
                <span className="text-sm font-bold text-slate-600">°C</span>
              </div>
              <span
                className={`text-[11px] font-extrabold block mt-1.5 ${
                  isOverheat ? "text-rose-700" : "text-orange-700"
                }`}
              >
                {isOverheat
                  ? lang === "th"
                    ? "เตือน: อุณหภูมิสูงเกินเกณฑ์!"
                    : "Alert: Above Threshold!"
                  : lang === "th"
                    ? "สถานะปกติ (DHT22)"
                    : "Normal (DHT22)"}
              </span>
            </div>

            <div className="clay-sky p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs font-extrabold text-clay-ink/75 mb-2">
                <span>{lang === "th" ? "ความชื้นสัมพัทธ์" : "Humidity"}</span>
                <Droplets className="w-5 h-5 text-sky-600" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-3xl font-bold text-clay-ink">
                  {humidity.toFixed(1)}
                </span>
                <span className="text-sm font-bold text-slate-600">%RH</span>
              </div>
              <span className="text-[11px] font-extrabold text-sky-800 block mt-1.5">
                {lang === "th" ? "สภาวะห้องแล็บ" : "Ambient Chamber"}
              </span>
            </div>

            <div className="clay-mint p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs font-extrabold text-clay-ink/75 mb-2">
                <span>{lang === "th" ? "การเชื่อมต่อบอร์ด" : "Hardware Link"}</span>
                <Cpu className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="font-heading text-xl sm:text-2xl font-bold text-clay-ink block">
                Arduino Uno
              </span>
              <span className="text-[11px] font-extrabold text-emerald-700 block mt-2">
                115200 Baud • Online
              </span>
            </div>

            <div className="clay-lavender p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs font-extrabold text-clay-ink/75 mb-2">
                <span>{lang === "th" ? "โมเดล Edge AI" : "Edge AI State"}</span>
                <Activity className="w-5 h-5 text-indigo-600" />
              </div>
              <span
                className={`font-heading text-xl sm:text-2xl font-bold block ${
                  isOverheat ? "text-rose-600" : "text-indigo-700"
                }`}
              >
                {isOverheat ? "Anomaly" : "Optimal"}
              </span>
              <span className="text-[11px] font-extrabold text-indigo-800/80 block mt-2">
                {lang === "th" ? "ความมั่นใจโมเดล 98.2%" : "Confidence 98.2%"}
              </span>
            </div>
          </div>

          {/* Middle Row: Sparkline & Actuator Toggles */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-stretch">
            {/* Sparkline Chart */}
            <div className="lg:col-span-7 clay-well p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-sm font-bold text-clay-ink">
                  {lang === "th" ? "แนวโน้มอุณหภูมิเซนเซอร์แบบเรียลไทม์" : "Live Temperature Trend"}
                </span>
                <span className="text-xs font-extrabold text-indigo-700 bg-white/90 px-2.5 py-0.5 rounded-full">
                  {lang === "th" ? "อัปเดตทุก 2 วินาที" : "2s poll"}
                </span>
              </div>

              <div className="h-36 flex items-end gap-2 pt-2 px-1">
                {history.map((val, idx) => {
                  const min = 22;
                  const max = 42;
                  const heightPercent = Math.max(
                    18,
                    Math.min(100, ((val - min) / (max - min)) * 100)
                  );
                  const isHigh = val > 35;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        className={`w-full rounded-t-xl rounded-b-md border-2 border-white/80 shadow-sm transition-all duration-300 ${
                          isHigh
                            ? "bg-gradient-to-t from-rose-500 to-orange-400"
                            : "bg-gradient-to-t from-indigo-600 to-violet-400"
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                      <span className="text-[10px] font-extrabold text-slate-600">{val}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mt-3 pt-2 border-t border-white/80">
                <span>T-24s</span>
                <span className="text-indigo-700">
                  {lang === "th" ? "ปัจจุบัน" : "Current"}: {temperature.toFixed(1)}°C
                </span>
              </div>
            </div>

            {/* Actuator Relays */}
            <div className="lg:col-span-5 clay-well p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-sm font-bold text-clay-ink">
                    {lang === "th" ? "แผงสั่งการรีเลย์ (Actuators)" : "Actuator Control Relays"}
                  </span>
                  <Sliders className="w-4 h-4 text-indigo-600" />
                </div>

                <div className="space-y-3 mb-4">
                  {/* Fan Relay */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/95 border-2 border-white shadow-clay-sm">
                    <div>
                      <span className="text-xs sm:text-sm font-extrabold text-clay-ink block">
                        {lang === "th" ? "รีเลย์ 1: พัดลมระบายความร้อน" : "Relay 1: Cooling Fan"}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        {lang === "th" ? "เปิดเพื่อลดอุณหภูมิอัตโนมัติ" : "Lowers live chamber temperature"}
                      </span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={fanRelay}
                      aria-label="Toggle Cooling Fan Relay"
                      onClick={handleToggleFan}
                      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-white transition-colors duration-200 shadow-inner p-0.5 ${
                        fanRelay ? "bg-emerald-500" : "bg-indigo-200"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 ${
                          fanRelay ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Aux Relay */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/95 border-2 border-white shadow-clay-sm">
                    <div>
                      <span className="text-xs sm:text-sm font-extrabold text-clay-ink block">
                        {lang === "th" ? "รีเลย์ 2: โหนดเสริม (Aux Node)" : "Relay 2: Auxiliary Node"}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        {lang === "th" ? "ควบคุมวงจรเสริมบนบอร์ด" : "Secondary hardware output"}
                      </span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={auxRelay}
                      aria-label="Toggle Auxiliary Node Relay"
                      onClick={handleToggleAux}
                      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-white transition-colors duration-200 shadow-inner p-0.5 ${
                        auxRelay ? "bg-indigo-600" : "bg-indigo-200"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 ${
                          auxRelay ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleInjectHeat}
                className="clay-btn-cta w-full py-2.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4" />
                <span>
                  {lang === "th"
                    ? "จำลองภาวะความร้อนสูง (Thermal Spike)"
                    : "Simulate Thermal Spike"}
                </span>
              </button>
            </div>
          </div>

          {/* MQTT Telemetry Log Table */}
          <div className="clay-well p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/80">
              <span className="font-heading text-xs sm:text-sm font-bold text-clay-ink">
                {lang === "th"
                  ? "สตรีมบันทึกข้อมูล MQTT Telemetry"
                  : "Live MQTT Telemetry Ingestion Log"}
              </span>
              <span className="text-xs font-mono font-bold text-indigo-700 bg-white/90 px-2.5 py-0.5 rounded-full">
                sensors/#
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="text-indigo-900/60 border-b border-white/80">
                    <th className="pb-2 font-bold w-24">Time</th>
                    <th className="pb-2 font-bold w-40">Topic</th>
                    <th className="pb-2 font-bold">Payload Data</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/60">
                  {logs.slice(-5).map((log) => (
                    <tr key={log.id} className="text-slate-700">
                      <td className="py-2 text-slate-500">{log.timestamp}</td>
                      <td className="py-2">
                        <span
                          className={`px-2 py-0.5 rounded-lg font-bold ${
                            log.status === "alert"
                              ? "bg-rose-100 text-rose-700"
                              : log.status === "command"
                                ? "bg-indigo-100 text-indigo-700"
                                : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {log.topic}
                        </span>
                      </td>
                      <td className="py-2 text-clay-ink/85 truncate max-w-xs sm:max-w-md">
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
