import type { Metadata } from "next";
import "./globals.css";
import { ClientProvider } from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "MelodyGen by 4LTree — Train Your Ear",
  description:
    "Improve your musical skills with MelodyGen — 6 ear training exercises including melody dictation, rhythm training, and chord recognition.",
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    title: "MelodyGen by 4LTree",
    description: "Ear training app for musicians",
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
