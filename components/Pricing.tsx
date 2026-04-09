"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "영구 무료",
    description: "청음 훈련을 처음 시작하는 분께",
    features: [
      "6가지 카테고리 기본 접근",
      "하루 5회 훈련",
      "기본 통계 확인",
      "마스코트 기본 스킨",
    ],
    notIncluded: [
      "무제한 훈련",
      "모의고사 모드",
      "상세 통계 분석",
      "광고 없는 경험",
    ],
    cta: "무료로 시작하기",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "4,900",
    period: "월 / 구독",
    description: "진지하게 청음 실력을 키우려는 분께",
    features: [
      "6가지 카테고리 무제한 접근",
      "무제한 훈련",
      "모의고사 모드",
      "상세 통계 및 약점 분석",
      "마스코트 프리미엄 스킨",
      "광고 없는 경험",
      "오프라인 모드",
    ],
    notIncluded: [],
    cta: "Pro 시작하기",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="요금제"
          title="합리적인 가격으로 시작하세요"
          highlight="합리적인 가격"
          subtitle="무료로 시작하고, 더 많은 기능이 필요할 때 업그레이드하세요."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-brand-indigo to-indigo-700 text-white shadow-2xl scale-105"
                  : "bg-slate-50 border border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-amber text-white text-sm font-bold px-4 py-1 rounded-full shadow">
                    추천
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display text-2xl font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-display text-5xl font-extrabold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  ₩{plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.highlighted ? "text-indigo-200" : "text-slate-400"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-indigo-200" : "text-brand-indigo"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? "text-indigo-100" : "text-slate-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 opacity-40">
                    <svg className="w-5 h-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-slate-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#"
                variant={plan.highlighted ? "secondary" : "outline"}
                size="md"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
