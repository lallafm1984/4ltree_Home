"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

export type Locale = "ko" | "en" | "ja";

type Translations = {
  [key: string]: {
    ko: string;
    en: string;
    ja: string;
  };
};

const translations: Translations = {
  // Navbar
  "nav.features": { ko: "기능", en: "Features", ja: "機能" },
  "nav.howItWorks": { ko: "사용법", en: "How It Works", ja: "使い方" },
  "nav.pricing": { ko: "요금제", en: "Pricing", ja: "料金" },
  "nav.contact": { ko: "문의하기", en: "Contact", ja: "お問い合わせ" },
  "nav.startFree": { ko: "무료로 시작하기", en: "Start Free", ja: "無料で始める" },
  "nav.menuOpen": { ko: "메뉴 열기", en: "Open menu", ja: "メニューを開く" },
  "nav.menuClose": { ko: "메뉴 닫기", en: "Close menu", ja: "メニューを閉じる" },

  // Hero
  "hero.headline1": { ko: "청음 훈련으로", en: "Train Your Ear,", ja: "耳を鍛えれば" },
  "hero.headlineHighlight": { ko: "음악이", en: "Music", ja: "音楽が" },
  "hero.headline2": { ko: "달라집니다", en: "Changes", ja: "変わります" },
  "hero.description": {
    ko: "MelodyGen은 멜로디 받아쓰기부터 화음 인식까지, 음악가에게 꼭 필요한 6가지 청음 훈련을 매일 꾸준히 이어갈 수 있게 돕는 청음 앱입니다. 음대 입시생부터 취미 음악가까지 체계적으로 연습하세요.",
    en: "From melody dictation to chord recognition — 6 essential ear training exercises for musicians, every day. A structured training app for everyone from music students to hobbyists.",
    ja: "メロディーの書き取りから和音の認識まで、音楽家に必要な6つの聴音トレーニングを毎日コツコツと。音大受験生から趣味の音楽家まで、すべての人のための体系的なトレーニングアプリ。",
  },
  "hero.badgeComplete": { ko: "훈련 완료!", en: "Training Done!", ja: "トレーニング完了！" },
  "hero.badgeCompleteDetail": { ko: "멜로디 받아쓰기 +15 XP", en: "Melody Dictation +15 XP", ja: "メロディー書き取り +15 XP" },
  "hero.badgeStreak": { ko: "14일 연속", en: "14-Day Streak", ja: "14日連続" },
  "hero.badgeStreakDetail": { ko: "최장 기록 갱신!", en: "New record!", ja: "最長記録更新！" },
  "hero.imgAlt": { ko: "MelodyGen 앱 화면", en: "MelodyGen app screen", ja: "MelodyGen アプリ画面" },

  // Features
  "features.badge": { ko: "핵심 기능", en: "Core Features", ja: "主な機能" },
  "features.title1": { ko: "6가지 청음 훈련으로", en: "Grow Systematically with", ja: "6つの聴音トレーニングで" },
  "features.title2": { ko: "체계적으로 성장하세요", en: "6 Ear Training Exercises", ja: "体系的に成長しよう" },
  "features.proOnly": { ko: "Pro 전용", en: "Pro Only", ja: "Pro 専用" },

  "features.melody.name": { ko: "멜로디 받아쓰기", en: "Melody Dictation", ja: "メロディー書き取り" },
  "features.melody.desc": {
    ko: "들리는 멜로디를 악보로 옮겨보세요. 단계별 난이도(Lv.1~9)로 초보부터 고급까지 체계적으로 실력을 쌓습니다.",
    en: "Transcribe melodies you hear onto sheet music. Build skills systematically from beginner to advanced with levels 1–9.",
    ja: "聴こえたメロディーを楽譜に書き取りましょう。レベル1〜9の段階的な難易度で、初心者から上級者まで体系的にスキルアップ。",
  },
  "features.rhythm.name": { ko: "리듬 훈련", en: "Rhythm Training", ja: "リズムトレーニング" },
  "features.rhythm.desc": {
    ko: "복잡한 리듬 패턴을 귀로 파악하고 정확히 기보하는 능력을 기릅니다. (Lv.1~6)",
    en: "Develop the ability to identify complex rhythm patterns by ear and notate them accurately. (Lv.1–6)",
    ja: "複雑なリズムパターンを耳で把握し、正確に記譜する能力を養います。（Lv.1〜6）",
  },
  "features.interval.name": { ko: "음정 식별", en: "Interval Recognition", ja: "音程識別" },
  "features.interval.desc": {
    ko: "두 음 사이 간격을 즉각 식별하는 훈련. 음악적 귀를 날카롭게 다듬습니다. (Lv.1~4)",
    en: "Train to instantly identify the interval between two notes. Sharpen your musical ear. (Lv.1–4)",
    ja: "2つの音の間隔を即座に識別するトレーニング。音楽的な耳を鋭く磨きます。（Lv.1〜4）",
  },
  "features.chord.name": { ko: "화음 인식", en: "Chord Recognition", ja: "和音認識" },
  "features.chord.desc": {
    ko: "장조, 단조, 7화음 등 다양한 화성을 귀로 구분하는 능력을 훈련합니다. (Lv.1~4)",
    en: "Train to distinguish major, minor, 7th chords and more by ear. (Lv.1–4)",
    ja: "長調、短調、7の和音など、さまざまなハーモニーを耳で区別する能力を訓練します。（Lv.1〜4）",
  },
  "features.key.name": { ko: "조성 탐지", en: "Key Detection", ja: "調性検出" },
  "features.key.desc": {
    ko: "음악을 듣고 어떤 조성인지 파악하세요. 절대음감과 상대음감 모두 훈련 가능. (Lv.1~3)",
    en: "Listen to music and identify the key. Train both perfect and relative pitch. (Lv.1–3)",
    ja: "音楽を聴いてどの調性か把握しましょう。絶対音感と相対音感の両方をトレーニングできます。（Lv.1〜3）",
  },
  "features.twoVoice.name": { ko: "2성부 악보", en: "Two-Part Score", ja: "2声部楽譜" },
  "features.twoVoice.desc": {
    ko: "두 파트가 동시에 연주되는 음악을 듣고 각 성부를 독립적으로 기보합니다. (Pro 전용, Lv.1~4)",
    en: "Listen to two parts playing simultaneously and notate each voice independently. (Pro only, Lv.1–4)",
    ja: "2つのパートが同時に演奏される音楽を聴き、各声部を独立して記譜します。（Pro専用、Lv.1〜4）",
  },

  // HowItWorks
  "how.badge": { ko: "사용 방법", en: "How to Use", ja: "使い方" },
  "how.title": { ko: "3단계로 바로 시작하세요", en: "Get Started in 3 Steps", ja: "3ステップですぐ始めよう" },
  "how.subtitle": {
    ko: "복잡한 설정 없이 앱을 열면 바로 청음 훈련을 시작할 수 있습니다.",
    en: "Open the app and start ear training right away — no complex setup needed.",
    ja: "複雑な設定なしでアプリを開けばすぐに聴音トレーニングを開始できます。",
  },

  "how.step1.title": { ko: "카테고리 선택", en: "Choose a Category", ja: "カテゴリー選択" },
  "how.step1.desc": {
    ko: "멜로디, 리듬, 화음 등 오늘 훈련할 카테고리를 선택하세요. 난이도를 자유롭게 조절하여 집중적으로 훈련할 수 있습니다.",
    en: "Choose today's training category — melody, rhythm, chords, and more. Freely adjust the difficulty to focus your practice.",
    ja: "メロディー、リズム、和音など、今日トレーニングするカテゴリーを選択してください。難易度を自由に調整して集中的にトレーニングできます。",
  },
  "how.step1.tags": {
    ko: "난이도 조절,카테고리 선택,집중 모드",
    en: "Adjust Difficulty,Choose Category,Focus Mode",
    ja: "難易度調整,カテゴリー選択,集中モード",
  },

  "how.step2.title": { ko: "듣고 풀기", en: "Listen & Solve", ja: "聴いて解く" },
  "how.step2.desc": {
    ko: "음악을 듣고 정답을 입력하세요. 오선보에 음표를 그리거나, 건반을 누르거나, 선택지를 고르는 다양한 방식으로 답할 수 있습니다.",
    en: "Listen to the music and enter your answer. Draw notes on a staff, press keys on a keyboard, or choose from options.",
    ja: "音楽を聴いて正解を入力してください。五線譜に音符を描いたり、鍵盤を押したり、選択肢を選ぶなど、さまざまな方法で回答できます。",
  },
  "how.step2.tags": {
    ko: "오선보 입력,건반 모드,선택형 문제",
    en: "Staff Input,Keyboard Mode,Multiple Choice",
    ja: "五線譜入力,鍵盤モード,選択式問題",
  },

  "how.step3.title": { ko: "성장 확인", en: "Track Growth", ja: "成長を確認" },
  "how.step3.desc": {
    ko: "매일 훈련 스트릭을 유지하고 통계 대시보드에서 내 실력 향상을 확인하세요. 약점 분석으로 어떤 부분을 집중해야 할지 명확히 알 수 있습니다.",
    en: "Keep your daily streak going and track your progress on the stats dashboard. Weakness analysis shows exactly where to focus.",
    ja: "毎日のトレーニングストリークを維持し、統計ダッシュボードで実力の向上を確認しましょう。弱点分析でどの部分に集中すべきか明確に分かります。",
  },
  "how.step3.tags": {
    ko: "통계 대시보드,약점 분석,스트릭 유지",
    en: "Stats Dashboard,Weakness Analysis,Keep Streak",
    ja: "統計ダッシュボード,弱点分析,ストリーク維持",
  },

  // Pricing
  "pricing.badge": { ko: "요금제", en: "Pricing", ja: "料金プラン" },
  "pricing.title1": { ko: "합리적인 가격으로", en: "Start Now at a", ja: "合理的な価格で" },
  "pricing.title2": { ko: "바로 시작하세요", en: "Reasonable Price", ja: "今すぐ始めよう" },
  "pricing.subtitle": {
    ko: "무료로 시작하고, 더 많은 기능이 필요할 때 업그레이드하세요.",
    en: "Start free, then upgrade when you need more features.",
    ja: "無料で始めて、もっと多くの機能が必要な時にアップグレードしてください。",
  },

  "pricing.free.title": { ko: "Free", en: "Free", ja: "Free" },
  "pricing.free.desc": { ko: "청음 훈련을 처음 시작하는 분께", en: "For those just starting ear training", ja: "聴音トレーニングを始める方へ" },
  "pricing.free.price": { ko: "₩0", en: "$0", ja: "¥0" },
  "pricing.free.priceSub": { ko: "영구 무료", en: "Free forever", ja: "永久無料" },
  "pricing.free.cta": { ko: "무료로 시작하기", en: "Start Free", ja: "無料で始める" },
  "pricing.categoryLabel": { ko: "훈련 카테고리", en: "Training Categories", ja: "トレーニングカテゴリー" },

  "pricing.pro.title": { ko: "Pro", en: "Pro", ja: "Pro" },
  "pricing.pro.desc": { ko: "진지하게 청음 실력을 키우려는 분께", en: "For those serious about improving ear skills", ja: "本格的に聴音スキルを伸ばしたい方へ" },
  "pricing.pro.price": { ko: "₩1,500", en: "$0.99", ja: "¥170" },
  "pricing.pro.priceSub": { ko: "월 / 구독", en: "/ month", ja: "月額" },
  "pricing.pro.cta": { ko: "Pro 시작하기", en: "Start Pro", ja: "Proを始める" },
  "pricing.pro.recommended": { ko: "추천 플랜", en: "Recommended", ja: "おすすめ" },

  "pricing.cat.melody": { ko: "선율", en: "Melody", ja: "旋律" },
  "pricing.cat.rhythm": { ko: "리듬", en: "Rhythm", ja: "リズム" },
  "pricing.cat.interval": { ko: "음정", en: "Interval", ja: "音程" },
  "pricing.cat.harmony": { ko: "화성", en: "Harmony", ja: "和声" },
  "pricing.cat.key": { ko: "조성", en: "Key", ja: "調性" },
  "pricing.cat.twoVoice": { ko: "2성부", en: "Two-Part", ja: "2声部" },
  "pricing.cat.mockExam": { ko: "모의시험", en: "Mock Exam", ja: "模擬試験" },
  "pricing.locked": { ko: "잠금", en: "Locked", ja: "ロック" },
  "pricing.all": { ko: "전체", en: "All", ja: "全て" },

  // Testimonials
  "testimonials.badge": { ko: "사용자 후기", en: "Testimonials", ja: "ユーザーレビュー" },
  "testimonials.title1": { ko: "함께 성장하는 ", en: "Growing Together: ", ja: "共に成長する " },
  "testimonials.title2": { ko: "12,400명의 음악가들", en: "12,400+ Musicians", ja: "12,400人の音楽家たち" },

  "testimonials.0.name": { ko: "하윤서", en: "Yoonseo Ha", ja: "ハ・ユンソ" },
  "testimonials.0.role": { ko: "음대 입시 준비생", en: "Music College Applicant", ja: "音大受験準備生" },
  "testimonials.0.company": { ko: "서울예술고등학교", en: "Seoul Arts High School", ja: "ソウル芸術高校" },
  "testimonials.0.comment": {
    ko: "매일 30분씩 MelodyGen으로 훈련하고 나서 청음 실력이 눈에 띄게 좋아졌어요. 모의고사 기능이 실제 시험 준비에 정말 도움이 됩니다.",
    en: "After training 30 minutes daily with MelodyGen, my ear training skills improved noticeably. The mock exam feature really helps with actual test preparation.",
    ja: "毎日30分MelodyGenでトレーニングしてから、聴音の実力が目に見えて良くなりました。模擬試験機能が実際の試験準備に本当に役立ちます。",
  },
  "testimonials.1.name": { ko: "박도현", en: "Dohyun Park", ja: "パク・ドヒョン" },
  "testimonials.1.role": { ko: "아마추어 기타리스트", en: "Amateur Guitarist", ja: "アマチュアギタリスト" },
  "testimonials.1.company": { ko: "루미너스 스튜디오", en: "Luminous Studio", ja: "ルミナススタジオ" },
  "testimonials.1.comment": {
    ko: "취미로 기타를 치면서 화음 인식이 항상 어려웠는데, 2주 만에 확실히 달라졌어요. 게임 요소가 있어서 매일 자연스럽게 하게 됩니다.",
    en: "Chord recognition was always tough while playing guitar as a hobby, but it clearly changed in just 2 weeks. The gamification makes it easy to practice daily.",
    ja: "趣味でギターを弾きながら和音認識がいつも難しかったのですが、2週間で確実に変わりました。ゲーム要素があるので毎日自然に続けられます。",
  },
  "testimonials.2.name": { ko: "이서진", en: "Seojin Lee", ja: "イ・ソジン" },
  "testimonials.2.role": { ko: "음악 교사", en: "Music Teacher", ja: "音楽教師" },
  "testimonials.2.company": { ko: "강남 예술 아카데미", en: "Gangnam Arts Academy", ja: "カンナム芸術アカデミー" },
  "testimonials.2.comment": {
    ko: "학생들에게도 추천하고 저도 쓰고 있어요. 체계적인 커리큘럼과 통계 기능이 훌륭합니다. 상대음감 훈련에 특히 효과적이에요.",
    en: "I recommend it to my students and use it myself. The structured curriculum and stats features are excellent. Especially effective for relative pitch training.",
    ja: "生徒にも勧めていて、自分も使っています。体系的なカリキュラムと統計機能が素晴らしいです。相対音感のトレーニングに特に効果的です。",
  },
  "testimonials.3.name": { ko: "김민재", en: "Minjae Kim", ja: "キム・ミンジェ" },
  "testimonials.3.role": { ko: "작곡 전공 대학생", en: "Composition Major", ja: "作曲専攻大学生" },
  "testimonials.3.company": { ko: "한국예술종합학교", en: "Korea National University of Arts", ja: "韓国芸術総合学校" },
  "testimonials.3.comment": {
    ko: "2성부 악보 기능이 정말 유용해요. 대위법 수업 준비에 이 앱 없이는 못 할 것 같아요.",
    en: "The two-part score feature is really useful. I can't imagine preparing for counterpoint class without this app.",
    ja: "2声部楽譜機能が本当に便利です。対位法の授業準備にこのアプリなしではやっていけません。",
  },
  "testimonials.4.name": { ko: "정수아", en: "Sua Jeong", ja: "チョン・スア" },
  "testimonials.4.role": { ko: "성악 레슨 수강생", en: "Vocal Lesson Student", ja: "声楽レッスン受講生" },
  "testimonials.4.company": { ko: "스텔라랩스 뮤직", en: "StellaLabs Music", ja: "ステララブズミュージック" },
  "testimonials.4.comment": {
    ko: "음정 식별 훈련 덕분에 선생님께 음정이 많이 좋아졌다는 칭찬을 받았어요. 매일 10분만 해도 효과가 느껴집니다.",
    en: "Thanks to the interval training, my teacher praised my improved pitch. Just 10 minutes a day makes a noticeable difference.",
    ja: "音程識別トレーニングのおかげで、先生から音程がとても良くなったと褒められました。毎日10分だけでも効果を感じます。",
  },

  "testimonials.metric.users": { ko: "활성 사용자", en: "Active Users", ja: "アクティブユーザー" },
  "testimonials.metric.rating": { ko: "평균 앱 평점", en: "Avg. App Rating", ja: "平均アプリ評価" },
  "testimonials.metric.resub": { ko: "재구독률", en: "Re-subscription Rate", ja: "再購読率" },

  // Contact
  "contact.badge": { ko: "문의하기", en: "Contact", ja: "お問い合わせ" },
  "contact.title1": { ko: "궁금한 점이", en: "Have Any", ja: "ご質問が" },
  "contact.title2": { ko: "있으신가요?", en: "Questions?", ja: "ありますか？" },
  "contact.desc": {
    ko: "서비스 이용, 요금제, 기술 지원 등 무엇이든 편하게 문의해 주세요. 빠르게 답변 드리겠습니다.",
    en: "Feel free to ask about our service, pricing, technical support, and more. We'll respond quickly.",
    ja: "サービスの利用、料金プラン、技術サポートなど、何でもお気軽にお問い合わせください。迅速にお答えいたします。",
  },
  "contact.emailLabel": { ko: "이메일", en: "Email", ja: "メール" },
  "contact.avgResponse": { ko: "평균 응답", en: "Avg. Response", ja: "平均応答" },
  "contact.avgResponseValue": { ko: "24시간 내", en: "Within 24h", ja: "24時間以内" },
  "contact.hours": { ko: "운영 시간", en: "Hours", ja: "営業時間" },
  "contact.hoursValue": { ko: "평일 9-18시", en: "Mon–Fri 9–18", ja: "平日 9〜18時" },
  "contact.formTitle": { ko: "메일 보내기", en: "Send an Email", ja: "メールを送る" },
  "contact.subjectLabel": { ko: "제목", en: "Subject", ja: "件名" },
  "contact.subjectPlaceholder": { ko: "문의 제목을 입력하세요", en: "Enter your subject", ja: "件名を入力してください" },
  "contact.messageLabel": { ko: "내용", en: "Message", ja: "内容" },
  "contact.messagePlaceholder": { ko: "문의 내용을 자세히 적어주세요", en: "Please describe your inquiry in detail", ja: "お問い合わせ内容を詳しくお書きください" },
  "contact.sendBtn": { ko: "메일 앱으로 보내기", en: "Open Mail App", ja: "メールアプリで送信" },
  "contact.sendNote": { ko: "버튼을 누르면 기본 메일 앱이 열립니다", en: "Clicking the button will open your default mail app", ja: "ボタンを押すとデフォルトのメールアプリが開きます" },

  // Footer
  "footer.ctaBadge": { ko: "지금 바로 시작하세요", en: "Get Started Now", ja: "今すぐ始めよう" },
  "footer.ctaTitle": { ko: "오늘부터 귀를 훈련하세요", en: "Start Training Your Ear Today", ja: "今日から耳を鍛えましょう" },
  "footer.ctaDesc": {
    ko: "무료로 시작하고, 매일 꾸준히 연습해서 음악 실력을 키워나가세요.",
    en: "Start for free and practice every day to grow your musical skills.",
    ja: "無料で始めて、毎日コツコツ練習して音楽のスキルを伸ばしましょう。",
  },
  "footer.terms": { ko: "이용약관", en: "Terms of Service", ja: "利用規約" },
  "footer.privacy": { ko: "개인정보처리방침", en: "Privacy Policy", ja: "プライバシーポリシー" },

  // Metadata
  "meta.title": {
    ko: "MelodyGen by 4LTree — 귀를 훈련하세요",
    en: "MelodyGen by 4LTree — Train Your Ear",
    ja: "MelodyGen by 4LTree — 耳を鍛えよう",
  },
  "meta.description": {
    ko: "멜로디 받아쓰기, 리듬 훈련, 화음 인식 등 6가지 음악 청음 훈련을 제공하는 청음 앱 MelodyGen으로 음악 실력을 키우세요.",
    en: "Improve your musical skills with MelodyGen — 6 ear training exercises including melody dictation, rhythm training, and chord recognition.",
    ja: "メロディーの書き取り、リズムトレーニング、和音認識など6つの聴音トレーニングを提供するMelodyGenアプリで音楽のスキルを伸ばしましょう。",
  },
};

// Image path mapping per locale
// Korean: /img/kr/filename.webp, English: /img/en/filename_en.png, Japanese: /img/jp/filename_jp.png
export function getLocalizedImage(basePath: string, locale: Locale): string {
  const filename = basePath.replace("/img/", "").replace(".webp", "");

  if (locale === "ko") return `/img/kr/${filename}.webp`;

  const suffix = locale === "en" ? "_en" : "_jp";
  const localeDir = locale === "en" ? "en" : "jp";
  return `/img/${localeDir}/${filename}${suffix}.png`;
}

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType>({
  locale: "ko",
  setLocale: () => {},
  t: (key: string) => key,
});

const DEFAULT_LOCALE: Locale = "ko";
const LOCALE_STORAGE_KEY = "locale";
const LOCALE_CHANGE_EVENT = "localechange";

function isLocale(value: string | null): value is Locale {
  return value === "ko" || value === "en" || value === "ja";
}

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(saved) ? saved : DEFAULT_LOCALE;
}

function subscribeLocale(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleStoreChange = () => onStoreChange();
  window.addEventListener("storage", handleStoreChange);
  window.addEventListener(LOCALE_CHANGE_EVENT, handleStoreChange);

  return () => {
    window.removeEventListener("storage", handleStoreChange);
    window.removeEventListener(LOCALE_CHANGE_EVENT, handleStoreChange);
  };
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getStoredLocale,
    () => DEFAULT_LOCALE,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    localStorage.setItem(LOCALE_STORAGE_KEY, l);
    document.documentElement.lang = l;
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[locale] || entry.ko;
    },
    [locale],
  );

  const contextValue = {
    locale,
    setLocale,
    t,
  };

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
