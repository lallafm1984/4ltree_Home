"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "하윤서",
    role: "음대 입시 준비생",
    company: "서울예술고등학교",
    avatar: "hayoonss",
    rating: 5,
    comment:
      "매일 30분씩 MelodyGen으로 훈련하고 나서 청음 실력이 눈에 띄게 좋아졌어요. 모의고사 기능이 실제 시험 준비에 정말 도움이 됩니다.",
    accent: "#6DBF4A",
  },
  {
    name: "박도현",
    role: "아마추어 기타리스트",
    company: "루미너스 스튜디오",
    avatar: "parkdh92",
    rating: 5,
    comment:
      "취미로 기타를 치면서 화음 인식이 항상 어려웠는데, 2주 만에 확실히 달라졌어요. 게임 요소가 있어서 매일 자연스럽게 하게 됩니다.",
    accent: "#4AADD9",
  },
  {
    name: "이서진",
    role: "음악 교사",
    company: "강남 예술 아카데미",
    avatar: "leesj_music",
    rating: 5,
    comment:
      "학생들에게도 추천하고 저도 쓰고 있어요. 체계적인 커리큘럼과 통계 기능이 훌륭합니다. 상대음감 훈련에 특히 효과적이에요.",
    accent: "#F47920",
  },
  {
    name: "김민재",
    role: "작곡 전공 대학생",
    company: "한국예술종합학교",
    avatar: "kimminj_arts",
    rating: 5,
    comment:
      "2성부 악보 기능이 정말 유용해요. 대위법 수업 준비에 이 앱 없이는 못 할 것 같아요.",
    accent: "#F5C523",
  },
  {
    name: "정수아",
    role: "성악 레슨 수강생",
    company: "스텔라랩스 뮤직",
    avatar: "jungsooa",
    rating: 5,
    comment:
      "음정 식별 훈련 덕분에 선생님께 음정이 많이 좋아졌다는 칭찬을 받았어요. 매일 10분만 해도 효과가 느껴집니다.",
    accent: "#4AADD9",
  },
];

function StarRating({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" fill={color} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full tracking-widest uppercase"
            style={{ background: "#F5C52318", color: "#DBA91E" }}
          >
            사용자 후기
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight break-keep-all">
            함께 성장하는{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #6DBF4A 0%, #4AADD9 100%)" }}
            >
              12,400명의 음악가들
            </span>
          </h2>
        </motion.div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="break-inside-avoid surface-card rounded-2xl p-5 hover:shadow-md transition-all duration-300"
              style={{ borderLeftWidth: "3px", borderLeftColor: t.accent }}
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating count={t.rating} color={t.accent} />
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed mb-5 break-keep-all">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <img
                  src={`https://i.pravatar.cc/80?u=${t.avatar}`}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border-2"
                  style={{ borderColor: `${t.accent}40` }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0">
                  <p className="text-zinc-900 text-sm font-semibold truncate">{t.name}</p>
                  <p className="text-zinc-400 text-xs truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-4 rounded-3xl p-8 border border-zinc-100 bg-zinc-50"
        >
          {[
            { value: "12,400+", label: "활성 사용자", color: "#6DBF4A" },
            { value: "4.87 / 5", label: "평균 앱 평점", color: "#F47920" },
            { value: "93%", label: "재구독률", color: "#4AADD9" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold tracking-tight mb-1"
                style={{ color: metric.color }}
              >
                {metric.value}
              </p>
              <p className="text-sm text-zinc-500">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
