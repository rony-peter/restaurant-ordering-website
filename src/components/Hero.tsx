"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, CheckCircle2, Clock, Play, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTicket, setActiveTicket] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal using explicit fromTo
      gsap.fromTo(
        ".hero-reveal",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      // Hero visual tilt effect
      gsap.fromTo(
        ".hero-visual",
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const mockTickets = [
    { id: "#1042", table: "Table 04", items: ["2x Wagyu Burger", "1x Truffle Fries", "2x Iced Tea"], status: "Preparing", time: "2m ago", total: "₹1,850" },
    { id: "#1043", table: "Table 12", items: ["1x Margherita Pizza", "1x Caesar Salad"], status: "Ready", time: "1m ago", total: "₹790" },
    { id: "#1044", table: "Table 08", items: ["3x Spicy Ramen", "3x Matcha Latte"], status: "New", time: "Just now", total: "₹1,240" },
  ];

  return (
    <section ref={containerRef} className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Ambient Blurred Refraction Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-ambient" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/15 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>QR Ordering & KDS Software for Indian Restaurants</span>
          </div>

          <h1 className="hero-reveal text-display font-extrabold text-white tracking-tight">
            Streamline Kitchens. <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
              Accelerate Table Turnover.
            </span>
          </h1>

          <p className="hero-reveal text-base md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The unified platform combining contactless QR ordering, sub-second Kitchen Display Systems (KDS), and live revenue intelligence.
          </p>

          <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-full shadow-2xl shadow-indigo-500/30 transition-all flex items-center justify-center gap-3 border border-white/20 group"
            >
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#bento"
              className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/10 text-slate-200 font-semibold rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />
              <span>Explore Interactive Product</span>
            </a>
          </div>

          <div className="hero-reveal flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No payment details needed
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 5-minute setup
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> POS compatibility
            </span>
          </div>
        </div>

        {/* Code-Built Interactive KDS / Product Visual */}
        <div className="hero-visual mt-16 max-w-5xl mx-auto glass-panel rounded-3xl p-4 md:p-6 shadow-2xl relative border border-white/15">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-300 font-bold">OpsPortal KDS • Station #01 (Main Kitchen)</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-emerald-400">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> WebSocket Connected
              </span>
              <span className="text-slate-400">Latency: 12ms</span>
            </div>
          </div>

          {/* Interactive KDS Ticket Feed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            {mockTickets.map((ticket, idx) => (
              <div
                key={ticket.id}
                onClick={() => setActiveTicket(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                  activeTicket === idx
                    ? "bg-slate-900/90 border-indigo-500 shadow-xl shadow-indigo-500/10 scale-[1.02]"
                    : "bg-slate-950/50 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-indigo-400">{ticket.id}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                      ticket.status === "Ready"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : ticket.status === "Preparing"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-2">{ticket.table}</div>
                <ul className="space-y-1 mb-4 text-xs text-slate-300">
                  {ticket.items.map((item, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {ticket.time}
                  </span>
                  <span className="font-bold text-white">{ticket.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}