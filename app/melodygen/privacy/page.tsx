import Link from "next/link";

export const metadata = {
  title: "개인정보처리방침 — MelodyGen",
  description:
    "MelodyGen(4LTree) 개인정보처리방침. 수집 항목, 이용 목적, 보관 기간, 제3자 제공 및 이용자 권리에 관한 안내.",
  alternates: { canonical: "/melodygen/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://4ltree.com/melodygen/privacy",
    siteName: "4LTree",
    title: "개인정보처리방침 — MelodyGen",
    description: "MelodyGen 개인정보처리방침",
    locale: "ko_KR",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link href="/melodygen" className="flex items-center gap-2 group">
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
            style={{ background: "#6DBF4A15", color: "#5AA63C" }}
          >
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight break-keep-all mb-3">
            개인정보처리방침
          </h1>
          <p className="text-sm text-zinc-400">
            시행일: 2026년 4월 4일 &nbsp;·&nbsp; 최종 수정일: 2026년 4월 4일
          </p>
        </div>

        <div className="prose prose-zinc max-w-none space-y-10 text-zinc-700 leading-relaxed">

          <Section title="1. 개인정보의 수집 및 이용 목적">
            <p>MelodyGen(이하 &quot;앱&quot;)은 다음 목적으로 개인정보를 수집 및 이용합니다:</p>
            <ul>
              <li>회원 가입 및 로그인 서비스 제공</li>
              <li>구독 서비스 관리</li>
              <li>서비스 개선 및 오류 수정</li>
            </ul>
            <Callout>
              학습 기록, 연습 통계, 시험 결과 등은 이용자의 기기에만 로컬로 저장되며, 서버에서 수집하지 않습니다.
            </Callout>
          </Section>

          <Section title="2. 수집하는 개인정보 항목">
            <SubTitle>필수 항목</SubTitle>
            <ul>
              <li><strong>이메일 주소</strong>: Google 로그인을 통해 수집</li>
              <li><strong>표시 이름</strong>: Google 계정 이름 또는 직접 입력</li>
            </ul>
            <SubTitle>Google 로그인 시 제공받는 정보</SubTitle>
            <ul>
              <li>Google 계정 이메일, 이름, 프로필 사진 URL</li>
              <li>프로필 사진 URL은 서버에 저장되며 앱 내 프로필 표시에 사용</li>
            </ul>
            <SubTitle>자동 수집 항목</SubTitle>
            <ul>
              <li><strong>구독 정보</strong>: 플랜 종류(Free/Pro), 구독 만료일</li>
            </ul>
            <SubTitle>수집하지 않는 항목</SubTitle>
            <ul>
              <li>위치 정보</li>
              <li>연락처</li>
              <li>사진/미디어</li>
              <li>기기 고유 식별자 (광고 ID 등)</li>
            </ul>
          </Section>

          <Section title="3. 개인정보의 보유 및 이용 기간">
            <ul>
              <li>회원 탈퇴 시 서버 데이터 즉시 삭제</li>
              <li>기기 로컬 데이터(연습 기록, 시험 결과, 학습 통계 등)도 탈퇴 시 삭제되며, 서버에 백업되지 않아 복구 불가</li>
              <li>전자상거래법에 의한 계약/결제 기록: <strong>5년</strong></li>
              <li>통신비밀보호법에 의한 로그 기록: <strong>3개월</strong></li>
            </ul>
          </Section>

          <Section title="4. 개인정보의 제3자 제공">
            <p>앱은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:</p>
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령에 의해 요구되는 경우</li>
            </ul>
          </Section>

          <Section title="5. 개인정보 처리 위탁">
            <div className="overflow-x-auto rounded-xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50 text-zinc-500 text-xs uppercase tracking-widest">
                    <th className="text-left px-4 py-3 font-semibold">위탁받는 자</th>
                    <th className="text-left px-4 py-3 font-semibold">위탁 업무</th>
                    <th className="text-left px-4 py-3 font-semibold">보유 기간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {[
                    ["Supabase Inc.", "데이터베이스 호스팅, 인증 서비스", "회원 탈퇴 시까지"],
                    ["RevenueCat Inc.", "구독 결제 관리 및 영수증 검증", "구독 서비스 제공 기간"],
                    ["Apple Inc. / Google LLC", "인앱 결제 처리", "결제 서비스 제공 기간"],
                  ].map(([company, task, period]) => (
                    <tr key={company} className="hover:bg-zinc-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-zinc-900">{company}</td>
                      <td className="px-4 py-3 text-zinc-600">{task}</td>
                      <td className="px-4 py-3 text-zinc-500">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="6. 이용자의 권리">
            <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다:</p>
            <ul>
              <li><strong>개인정보 열람</strong>: 앱 내 프로필 화면에서 확인</li>
              <li><strong>개인정보 수정</strong>: 표시 이름 변경</li>
              <li>
                <strong>계정 삭제(회원 탈퇴)</strong>: 앱 내 프로필 화면에서 삭제 또는{" "}
                <Link href="/melodygen/delete-account" className="text-[#6DBF4A] hover:underline">
                  계정 삭제 요청 페이지
                </Link>
                에서 신청
              </li>
              <li><strong>동의 철회</strong>: 회원 탈퇴로 동의 철회</li>
            </ul>
          </Section>

          <Section title="7. 개인정보의 안전성 확보 조치">
            <ul>
              <li>데이터베이스 접근 제어 (Row Level Security)</li>
              <li>HTTPS 통신 암호화</li>
              <li>최소 권한 원칙에 따른 데이터 접근 관리</li>
            </ul>
          </Section>

          <Section title="8. 개인정보 보호책임자">
            <ul>
              <li><strong>책임자</strong>: 임지수</li>
              <li>
                <strong>연락처</strong>:{" "}
                <a href="mailto:4ltree.service@gmail.com" className="text-[#6DBF4A] hover:underline">
                  4ltree.service@gmail.com
                </a>
              </li>
            </ul>
          </Section>

          <Section title="9. 개인정보 처리방침 변경">
            <p>
              이 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 수정될 수 있습니다.
              변경 시 앱 내 공지를 통해 알려드립니다.
            </p>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-400 text-sm">© 2026 4L TREE. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/melodygen/terms" className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors">이용약관</Link>
            <Link href="/melodygen/privacy" className="text-[#6DBF4A] text-xs font-semibold">개인정보처리방침</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-100">
        {title}
      </h2>
      <div className="space-y-3 text-sm md:text-base">{children}</div>
    </section>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold text-zinc-700 mt-4 mb-1">{children}</p>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl px-4 py-3 text-sm border"
      style={{ background: "#6DBF4A10", borderColor: "#6DBF4A30", color: "#4a7a30" }}
    >
      ※ {children}
    </div>
  );
}
