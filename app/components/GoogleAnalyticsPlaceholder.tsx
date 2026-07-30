import Script from "next/script";

/**
 * Google Analytics placeholder.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. G-XXXXXXXX) to enable.
 */
export default function GoogleAnalyticsPlaceholder() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-placeholder" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
