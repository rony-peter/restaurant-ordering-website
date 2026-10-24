import React from "react";
import Link from "next/link";
import { Store } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white border border-white/20">
            <Store className="w-4 h-4" />
          </div>
          <span className="text-lg font-bold text-white">OpsPortal</span>
        </div>

        <p className="text-slate-500">
          © {new Date().getFullYear()} OpsPortal Inc. All rights reserved. Built for high-velocity dining.
        </p>

        <div className="flex items-center gap-6 font-semibold text-slate-300">
          <Link href="/#contact" className="hover:text-indigo-400 transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-indigo-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-indigo-400 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}