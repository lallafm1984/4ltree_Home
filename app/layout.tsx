import type { Metadata } from "next";
import "./globals.css";
import { ClientProvider } from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "4LTree — Crafting useful products",
  description:
    "4LTree is a studio building small, focused products. Explore our projects including MelodyGen, an ear training app for musicians.",
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    title: "4LTree",
    description: "Crafting useful products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
