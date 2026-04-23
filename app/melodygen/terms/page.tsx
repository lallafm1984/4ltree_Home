import Link from "next/link";

export const metadata = {
  title: "이용약관 — MelodyGen",
  description: "MelodyGen 이용약관",
};

export default function TermsPage() {
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
            style={{ background: "#4AADD915", color: "#4AADD9" }}
          >
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight break-keep-all mb-3">
            이용약관
          </h1>
          <p className="text-sm text-zinc-400">시행일: 2026년 4월 4일</p>
        </div>

        <div className="space-y-10 text-zinc-700 leading-relaxed">

          <Section title="제1조 (목적)">
            <p className="text-sm md:text-base">
              이 약관은 MelodyGen(이하 &quot;앱&quot;)이 제공하는 청음 훈련 서비스의 이용 조건 및 절차에 관한 사항을 규정합니다.
            </p>
          </Section>

          <Section title="제2조 (용어의 정의)">
            <ul>
              <li><strong>서비스</strong>: 앱이 제공하는 청음 연습, 모의시험, 학습 통계 등 모든 기능</li>
              <li><strong>이용자</strong>: 앱에 가입하여 서비스를 이용하는 자</li>
              <li><strong>유료 서비스(Pro)</strong>: 월정액 구독을 통해 이용하는 프리미엄 기능</li>
            </ul>
          </Section>

          <Section title="제3조 (서비스의 내용)">
            <ul>
              <li>6개 카테고리(선율, 리듬, 음정, 화성, 조성, 2성부) 청음 연습</li>
              <li>모의시험 및 결과 분석</li>
              <li>학습 통계 및 진도 관리</li>
              <li>자동 생성 문제 제공</li>
            </ul>
          </Section>

          <Section title="제3조의2 (데이터 저장 방식)">
            <ul>
              <li>연습 기록, 모의시험 결과, 학습 통계, 실력 프로필 등 학습 관련 데이터는 이용자의 기기에 로컬로 저장됩니다.</li>
              <li>로컬 데이터는 서버에 백업되지 않으며, 앱 삭제·기기 초기화·캐시 삭제 시 영구적으로 소실됩니다.</li>
              <li>계정 정보(이메일, 닉네임, 구독 상태)만 서버에 저장됩니다.</li>
              <li>로컬 데이터는 계정별로 분리되어 저장되며, 다른 계정의 데이터에 접근할 수 없습니다.</li>
            </ul>
          </Section>

          <Section title="제4조 (이용 계약의 성립)">
            <ul>
              <li>이용자가 약관에 동의하고 회원 가입을 완료하면 이용 계약이 성립됩니다.</li>
              <li>타인의 정보를 도용하거나 허위 정보를 기재한 경우 가입이 거절될 수 있습니다.</li>
            </ul>
          </Section>

          <Section title="제5조 (유료 서비스)">
            <ul>
              <li>Pro 구독은 월 5,500원이며, Apple App Store 또는 Google Play Store를 통해 결제됩니다.</li>
              <li>구독은 해지하지 않으면 자동 갱신됩니다.</li>
              <li>환불은 각 스토어의 환불 정책에 따릅니다.</li>
              <li>구독 해지 후에도 만료일까지 Pro 기능을 이용할 수 있습니다.</li>
            </ul>
          </Section>

          <Section title="제6조 (이용자의 의무)">
            <p className="text-sm md:text-base mb-3">이용자는 다음 행위를 하여서는 안 됩니다:</p>
            <ul>
              <li>서비스를 부정한 방법으로 이용하는 행위</li>
              <li>앱의 기술적 보호 조치를 우회하는 행위</li>
              <li>다른 이용자의 개인정보를 수집하는 행위</li>
              <li>서비스의 안정적 운영을 방해하는 행위</li>
            </ul>
          </Section>

          <Section title="제7조 (서비스의 중단)">
            <ul>
              <li>시스템 점검, 장비 교체 등의 사유로 서비스를 일시 중단할 수 있습니다.</li>
              <li>천재지변 등 불가항력으로 서비스 제공이 불가능한 경우 제한할 수 있습니다.</li>
            </ul>
          </Section>

          <Section title="제8조 (콘텐츠의 특성)">
            <ul>
              <li>문제는 알고리즘으로 자동 생성되며, 전문 강사가 제작한 문제와 차이가 있을 수 있습니다.</li>
              <li>앱은 보충 연습 도구이며, 전문 교육을 대체하지 않습니다.</li>
              <li>시험 결과 및 학습 통계는 참고 자료이며, 실제 입시 성적을 보장하지 않습니다.</li>
            </ul>
          </Section>

          <Section title="제9조 (면책 조항)">
            <ul>
              <li>이용자의 귀책 사유로 인한 서비스 이용 장애에 대해 책임지지 않습니다.</li>
              <li>무료로 제공하는 서비스에 대해서는 별도의 보증을 하지 않습니다.</li>
              <li>이용자가 서비스를 이용하여 얻은 학습 결과에 대해 책임지지 않습니다.</li>
            </ul>
          </Section>

          <Section title="제10조 (계정 삭제)">
            <ul>
              <li>이용자는 언제든지 앱 내에서 계정을 삭제(회원 탈퇴)할 수 있습니다.</li>
              <li>계정 삭제 시 서버의 개인정보(이메일, 닉네임, 구독 상태)가 즉시 삭제됩니다.</li>
              <li>기기에 저장된 로컬 데이터(연습 기록, 모의시험 결과, 학습 통계, 마스코트 경험치 등)도 함께 삭제됩니다.</li>
              <li>삭제된 모든 데이터는 서버·로컬 모두 복구할 수 없습니다.</li>
            </ul>
            <Callout>
              Pro 구독 중 탈퇴하더라도 App Store 또는 Google Play의 구독은 자동으로 취소되지 않습니다. 반드시 해당 스토어에서 직접 구독을 해지해야 추가 결제가 발생하지 않습니다.
            </Callout>
          </Section>

          <Section title="제11조 (분쟁 해결)">
            <ul>
              <li>서비스 이용과 관련한 분쟁은 대한민국 법률에 따라 해결합니다.</li>
              <li>분쟁 발생 시 앱의 소재지를 관할하는 법원을 관할 법원으로 합니다.</li>
            </ul>
          </Section>

          <Section title="제12조 (약관의 변경)">
            <ul>
              <li>관련 법령에 위배되지 않는 범위에서 약관을 변경할 수 있습니다.</li>
              <li>변경된 약관은 앱 내 공지를 통해 시행일 7일 전에 고지합니다.</li>
            </ul>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-400 text-sm">© 2026 4L TREE. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/melodygen/terms" className="text-[#4AADD9] text-xs font-semibold">이용약관</Link>
            <Link href="/melodygen/privacy" className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors">개인정보처리방침</Link>
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
      <div className="space-y-3 text-sm md:text-base [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-zinc-600">
        {children}
      </div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl px-4 py-3 text-sm border mt-3"
      style={{ background: "#F4792010", borderColor: "#F4792030", color: "#b85a10" }}
    >
      ⚠️ {children}
    </div>
  );
}
