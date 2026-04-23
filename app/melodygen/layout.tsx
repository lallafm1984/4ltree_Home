import type { Metadata } from "next";

const SITE_URL = "https://4ltree.com";
const PAGE_URL = `${SITE_URL}/melodygen`;

export const metadata: Metadata = {
  title: "MelodyGen — 음악가를 위한 청음 훈련 앱",
  description:
    "선율·리듬·음정·화성·조성·2성부 6개 카테고리의 청음 연습과 모의시험, 개인 맞춤 학습 통계를 제공하는 이어트레이닝 앱. 입시 및 실용음악 시창청음 준비에 최적화.",
  keywords: [
    "MelodyGen",
    "멜로디젠",
    "청음",
    "청음 앱",
    "청음 훈련",
    "이어트레이닝",
    "ear training",
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
  ],
  alternates: {
    canonical: "/melodygen",
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "4LTree",
    title: "MelodyGen — 음악가를 위한 청음 훈련 앱",
    description:
      "6개 카테고리 청음 연습과 모의시험, 학습 통계를 제공하는 이어트레이닝 앱 MelodyGen.",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP"],
  },
  twitter: {
    card: "summary",
    title: "MelodyGen — Ear Training by 4LTree",
    description: "음악가를 위한 청음 훈련 앱. 6개 카테고리 연습과 모의시험 제공.",
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "MelodyGen",
  description:
    "선율·리듬·음정·화성·조성·2성부 6개 카테고리의 청음 연습과 모의시험, 학습 통계를 제공하는 이어트레이닝 앱.",
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "MusicApplication",
  operatingSystem: "ANDROID",
  url: PAGE_URL,
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.melodygen.app",
  installUrl:
    "https://play.google.com/store/apps/details?id=com.melodygen.app",
  inLanguage: ["ko", "en", "ja"],
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
    name: "4LTree",
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
      name: "4LTree",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "MelodyGen",
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
