"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: "melody",
    name: "멜로디 받아쓰기",
    description: "들리는 멜로디를 악보로 옮겨보세요. 단계별 난이도(Lv.1~9)로 초보부터 고급까지 체계적으로 실력을 쌓습니다.",
    accent: "#4AADD9",
    img: "/img/melody.webp",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    id: "rhythm",
    name: "리듬 훈련",
    description: "복잡한 리듬 패턴을 귀로 파악하고 정확히 기보하는 능력을 기릅니다. (Lv.1~6)",
    accent: "#F47920",
    img: "/img/rhythm.webp",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "interval",
    name: "음정 식별",
    description: "두 음 사이 간격을 즉각 식별하는 훈련. 음악적 귀를 날카롭게 다듬습니다. (Lv.1~4)",
    accent: "#6DBF4A",
    img: "/img/intervals.webp",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    id: "chord",
    name: "화음 인식",
    description: "장조, 단조, 7화음 등 다양한 화성을 귀로 구분하는 능력을 훈련합니다. (Lv.1~4)",
    accent: "#F5C523",
    img: "/img/chords.webp",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: "key",
    name: "조성 탐지",
    description: "음악을 듣고 어떤 조성인지 파악하세요. 절대음감과 상대음감 모두 훈련 가능. (Lv.1~3)",
    accent: "#F47920",
    img: "/img/keys.webp",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    id: "two-voice",
    name: "2성부 악보",
    description: "두 파트가 동시에 연주되는 음악을 듣고 각 성부를 독립적으로 기보합니다. (Pro 전용, Lv.1~4)",
    accent: "#4AADD9",
    img: "/img/twopart.webp",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

const CARD_W = 290;
const CARD_H = 520;

export function Features() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (idx: number) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => go((current - 1 + features.length) % features.length);
  const next = () => go((current + 1) % features.length);

  const feature = features[current];

  return (
    <section id="features" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span
            className="inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full tracking-widest uppercase"
            style={{ background: "#4AADD915", color: "#4AADD9" }}
          >
            핵심 기능
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight break-keep-all">
            6가지 청음 훈련으로
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #6DBF4A 0%, #4AADD9 100%)" }}
            >
              체계적으로 성장하세요
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout: image carousel left, text right */}
        <div className="grid md:grid-cols-[auto_1fr] gap-10 xl:gap-16 items-center max-w-4xl mx-auto">

          {/* ── Image carousel ── */}
          <div
            className="flex justify-center"
            style={{ paddingRight: "24px", paddingBottom: "12px" }}
          >
            {/* Pile wrapper — positions background cards + active card */}
            <div className="relative" style={{ width: CARD_W, height: CARD_H }}>

              {/* Background pile cards (peek behind) */}
              {[2, 1].map((offset) => {
                const idx = (current + offset) % features.length;
                return (
                  <div
                    key={`pile-${offset}`}
                    className="absolute inset-0 rounded-3xl overflow-hidden bg-white border border-zinc-200 pointer-events-none"
                    style={{
                      transform: `translate(${offset * 10}px, ${offset * 5}px)`,
                      zIndex: 3 - offset,
                      opacity: 1 - offset * 0.22,
                    }}
                  >
                    <Image
                      src={features[idx].img}
                      fill
                      alt=""
                      className="object-contain p-4"
                      sizes={`${CARD_W}px`}
                    />
                  </div>
                );
              })}

              {/* Active card with sliding image */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden bg-white border border-zinc-200 shadow-xl"
                style={{ zIndex: 10 }}
              >
                <AnimatePresence mode="popLayout" initial={false} custom={dir}>
                  <motion.div
                    key={current}
                    className="absolute inset-0"
                    custom={dir}
                    variants={{
                      enter: (d: number) => ({ x: `${d * 100}%`, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (d: number) => ({ x: `${d * -100}%`, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    style={{ background: `${feature.accent}08` }}
                  >
                    {feature.id === "two-voice" && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#4AADD9] text-white shadow">
                          Pro 전용
                        </span>
                      </div>
                    )}
                    <Image
                      src={feature.img}
                      fill
                      alt={feature.name}
                      className="object-contain p-4"
                      sizes={`${CARD_W}px`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ── Text panel ── */}
          <div className="flex flex-col justify-center">

            {/* Animated text content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <p className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-5">
                  {String(current + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${feature.accent}18`, color: feature.accent }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 break-keep-all">
                    {feature.name}
                  </h3>
                </div>

                <p className="text-zinc-500 text-base md:text-lg leading-relaxed break-keep-all">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation controls */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 hover:border-zinc-300 transition-all"
              >
                <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all"
                style={{
                  background: feature.accent,
                  boxShadow: `0 4px 14px ${feature.accent}40`,
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="flex gap-1.5 ml-1">
                {features.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => go(dotIdx)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: dotIdx === current ? "20px" : "6px",
                      height: "6px",
                      background: dotIdx === current ? feature.accent : "#d4d4d8",
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
