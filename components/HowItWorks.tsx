"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n, getLocalizedImage } from "@/lib/i18n";

const stepKeys = [
  {
    step: "01",
    titleKey: "how.step1.title",
    descKey: "how.step1.desc",
    tagsKey: "how.step1.tags",
    accent: "#6DBF4A",
    img: "/img/category.webp",
  },
  {
    step: "02",
    titleKey: "how.step2.title",
    descKey: "how.step2.desc",
    tagsKey: "how.step2.tags",
    accent: "#4AADD9",
    img: "/img/melody.webp",
  },
  {
    step: "03",
    titleKey: "how.step3.title",
    descKey: "how.step3.desc",
    tagsKey: "how.step3.tags",
    accent: "#F47920",
    img: "/img/stats.webp",
  },
];

export function HowItWorks() {
  const { locale, t } = useI18n();

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
            {t("how.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight break-keep-all">
            {t("how.title")}
          </h2>
          <p className="mt-4 text-lg text-zinc-500 max-w-[44ch] mx-auto break-keep-all">
            {t("how.subtitle")}
          </p>
        </motion.div>

        {/* Zig-zag steps */}
        <div className="space-y-24">
          {stepKeys.map((item, index) => (
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
              {/* Image side */}
              <div className={`flex justify-center items-center ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg w-[50%] min-w-[180px] max-w-xs"
                  style={{ border: `2px solid ${item.accent}30` }}
                >
                  <Image
                    src={getLocalizedImage(
                      item.img === "/img/category.webp" && locale !== "ko" ? "/img/main.webp" : item.img,
                      locale
                    )}
                    alt={t(item.titleKey)}
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
                  {t(item.titleKey)}
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed break-keep-all mb-7">
                  {t(item.descKey)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {t(item.tagsKey).split(",").map((tag) => (
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
