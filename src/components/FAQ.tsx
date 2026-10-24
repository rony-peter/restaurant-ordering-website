"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/faqs";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              <h3>
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-white text-base hover:text-indigo-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>
              {/* Always rendered (hidden when closed) so crawlers can read every answer */}
              <div
                id={`faq-panel-${idx}`}
                hidden={openIndex !== idx}
                className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3"
              >
                {faq.a}
              </div>
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