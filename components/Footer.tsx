"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-white border-t border-zinc-100">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
          style={{ background: "linear-gradient(135deg, #6DBF4A 0%, #4AADD9 50%, #4AADD9 75%, #F47920 100%)" }}
        >
          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 border border-white/30 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                {t("footer.ctaBadge")}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight break-keep-all mb-4">
              {t("footer.ctaTitle")}
            </h2>
            <p className="text-white/80 text-lg max-w-[42ch] mx-auto mb-8 break-keep-all">
              {t("footer.ctaDesc")}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.melodygen.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-white text-[#5AA63C] hover:bg-zinc-50 text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199 1.75l1.987 1.15a1 1 0 010 1.786L17.7 18.393l-2.584-2.584 2.583-2.352zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* 4-color stripe */}
        <div className="flex h-0.5 rounded-full overflow-hidden mb-5">
          <div className="flex-1" style={{ background: "#6DBF4A" }} />
          <div className="flex-1" style={{ background: "#4AADD9" }} />
          <div className="flex-1" style={{ background: "#F5C523" }} />
          <div className="flex-1" style={{ background: "#F47920" }} />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-zinc-400 text-sm">&copy; 2026 4L TREE. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/melodygen/terms" className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors">{t("footer.terms")}</a>
            <a href="/melodygen/privacy" className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors">{t("footer.privacy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
