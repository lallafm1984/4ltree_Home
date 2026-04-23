"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n, getLocalizedImage } from "@/lib/i18n";

export function Hero() {
  const { locale, t } = useI18n();

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden">
      {/* Soft color blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #6DBF4A 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #4AADD9 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-[320px] h-[320px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #F5C523 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28 w-full">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-12 xl:gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#6DBF4A]/10 border border-[#6DBF4A]/25 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6DBF4A] animate-pulse" />
              <span className="text-[#5AA63C] text-xs font-bold tracking-widest uppercase">
                4LTree · MelodyGen
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-tight tracking-tight break-keep-all mb-6">
              {t("hero.headline1")}{" "}
              <br className="hidden sm:block" />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #6DBF4A 0%, #4AADD9 100%)" }}
              >
                {t("hero.headlineHighlight")}
              </span>{" "}
              {t("hero.headline2")}
            </h1>

            <p className="text-lg text-zinc-500 leading-relaxed max-w-[52ch] mb-10 break-keep-all">
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="https://play.google.com/store/apps/details?id=com.melodygen.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-[#6DBF4A] hover:bg-[#5AA63C] text-white text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#6DBF4A]/30"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199 1.75l1.987 1.15a1 1 0 010 1.786L17.7 18.393l-2.584-2.584 2.583-2.352zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/>
                </svg>
                Google Play
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

          </motion.div>

          {/* Right: App screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-[3.5rem] blur-3xl opacity-20 scale-90"
              style={{ background: "linear-gradient(135deg, #6DBF4A 0%, #4AADD9 50%, #F47920 100%)" }}
            />

            {/* Phone frame */}
            <div className="relative w-[300px] animate-float">
              {/* Colored border ring */}
              <div
                className="absolute -inset-[3px] rounded-[3.2rem]"
                style={{ background: "linear-gradient(135deg, #6DBF4A, #4AADD9, #F5C523, #F47920)", padding: "3px" }}
              >
                <div className="w-full h-full bg-white rounded-[3rem]" />
              </div>

              {/* Phone shell */}
              <div className="relative bg-white rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl">
                {/* Notch */}
                <div className="flex justify-center pt-3">
                  <div className="w-20 h-5 bg-zinc-900 rounded-full" />
                </div>

                {/* Screenshot image */}
                <div className="mx-3 mb-3 mt-2 rounded-2xl overflow-hidden">
                  <Image
                    src={getLocalizedImage("/img/main.webp", locale)}
                    alt={t("hero.imgAlt")}
                    width={280}
                    height={500}
                    className="w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -left-8 top-[30%] bg-white rounded-2xl px-4 py-3 shadow-xl border border-zinc-100 animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "#6DBF4A20" }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#6DBF4A" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-900 text-xs font-bold">{t("hero.badgeComplete")}</p>
                  <p className="text-zinc-400 text-[10px]">{t("hero.badgeCompleteDetail")}</p>
                </div>
              </div>
            </div>

            {/* Floating badge — streak */}
            <div
              className="absolute -right-6 bottom-[28%] bg-white rounded-2xl px-4 py-3 shadow-xl border border-zinc-100 animate-float"
              style={{ animationDelay: "1.6s" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "#F4792015" }}>
                  <svg className="w-4 h-4 text-[#F47920]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-900 text-xs font-bold">{t("hero.badgeStreak")}</p>
                  <p className="text-zinc-400 text-[10px]">{t("hero.badgeStreakDetail")}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
