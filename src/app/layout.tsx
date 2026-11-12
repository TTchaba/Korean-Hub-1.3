import type { Metadata } from "next";
import { Fraunces, Noto_Sans_Georgian, Noto_Sans_KR, Noto_Serif_Georgian } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteContent } from "@/siteContent";
import "./globals.css";

// Fonts. The browser picks the first font in the list that has the letter
// (see tailwind.config.ts → fontFamily):
//   Latin letters ("Korean Hub") ... Fraunces (headings) / Noto Sans Georgian (body)
//   Georgian letters ............... Noto Serif Georgian (headings) / Noto Sans Georgian (body)
//   Korean letters (한국어) ......... Noto Sans KR
const displayLatin = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const serifGeorgian = Noto_Serif_Georgian({
  subsets: ["georgian", "latin"],
  variable: "--font-serif-ka",
  display: "swap",
});

const sansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
  variable: "--font-sans-ka",
  display: "swap",
});

const korean = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-kr",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.site.url),
  title: {
    default: siteContent.seo.defaultTitle,
    template: siteContent.seo.titleTemplate,
  },
  description: siteContent.seo.defaultDescription,
  openGraph: {
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.defaultDescription,
    url: siteContent.site.url,
    siteName: siteContent.brand.name,
    images: [{ url: siteContent.seo.ogImage }],
    locale: "ka_GE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.defaultTitle,
    description: siteContent.seo.defaultDescription,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ka"
      className={`${displayLatin.variable} ${serifGeorgian.variable} ${sansGeorgian.variable} ${korean.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-porcelain"
        >
          მთავარ შინაარსზე გადასვლა
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
