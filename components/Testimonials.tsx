"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "김지수",
    role: "음대 입시 준비생",
    avatar: "🎓",
    rating: 5,
    comment:
      "매일 30분씩 MelodyGen으로 훈련하고 나서 청음 실력이 눈에 띄게 좋아졌어요. 모의고사 기능이 실제 시험 준비에 정말 도움이 돼요.",
  },
  {
    name: "박민준",
    role: "아마추어 기타리스트",
    avatar: "🎸",
    rating: 5,
    comment:
      "취미로 기타를 치면서 화음 인식이 항상 어려웠는데, 이 앱 2주 만에 확실히 달라졌습니다. 게임 요소도 있어서 매일 하게 돼요!",
  },
  {
    name: "이하은",
    role: "음악 교사",
    avatar: "🎻",
    rating: 5,
    comment:
      "학생들에게도 추천하고 저도 쓰고 있어요. 체계적인 커리큘럼과 통계 기능이 훌륭합니다. 상대음감 훈련에 특히 효과적이에요.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="사용자 후기"
          title="함께 성장하는 음악가들"
          highlight="성장하는"
          subtitle="전국의 음악가들이 MelodyGen으로 청음 실력을 키우고 있습니다."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-brand-amber text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                &quot;{t.comment}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
