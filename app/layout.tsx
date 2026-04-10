import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
