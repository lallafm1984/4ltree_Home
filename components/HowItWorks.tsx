"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "카테고리 선택",
    description:
      "멜로디, 리듬, 화음 등 오늘 훈련할 카테고리를 선택하세요. 난이도를 자유롭게 조절하여 집중적으로 훈련할 수 있습니다.",
    accent: "#6DBF4A",
    img: "/img/category.webp",
    tags: ["난이도 조절", "카테고리 선택", "집중 모드"],
  },
  {
    step: "02",
    title: "듣고 풀기",
    description:
      "음악을 듣고 정답을 입력하세요. 오선보에 음표를 그리거나, 건반을 누르거나, 선택지를 고르는 다양한 방식으로 답할 수 있습니다.",
    accent: "#4AADD9",
    img: "/img/melody.webp",
    tags: ["오선보 입력", "건반 모드", "선택형 문제"],
  },
  {
    step: "03",
    title: "성장 확인",
    description:
      "매일 훈련 스트릭을 유지하고 통계 대시보드에서 내 실력 향상을 확인하세요. 약점 분석으로 어떤 부분을 집중해야 할지 명확히 알 수 있습니다.",
    accent: "#F47920",
    img: "/img/stats.webp",
    tags: ["통계 대시보드", "약점 분석", "스트릭 유지"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full tracking-widest uppercase"
            style={{ background: "#F4792015", color: "#F47920" }}
          >
            사용 방법
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight break-keep-all">
            3단계로 바로 시작하세요
          </h2>
          <p className="mt-4 text-lg text-zinc-500 max-w-[44ch] mx-auto break-keep-all">
            복잡한 설정 없이 앱을 열면 바로 청음 훈련을 시작할 수 있습니다.
          </p>
        </motion.div>

        {/* Zig-zag steps */}
        <div className="space-y-24">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`grid lg:grid-cols-2 gap-12 xl:gap-20 items-center ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image side — 50% size: centered within column */}
              <div className={`flex justify-center items-center ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg w-[50%] min-w-[180px] max-w-xs"
                  style={{ border: `2px solid ${item.accent}30` }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain"
                    style={{ display: "block", background: `${item.accent}06` }}
                  />
                  <div
                    className="absolute bottom-2 right-3 text-[64px] font-bold leading-none select-none pointer-events-none"
                    style={{ color: item.accent, opacity: 0.12 }}
                  >
                    {item.step}
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-bold text-white shadow-md"
                    style={{ background: item.accent, boxShadow: `0 4px 14px ${item.accent}40` }}
                  >
                    {item.step}
                  </div>
                  <div className="h-px flex-1 max-w-[40px]" style={{ background: item.accent, opacity: 0.3 }} />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight break-keep-all mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed break-keep-all mb-7">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold border"
                      style={{
                        background: `${item.accent}10`,
                        borderColor: `${item.accent}30`,
                        color: item.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
