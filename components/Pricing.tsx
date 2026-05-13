"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.melodygen.app";

export function Pricing() {
  const { t } = useI18n();

  const categories = [
    { nameKey: "pricing.cat.melody",    free: "Lv.1~3",  pro: "Lv.1~9",  freeLocked: false },
    { nameKey: "pricing.cat.rhythm",    free: "Lv.1~2",  pro: "Lv.1~6",  freeLocked: false },
    { nameKey: "pricing.cat.interval",  free: "Lv.1~2",  pro: "Lv.1~4",  freeLocked: false },
    { nameKey: "pricing.cat.harmony",   free: "Lv.1",    pro: "Lv.1~4",  freeLocked: false },
    { nameKey: "pricing.cat.key",       free: "Lv.1",    pro: "Lv.1~3",  freeLocked: false },
    { nameKey: "pricing.cat.twoVoice",  free: "locked",   pro: "Lv.1~4",  freeLocked: true  },
    { nameKey: "pricing.cat.mockExam",  free: "Lv.1",    pro: "all",      freeLocked: false },
  ];

  return (
    <section id="pricing" className="py-28 bg-zinc-50">
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
            style={{ background: "#6DBF4A15", color: "#5AA63C" }}
          >
            {t("pricing.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight break-keep-all">
            {t("pricing.title1")}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #6DBF4A 0%, #4AADD9 100%)" }}
            >
              {t("pricing.title2")}
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-500 max-w-[40ch] mx-auto break-keep-all">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">

          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="surface-card rounded-3xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">{t("pricing.free.title")}</h3>
              <p className="text-sm text-zinc-500">{t("pricing.free.desc")}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold tracking-tight text-zinc-900">{t("pricing.free.price")}</span>
              <span className="text-sm text-zinc-400 ml-2">{t("pricing.free.priceSub")}</span>
            </div>

            {/* Category levels */}
            <div className="flex-1 space-y-3 mb-8">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">{t("pricing.categoryLabel")}</p>
              {categories.map((cat) => (
                <div key={cat.nameKey} className="flex items-center justify-between py-1.5 border-b border-zinc-100 last:border-0">
                  <span className="text-sm text-zinc-600 font-medium">{t(cat.nameKey)}</span>
                  {cat.freeLocked ? (
                    <span className="flex items-center gap-1.5 text-xs text-red-400 font-semibold">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      {t("pricing.locked")}
                    </span>
                  ) : (
                    <span className="text-sm text-zinc-400 font-medium">{cat.free}</span>
                  )}
                </div>
              ))}
            </div>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("pricing.free.cta")}
            </a>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl p-8 flex flex-col text-white"
            style={{
              background: "linear-gradient(145deg, #6DBF4A 0%, #4AADD9 100%)",
              boxShadow: "0 20px 60px rgba(109,191,74,0.28)",
            }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-[#F5C523] text-zinc-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                {t("pricing.pro.recommended")}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">{t("pricing.pro.title")}</h3>
              <p className="text-sm text-white/75">{t("pricing.pro.desc")}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold tracking-tight text-white">{t("pricing.pro.price")}</span>
              <span className="text-sm text-white/65 ml-2">{t("pricing.pro.priceSub")}</span>
            </div>

            {/* Category levels */}
            <div className="flex-1 space-y-3 mb-8">
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">{t("pricing.categoryLabel")}</p>
              {categories.map((cat) => (
                <div key={cat.nameKey} className="flex items-center justify-between py-1.5 border-b border-white/15 last:border-0">
                  <span className="text-sm text-white/85 font-medium">{t(cat.nameKey)}</span>
                  <span className="text-sm text-white font-bold">
                    {cat.pro === "all" ? t("pricing.all") : cat.pro}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-white text-[#5AA63C] hover:bg-zinc-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {t("pricing.pro.cta")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
