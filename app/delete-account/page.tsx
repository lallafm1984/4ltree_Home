import Link from "next/link";

export const metadata = {
  title: "계정 및 데이터 삭제 요청 — MelodyGen",
  description: "MelodyGen 계정 및 관련 데이터 삭제를 요청하는 방법을 안내합니다.",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-base font-bold text-zinc-900 group-hover:text-[#6DBF4A] transition-colors">
              ← 홈으로
            </span>
          </Link>
          <div className="flex h-1 w-16 rounded-full overflow-hidden">
            <div className="flex-1" style={{ background: "#6DBF4A" }} />
            <div className="flex-1" style={{ background: "#4AADD9" }} />
            <div className="flex-1" style={{ background: "#F5C523" }} />
            <div className="flex-1" style={{ background: "#F47920" }} />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-10">
          <span
            className="inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full tracking-widest uppercase"
            style={{ background: "#F4792015", color: "#c95f10" }}
          >
            Account
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight break-keep-all mb-3">
            계정 및 데이터 삭제 요청
          </h1>
          <p className="text-sm text-zinc-400">
            MelodyGen 계정과 관련된 모든 데이터를 삭제하는 방법을 안내합니다.
          </p>
        </div>

        <div className="space-y-10 text-zinc-700 leading-relaxed text-sm md:text-base">

          {/* 앱 내 삭제 */}
          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-100">
              방법 1. 앱 내에서 직접 삭제 (권장)
            </h2>
            <div className="space-y-3">
              <p>앱 내 프로필 화면에서 즉시 계정을 삭제할 수 있습니다.</p>
              <ol className="list-decimal list-inside space-y-2 text-zinc-600">
                <li>MelodyGen 앱 실행</li>
                <li>하단 탭 → <strong>프로필</strong> 화면으로 이동</li>
                <li><strong>계정 삭제(회원 탈퇴)</strong> 버튼 탭</li>
                <li>안내에 따라 삭제 확인</li>
              </ol>
              <div
                className="rounded-xl px-4 py-3 text-sm border mt-4"
                style={{ background: "#6DBF4A10", borderColor: "#6DBF4A30", color: "#4a7a30" }}
              >
                ※ 앱 내 삭제 시 서버에 저장된 계정 정보가 즉시 삭제됩니다.
                기기 로컬 데이터(연습 기록, 학습 통계 등)는 앱 삭제 시 함께 제거됩니다.
              </div>
            </div>
          </section>

          {/* 이메일 삭제 요청 */}
          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-100">
              방법 2. 이메일로 삭제 요청
            </h2>
            <div className="space-y-3">
              <p>앱에 접근할 수 없는 경우 아래 이메일로 삭제를 요청하세요.</p>
              <a
                href="mailto:4ltree.service@gmail.com?subject=계정 및 데이터 삭제 요청&body=안녕하세요.%0A%0A아래 계정의 삭제를 요청합니다.%0A%0A- 가입 이메일: %0A- 요청 사유 (선택): %0A%0A감사합니다."
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ background: "#6DBF4A" }}
              >
                4ltree.service@gmail.com 으로 삭제 요청하기
              </a>
              <p className="text-zinc-500 text-xs mt-2">
                요청 시 가입하신 이메일 주소를 본문에 포함해 주세요. 영업일 기준 3일 이내에 처리됩니다.
              </p>
            </div>
          </section>

          {/* 삭제 범위 */}
          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-100">
              삭제되는 데이터 범위
            </h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50 text-zinc-500 text-xs uppercase tracking-widest">
                    <th className="text-left px-4 py-3 font-semibold">데이터 항목</th>
                    <th className="text-left px-4 py-3 font-semibold">삭제 시점</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {[
                    ["이메일, 표시 이름, 프로필 사진", "즉시 삭제"],
                    ["구독 정보 (플랜, 만료일)", "즉시 삭제"],
                    ["기기 로컬 데이터 (연습 기록, 통계)", "앱 삭제 시 제거"],
                    ["결제·계약 기록", "전자상거래법에 따라 5년 보관 후 삭제"],
                    ["접속 로그", "통신비밀보호법에 따라 3개월 보관 후 삭제"],
                  ].map(([item, timing]) => (
                    <tr key={item} className="hover:bg-zinc-50 transition-colors">
                      <td className="px-4 py-3 text-zinc-700">{item}</td>
                      <td className="px-4 py-3 text-zinc-500">{timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <p className="text-zinc-400 text-xs">
            자세한 내용은{" "}
            <Link href="/privacy" className="text-[#6DBF4A] hover:underline">
              개인정보처리방침
            </Link>
            을 참고하세요.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-400 text-sm">© 2026 4L TREE. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors">이용약관</Link>
            <Link href="/privacy" className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors">개인정보처리방침</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
