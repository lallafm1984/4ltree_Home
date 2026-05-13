"use client";

import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type TrainingItem = {
  title: string;
  body: string;
};

type AudienceItem = {
  title: string;
  body: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type SeoCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  trainingTitle: string;
  training: TrainingItem[];
  audienceTitle: string;
  audience: AudienceItem[];
  faqTitle: string;
  faq: FaqItem[];
};

const copy: Record<Locale, SeoCopy> = {
  ko: {
    eyebrow: "청음 학습 가이드",
    title: "청음 훈련을 매일 이어가야 하는 이유",
    intro:
      "청음은 들리는 소리를 선율, 리듬, 음정, 화성, 조성으로 이해하고 악보나 답으로 재현하는 능력입니다. MelodyGen은 음악 전공생, 음대 입시생, 실용음악 학습자, 취미 음악가가 짧은 시간에도 꾸준히 청음 연습을 이어갈 수 있도록 설계된 이어트레이닝 앱입니다.",
    trainingTitle: "MelodyGen에서 연습할 수 있는 청음 영역",
    training: [
      {
        title: "선율 청음",
        body: "들리는 멜로디를 악보로 옮기며 음의 흐름, 도약, 종지를 정확하게 듣는 힘을 기릅니다.",
      },
      {
        title: "리듬 청음",
        body: "박자와 리듬 패턴을 듣고 구분해 기보하는 연습으로 시창청음과 합주 감각을 함께 다집니다.",
      },
      {
        title: "음정 청음",
        body: "두 음 사이의 거리를 빠르게 식별해 상대음감과 멜로디 분석 능력을 강화합니다.",
      },
      {
        title: "화성 청음",
        body: "장조, 단조, 7화음 등 다양한 화음의 색채를 듣고 구분하는 훈련을 제공합니다.",
      },
      {
        title: "조성 청음",
        body: "음악을 듣고 중심음과 조성을 파악해 악곡 분석과 즉흥 연주에 필요한 귀를 만듭니다.",
      },
      {
        title: "2성부 청음",
        body: "두 성부가 동시에 들리는 문제를 독립적으로 따라가며 대위법과 고급 청음 실력을 키웁니다.",
      },
    ],
    audienceTitle: "이런 분에게 적합합니다",
    audience: [
      {
        title: "음대 입시와 시창청음 준비",
        body: "모의시험과 난이도별 문제로 실전 감각을 유지하며 취약한 청음 유형을 반복할 수 있습니다.",
      },
      {
        title: "작곡, 실용음악, 악기 연습",
        body: "멜로디와 화성을 귀로 먼저 이해해 연주, 채보, 편곡 과정의 정확도를 높이는 데 도움을 줍니다.",
      },
      {
        title: "매일 짧게 하는 음감 훈련",
        body: "긴 수업 시간이 없어도 앱을 열고 바로 청음 훈련을 시작해 꾸준한 루틴을 만들 수 있습니다.",
      },
    ],
    faqTitle: "청음 연습 FAQ",
    faq: [
      {
        question: "청음 연습은 어떻게 시작하면 좋나요?",
        answer:
          "처음에는 선율 청음과 리듬 청음을 낮은 난이도에서 시작하고, 익숙해지면 음정, 화성, 조성, 2성부 청음으로 범위를 넓히는 방식이 좋습니다.",
      },
      {
        question: "청음 앱만으로도 도움이 되나요?",
        answer:
          "앱은 반복 연습과 피드백 루틴을 만들기에 좋습니다. 레슨이나 이론 공부와 함께 사용하면 듣기, 기보, 분석 능력을 더 균형 있게 키울 수 있습니다.",
      },
      {
        question: "입시 청음 준비에도 사용할 수 있나요?",
        answer:
          "MelodyGen은 선율, 리듬, 음정, 화성, 조성, 2성부 청음과 모의시험을 제공하므로 입시 청음과 시창청음 준비의 보조 훈련 도구로 활용할 수 있습니다.",
      },
    ],
  },
  en: {
    eyebrow: "Ear Training Guide",
    title: "Why consistent ear training matters",
    intro:
      "Ear training builds the ability to understand melody, rhythm, intervals, harmony, and key by listening. MelodyGen helps music students, applicants, hobbyists, and practical musicians keep a steady training routine.",
    trainingTitle: "Training areas in MelodyGen",
    training: [
      { title: "Melody dictation", body: "Transcribe melodies and strengthen pitch flow, leaps, and cadence recognition." },
      { title: "Rhythm training", body: "Listen to rhythmic patterns and practice accurate notation." },
      { title: "Interval recognition", body: "Identify the distance between notes and improve relative pitch." },
      { title: "Chord recognition", body: "Distinguish major, minor, seventh chords, and other harmonic colors." },
      { title: "Key detection", body: "Find tonal centers and keys by ear for analysis and performance." },
      { title: "Two-part dictation", body: "Follow two simultaneous voices independently for advanced listening practice." },
    ],
    audienceTitle: "Who it is for",
    audience: [
      { title: "Music entrance exams", body: "Use level-based drills and mock exams to keep practical dictation skills sharp." },
      { title: "Composition and performance", body: "Improve transcription, arranging, and listening accuracy." },
      { title: "Daily short practice", body: "Start quickly and maintain a steady ear training habit." },
    ],
    faqTitle: "Ear training FAQ",
    faq: [
      { question: "How should I start ear training?", answer: "Start with easy melody and rhythm dictation, then expand into intervals, chords, keys, and two-part dictation." },
      { question: "Can an ear training app help?", answer: "Yes. An app is useful for repetition and feedback, especially when paired with lessons and music theory study." },
      { question: "Can I use it for exam preparation?", answer: "MelodyGen provides melody, rhythm, interval, harmony, key, two-part dictation, and mock exams for supplementary practice." },
    ],
  },
  ja: {
    eyebrow: "聴音学習ガイド",
    title: "聴音トレーニングを毎日続ける理由",
    intro:
      "聴音は、聴こえた音を旋律、リズム、音程、和声、調性として理解し、楽譜や答えとして再現する力です。MelodyGenは音楽学生、受験生、趣味の音楽家が短時間でも継続して練習できるイヤートレーニングアプリです。",
    trainingTitle: "MelodyGenで練習できる聴音領域",
    training: [
      { title: "旋律聴音", body: "聴こえたメロディーを楽譜に写し、音の流れや跳躍を正確に聴き取ります。" },
      { title: "リズム聴音", body: "拍子とリズムパターンを聴き分け、正確に記譜する力を養います。" },
      { title: "音程聴音", body: "2つの音の距離を素早く識別し、相対音感を鍛えます。" },
      { title: "和声聴音", body: "長調、短調、7の和音など、和音の響きを聴き分けます。" },
      { title: "調性聴音", body: "音楽を聴いて中心音と調性を把握します。" },
      { title: "2声部聴音", body: "同時に鳴る2つの声部を独立して追う上級練習です。" },
    ],
    audienceTitle: "こんな方におすすめ",
    audience: [
      { title: "音大受験とソルフェージュ", body: "模擬試験と段階別問題で実践的な聴音力を維持できます。" },
      { title: "作曲、実用音楽、楽器練習", body: "採譜、編曲、演奏の正確さを高める耳を育てます。" },
      { title: "毎日の短い音感練習", body: "アプリを開いてすぐに聴音練習を始められます。" },
    ],
    faqTitle: "聴音練習FAQ",
    faq: [
      { question: "聴音練習は何から始めればいいですか？", answer: "まずは低難度の旋律聴音とリズム聴音から始め、音程、和声、調性、2声部へ広げるのがおすすめです。" },
      { question: "聴音アプリだけでも役立ちますか？", answer: "反復練習とフィードバックの習慣作りに役立ちます。レッスンや音楽理論と併用するとより効果的です。" },
      { question: "受験聴音の準備にも使えますか？", answer: "MelodyGenは旋律、リズム、音程、和声、調性、2声部、模擬試験を提供し、補助練習として活用できます。" },
    ],
  },
};

export function MelodyGenSeoContent() {
  const { locale } = useI18n();
  const c = copy[locale] ?? copy.ko;

  return (
    <section
      id="ear-training-guide"
      aria-labelledby="ear-training-guide-title"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-[#6DBF4A]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#5AA63C]">
            {c.eyebrow}
          </span>
          <h2
            id="ear-training-guide-title"
            className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl break-keep-all"
          >
            {c.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg break-keep-all">
            {c.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.9fr]">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 break-keep-all">
              {c.trainingTitle}
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {c.training.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5"
                >
                  <h4 className="text-base font-bold text-zinc-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 break-keep-all">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 break-keep-all">
                {c.audienceTitle}
              </h3>
              <div className="mt-5 space-y-3">
                {c.audience.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.03]"
                  >
                    <h4 className="text-sm font-bold text-zinc-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 break-keep-all">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-zinc-900">
                {c.faqTitle}
              </h3>
              <dl className="mt-5 space-y-4">
                {c.faq.map((item) => (
                  <div key={item.question}>
                    <dt className="text-sm font-bold text-zinc-900 break-keep-all">
                      {item.question}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-zinc-600 break-keep-all">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
