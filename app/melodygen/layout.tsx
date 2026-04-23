import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MelodyGen by 4LTree — Train Your Ear",
  description:
    "Improve your musical skills with MelodyGen — 6 ear training exercises including melody dictation, rhythm training, and chord recognition.",
  openGraph: {
    title: "MelodyGen by 4LTree",
    description: "Ear training app for musicians",
    type: "website",
  },
};

export default function MelodyGenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
