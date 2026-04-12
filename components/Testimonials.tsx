"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const testimonialMeta = [
  { avatar: "hayoonss", accent: "#6DBF4A" },
  { avatar: "parkdh92", accent: "#4AADD9" },
  { avatar: "leesj_music", accent: "#F47920" },
  { avatar: "kimminj_arts", accent: "#F5C523" },
  { avatar: "jungsooa", accent: "#4AADD9" },
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
  const { t } = useI18n();

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
            {t("testimonials.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight break-keep-all">
            {t("testimonials.title1")}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #6DBF4A 0%, #4AADD9 100%)" }}
            >
              {t("testimonials.title2")}
            </span>
          </h2>
        </motion.div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonialMeta.map((meta, index) => (
            <motion.div
              key={meta.avatar}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="break-inside-avoid surface-card rounded-2xl p-5 hover:shadow-md transition-all duration-300"
              style={{ borderLeftWidth: "3px", borderLeftColor: meta.accent }}
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating count={5} color={meta.accent} />
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed mb-5 break-keep-all">
                &ldquo;{t(`testimonials.${index}.comment`)}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <img
                  src={`https://i.pravatar.cc/80?u=${meta.avatar}`}
                  alt={t(`testimonials.${index}.name`)}
                  className="w-9 h-9 rounded-full object-cover border-2"
                  style={{ borderColor: `${meta.accent}40` }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0">
                  <p className="text-zinc-900 text-sm font-semibold truncate">{t(`testimonials.${index}.name`)}</p>
                  <p className="text-zinc-400 text-xs truncate">
                    {t(`testimonials.${index}.role`)} · {t(`testimonials.${index}.company`)}
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
            { value: "12,400+", label: t("testimonials.metric.users"), color: "#6DBF4A" },
            { value: "4.87 / 5", label: t("testimonials.metric.rating"), color: "#F47920" },
            { value: "93%", label: t("testimonials.metric.resub"), color: "#4AADD9" },
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
