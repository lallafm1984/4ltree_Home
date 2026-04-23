import Link from "next/link";

function Logo4LTree({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="42" width="11" height="36" rx="3" fill="#6DBF4A" />
      <rect x="2" y="67" width="30" height="11" rx="3" fill="#6DBF4A" />
      <rect x="18" y="28" width="11" height="36" rx="3" fill="#4AADD9" />
      <rect x="18" y="53" width="30" height="11" rx="3" fill="#4AADD9" />
      <rect x="34" y="14" width="11" height="36" rx="3" fill="#F5C523" />
      <rect x="34" y="39" width="30" height="11" rx="3" fill="#F5C523" />
      <rect x="52" y="2" width="11" height="30" rx="3" fill="#F47920" transform="rotate(15 57 17)" />
      <rect x="50" y="26" width="28" height="11" rx="3" fill="#F47920" transform="rotate(15 64 31)" />
    </svg>
  );
}

type Project = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  accent: string;
  accentSoft: string;
  status: "live" | "soon";
  badge: string;
};

const projects: Project[] = [
  {
    name: "MelodyGen",
    tagline: "음악가를 위한 청음 훈련 앱",
    description:
      "선율·리듬·음정·화성·조성·2성부 6가지 카테고리의 청음 연습과 모의시험, 개인 맞춤 학습 통계를 제공합니다.",
    href: "/melodygen",
    accent: "#6DBF4A",
    accentSoft: "#6DBF4A15",
    status: "live",
    badge: "음악 · 교육",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #6DBF4A 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-1/3 -left-24 w-[480px] h-[480px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #4AADD9 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #F47920 0%, transparent 65%)" }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Logo4LTree className="w-9 h-9" />
            <span className="text-lg font-bold tracking-tight">4L TREE</span>
          </div>
          <a
            href="mailto:4ltree.service@gmail.com"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#6DBF4A]/10 border border-[#6DBF4A]/25 rounded-full mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6DBF4A] animate-pulse" />
          <span className="text-[#5AA63C] text-xs font-bold tracking-widest uppercase">
            4LTree Studio
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight break-keep-all leading-[1.1] mb-6">
          <span className="block">작고 유용한 제품을</span>
          <span className="block mt-2 md:mt-4">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #6DBF4A 0%, #4AADD9 60%, #F47920 100%)" }}
            >
              정성스럽게
            </span>{" "}
            만듭니다.
          </span>
        </h1>

        <p className="mx-auto text-lg text-zinc-500 leading-relaxed max-w-[56ch] break-keep-all">
          4LTree는 일상과 학습을 돕는 제품을 설계하고 만드는 작은 스튜디오입니다.
          <br />
          아래에서 우리가 만든 프로젝트들을 확인해 보세요.
        </p>

        {/* 4-color stripe */}
        <div className="mx-auto mt-10 flex h-1 w-24 rounded-full overflow-hidden">
          <div className="flex-1" style={{ background: "#6DBF4A" }} />
          <div className="flex-1" style={{ background: "#4AADD9" }} />
          <div className="flex-1" style={{ background: "#F5C523" }} />
          <div className="flex-1" style={{ background: "#F47920" }} />
        </div>
      </section>

      {/* Projects */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-2">
            Projects
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            우리가 만드는 것들
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            현재 {projects.length}개의 프로젝트가 운영되고 있습니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}

          {/* Teaser for future projects */}
          <div className="group relative rounded-3xl border-2 border-dashed border-zinc-200 p-8 flex flex-col justify-center items-center text-center min-h-[280px]">
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-zinc-400">새로운 프로젝트 준비 중</p>
            <p className="text-xs text-zinc-400 mt-1">More coming soon</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mx-auto flex h-0.5 w-28 rounded-full overflow-hidden mb-6">
            <div className="flex-1" style={{ background: "#6DBF4A" }} />
            <div className="flex-1" style={{ background: "#4AADD9" }} />
            <div className="flex-1" style={{ background: "#F5C523" }} />
            <div className="flex-1" style={{ background: "#F47920" }} />
          </div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 text-center">
            <p className="text-zinc-400 text-sm order-2 sm:order-1">© 2026 4L TREE. All rights reserved.</p>
            <a
              href="mailto:4ltree.service@gmail.com"
              className="text-zinc-400 hover:text-zinc-600 text-xs transition-colors order-1 sm:order-2"
            >
              4ltree.service@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === "live";
  return (
    <Link
      href={isLive ? project.href : "#"}
      className={`group relative rounded-3xl border border-zinc-200 bg-white p-8 min-h-[280px] flex flex-col text-center items-center transition-all duration-300 ${isLive
        ? "hover:border-zinc-300 hover:shadow-xl hover:-translate-y-1"
        : "opacity-60 pointer-events-none"
        }`}
    >
      <div className="flex items-center justify-center gap-2 mb-5">
        <span
          className="inline-flex px-2.5 py-1 text-[10px] font-bold rounded-full tracking-widest uppercase"
          style={{ background: project.accentSoft, color: project.accent }}
        >
          {project.badge}
        </span>
        {isLive ? (
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6DBF4A] animate-pulse" />
            Live
          </span>
        ) : (
          <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Soon</span>
        )}
      </div>

      <h3 className="text-2xl font-bold tracking-tight mb-2">{project.name}</h3>
      <p className="text-sm font-medium text-zinc-500 mb-4">{project.tagline}</p>
      <p className="text-sm text-zinc-500 leading-relaxed break-keep-all flex-1">
        {project.description}
      </p>

      {isLive && (
        <div
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-0.5"
          style={{ color: project.accent }}
        >
          자세히 보기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      )}
    </Link>
  );
}
