import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

// Structured data. Keep the offers in sync with the prices shown in Pricing.tsx.
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: [
          { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR" },
          {
            "@type": "Offer",
            name: "Basic",
            price: "499",
            priceCurrency: "INR",
            description: "Per month, per outlet, excluding GST. 14-day free trial.",
          },
          {
            "@type": "Offer",
            name: "Pro",
            price: "1999",
            priceCurrency: "INR",
            description: "Per month, per outlet, excluding GST. 14-day free trial.",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}