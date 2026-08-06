"use client";

import { useRef, useEffect, useState } from "react";

interface FadeInProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  threshold?: number;
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "li" | "ul" | "article" | "aside" | "main" | "header" | "footer" | "nav";
  style?: React.CSSProperties;
  id?: string;
  role?: string;
  "data-testid"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 20,
  once = true,
  threshold = 0.1,
  as: Tag = "div",
  style,
  id,
  ...rest
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "-20px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: "none",
  };

  // Safety net: a pure-CSS animation forces the content visible even if
  // JavaScript never runs (blocked, failed, or stalled hydration). The
  // IntersectionObserver reveal above normally wins first; this only kicks
  // in when it can't. Never remove — prevents blank pages without JS.
  const FALLBACK_DELAY_S = 1.5;

  const inlineStyle: React.CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : translateMap[direction],
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    animation: isVisible
      ? "none"
      : `fadein-reveal-fallback ${duration}s ease-out ${FALLBACK_DELAY_S + delay}s forwards`,
    willChange: "opacity, transform",
  };

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={inlineStyle}
      data-fadein=""
      id={id}
      {...rest}
    >
      {children}
    </Tag>
  );
}
