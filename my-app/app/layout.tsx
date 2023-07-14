import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streaming Service",
  description: "Escute suas músicas favoritas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
