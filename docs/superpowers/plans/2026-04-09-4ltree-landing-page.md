# 4LTree Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Next.js + TypeScript + Tailwind CSS로 MelodyGen 앱을 홍보하는 4LTree 회사의 반응형 랜딩 페이지를 제작한다.

**Architecture:** App Router(Next.js 14)를 사용해 정적 사이트로 구성. 섹션별 컴포넌트로 분리하고, 전역 테마(Tailwind config)로 브랜드 컬러를 통일한다. Framer Motion으로 스크롤 애니메이션을 추가한다.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, next/font (Google Fonts), next/image

---

## File Structure

```
4ltree_home/
├── app/
│   ├── layout.tsx            # 루트 레이아웃 (폰트, 메타데이터)
│   ├── page.tsx              # 홈 페이지 (섹션 조합)
│   └── globals.css           # Tailwind 기본 스타일
├── components/
│   ├── Navbar.tsx            # 네비게이션 바 (로고, 메뉴, CTA)
│   ├── Hero.tsx              # 히어로 섹션 (헤드라인, 다운로드 버튼)
│   ├── Features.tsx          # 6가지 훈련 기능 카드
│   ├── HowItWorks.tsx        # 사용 방법 3단계
│   ├── Screenshots.tsx       # 앱 스크린샷 캐러셀
│   ├── Pricing.tsx           # Free vs Pro 플랜 비교
│   ├── Testimonials.tsx      # 사용자 후기
│   ├── Footer.tsx            # 회사 정보, 링크
│   └── ui/
│       ├── Button.tsx        # 재사용 버튼 컴포넌트
│       └── SectionTitle.tsx  # 섹션 제목 컴포넌트
├── public/
│   ├── images/
│   │   ├── hero-mockup.png   # 앱 목업 이미지 (placeholder)
│   │   └── screenshots/      # 스크린샷 이미지들
│   └── logo.svg              # 4LTree 로고
├── tailwind.config.ts        # 브랜드 컬러 커스텀
├── next.config.ts            # Next.js 설정
└── package.json
```

---

### Task 1: 프로젝트 초기화 및 기본 설정

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `next.config.ts`, `app/globals.css`

- [ ] **Step 1: Next.js 프로젝트 생성**

```bash
cd D:/Projects/YulProject_1/4ltree_home
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"
```

프롬프트에서:
- Would you like to use `src/` directory? → **No**
- Would you like to customize the default import alias? → **No**

- [ ] **Step 2: 추가 패키지 설치**

```bash
npm install framer-motion
npm install -D @types/node
```

- [ ] **Step 3: Tailwind 브랜드 컬러 설정**

`tailwind.config.ts`를 아래 내용으로 교체:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#6366f1",
          "indigo-dark": "#4f46e5",
          amber: "#f59e0b",
          "amber-dark": "#d97706",
        },
        category: {
          melody: "#6366f1",
          rhythm: "#f59e0b",
          interval: "#10b981",
          chord: "#a855f7",
          key: "#ef4444",
          "two-voice": "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: globals.css 기본 스타일 설정**

`app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-slate-800 antialiased;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-brand-indigo to-brand-amber bg-clip-text text-transparent;
  }
}
```

- [ ] **Step 5: 개발 서버 실행 확인**

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 열어 Next.js 기본 페이지 확인.

- [ ] **Step 6: 커밋**

```bash
git add .
git commit -m "chore: initialize Next.js project with TypeScript and Tailwind"
```

---

### Task 2: 루트 레이아웃 및 공통 UI 컴포넌트

**Files:**
- Modify: `app/layout.tsx`
- Create: `components/ui/Button.tsx`
- Create: `components/ui/SectionTitle.tsx`

- [ ] **Step 1: 루트 레이아웃 작성**

`app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MelodyGen by 4LTree — 귀를 훈련하세요",
  description:
    "멜로디 받아쓰기, 리듬 훈련, 화음 인식 등 6가지 음악 청음 훈련을 제공하는 MelodyGen 앱으로 음악 실력을 키우세요.",
  openGraph: {
    title: "MelodyGen by 4LTree",
    description: "음악가를 위한 청음 훈련 앱",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Button 컴포넌트 작성**

`components/ui/Button.tsx`:

```typescript
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-indigo hover:bg-brand-indigo-dark text-white focus:ring-brand-indigo shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-brand-amber hover:bg-brand-amber-dark text-white focus:ring-brand-amber shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border-2 border-brand-indigo text-brand-indigo hover:bg-brand-indigo hover:text-white focus:ring-brand-indigo",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
```

- [ ] **Step 3: SectionTitle 컴포넌트 작성**

`components/ui/SectionTitle.tsx`:

```typescript
interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionTitleProps) {
  const titleWithHighlight = highlight
    ? title.replace(
        highlight,
        `<span class="text-gradient">${highlight}</span>`
      )
    : title;

  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block mb-3 px-4 py-1 bg-indigo-50 text-brand-indigo text-sm font-semibold rounded-full">
          {badge}
        </span>
      )}
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
        dangerouslySetInnerHTML={{ __html: titleWithHighlight }}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 4: 커밋**

```bash
git add app/layout.tsx components/ui/
git commit -m "feat: add root layout and shared UI components (Button, SectionTitle)"
```

---

### Task 3: Navbar 컴포넌트

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Navbar 작성**

`components/Navbar.tsx`:

```typescript
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "기능", href: "#features" },
  { label: "사용법", href: "#how-it-works" },
  { label: "요금제", href: "#pricing" },
  { label: "후기", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-indigo to-brand-amber rounded-lg" />
            <span className="font-display text-xl font-bold text-slate-900">
              4LTree
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-brand-indigo font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="#pricing" size="sm">
              무료로 시작하기
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-slate-600 hover:text-brand-indigo font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button href="#pricing" size="sm" className="w-full">
                무료로 시작하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: 개발 서버에서 Navbar 렌더링 확인**

`app/page.tsx` 최상단에 임시로 `<Navbar />`만 추가해서 스크롤 시 배경 변화 확인.

- [ ] **Step 3: 커밋**

```bash
git add components/Navbar.tsx
git commit -m "feat: add sticky Navbar with mobile hamburger menu"
```

---

### Task 4: Hero 섹션

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Hero 컴포넌트 작성**

`components/Hero.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-amber-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1 bg-indigo-100 text-brand-indigo text-sm font-semibold rounded-full">
              🎵 음악가를 위한 청음 훈련 앱
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              귀를 훈련하고{" "}
              <span className="text-gradient">음악 실력</span>을
              <br />
              레벨업하세요
            </h1>
            <p className="text-xl text-slate-500 mb-8 leading-relaxed">
              멜로디 받아쓰기, 리듬 훈련, 화음 인식 등 6가지 청음 훈련으로
              매일 꾸준히 연습하세요. 음대 입시생부터 취미 음악가까지.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </Button>
              <Button href="#" variant="outline" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2L14.64 12 3.18.04c-.35-.04-.69.03-.99.2C1.57.71 1 1.5 1 2.43v19.14c0 .93.57 1.72 2.18 2.19zM15.47 12l3.99 3.99-7.22 4.12L15.47 12zm0 0l-3.23-3.99 7.22 4.12-3.99 3.99 3.99-3.99zM15.47 12l-3.23 4.12L5.02 12l7.22-8.11L15.47 12z"/>
                </svg>
                Google Play
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: "10K+", label: "활성 사용자" },
                { value: "6가지", label: "훈련 카테고리" },
                { value: "4.8★", label: "앱스토어 평점" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-brand-indigo">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-[580px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo to-brand-amber rounded-[3rem] shadow-2xl opacity-20 blur-xl scale-95" />
              <div className="relative w-full h-full bg-slate-900 rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-slate-900">
                  <span className="text-white text-xs">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-80" />
                    <div className="w-2 h-2 bg-white rounded-full opacity-80" />
                  </div>
                </div>
                {/* App content mockup */}
                <div className="px-4 py-4 bg-white h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">안녕하세요! 👋</div>
                      <div className="text-brand-indigo font-semibold text-xs">오늘도 훈련해볼까요?</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-indigo to-brand-amber" />
                  </div>
                  {/* Daily goal card */}
                  <div className="bg-gradient-to-r from-brand-indigo to-indigo-600 rounded-2xl p-4 mb-4 text-white">
                    <div className="text-xs opacity-80 mb-1">오늘의 목표</div>
                    <div className="font-bold text-lg mb-2">3/5 완료</div>
                    <div className="w-full bg-white/30 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-3/5" />
                    </div>
                  </div>
                  {/* Category cards */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "멜로디", color: "bg-indigo-100", text: "text-category-melody" },
                      { name: "리듬", color: "bg-amber-100", text: "text-category-rhythm" },
                      { name: "음정", color: "bg-emerald-100", text: "text-category-interval" },
                      { name: "화음", color: "bg-purple-100", text: "text-category-chord" },
                    ].map((cat) => (
                      <div key={cat.name} className={`${cat.color} rounded-xl p-3`}>
                        <div className={`${cat.text} font-bold text-sm`}>{cat.name}</div>
                        <div className="text-slate-400 text-xs mt-1">훈련 시작 →</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 커밋**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with app mockup and download CTAs"
```

---

### Task 5: Features 섹션

**Files:**
- Create: `components/Features.tsx`

- [ ] **Step 1: Features 컴포넌트 작성**

`components/Features.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: "🎵",
    name: "멜로디 받아쓰기",
    description: "들리는 멜로디를 악보로 옮겨보세요. 단계별 난이도로 초보부터 고급까지.",
    color: "bg-indigo-50",
    border: "border-indigo-200",
    iconBg: "bg-indigo-100",
  },
  {
    icon: "🥁",
    name: "리듬 훈련",
    description: "복잡한 리듬 패턴을 귀로 파악하고 정확히 기보하는 능력을 기릅니다.",
    color: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🎼",
    name: "음정 식별",
    description: "두 음 사이의 간격(음정)을 즉각적으로 식별하는 훈련. 음악적 귀를 날카롭게.",
    color: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "🎹",
    name: "화음 인식",
    description: "장조, 단조, 7화음 등 다양한 화음을 귀로 구분하는 능력을 훈련합니다.",
    color: "bg-purple-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🔑",
    name: "조성 탐지",
    description: "음악을 듣고 어떤 조성인지 파악하세요. 절대음감과 상대음감 모두 훈련.",
    color: "bg-red-50",
    border: "border-red-200",
    iconBg: "bg-red-100",
  },
  {
    icon: "🎶",
    name: "2성부 악보",
    description: "두 파트가 동시에 연주되는 음악을 듣고 각 성부를 독립적으로 기보합니다.",
    color: "bg-cyan-50",
    border: "border-cyan-200",
    iconBg: "bg-cyan-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="핵심 기능"
          title="6가지 청음 훈련 카테고리"
          highlight="청음 훈련"
          subtitle="음악 이론 시험 대비부터 취미 음악까지, 체계적인 청음 훈련 프로그램을 제공합니다."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={cardVariants}
              className={`${feature.color} ${feature.border} border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`${feature.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 커밋**

```bash
git add components/Features.tsx
git commit -m "feat: add Features section with 6 training category cards"
```

---

### Task 6: HowItWorks 섹션

**Files:**
- Create: `components/HowItWorks.tsx`

- [ ] **Step 1: HowItWorks 컴포넌트 작성**

`components/HowItWorks.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    step: "01",
    title: "카테고리 선택",
    description: "멜로디, 리듬, 화음 등 오늘 훈련할 카테고리를 선택하세요. 난이도도 자유롭게 조절할 수 있습니다.",
    color: "from-brand-indigo to-indigo-600",
  },
  {
    step: "02",
    title: "듣고 풀기",
    description: "음악을 듣고 정답을 입력하세요. 오선보에 음표를 그리거나, 건반을 누르거나, 선택지를 고르는 다양한 방식으로 답할 수 있습니다.",
    color: "from-brand-amber to-amber-600",
  },
  {
    step: "03",
    title: "성장 확인",
    description: "매일 훈련 스트릭을 유지하고 통계 대시보드에서 내 실력 향상을 확인하세요. 마스코트와 함께 레벨업!",
    color: "from-emerald-500 to-green-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="사용 방법"
          title="3단계로 시작하세요"
          highlight="3단계"
          subtitle="복잡한 설정 없이 바로 청음 훈련을 시작할 수 있습니다."
        />

        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-indigo via-brand-amber to-emerald-500 opacity-30" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <span className="font-display text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 커밋**

```bash
git add components/HowItWorks.tsx
git commit -m "feat: add HowItWorks section with 3-step process"
```

---

### Task 7: Pricing 섹션

**Files:**
- Create: `components/Pricing.tsx`

- [ ] **Step 1: Pricing 컴포넌트 작성**

`components/Pricing.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "영구 무료",
    description: "청음 훈련을 처음 시작하는 분께",
    features: [
      "6가지 카테고리 기본 접근",
      "하루 5회 훈련",
      "기본 통계 확인",
      "마스코트 기본 스킨",
    ],
    notIncluded: [
      "무제한 훈련",
      "모의고사 모드",
      "상세 통계 분석",
      "광고 없는 경험",
    ],
    cta: "무료로 시작하기",
    ctaVariant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "4,900",
    period: "월 / 구독",
    description: "진지하게 청음 실력을 키우려는 분께",
    features: [
      "6가지 카테고리 무제한 접근",
      "무제한 훈련",
      "모의고사 모드",
      "상세 통계 및 약점 분석",
      "마스코트 프리미엄 스킨",
      "광고 없는 경험",
      "오프라인 모드",
    ],
    notIncluded: [],
    cta: "Pro 시작하기",
    ctaVariant: "primary" as const,
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="요금제"
          title="합리적인 가격으로 시작하세요"
          highlight="합리적인 가격"
          subtitle="무료로 시작하고, 더 많은 기능이 필요할 때 업그레이드하세요."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-brand-indigo to-indigo-700 text-white shadow-2xl scale-105"
                  : "bg-slate-50 border border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-amber text-white text-sm font-bold px-4 py-1 rounded-full shadow">
                    추천
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display text-2xl font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-display text-5xl font-extrabold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  ₩{plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.highlighted ? "text-indigo-200" : "text-slate-400"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-indigo-200" : "text-brand-indigo"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? "text-indigo-100" : "text-slate-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 opacity-40">
                    <svg className="w-5 h-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-slate-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#"
                variant={plan.highlighted ? "secondary" : "outline"}
                size="md"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 커밋**

```bash
git add components/Pricing.tsx
git commit -m "feat: add Pricing section with Free and Pro plan comparison"
```

---

### Task 8: Testimonials 섹션

**Files:**
- Create: `components/Testimonials.tsx`

- [ ] **Step 1: Testimonials 컴포넌트 작성**

`components/Testimonials.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "김지수",
    role: "음대 입시 준비생",
    avatar: "🎓",
    rating: 5,
    comment:
      "매일 30분씩 MelodyGen으로 훈련하고 나서 청음 실력이 눈에 띄게 좋아졌어요. 모의고사 기능이 실제 시험 준비에 정말 도움이 돼요.",
  },
  {
    name: "박민준",
    role: "아마추어 기타리스트",
    avatar: "🎸",
    rating: 5,
    comment:
      "취미로 기타를 치면서 화음 인식이 항상 어려웠는데, 이 앱 2주 만에 확실히 달라졌습니다. 게임 요소도 있어서 매일 하게 돼요!",
  },
  {
    name: "이하은",
    role: "음악 교사",
    avatar: "🎻",
    rating: 5,
    comment:
      "학생들에게도 추천하고 저도 쓰고 있어요. 체계적인 커리큘럼과 통계 기능이 훌륭합니다. 상대음감 훈련에 특히 효과적이에요.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="사용자 후기"
          title="함께 성장하는 음악가들"
          highlight="성장하는"
          subtitle="전국의 음악가들이 MelodyGen으로 청음 실력을 키우고 있습니다."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-brand-amber text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                "{t.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 커밋**

```bash
git add components/Testimonials.tsx
git commit -m "feat: add Testimonials section with user reviews"
```

---

### Task 9: Footer 컴포넌트

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Footer 작성**

`components/Footer.tsx`:

```typescript
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
```

- [ ] **Step 2: 커밋**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer with company links and brand info"
```

---

### Task 10: 메인 페이지 조합 및 최종 확인

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: 메인 페이지에 모든 섹션 조합**

`app/page.tsx`:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: 개발 서버에서 전체 페이지 확인**

```bash
npm run dev
```

확인 사항:
- [ ] Navbar 스크롤 시 배경 변경 동작
- [ ] Hero 섹션 앱 목업 렌더링
- [ ] Features 6개 카드 스크롤 애니메이션
- [ ] HowItWorks 3단계 표시
- [ ] Pricing Free/Pro 카드 정렬
- [ ] Testimonials 3개 후기 카드
- [ ] Footer 링크 및 레이아웃
- [ ] 모바일(375px) 반응형 레이아웃

- [ ] **Step 3: 프로덕션 빌드 테스트**

```bash
npm run build
```

Expected: 빌드 에러 없이 완료, TypeScript 타입 에러 없음.

- [ ] **Step 4: 린트 검사**

```bash
npm run lint
```

Expected: 에러 없음.

- [ ] **Step 5: 최종 커밋**

```bash
git add app/page.tsx
git commit -m "feat: assemble all sections into main landing page"
```

- [ ] **Step 6: GitHub 푸시**

```bash
git push -u origin main
```

---

## Self-Review

### Spec Coverage 확인

| 요구사항 | 구현 Task |
|---------|-----------|
| Next.js + TypeScript | Task 1 |
| Tailwind CSS + 브랜드 컬러 | Task 1 |
| 4LTree 회사 랜딩 페이지 | Task 2~10 |
| MelodyGen 앱 홍보 | Hero(Task 4), Features(Task 5) |
| 앱 다운로드 CTA | Hero(Task 4), Navbar(Task 3) |
| 반응형 디자인 | 모든 컴포넌트 (md: 브레이크포인트) |
| 요금제 소개 | Task 7 |
| Framer Motion 애니메이션 | Task 4~8 |

### 누락 항목
- 없음. 모든 핵심 섹션이 구현됨.

### Placeholder 스캔
- TBD/TODO 없음. 모든 코드 블록 완전히 작성됨.

### 타입 일관성
- `Button`의 `variant` 타입 `"primary" | "secondary" | "outline"` — Pricing에서 `as const` 사용으로 일치.
- `SectionTitle`의 props — 모든 섹션에서 동일하게 사용.
