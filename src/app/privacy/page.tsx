import React from "react";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | OpsPortal",
  description: "Learn how OpsPortal collects, processes, and secures restaurant and customer data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24 bg-slate-950 text-slate-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Top Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header Hero */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: March 2026 • Effective Date: March 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm leading-relaxed">
          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-indigo-400" /> 1. Information We Collect
            </h2>
            <p className="mb-4">
              OpsPortal collects information necessary to provide, optimize, and secure our restaurant management and digital ordering software.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Merchant Account Information:</strong> Name, business name, phone number, billing address, and email addresses provided during registration.
              </li>
              <li>
                <strong className="text-slate-200">Diner & Order Data:</strong> Items selected via QR menus, order timestamps, table identifiers, and non-sensitive payment receipts processed through integrated gateways.
              </li>
              <li>
                <strong className="text-slate-200">Device & Usage Analytics:</strong> IP addresses, browser types, session durations, and interaction logs captured for platform reliability.
              </li>
            </ul>
          </section>

          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-400" /> 2. How We Use Your Data
            </h2>
            <p className="mb-4">We process collected data to:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Power real-time Kitchen Display Systems (KDS) and POS synchronization.</li>
              <li>Process transactions via encrypted third-party payment gateways (Razorpay, Stripe).</li>
              <li>Generate aggregate sales, inventory, and staff performance analytics.</li>
              <li>Prevent fraud, enforce system security, and provide 24/7 technical support.</li>
            </ul>
          </section>

          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-400" /> 3. Data Protection & Security
            </h2>
            <p className="text-slate-400">
              We enforce enterprise-grade security protocols, including TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), and strict row-level security across database tenancies.
            </p>
          </section>

          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Integrations</h2>
            <p className="text-slate-400">
              OpsPortal integrates with third-party payment gateways and cloud infrastructure providers. We do not sell merchant or customer data to third-party ad networks under any circumstances.
            </p>
          </section>

          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
            <p className="text-slate-400">
              If you have questions regarding this Privacy Policy or wish to request data deletion, contact our privacy compliance team at{" "}
              <a href="mailto:privacy@opsportal.com" className="text-indigo-400 underline hover:text-indigo-300">
                privacy@opsportal.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}