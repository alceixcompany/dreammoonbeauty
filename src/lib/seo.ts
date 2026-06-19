import type { Metadata } from "next";

export const siteConfig = {
  name: "Dream Moon Beauty",
  shortName: "Dream Moon Beauty",
  url: "https://dreammoonbeauty.com",
  locale: "tr_TR",
  language: "tr",
  phone: "+905382166085",
  phoneDisplay: "+90 538 216 60 85",
  email: "ruyaayguzellik@gmail.com",
  instagram: "https://www.instagram.com/dreammoonbeauty",
  instagramHandle: "@dreammoonbeauty",
  address: {
    streetAddress: "Arzu Apartmanı, Gülbahar, Büyükdere Cd. No:99 Kat 2, Daire 4",
    addressLocality: "Şişli",
    addressRegion: "Istanbul",
    postalCode: "",
    addressCountry: "TR",
    display: "Arzu Apartmanı, Gülbahar, Büyükdere Cd. No:99 Kat 2, Daire 4, 34394 Şişli/İstanbul",
  },
  geo: {
    latitude: 40.99229797135275,
    longitude: 28.842329076039675,
  },
  defaultImage: "/dreammoon/hero.webp",
  logo: "/dreammoon/logo-white.png",
};

export const serviceKeywords = [
  "guzellik merkezi",
  "cilt bakimi",
  "lazer epilasyon",
  "mecidiyekoy guzellik merkezi",
  "kalici makyaj",
  "kas kirpik",
  "protez tirnak",
  "agda uygulamalari",
  "kirpik lifting",
  "sisli guzellik merkezi",
  "istanbul guzellik merkezi",
];

type SeoMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createSeoMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.defaultImage,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
}: SeoMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...serviceKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.defaultImage),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      "Şişli",
      "Mecidiyeköy",
      "Istanbul",
    ],
    sameAs: [siteConfig.instagram],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "tr-TR",
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
