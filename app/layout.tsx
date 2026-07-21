import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const title = "Ember Systems | AI Automation, Custom Software & Business Websites";
const description =
  "Ember Systems builds AI automation, custom software, business websites, internal dashboards, and workflow systems that help contractors and growing businesses save time and grow faster.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
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
    "AI automation",
    "business automation",
    "contractor software",
    "dashboards",
    "business websites",
    "custom software",
    "workflow automation",
    "lead capture systems",
    "internal dashboards",
    "AI chatbots",
    "small business software",
    "Ember Systems",
  ],
  authors: [{ name: "Ember Systems", url: siteUrl }],
  creator: "Ember Systems",
  publisher: "Ember Systems",
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
