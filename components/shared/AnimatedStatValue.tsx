"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatValueProps {
  value: string;
  duration?: number;
  triggerOnce?: boolean;
  className?: string;
}

export default function AnimatedStatValue({
  value,
  duration = 1800,
  triggerOnce = true,
  className,
}: AnimatedStatValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const startedRef = useRef(false);

  useEffect(() => {
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const prefix = match[1] ?? "";
    const target = parseFloat(match[2]);
    const suffix = match[3] ?? "";
    const decimals = (match[2].split(".")[1] || "").length;

    if (target <= 1) {
      setDisplay(value);
      return;
    }

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    setDisplay(`${prefix}0${decimals ? "." + "0".repeat(decimals) : ""}${suffix}`);

    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const current = target * easeOutCubic(t);
        setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDisplay(value);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            if (triggerOnce) {
              observer.disconnect();
              break;
            }
          } else if (!triggerOnce) {
            startedRef.current = false;
          }
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, duration, triggerOnce]);

  return (
    <span ref={ref} aria-label={value} data-testid="text-stat-value" className={className}>
      {display}
    </span>
  );
}
