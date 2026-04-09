export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="42" width="11" height="36" rx="3" fill="#6DBF4A"/>
                <rect x="2" y="67" width="30" height="11" rx="3" fill="#6DBF4A"/>
                <rect x="18" y="28" width="11" height="36" rx="3" fill="#4AADD9"/>
                <rect x="18" y="53" width="30" height="11" rx="3" fill="#4AADD9"/>
                <rect x="34" y="14" width="11" height="36" rx="3" fill="#F5C523"/>
                <rect x="34" y="39" width="30" height="11" rx="3" fill="#F5C523"/>
                <rect x="52" y="2" width="11" height="30" rx="3" fill="#F47920" transform="rotate(15 57 17)"/>
                <rect x="50" y="26" width="28" height="11" rx="3" fill="#F47920" transform="rotate(15 64 31)"/>
              </svg>
              <span className="font-display text-xl font-bold text-white">4L TREE</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              음악가를 위한 청음 훈련 앱 MelodyGen을 만드는 회사입니다.
              매일 꾸준한 훈련으로 음악 실력을 키워나가세요.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-brand-green transition-colors text-sm">
                App Store
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-green transition-colors text-sm">
                Google Play
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">앱</h4>
            <ul className="space-y-2 text-sm">
              {["기능 소개", "업데이트 내역", "로드맵"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-green transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm">
              {["소개", "블로그", "이용약관", "개인정보처리방침"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-green transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 4L TREE. All rights reserved.</p>
          <p className="text-sm">Made with ♥ for musicians everywhere</p>
        </div>
      </div>
    </footer>
  );
}
