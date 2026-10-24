"use client";

import React, { useEffect, useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";

// Lets other components (e.g. Pricing) preselect a plan in the form.
export const PLAN_EVENT = "opsportal:select-plan";

export function selectPlan(value: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PLAN_EVENT, { detail: value }));
}

const PLAN_OPTIONS = [
  { value: "trial-basic", label: "14-day free trial: Basic" },
  { value: "trial-pro", label: "14-day free trial: Pro" },
  { value: "free", label: "Free plan" },
  { value: "enterprise", label: "Enterprise / multiple outlets" },
  { value: "question", label: "General question" },
];

const inputClass =
  "w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors";
const labelClass = "block text-xs font-semibold text-slate-300 mb-1.5";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [plan, setPlan] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const value = (e as CustomEvent<string>).detail;
      if (PLAN_OPTIONS.some((o) => o.value === value)) setPlan(value);
    };
    window.addEventListener(PLAN_EVENT, handler);
    return () => window.removeEventListener(PLAN_EVENT, handler);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never tick this hidden box.
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    const accessKey = process.env.WEB3FORMS_KEY;
    if (!accessKey) {
      setErrorMsg("The contact form isn't configured yet. Please try again later.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const planLabel = PLAN_OPTIONS.find((o) => o.value === plan)?.label ?? plan;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `OpsPortal enquiry: ${planLabel} (${data.get("restaurant")})`,
          from_name: "OpsPortal Website",
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          restaurant: data.get("restaurant"),
          interested_in: planLabel,
          message: data.get("message"),
        }),
      });
      const result = await res.json();

      if (result.success) {
        setSubmittedName(String(data.get("name") ?? ""));
        setStatus("success");
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left: what happens next */}
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/15 text-xs font-semibold text-indigo-300 mb-4">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-section font-extrabold text-white tracking-tight mb-4">
            Try OpsPortal free for 14 days.
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-8">
            Tell us about your restaurant and we&rsquo;ll set up your trial. You can also use this
            form for questions or to talk to us about multiple outlets.
          </p>

          <ol className="space-y-5">
            {[
              ["Send your details", "Fill in the form with your restaurant name and contact number."],
              ["We set up your trial", "Our team gets in touch and helps you get your tables and menu live."],
              ["Choose a plan after 14 days", "If OpsPortal works for you, we'll help you start your subscription."],
            ].map(([title, text], i) => (
              <li key={title} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-xs text-slate-500 mt-8">
            No payment details are collected on this website.
          </p>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3 glass-panel rounded-3xl p-6 md:p-8 border border-white/10">
          {status === "success" ? (
            <div className="text-center py-10" role="status">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Thanks{submittedName ? `, ${submittedName}` : ""}. We&rsquo;ve got your request.
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Our team will get in touch with you soon.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setPlan("");
                }}
                className="px-6 py-2.5 text-xs font-bold rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-all"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              {/* Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Your name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Rahul Menon" />
                </div>
                <div>
                  <label htmlFor="restaurant" className={labelClass}>Restaurant name</label>
                  <input id="restaurant" name="restaurant" type="text" required className={inputClass} placeholder="Spice Route Café" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@restaurant.com" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
                  <input id="phone" name="phone" type="tel" required minLength={10} autoComplete="tel" className={inputClass} placeholder="98765 43210" />
                </div>
              </div>

              <div>
                <label htmlFor="plan" className={labelClass}>I&rsquo;m interested in</label>
                <select
                  id="plan"
                  name="plan"
                  required
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled>Select an option</option>
                  {PLAN_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Number of tables, outlets, or anything you'd like us to know."
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-xs text-rose-400">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30 border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? "Sending..." : "Send request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}