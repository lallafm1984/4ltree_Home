"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    step: "01",
    title: "카테고리 선택",
    description: "멜로디, 리듬, 화음 등 오늘 훈련할 카테고리를 선택하세요. 난이도도 자유롭게 조절할 수 있습니다.",
    color: "from-brand-indigo to-indigo-600",
  },
  {
    step: "02",
    title: "듣고 풀기",
    description: "음악을 듣고 정답을 입력하세요. 오선보에 음표를 그리거나, 건반을 누르거나, 선택지를 고르는 다양한 방식으로 답할 수 있습니다.",
    color: "from-brand-amber to-amber-600",
  },
  {
    step: "03",
    title: "성장 확인",
    description: "매일 훈련 스트릭을 유지하고 통계 대시보드에서 내 실력 향상을 확인하세요. 마스코트와 함께 레벨업!",
    color: "from-emerald-500 to-green-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="사용 방법"
          title="3단계로 시작하세요"
          highlight="3단계"
          subtitle="복잡한 설정 없이 바로 청음 훈련을 시작할 수 있습니다."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-indigo via-brand-amber to-emerald-500 opacity-30" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <span className="font-display text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
