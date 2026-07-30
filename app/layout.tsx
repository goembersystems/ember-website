import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalyticsPlaceholder from "./components/GoogleAnalyticsPlaceholder";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://goembersystems.com";

const title =
  "Ember Systems | Premium AI Automation, Custom Software & Business Websites";
const description =
  "Ember Systems is a premium software agency building AI automation, custom software, business websites, dashboards, and workflow systems for contractors and growing businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Ember Systems",
  },
  description,
  applicationName: "Ember Systems",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "premium software agency",
    "AI automation company",
    "business automation",
    "contractor software",
    "custom dashboards",
    "business websites",
    "custom software development",
    "workflow automation",
    "lead capture systems",
    "internal dashboards",
    "AI chatbots",
    "small business software",
    "Ember Systems",
    "goembersystems",
  ],
  authors: [{ name: "Ember Systems", url: siteUrl }],
  creator: "Ember Systems",
  publisher: "Ember Systems",
  category: "technology",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ember Systems",
    title,
    description,
    images: [
      {
        url: "/ember-logo.png",
        width: 977,
        height: 814,
        alt: "Ember Systems logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/ember-logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Ember Systems",
      url: siteUrl,
      logo: `${siteUrl}/ember-logo.png`,
      email: "hello@goembersystems.com",
      description,
      sameAs: [siteUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ember Systems",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Ember Systems",
      url: siteUrl,
      image: `${siteUrl}/ember-logo.png`,
      description,
      areaServed: "United States",
      serviceType: [
        "AI automation",
        "Custom software development",
        "Business websites",
        "Internal dashboards",
        "Lead capture systems",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
        <GoogleAnalyticsPlaceholder />
        {children}
      </body>
    </html>
  );
}
