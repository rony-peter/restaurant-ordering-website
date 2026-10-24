"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QrCode, Monitor, BarChart3, ShieldCheck, Zap, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-header",
        { y: 35, opacity: 0 },
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
        ".bento-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="bento" ref={containerRef} className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bento-header text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
            Built For High-Velocity Kitchens
          </p>
          <h2 className="text-section font-extrabold text-white tracking-tight">
            QR ordering, KDS and analytics in one restaurant platform.
          </h2>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Smart QR Ordering */}
          <div className="bento-card md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Smart QR Table Ordering</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Customers scan, browse visual menus, customize orders, and pay instantly without waiting for waitstaff.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                <Smartphone className="w-4 h-4" /> Zero App Downloads Required
              </div>
            </div>
          </div>

          {/* Card 2: Kitchen Display System */}
          <div className="bento-card glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Kitchen Display (KDS)</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Real-time synchronization between front-of-house and cooks. Eliminate lost paper tickets.
            </p>
            <div className="px-3 py-2 bg-slate-950/80 rounded-xl border border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" /> Sub-second Latency
            </div>
          </div>

          {/* Card 3: Live Revenue Analytics */}
          <div className="bento-card glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Live Revenue Analytics</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Track top-selling dishes, peak dining hours, average ticket size, and staff efficiency.
            </p>
            <div className="text-2xl font-extrabold text-white flex items-center gap-2">
              +28% <span className="text-xs text-slate-400 font-normal">Avg. Revenue Increase</span>
            </div>
          </div>

          {/* Card 4: Role-Based Access */}
          <div className="bento-card md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-md">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Role-Based Staff Access</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Provision custom sub-accounts for Cooks, Managers, and Admins with strict role permissions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-xl">
                  ADMIN
                </span>
                <span className="px-3.5 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold rounded-xl">
                  MANAGER
                </span>
                <span className="px-3.5 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-xl">
                  COOK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}