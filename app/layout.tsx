import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ulsangoyangibunyang.vercel.app"),
  title: "울산고양이분양 전문, 건강하고 사랑스러운 반려묘를 만나세요",
  description: "울산고양이분양을 찾고 계신가요? 건강 관리부터 사후 관리까지 철저한 시스템으로 사랑스러운 고양이를 가족으로 맞이할 수 있도록 돕습니다. 울산 전 지역 방문 상담 가능.",
  keywords: ["울산고양이분양", "울산 고양이", "고양이 분양 울산", "울산 반려묘", "건강한 고양이"],
  authors: [{ name: "울산고양이분양" }],
  creator: "울산고양이분양",
  publisher: "울산고양이분양",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ulsangoyangibunyang.vercel.app",
    siteName: "울산고양이분양",
    title: "울산고양이분양 전문, 건강하고 사랑스러운 반려묘를 만나세요",
    description: "울산고양이분양을 찾고 계신가요? 건강 관리부터 사후 관리까지 철저한 시스템으로 사랑스러운 고양이를 가족으로 맞이할 수 있도록 돕습니다. 울산 전 지역 방문 상담 가능.",
    images: [{ url: "/https://ulsangoyangibunyang.vercel.app/images/landing/ulsangoyangibunyang/\uba54\uc778\ucfe4\ubd84\uc591IMG_208620E18487E185A9E186A8E18489E185A1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "울산고양이분양 전문, 건강하고 사랑스러운 반려묘를 만나세요",
    description: "울산고양이분양을 찾고 계신가요? 건강 관리부터 사후 관리까지 철저한 시스템으로 사랑스러운 고양이를 가족으로 맞이할 수 있도록 돕습니다. 울산 전 지역 방문 상담 가능.",
    images: ["/https://ulsangoyangibunyang.vercel.app/images/landing/ulsangoyangibunyang/\uba54\uc778\ucfe4\ubd84\uc591IMG_208620E18487E185A9E186A8E18489E185A1.jpg"],
  },
  alternates: {
    canonical: "https://ulsangoyangibunyang.vercel.app",
  },
  category: "울산고양이분양",
  verification: {
    other: {
      "naver-site-verification": "PENDING",
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
        <meta name="naver-site-verification" content="PENDING" />
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
