import React from "react";
import Link from "next/link";
import { FileCheck, ShieldAlert, CreditCard, Scale, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | OpsPortal",
  description: "Read the OpsPortal Software-as-a-Service terms, SLAs, and operational rules.",
};

export default function TermsOfServicePage() {
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
            <FileCheck className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: March 2026 • Effective Date: March 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm leading-relaxed">
          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-400" /> 1. Operational Agreement
            </h2>
            <p className="text-slate-400">
              By registering an account on OpsPortal, subscribing to any service plan, or enabling QR table ordering inside your establishment, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-indigo-400" /> 2. Subscriptions & Billing
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Billing Cycles:</strong> Paid plans (Basic, Pro) are billed monthly or annually in advance.
              </li>
              <li>
                <strong className="text-slate-200">Free Trial:</strong> Trial accounts automatically expire after 14 days unless upgraded to a paid tier.
              </li>
              <li>
                <strong className="text-slate-200">Cancellations:</strong> Subscriptions can be canceled at any time from the account dashboard without lock-in penalties.
              </li>
            </ul>
          </section>

          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-indigo-400" /> 3. Service Level & Availability
            </h2>
            <p className="text-slate-400 mb-4">
              OpsPortal targets a 99.9% uptime SLA for critical order processing and Kitchen Display System feeds. Scheduled system maintenance is conducted during off-peak hours with prior merchant notification.
            </p>
          </section>

          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3">4. Merchant Responsibilities</h2>
            <p className="text-slate-400">
              Merchants are responsible for maintaining secure login credentials for their staff accounts, keeping menu pricing accurate, and managing customer refund requests processed through their linked payment gateways.
            </p>
          </section>

          <section className="bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-3">5. Termination</h2>
            <p className="text-slate-400">
              We reserve the right to suspend or terminate access to accounts found engaged in fraudulent transactions, security exploitation, or systemic abuse of platform resources.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}