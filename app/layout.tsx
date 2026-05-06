import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientProvider } from "@/components/ClientProvider";

const SITE_URL = "https://4ltree.com";
const SITE_NAME = "포엘트리";
const SITE_NAME_EN = "4LTree";

function toJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "포엘트리(4LTree) — 작고 유용한 제품을 정성스럽게 만듭니다",
    template: "%s | 포엘트리",
  },
  description:
    "포엘트리(4LTree)는 일상과 학습을 돕는 작은 제품을 만드는 스튜디오입니다. 현재 운영 중인 프로젝트를 확인해 보세요.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "포엘트리",
    "4LTree",
    "4L TREE",
    "4ltree",
    "포엘트리 스튜디오",
    "제품 스튜디오",
    "인디 스튜디오",
    "프로젝트",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "포엘트리(4LTree) — 작고 유용한 제품을 정성스럽게 만듭니다",
    description:
      "포엘트리는 일상과 학습을 돕는 작은 제품을 만드는 스튜디오입니다.",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP"],
  },
  twitter: {
    card: "summary",
    title: "포엘트리(4LTree)",
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
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: [SITE_NAME_EN, "4L TREE", "4ltree"],
  url: SITE_URL,
  logo: `${SITE_URL}/weblogo.png`,
  email: "4ltree.service@gmail.com",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  name: SITE_NAME,
  alternateName: [SITE_NAME_EN, "4L TREE"],
  url: SITE_URL,
  inLanguage: "ko-KR",
  description:
    "포엘트리(4LTree)는 일상과 학습을 돕는 작은 제품을 만드는 스튜디오입니다.",
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(websiteJsonLd) }}
        />
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
