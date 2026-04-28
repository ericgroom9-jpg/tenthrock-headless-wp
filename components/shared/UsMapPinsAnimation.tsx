"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATE_PATHS, MAP_PINS, MAP_VIEWBOX } from "@/components/shared/us-map-data";

const MAP_FILL = "#042940";
const BORDER_COLOR = "#FFFFFF";
const BORDER_WIDTH = 1;
const PIN_FILL = "#BAD656";
const PIN_DOT_FILL = "#042940";
const PIN_W = 13.2;
const PIN_H = 16.8;

const PIN_INTERVAL_S = 0.11;
const POP_DURATION_S = 0.45;

function Pin({ x, y, name }: { x: number; y: number; name: string }) {
  return (
    <g transform={`translate(${x - PIN_W / 2} ${y - PIN_H})`} aria-label={name}>
      <path
        d="M11 0 C4.9 0 0 4.9 0 11 c0 8.25 11 17 11 17 s11 -8.75 11 -17 C22 4.9 17.1 0 11 0 z"
        transform="scale(0.6)"
        fill={PIN_FILL}
        filter="url(#pin-shadow)"
      />
      <circle cx={PIN_W / 2} cy={6.6} r={2.4} fill={PIN_DOT_FILL} />
    </g>
  );
}

export default function UsMapPinsAnimation() {
  const [hasStarted, setHasStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} data-testid="us-map-pins-animation">
      <svg
        viewBox={MAP_VIEWBOX}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Map of the contiguous United States with a pin in every state representing nationwide service coverage"
        className="w-full h-auto block"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" />
            <feOffset dx="0" dy="0.6" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.45" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g>
          {STATE_PATHS.map((p, i) => (
            <path
              key={`${p.c}-${i}`}
              d={p.d}
              fill={MAP_FILL}
              stroke={BORDER_COLOR}
              strokeWidth={BORDER_WIDTH}
              strokeLinejoin="round"
            />
          ))}
        </g>

        {reducedMotion || !hasStarted ? (
          hasStarted ? (
            <g>
              {MAP_PINS.map((p) => (
                <Pin key={p.code} x={p.x} y={p.y} name={p.name} />
              ))}
            </g>
          ) : null
        ) : (
          <g>
            {MAP_PINS.map((p, i) => (
              <motion.g
                key={p.code}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: POP_DURATION_S,
                  delay: i * PIN_INTERVAL_S,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "50% 100%",
                }}
              >
                <Pin x={p.x} y={p.y} name={p.name} />
              </motion.g>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}
