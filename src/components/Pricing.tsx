"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Sparkles } from "lucide-react";
import { selectPlan } from "@/components/Contact";

gsap.registerPlugin(ScrollTrigger);

// Prices are in INR per outlet, exclusive of 18% GST.
// priceAnnual is the effective per-month rate when billed annually (20% off).
const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnnual, setIsAnnual] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".pricing-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: "FREE",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "Ideal for single-location cafes testing digital QR ordering.",
      features: ["5 Active Tables", "20 Menu Items", "Basic QR Ordering", "1 Staff Account"],
      cta: "Get Started Free",
      contactPlan: "free",
      note: "Free forever",
      popular: false,
    },
    {
      name: "BASIC",
      priceMonthly: 499,
      priceAnnual: 399,
      description: "Perfect for growing bistros needing live Kitchen Display (KDS).",
      features: ["15 Active Tables", "100 Menu Items", "Real-Time KDS Feed", "3 Staff Accounts", "Standard Analytics"],
      cta: "Start 14-Day Free Trial",
      contactPlan: "trial-basic",
      popular: false,
    },
    {
      name: "PRO",
      priceMonthly: 1999,
      priceAnnual: 1599,
      description: "Our complete suite for busy restaurants scaling operations.",
      features: [
        "Unlimited Tables",
        "Unlimited Menu Items",
        "Advanced AI Revenue Analytics",
        "Unlimited Staff Roles",
        "Razorpay & Payment Gateway Integration",
        "Priority 24/7 Support",
      ],
      cta: "Start 14-Day Free Trial",
      contactPlan: "trial-pro",
      popular: true,
    },
    {
      name: "ENTERPRISE",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      description: "Tailored for multi-branch chains & franchises.",
      features: [
        "Multi-Location Centralized POS",
        "Custom API Integrations",
        "Dedicated Account Manager",
        "Custom SLAs & Onsite Setup",
      ],
      cta: "Contact Sales",
      contactPlan: "enterprise",
      note: "Tailored quote",
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={containerRef} className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pricing-header text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
            Transparent Pricing
          </p>
          <h2 className="text-section font-extrabold text-white tracking-tight">
            Restaurant software plans for every stage of growth.
          </h2>

          <div className="mt-8 inline-flex items-center gap-3 p-1.5 glass-pill rounded-full border border-white/15">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all ${
                !isAnnual ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all flex items-center gap-2 ${
                isAnnual ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] rounded-full font-bold border border-emerald-500/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const isPaid =
              typeof plan.priceMonthly === "number" && plan.priceMonthly > 0;

            return (
              <div
                key={plan.name}
                className={`pricing-card p-8 rounded-3xl flex flex-col justify-between relative transition-all ${
                  plan.popular
                    ? "glass-panel border-indigo-500/60 shadow-2xl shadow-indigo-500/20 scale-105 z-10"
                    : "glass-panel hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[11px] font-extrabold rounded-full shadow-md flex items-center gap-1 border border-white/20">
                    <Sparkles className="w-3 h-3" /> MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6 min-h-[36px]">{plan.description}</p>

                  <div className="mb-6">
                    <div>
                      <span className="text-4xl font-extrabold text-white">
                        {typeof plan.priceMonthly === "number"
                          ? formatINR(
                              (isAnnual ? plan.priceAnnual : plan.priceMonthly) as number
                            )
                          : plan.priceMonthly}
                      </span>
                      {typeof plan.priceMonthly === "number" && (
                        <span className="text-xs text-slate-400">
                          {" "}
                          / month{isPaid ? " + GST" : ""}
                        </span>
                      )}
                    </div>
                    {/* Reserved height keeps the cards aligned when toggling billing */}
                    <p className="text-[11px] text-slate-500 mt-1 min-h-[32px]">
                      {isPaid
                        ? `${
                            isAnnual
                              ? `Billed ${formatINR((plan.priceAnnual as number) * 12)} per year`
                              : "Billed monthly"
                          } after your 14-day free trial`
                        : plan.note}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 border-t border-white/10 pt-6">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={() => selectPlan(plan.contactPlan)}
                  className={`w-full py-3 text-center text-xs font-bold rounded-full transition-all ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border border-white/20"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-10 max-w-2xl mx-auto leading-relaxed">
          Every paid plan starts with a 14-day free trial. We don&rsquo;t collect payments on this
          website; our team will contact you to set up your subscription before the trial ends.
          All prices are in INR, per outlet, and exclusive of 18% GST.
        </p>
      </div>
    </section>
  );
}