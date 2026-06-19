import type { Metadata } from "next";
import { DM_Sans, Marcellus, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReduxProvider from "@/components/ReduxProvider";
import { absoluteUrl, serviceKeywords, siteConfig } from "@/lib/seo";

const dmSans = DM_Sans({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-dm-sans',
});

const marcellus = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: '--font-marcellus',
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dream Moon Beauty | Şişli Güzellik Merkezi",
    template: "%s | Dream Moon Beauty",
  },
  description: "Dream Moon Beauty Mecidiyeköy güzellik merkezinde lazer epilasyon, cilt bakımı, ağda, kaş tasarımı, kirpik lifting, kalıcı makyaj ve protez tırnak hizmetlerini keşfedin.",
  keywords: [
    siteConfig.name,
    siteConfig.shortName,
    ...serviceKeywords,
    "mecidiyekoy guzellik merkezi",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "tr-TR": siteConfig.url,
    },
  },
  category: "beauty",
  classification: "Business",
  other: {
    "geo.region": "TR-34",
    "geo.placename": "Şişli, İstanbul",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    "ICBM": `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
  icons: {
    icon: [
      { url: '/dreammoon/favicon.jpg', sizes: '16x16', type: 'image/jpeg' },
      { url: '/dreammoon/favicon.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/dreammoon/favicon.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    shortcut: '/dreammoon/favicon.jpg',
    apple: [
      { url: '/dreammoon/favicon.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  openGraph: {
    title: "Dream Moon Beauty | Şişli Güzellik Merkezi",
    description: "Mecidiyeköy'de lazer epilasyon, cilt bakımı, ağda, kaş tasarımı, kirpik lifting, kalıcı makyaj ve protez tırnak hizmetleri.",
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl(siteConfig.defaultImage),
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Dream Moon Beauty Mecidiyeköy profesyonel güzellik merkezi.",
    images: [absoluteUrl(siteConfig.defaultImage)]
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMRRXTMT');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C0CDXP5F4H"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C0CDXP5F4H');
              gtag('config', 'AW-16813075076');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
      </head>
      <body className={`${dmSans.variable} ${marcellus.variable} ${dancingScript.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMRRXTMT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ReduxProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // Admin sayfalarında Header, Footer ve FloatingContact gösterme
  // Bu kontrol client-side'da yapılacak
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingContact />
    </>
  );
}
