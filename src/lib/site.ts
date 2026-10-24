// Single source of truth for site-wide SEO values.
// Set NEXT_PUBLIC_SITE_URL in .env.local / your hosting dashboard (e.g. https://www.yourdomain.com).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const SITE_NAME = "OpsPortal";
export const SITE_TITLE = "OpsPortal | QR Ordering, KDS & Restaurant POS Software in India";
export const SITE_DESCRIPTION =
  "QR table ordering, real-time Kitchen Display (KDS) and live revenue analytics for restaurants in India. Start a 14-day free trial. Plans from ₹499/month.";