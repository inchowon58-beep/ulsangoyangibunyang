import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ulsancat.dmcmusic.co.kr"),
  title: "울산고양이분양 전문, 건강하고 사랑스러운 반려묘를 만나세요",
  description: "울산고양이분양을 찾고 계신가요? 건강 관리부터 사후 관리까지 철저한 시스템으로 사랑스러운 고양이를 가족으로 맞이할 수 있도록 돕습니다. 울산 전 지역 방문 상담 가능.",
  keywords: ["https://ulsancat.dmcmusic.co.kr/"],
  authors: [{ name: "https://ulsancat.dmcmusic.co.kr/" }],
  creator: "https://ulsancat.dmcmusic.co.kr/",
  publisher: "https://ulsancat.dmcmusic.co.kr/",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ulsancat.dmcmusic.co.kr",
    siteName: "https://ulsancat.dmcmusic.co.kr/",
    title: "울산고양이분양 전문, 건강하고 사랑스러운 반려묘를 만나세요",
    description: "울산고양이분양을 찾고 계신가요? 건강 관리부터 사후 관리까지 철저한 시스템으로 사랑스러운 고양이를 가족으로 맞이할 수 있도록 돕습니다. 울산 전 지역 방문 상담 가능.",
    images: [{ url: "/images/landing-01.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "울산고양이분양 전문, 건강하고 사랑스러운 반려묘를 만나세요",
    description: "울산고양이분양을 찾고 계신가요? 건강 관리부터 사후 관리까지 철저한 시스템으로 사랑스러운 고양이를 가족으로 맞이할 수 있도록 돕습니다. 울산 전 지역 방문 상담 가능.",
    images: ["/images/landing-01.jpg"],
  },
  alternates: {
    canonical: "https://ulsancat.dmcmusic.co.kr",
  },
  category: "https://ulsancat.dmcmusic.co.kr/",
  verification: {
    other: {
      "naver-site-verification": "84493ccc35e4f67d4a1ad0ab016932069fe3d6bd",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="84493ccc35e4f67d4a1ad0ab016932069fe3d6bd" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans pb-safe-floating lg:pb-0">{children}</body>
    </html>
  );
}
