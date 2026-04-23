import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientProvider } from "@/components/ClientProvider";

const SITE_URL = "https://4ltree.com";
const SITE_NAME = "4LTree";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "4LTree — 작고 유용한 제품을 정성스럽게 만듭니다",
    template: "%s | 4LTree",
  },
  description:
    "4LTree는 일상과 학습을 돕는 작은 제품을 만드는 스튜디오입니다. 음악가를 위한 청음 훈련 앱 MelodyGen을 포함한 프로젝트를 소개합니다.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "4LTree",
    "4ltree",
    "포엘트리",
    "MelodyGen",
    "멜로디젠",
    "청음 앱",
    "이어트레이닝",
    "ear training",
    "음악 학습",
    "음악 교육",
    "시창청음",
    "입시 청음",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp" }],
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "4LTree — 작고 유용한 제품을 정성스럽게 만듭니다",
    description:
      "4LTree는 일상과 학습을 돕는 작은 제품을 만드는 스튜디오입니다.",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP"],
  },
  twitter: {
    card: "summary",
    title: "4LTree",
    description: "작고 유용한 제품을 정성스럽게 만듭니다.",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#6DBF4A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "4L TREE",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.webp`,
  email: "4ltree.service@gmail.com",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "ko-KR",
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
