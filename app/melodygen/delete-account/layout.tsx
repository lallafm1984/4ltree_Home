import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "계정 및 데이터 삭제 요청 — MelodyGen",
  description:
    "MelodyGen 계정과 관련 데이터를 삭제하는 방법 안내 및 이메일 요청 페이지입니다.",
  alternates: {
    canonical: "/melodygen/delete-account",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.4ltree.com/melodygen/delete-account",
    siteName: "4LTree",
    title: "계정 및 데이터 삭제 요청 — MelodyGen",
    description: "MelodyGen 계정 및 데이터 삭제 요청 안내",
    locale: "ko_KR",
  },
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
