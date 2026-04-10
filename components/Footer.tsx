export function Footer() {
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
                지금 바로 시작하세요
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight break-keep-all mb-4">
              오늘부터 귀를 훈련하세요
            </h2>
            <p className="text-white/80 text-lg max-w-[42ch] mx-auto mb-8 break-keep-all">
              무료로 시작하고, 매일 꾸준히 연습해서 음악 실력을 키워나가세요.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-white text-[#5AA63C] hover:bg-zinc-50 text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
          <p className="text-zinc-400 text-sm">© 2026 4L TREE. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/terms" className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors">이용약관</a>
            <a href="/privacy" className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
