"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-amber-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1 bg-indigo-100 text-brand-indigo text-sm font-semibold rounded-full">
              🎵 음악가를 위한 청음 훈련 앱
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              귀를 훈련하고{" "}
              <span className="text-gradient">음악 실력</span>을
              <br />
              레벨업하세요
            </h1>
            <p className="text-xl text-slate-500 mb-8 leading-relaxed">
              멜로디 받아쓰기, 리듬 훈련, 화음 인식 등 6가지 청음 훈련으로
              매일 꾸준히 연습하세요. 음대 입시생부터 취미 음악가까지.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </Button>
              <Button href="#" variant="outline" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2L14.64 12 3.18.04c-.35-.04-.69.03-.99.2C1.57.71 1 1.5 1 2.43v19.14c0 .93.57 1.72 2.18 2.19zM15.47 12l3.99 3.99-7.22 4.12L15.47 12zm0 0l-3.23-3.99 7.22 4.12-3.99 3.99 3.99-3.99zM15.47 12l-3.23 4.12L5.02 12l7.22-8.11L15.47 12z"/>
                </svg>
                Google Play
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: "10K+", label: "활성 사용자" },
                { value: "6가지", label: "훈련 카테고리" },
                { value: "4.8★", label: "앱스토어 평점" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-brand-indigo">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-[580px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo to-brand-amber rounded-[3rem] shadow-2xl opacity-20 blur-xl scale-95" />
              <div className="relative w-full h-full bg-slate-900 rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-slate-900">
                  <span className="text-white text-xs">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-80" />
                    <div className="w-2 h-2 bg-white rounded-full opacity-80" />
                  </div>
                </div>
                {/* App content mockup */}
                <div className="px-4 py-4 bg-white h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">안녕하세요! 👋</div>
                      <div className="text-brand-indigo font-semibold text-xs">오늘도 훈련해볼까요?</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-indigo to-brand-amber" />
                  </div>
                  {/* Daily goal card */}
                  <div className="bg-gradient-to-r from-brand-indigo to-indigo-600 rounded-2xl p-4 mb-4 text-white">
                    <div className="text-xs opacity-80 mb-1">오늘의 목표</div>
                    <div className="font-bold text-lg mb-2">3/5 완료</div>
                    <div className="w-full bg-white/30 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-3/5" />
                    </div>
                  </div>
                  {/* Category cards */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "멜로디", color: "bg-indigo-100", text: "text-category-melody" },
                      { name: "리듬", color: "bg-amber-100", text: "text-category-rhythm" },
                      { name: "음정", color: "bg-emerald-100", text: "text-category-interval" },
                      { name: "화음", color: "bg-purple-100", text: "text-category-chord" },
                    ].map((cat) => (
                      <div key={cat.name} className={`${cat.color} rounded-xl p-3`}>
                        <div className={`${cat.text} font-bold text-sm`}>{cat.name}</div>
                        <div className="text-slate-400 text-xs mt-1">훈련 시작 →</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
