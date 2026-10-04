"use client";

import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const THREE = await import("three");
      const BIRDS = (await import("vanta/dist/vanta.birds.min")).default;

      if (cancelled || !containerRef.current) return;

      effect = BIRDS({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,

        // Matched to OpsPortal theme
        backgroundColor: 0x020617, // slate-950
        color1: 0x6366f1,          // indigo-500
        color2: 0xc084fc,          // purple-400
        colorMode: "variance",
        birdSize: 1.1,
        wingSpan: 25,
        speedLimit: 4,
        separation: 30,
        alignment: 25,
        cohesion: 25,
        quantity: 3,               // lower = subtler, better performance
      });
    })();

    return () => {
      cancelled = true;
      effect?.destroy();
    };
  }, []);

  return (
    <>
      {/* Vanta canvas */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="fixed inset-0 -z-20"
      />
      {/* Soft overlay so text stays readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/70"
      />
    </>
  );
}