"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "🎵",
    name: "멜로디 받아쓰기",
    description: "들리는 멜로디를 악보로 옮겨보세요. 단계별 난이도로 초보부터 고급까지.",
    color: "bg-indigo-50",
    border: "border-indigo-200",
    iconBg: "bg-indigo-100",
  },
  {
    icon: "🥁",
    name: "리듬 훈련",
    description: "복잡한 리듬 패턴을 귀로 파악하고 정확히 기보하는 능력을 기릅니다.",
    color: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🎼",
    name: "음정 식별",
    description: "두 음 사이의 간격(음정)을 즉각적으로 식별하는 훈련. 음악적 귀를 날카롭게.",
    color: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "🎹",
    name: "화음 인식",
    description: "장조, 단조, 7화음 등 다양한 화음을 귀로 구분하는 능력을 훈련합니다.",
    color: "bg-purple-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🔑",
    name: "조성 탐지",
    description: "음악을 듣고 어떤 조성인지 파악하세요. 절대음감과 상대음감 모두 훈련.",
    color: "bg-red-50",
    border: "border-red-200",
    iconBg: "bg-red-100",
  },
  {
    icon: "🎶",
    name: "2성부 악보",
    description: "두 파트가 동시에 연주되는 음악을 듣고 각 성부를 독립적으로 기보합니다.",
    color: "bg-cyan-50",
    border: "border-cyan-200",
    iconBg: "bg-cyan-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="핵심 기능"
          title="6가지 청음 훈련 카테고리"
          highlight="청음 훈련"
          subtitle="음악 이론 시험 대비부터 취미 음악까지, 체계적인 청음 훈련 프로그램을 제공합니다."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={cardVariants}
              className={`${feature.color} ${feature.border} border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`${feature.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
