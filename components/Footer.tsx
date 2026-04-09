export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-indigo to-brand-amber rounded-lg" />
              <span className="font-display text-xl font-bold text-white">4LTree</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              음악가를 위한 청음 훈련 앱 MelodyGen을 만드는 회사입니다.
              매일 꾸준한 훈련으로 음악 실력을 키워나가세요.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                App Store
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Google Play
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">앱</h4>
            <ul className="space-y-2 text-sm">
              {["기능 소개", "요금제", "업데이트 내역", "로드맵"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm">
              {["소개", "블로그", "이용약관", "개인정보처리방침"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2024 4LTree. All rights reserved.</p>
          <p className="text-sm">Made with ♥ for musicians everywhere</p>
        </div>
      </div>
    </footer>
  );
}
