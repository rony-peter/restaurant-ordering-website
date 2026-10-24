"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Store, Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Product", href: "/#bento", id: "bento" },
  { name: "Pricing", href: "/#pricing", id: "pricing" },
  { name: "FAQ", href: "/#faq", id: "faq" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scroll detection for sticky navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy: Track home page sections only when on "/"
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out overflow-hidden ${
        isScrolled
          ? "top-0 w-full rounded-b-3xl border-b border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15)]"
          : mobileMenuOpen
          ? "top-4 max-w-7xl mx-4 md:mx-auto rounded-3xl border border-white/15 bg-slate-950/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.3)]"
          : "top-4 max-w-7xl mx-4 md:mx-auto rounded-full border border-white/15 bg-gradient-to-b from-white/10 via-slate-900/40 to-slate-950/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.3)]"
      }`}
    >
      {/* Liquid Glass Specular Glow */}
      <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-60 blur-xl" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform border border-white/20">
            <Store className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            OpsPortal
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === "/" && activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => {
                  if (pathname === "/") {
                    setActiveSection(item.id);
                  }
                }}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"
                }`}
              >
                {/* Active Liquid Glass Bubble (Home page only) */}
                {isActive && (
                  <motion.div
                    layoutId="activeLiquidBubble"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-white/15 to-violet-500/30 border border-white/30 shadow-[0_0_20px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.5)] backdrop-blur-md pointer-events-none"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2 hover:gap-3 border border-white/20"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-10 border-t border-white/10 px-8 py-6 space-y-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === "/" && activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    if (pathname === "/") {
                      setActiveSection(item.id);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-indigo-500/20 text-white border border-indigo-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-indigo-500/25 border border-white/20"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}