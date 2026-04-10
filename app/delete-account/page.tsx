"use client";

import Link from "next/link";
import { useState } from "react";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("계정 및 데이터 삭제 요청 — MelodyGen");
    const body = encodeURIComponent(
      `안녕하세요, 4LTree 팀.\n\n아래 계정의 삭제를 요청합니다.\n\n- 가입 이메일: ${email}\n- 요청 사유: ${reason || "없음"}\n\n감사합니다.`
    );
    window.location.href = `mailto:4ltree.service@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-base font-bold text-zinc-900 hover:text-[#6DBF4A] transition-colors">
            ← 홈으로
          </Link>
          <div className="flex h-1 w-16 rounded-full overflow-hidden">
            <div className="flex-1" style={{ background: "#6DBF4A" }} />
            <div className="flex-1" style={{ background: "#4AADD9" }} />
            <div className="flex-1" style={{ background: "#F5C523" }} />
            <div className="flex-1" style={{ background: "#F47920" }} />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-14 space-y-12">

        {/* 타이틀 */}
        <div>
          <p className="text-sm font-semibold text-zinc-400 mb-1">MelodyGen by 4LTree</p>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight break-keep-all mb-3">
            계정 및 데이터 삭제 요청
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed">
            MelodyGen(4LTree) 계정과 관련 데이터를 삭제하는 방법을 안내합니다.
            아래 두 가지 방법 중 하나를 선택하세요.
          </p>
        </div>

        {/* 방법 1 — 앱 내 삭제 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "#6DBF4A" }}
            >
              1
            </span>
            <h2 className="text-lg font-bold text-zinc-900">앱 내에서 직접 삭제 (권장)</h2>
          </div>
          <ol className="space-y-2 text-sm text-zinc-600 pl-10">
            <li className="flex gap-2"><span className="font-semibold text-zinc-400 w-4 shrink-0">①</span>MelodyGen 앱 실행</li>
            <li className="flex gap-2"><span className="font-semibold text-zinc-400 w-4 shrink-0">②</span>하단 탭 → <strong className="text-zinc-700">프로필</strong> 화면으로 이동</li>
            <li className="flex gap-2"><span className="font-semibold text-zinc-400 w-4 shrink-0">③</span><strong className="text-zinc-700">계정 삭제(회원 탈퇴)</strong> 버튼 탭</li>
            <li className="flex gap-2"><span className="font-semibold text-zinc-400 w-4 shrink-0">④</span>안내에 따라 삭제 확인 → 즉시 처리</li>
          </ol>
        </section>

        {/* 방법 2 — 이메일 요청 폼 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "#4AADD9" }}
            >
              2
            </span>
            <h2 className="text-lg font-bold text-zinc-900">이메일로 삭제 요청</h2>
          </div>
          <p className="text-sm text-zinc-500 pl-10">
            앱에 접근할 수 없는 경우 아래 양식을 작성해 이메일로 요청하세요.
            영업일 기준 <strong className="text-zinc-700">3일 이내</strong> 처리됩니다.
          </p>

          <form onSubmit={handleSubmit} className="pl-10 space-y-4">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-zinc-700" htmlFor="email">
                가입 이메일 <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ focusRingColor: "#6DBF4A" } as React.CSSProperties}
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-zinc-700" htmlFor="reason">
                요청 사유 <span className="text-zinc-400 font-normal">(선택)</span>
              </label>
              <textarea
                id="reason"
                rows={3}
                placeholder="사유를 간단히 입력해주세요."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ background: "#6DBF4A" }}
            >
              이메일 앱으로 삭제 요청 보내기
            </button>
            <p className="text-xs text-zinc-400">
              버튼을 누르면 이메일 앱이 열립니다. 발송 후 처리 완료까지 영업일 3일 소요됩니다.
            </p>
          </form>
        </section>

        {/* 삭제 데이터 범위 */}
        <section className="space-y-4">
          <h2 className="text-base font-bold text-zinc-900 pb-2 border-b border-zinc-100">
            삭제·보관 데이터 범위
          </h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50 text-zinc-500 text-xs uppercase tracking-widest">
                  <th className="text-left px-4 py-3 font-semibold">데이터 항목</th>
                  <th className="text-left px-4 py-3 font-semibold">처리</th>
                  <th className="text-left px-4 py-3 font-semibold">보관 기간</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-600">
                {[
                  ["이메일, 표시 이름, 프로필 사진", "즉시 삭제", "—"],
                  ["구독 정보 (플랜, 만료일)", "즉시 삭제", "—"],
                  ["기기 로컬 데이터 (연습 기록, 통계)", "앱 삭제 시 제거", "—"],
                  ["결제·계약 기록", "보관 후 삭제", "전자상거래법에 따라 5년"],
                  ["접속 로그", "보관 후 삭제", "통신비밀보호법에 따라 3개월"],
                ].map(([item, action, period]) => (
                  <tr key={item} className="hover:bg-zinc-50 transition-colors">
                    <td className="px-4 py-3">{item}</td>
                    <td className="px-4 py-3 font-medium text-zinc-700">{action}</td>
                    <td className="px-4 py-3 text-zinc-400">{period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400">
            자세한 내용은{" "}
            <Link href="/privacy" className="text-[#6DBF4A] hover:underline">
              개인정보처리방침
            </Link>
            을 참고하세요.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 mt-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
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
