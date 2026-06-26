export const siteUrl = "https://ulsangoyangibunyang.vercel.app";

export const targetKeywords = ['울산고양이분양', '울산 고양이', '고양이 분양 울산', '울산 반려묘', '건강한 고양이'] as const;

export const siteTitle = "울산고양이분양 전문, 건강하고 사랑스러운 반려묘를 만나세요";

export const siteDescription =
  "울산고양이분양을 찾고 계신가요? 건강 관리부터 사후 관리까지 철저한 시스템으로 사랑스러운 고양이를 가족으로 맞이할 수 있도록 돕습니다. 울산 전 지역 방문 상담 가능.";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "울산고양이분양",
        description: siteDescription,
        inLanguage: "ko-KR",
        telephone: "0505-464-1004",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
