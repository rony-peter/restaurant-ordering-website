"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 14-day free trial work?",
      a: "Send us your details through the contact form and we'll set up your trial. You can use the plan you chose for 14 days. We don't collect any payment details on this website. Before the trial ends, our team will get in touch to help you pick a plan and start your subscription.",
    },
    {
      q: "What happens after the trial ends?",
      a: "We'll contact you before the 14 days are up. If you'd like to continue, we'll help you start a subscription. If not, you can move to the Free plan, which has no time limit.",
    },
    {
      q: "Do hardware installations require specialized POS devices?",
      a: "No. OpsPortal runs on standard iPads, Android tablets, desktop browsers, or your existing kitchen receipt printers without proprietary hardware lock-in.",
    },
    {
      q: "How does the QR table ordering system handle table assignment?",
      a: "Each table receives a unique encrypted QR code. When scanned, orders automatically bind to that specific table number on the Kitchen Display System.",
    },
    {
      q: "Can I customize menu items, modifiers, and daily stock availability?",
      a: "Yes. Restaurant managers can disable sold-out dishes instantly from the admin portal, reflecting live across all customer QR menus in real time.",
    },
    {
      q: "Is payment gateway integration included in all plans?",
      a: "Integrated payment processing through Razorpay is available on the Pro and Enterprise plans, allowing diners to pay directly from their phones.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/15 text-xs font-semibold text-indigo-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-section font-extrabold text-white tracking-tight">
            Got Questions? We’ve Got Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl overflow-hidden transition-all border border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-white text-base hover:text-indigo-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-10">
          Still have a question?{" "}
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
            Send us a message
          </a>
          .
        </p>
      </div>
    </section>
  );
}