import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.4ltree.com";
const PAGE_URL = `${SITE_URL}/winktimer`;
const CONTACT_EMAIL = "4ltree.service@gmail.com";

const assets = {
  icon: "/img/winktimer/icon.png",
  heroWide: "/img/winktimer/TimerMain.png",
  overview: "/img/winktimer/main.png",
  wink: "/img/winktimer/wink.png",
  look: "/img/winktimer/look.png",
  flip: "/img/winktimer/flip.png",
  smile: "/img/winktimer/smile.png",
};

const description =
  "A timer and stopwatch with optional look, wink, flip, and smile controls for everyday timing.";

export const metadata: Metadata = {
  title: {
    absolute: "Wink Timer: Timer & Stopwatch | 4LTree",
  },
  description,
  alternates: {
    canonical: "/winktimer",
  },
  keywords: [
    "Wink Timer",
    "timer",
    "stopwatch",
    "hands-free timer",
    "wink control",
    "look pause",
    "flip timer",
    "smile mode",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "4LTree",
    title: "Wink Timer: Timer & Stopwatch",
    description,
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}${assets.heroWide}`,
        width: 1024,
        height: 500,
        alt: "Wink Timer feature graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wink Timer: Timer & Stopwatch",
    description,
    images: [`${SITE_URL}${assets.heroWide}`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const modeCards = [
  {
    title: "Wink Control",
    kicker: "Start with a wink",
    image: assets.wink,
    accent: "#006b3d",
    body: "Use wink gestures for timer actions and stopwatch lap records when tapping is inconvenient.",
  },
  {
    title: "Look Pause",
    kicker: "Look away. Keep running.",
    image: assets.look,
    accent: "#164f91",
    body: "Pause and resume based on whether you are looking at the screen, so your timing stays out of the way.",
  },
  {
    title: "Flip Timer",
    kicker: "Flip to start",
    image: assets.flip,
    accent: "#006b3d",
    body: "Place your phone face down to start, then turn it face up when you want to pause.",
  },
  {
    title: "Smile Mode",
    kicker: "Smile to control",
    image: assets.smile,
    accent: "#4f963f",
    body: "Use smile detection for a simple hands-free trigger during habits, breaks, and daily routines.",
  },
];

const coreFeatures = [
  {
    title: "Basic Timer",
    body: "Start, pause, resume, and reset with clear button controls.",
    icon: "timer",
  },
  {
    title: "Stopwatch Laps",
    body: "Measure elapsed time and keep lap records for quick checks.",
    icon: "lap",
  },
  {
    title: "Timer Alerts",
    body: "Use sound and vibration settings when a timer finishes.",
    icon: "bell",
  },
  {
    title: "Recent History",
    body: "Review recent timing records and timeline events after a session.",
    icon: "history",
  },
];

const routines = [
  "Cooking",
  "Workouts",
  "Study",
  "Work sessions",
  "Breaks",
  "Quick stopwatch checks",
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wink Timer",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Android",
  url: PAGE_URL,
  image: `${SITE_URL}${assets.heroWide}`,
  description,
  publisher: {
    "@type": "Organization",
    name: "4LTree",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

function toJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function WinkTimerLandingPage() {
  return (
    <main lang="en" className="min-h-screen overflow-x-hidden bg-[#f8f5ef] text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(softwareJsonLd) }}
      />
      <TopNav />
      <HeroSection />
      <ProofStrip />
      <EverydaySection />
      <ModeSection />
      <FeatureSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}

function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#052719]/90 text-white backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <Image
            src={assets.icon}
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 rounded-lg"
            priority
          />
          <span>Wink Timer</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
          <a className="transition-colors hover:text-white" href="#modes">
            Modes
          </a>
          <a className="transition-colors hover:text-white" href="#features">
            Features
          </a>
          <Link className="transition-colors hover:text-white" href="/winktimer/privacy">
            Privacy
          </Link>
        </div>
        <a
          href="#download"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-[#063b25] transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#052719] active:scale-[0.98]"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[82dvh] overflow-hidden bg-[#04150e] text-white">
      <Image
        src={assets.heroWide}
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 100vw, 1px"
        className="hidden object-cover object-center opacity-80 md:block"
      />
      <Image
        src={assets.overview}
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 1px"
        className="object-cover object-top opacity-75 md:hidden"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,11,0.92),rgba(3,18,11,0.62)_48%,rgba(3,18,11,0.18))]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#04150e] to-transparent" />

      <div className="relative mx-auto flex min-h-[82dvh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 md:pb-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-[#98d36f]">
            Timer and stopwatch in one app
          </p>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Your face is the remote.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            Start with a simple button timer, then switch to look, wink, flip, or
            smile controls when touching the screen is inconvenient.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0a6b3f] px-7 text-base font-bold text-white shadow-[0_16px_36px_rgba(2,39,22,0.32)] transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#052719] active:scale-[0.98]"
            >
              Download Wink Timer
            </a>
            <a
              href="#modes"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 text-base font-bold text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#052719]"
            >
              Explore controls
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-y border-[#d8d1c2] bg-[#fffdf7]">
      <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:px-6 md:grid-cols-3 lg:px-8">
        <ProofItem value="8" label="timing essentials" body="Timer, stopwatch, alerts, laps, history, and assisted controls." />
        <ProofItem value="4" label="hands-free modes" body="Look Pause, Wink Control, Flip Timer, and Smile Mode." />
        <ProofItem value="0" label="setup required" body="Use the button timer first, then switch modes only when needed." />
      </div>
    </section>
  );
}

function ProofItem({ value, label, body }: { value: string; label: string; body: string }) {
  return (
    <div className="px-0 py-4 md:px-8">
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-black tracking-tight text-[#006b3d]">{value}</span>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">{label}</span>
      </div>
      <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">{body}</p>
    </div>
  );
}

function EverydaySection() {
  return (
    <section className="bg-[#f8f5ef] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#006b3d]">
            Practical first
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            A normal timer when you need speed. Assisted controls when your hands are busy.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600">
            Wink Timer is not limited to focus or study sessions. Use it for
            cooking, workouts, study time, work blocks, breaks, or a quick
            stopwatch check in everyday routines.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {routines.map((routine) => (
              <span
                key={routine}
                className="rounded-full border border-[#d6ccb9] bg-white px-4 py-2 text-sm font-semibold text-zinc-700"
              >
                {routine}
              </span>
            ))}
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <Image
            src={assets.overview}
            alt="Wink Timer overview showing timer, stopwatch, wink, look pause, and smile mode screens"
            width={941}
            height={1672}
            className="mx-auto h-auto w-full max-w-[440px] rounded-lg border border-[#ded6c8] bg-white shadow-[0_24px_70px_rgba(39,34,25,0.16)] lg:max-w-[500px]"
          />
        </figure>
      </div>
    </section>
  );
}

function ModeSection() {
  return (
    <section id="modes" className="scroll-mt-16 bg-[#052719] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#98d36f]">
            Assisted modes
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Choose the gesture that fits the moment.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            Camera and sensor-assisted modes add flexible control while the basic
            timer and stopwatch stay simple and familiar.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {modeCards.map((mode) => (
            <article
              key={mode.title}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <div className="mb-5 min-h-[350px] overflow-hidden rounded-lg bg-[#f8f5ef] p-2">
                <Image
                  src={mode.image}
                  alt={`${mode.title} screenshot in Wink Timer`}
                  width={941}
                  height={1672}
                  className="mx-auto h-auto w-full max-w-[220px] rounded-lg"
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: mode.accent }}>
                {mode.kicker}
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight">{mode.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{mode.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section id="features" className="scroll-mt-16 bg-[#fffdf7] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="lg:pt-3">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#006b3d]">
              Core timing tools
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Everything still starts with a clean timer.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600">
              Use button-based timing by default. Alerts, laps, recent records,
              and timelines keep the app useful even before you turn on assisted modes.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {coreFeatures.map((feature) => (
              <article
                key={feature.title}
                className="flex min-h-[136px] gap-4 rounded-lg border border-[#ded6c8] bg-white p-4 shadow-[0_12px_34px_rgba(47,40,28,0.07)]"
              >
                <div className="shrink-0">
                  <FeatureIcon name={feature.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-zinc-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{feature.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[#ded6c8] bg-[#f8f5ef] p-4">
          <div className="grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#164f91]">
                Device-aware note
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Assisted controls are practical, not magic.
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Camera-based features may vary by device performance, lighting,
                face angle, and camera position. The button timer and stopwatch
                remain available when assisted controls are not the right fit.
              </p>
            </div>
            <Image
              src={assets.heroWide}
              alt="Wink Timer feature graphic showing hands-free controls"
              width={1024}
              height={500}
              className="h-56 w-full rounded-md border border-[#ded6c8] bg-white object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-16 bg-[#07100b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={assets.icon}
            alt="Wink Timer app icon"
            width={1024}
            height={1024}
            className="h-40 w-40 rounded-[2rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:h-56 sm:w-56"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#98d36f]">
            Download Wink Timer
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Keep a timer ready for the moments when tapping breaks the flow.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            Use a timer and stopwatch with optional look, wink, flip, and smile
            controls. Google Play listing details can be connected here when the
            store page is ready.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-base font-bold text-[#063b25] transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#07100b] active:scale-[0.98]"
            >
              Contact 4LTree
            </a>
            <Link
              href="/winktimer/privacy"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-base font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#07100b]"
            >
              Read privacy policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d8d1c2] bg-[#fffdf7] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src={assets.icon} alt="" width={32} height={32} className="h-8 w-8 rounded-lg" />
          <span className="font-semibold text-zinc-800">Wink Timer by 4LTree</span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="transition-colors hover:text-zinc-950" href="/">
            4LTree
          </Link>
          <Link className="transition-colors hover:text-zinc-950" href="/winktimer/privacy">
            Privacy
          </Link>
          <a className="transition-colors hover:text-zinc-950" href={`mailto:${CONTACT_EMAIL}`}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = "h-6 w-6";

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e7f3dd] text-[#006b3d]">
      {name === "timer" && (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 2h6M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M19 13a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      )}
      {name === "lap" && (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5h16M4 12h10M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="m17 10 3 2-3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {name === "bell" && (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 21h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {name === "history" && (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.8 16A7 7 0 1 0 5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}
