import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://thonnyvictor.vercel.app"),
  title: "Anthony Victor | Desenvolvedor Fullstack",
  description:
    "Desenvolvedor Fullstack focado em aplicações web modernas, REST APIs e soluções sob medida.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Anthony Victor | Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack focado em aplicações web modernas, REST APIs e soluções sob medida.",
    url: "https://thonnyvictor.vercel.app",
    siteName: "Anthony Victor Portfolio",
    images: [
      {
        url: "/og-image.png", // Imagem em public/og-image.png (1200x630px)
        width: 1200,
        height: 630,
        alt: "Anthony Victor Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Victor | Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack focado em aplicações web modernas, REST APIs e soluções sob medida.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
      {/* Insira seu ID do Google Analytics (G-XXXXXXXXXX) */}
      <GoogleAnalytics gaId="G-MEU_ID_DO_GA4" />
    </html>
  );
}
