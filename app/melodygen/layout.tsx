import type { Metadata } from "next";

const SITE_URL = "https://www.4ltree.com";
const PAGE_URL = `${SITE_URL}/melodygen`;
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.melodygen.app";
const OG_IMAGE = `${SITE_URL}/img/store-slides/feature-graphic.png`;

function toJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  title: {
    absolute: "청음 훈련 앱 멜로디젠(MelodyGen) - 이어트레이닝·시창청음",
  },
  description:
    "청음 훈련 앱 멜로디젠(MelodyGen)은 선율·리듬·음정·화성·조성·2성부 청음 연습, 모의시험, 학습 통계를 제공하는 이어트레이닝 앱입니다.",
  keywords: [
    "청음",
    "청음 앱",
    "청음 훈련",
    "청음 연습",
    "이어트레이닝",
    "ear training",
    "ear-training",
    "시창청음",
    "입시 청음",
    "음감 훈련",
    "실용음악 청음",
    "선율 청음",
    "리듬 청음",
    "음정 청음",
    "화성 청음",
    "조성 청음",
    "2성부 청음",
    "멜로디젠",
    "MelodyGen",
    "청음 앱 추천",
    "이어트레이닝 앱",
    "포엘트리",
    "4LTree",
  ],
  category: "music education",
  alternates: {
    canonical: "/melodygen",
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "포엘트리",
    title: "청음 훈련 앱 멜로디젠(MelodyGen) — 음악가를 위한 이어트레이닝",
    description:
      "선율·리듬·음정·화성·조성·2성부 6가지 카테고리의 청음 연습과 모의시험, 학습 통계를 제공하는 이어트레이닝(ear training) 앱 '멜로디젠(MelodyGen)'.",
    images: [
      {
        url: OG_IMAGE,
        width: 1024,
        height: 500,
        alt: "청음 훈련 앱 멜로디젠(MelodyGen) 대표 이미지",
      },
    ],
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP"],
  },
  twitter: {
    card: "summary_large_image",
    title: "청음 훈련 앱 멜로디젠(MelodyGen) — Ear Training by 포엘트리",
    description:
      "음악가를 위한 청음 훈련 앱. 6가지 카테고리 청음 연습과 모의시험, 이어트레이닝(ear training)을 제공합니다.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "청음 훈련 앱 멜로디젠(MelodyGen)",
  alternateName: ["멜로디젠 청음", "청음 앱 멜로디젠", "MelodyGen Ear Training"],
  description:
    "선율·리듬·음정·화성·조성·2성부 청음 훈련과 모의시험을 제공하는 음악가용 이어트레이닝 앱 소개 페이지.",
  inLanguage: "ko-KR",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "포엘트리",
    url: SITE_URL,
  },
  about: {
    "@id": `${PAGE_URL}#app`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: OG_IMAGE,
    width: 1024,
    height: 500,
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${PAGE_URL}#app`,
  name: "MelodyGen",
  alternateName: ["멜로디젠", "청음 앱 멜로디젠", "청음 훈련 앱 멜로디젠", "MelodyGen — Ear Training"],
  description:
    "선율·리듬·음정·화성·조성·2성부 6가지 카테고리의 청음 훈련과 모의시험, 개인 맞춤 학습 통계를 제공하는 이어트레이닝(ear training) 앱. 입시 청음 및 실용음악 시창청음 준비에 최적화.",
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "MusicApplication",
  operatingSystem: "ANDROID",
  url: PAGE_URL,
  downloadUrl: PLAY_STORE_URL,
  installUrl: PLAY_STORE_URL,
  sameAs: [PLAY_STORE_URL],
  image: OG_IMAGE,
  screenshot: [
    `${SITE_URL}/img/kr/main.webp`,
    `${SITE_URL}/img/kr/melody.webp`,
    `${SITE_URL}/img/kr/rhythm.webp`,
    `${SITE_URL}/img/kr/chords.webp`,
  ],
  inLanguage: ["ko", "en", "ja"],
  keywords:
    "청음, 청음 앱, 청음 훈련, 이어트레이닝, ear training, 시창청음, 입시 청음, 음감 훈련, 멜로디젠, MelodyGen",
  featureList: [
    "선율 청음 받아쓰기",
    "리듬 청음 훈련",
    "음정 식별",
    "화성 및 화음 인식",
    "조성 탐지",
    "2성부 청음 기보",
    "청음 모의시험",
    "학습 통계와 약점 분석",
  ],
  teaches: [
    "청음",
    "선율 청음",
    "리듬 청음",
    "음정 식별",
    "화성 청음",
    "조성 탐지",
    "2성부 청음",
  ],
  audience: {
    "@type": "Audience",
    audienceType: ["음대 입시생", "음악 전공생", "실용음악 학습자", "취미 음악가"],
  },
  isAccessibleForFree: true,
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Pro Korea",
      price: "1500",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1500",
        priceCurrency: "KRW",
        billingIncrement: 1,
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Pro United States",
      price: "0.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "0.99",
        priceCurrency: "USD",
        billingIncrement: 1,
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Pro Japan",
      price: "170",
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "170",
        priceCurrency: "JPY",
        billingIncrement: 1,
        unitText: "MONTH",
      },
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "포엘트리",
    alternateName: ["4LTree", "4L TREE"],
    url: SITE_URL,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "포엘트리",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "청음 훈련 앱 멜로디젠(MelodyGen)",
      item: PAGE_URL,
    },
  ],
};

export default function MelodyGenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
