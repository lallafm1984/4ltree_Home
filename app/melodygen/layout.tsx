import type { Metadata } from "next";

const SITE_URL = "https://4ltree.com";
const PAGE_URL = `${SITE_URL}/melodygen`;

export const metadata: Metadata = {
  title: "청음 앱 멜로디젠(MelodyGen) — 음악가를 위한 이어트레이닝(ear training)",
  description:
    "청음 앱 '멜로디젠(MelodyGen)'은 선율·리듬·음정·화성·조성·2성부 6가지 카테고리의 청음 훈련과 모의시험, 개인 맞춤 학습 통계를 제공하는 이어트레이닝(ear training) 앱입니다. 입시 청음 및 실용음악 시창청음 준비에 최적화되어 있습니다.",
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
  alternates: {
    canonical: "/melodygen",
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "포엘트리",
    title: "청음 앱 멜로디젠(MelodyGen) — 음악가를 위한 이어트레이닝",
    description:
      "선율·리듬·음정·화성·조성·2성부 6가지 카테고리의 청음 훈련과 모의시험, 학습 통계를 제공하는 이어트레이닝(ear training) 앱 '멜로디젠(MelodyGen)'.",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP"],
  },
  twitter: {
    card: "summary",
    title: "청음 앱 멜로디젠(MelodyGen) — Ear Training by 포엘트리",
    description:
      "음악가를 위한 청음 앱. 6가지 카테고리 청음 훈련과 모의시험, 이어트레이닝(ear training)을 제공합니다.",
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "MelodyGen",
  alternateName: ["멜로디젠", "청음 앱 멜로디젠", "MelodyGen — Ear Training"],
  description:
    "선율·리듬·음정·화성·조성·2성부 6가지 카테고리의 청음 훈련과 모의시험, 개인 맞춤 학습 통계를 제공하는 이어트레이닝(ear training) 앱. 입시 청음 및 실용음악 시창청음 준비에 최적화.",
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "MusicApplication",
  operatingSystem: "ANDROID",
  url: PAGE_URL,
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.melodygen.app",
  installUrl:
    "https://play.google.com/store/apps/details?id=com.melodygen.app",
  inLanguage: ["ko", "en", "ja"],
  keywords:
    "청음, 청음 앱, 청음 훈련, 이어트레이닝, ear training, 시창청음, 입시 청음, 음감 훈련, 멜로디젠, MelodyGen",
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
      name: "Pro",
      price: "5500",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "5500",
        priceCurrency: "KRW",
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
      name: "청음 앱 멜로디젠(MelodyGen)",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
