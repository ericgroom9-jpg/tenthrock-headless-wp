"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { STATE_PATHS, MAP_PINS, MAP_VIEWBOX } from "@/components/shared/us-map-data";

const MAP_FILL = "#042940";
const BORDER_COLOR = "#FFFFFF";
const BORDER_WIDTH = 1;
const PIN_FILL = "#BAD656";
const PIN_DOT_FILL = "#042940";
const PIN_W = 19.8;
const PIN_H = 25.2;

const PIN_INTERVAL_S = 0.11;
const POP_DURATION_S = 0.45;

const TOOLTIP_FILL = "#042940";
const TOOLTIP_TEXT = "#FFFFFF";
const TOOLTIP_FONT_SIZE = 26;
const TOOLTIP_PAD_X = 14;
const TOOLTIP_PAD_Y = 9;
const TOOLTIP_GAP = 8;

function stateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function Pin({
  x,
  y,
  name,
  code,
  onHover,
  onLeave,
  activeCode,
  setActiveCode,
}: {
  x: number;
  y: number;
  name: string;
  code: string;
  onHover: (code: string) => void;
  onLeave: (code: string) => void;
  activeCode: string | null;
  setActiveCode: (code: string | null) => void;
}) {
  const router = useRouter();
  const href = `/locations/${stateSlug(name)}`;
  const lastPointerTypeRef = useRef<string>("mouse");
  const handleClick = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    // On touch devices, first tap reveals the tooltip; second tap navigates.
    if (lastPointerTypeRef.current === "touch" && activeCode !== code) {
      e.preventDefault();
      setActiveCode(code);
      onHover(code);
      return;
    }
    e.preventDefault();
    router.push(href);
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      onPointerDown={(e) => {
        lastPointerTypeRef.current = e.pointerType || "mouse";
      }}
      aria-label={`View locations and services in ${name}`}
      data-testid={`link-pin-${code}`}
      style={{ cursor: "pointer" }}
    >
      <g
        transform={`translate(${x - PIN_W / 2} ${y - PIN_H})`}
        role="img"
        aria-label={name}
        data-testid={`pin-${code}`}
        onPointerEnter={(e) => {
          if (e.pointerType !== "touch") onHover(code);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType !== "touch") onLeave(code);
        }}
        onFocus={() => onHover(code)}
        onBlur={() => onLeave(code)}
      >
        <path
          d="M11 0 C4.925 0 0 4.925 0 11 C0 14.5 1.7 17.5 4.5 19 L11 28 L17.5 19 C20.3 17.5 22 14.5 22 11 C22 4.925 17.075 0 11 0 Z"
          transform="scale(0.9)"
          fill={PIN_FILL}
          filter="url(#pin-shadow)"
        />
        <circle cx={PIN_W / 2} cy={9.9} r={3.6} fill={PIN_DOT_FILL} />
      </g>
    </a>
  );
}

export default function UsMapPinsAnimation() {
  const [hasStarted, setHasStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);
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

  const handleHover = (code: string) => setHoveredCode(code);
  const handleLeave = (code: string) => {
    setHoveredCode((prev) => (prev === code ? null : prev));
  };

  const hoveredPin = hoveredCode
    ? MAP_PINS.find((p) => p.code === hoveredCode)
    : null;

  return (
    <div
      ref={containerRef}
      data-testid="us-map-pins-animation"
      className="relative"
    >
      <svg
        viewBox={MAP_VIEWBOX}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Map of the contiguous United States with a pin in every state representing nationwide service coverage"
        className="w-full h-auto max-h-[60vh] block mx-auto"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
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
                <Pin
                  key={p.code}
                  x={p.x}
                  y={p.y}
                  name={p.name}
                  code={p.code}
                  onHover={handleHover}
                  onLeave={handleLeave}
                  activeCode={hoveredCode}
                  setActiveCode={setHoveredCode}
                />
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
                  transformOrigin: `${p.x}px ${p.y}px`,
                }}
              >
                <Pin
                  x={p.x}
                  y={p.y}
                  name={p.name}
                  code={p.code}
                  onHover={handleHover}
                  onLeave={handleLeave}
                  activeCode={hoveredCode}
                  setActiveCode={setHoveredCode}
                />
              </motion.g>
            ))}
          </g>
        )}

        {hoveredPin ? (
          <Tooltip x={hoveredPin.x} y={hoveredPin.y} name={hoveredPin.name} />
        ) : null}
      </svg>
    </div>
  );
}

function Tooltip({ x, y, name }: { x: number; y: number; name: string }) {
  const charW = TOOLTIP_FONT_SIZE * 0.58;
  const w = name.length * charW + TOOLTIP_PAD_X * 2;
  const h = TOOLTIP_FONT_SIZE + TOOLTIP_PAD_Y * 2;
  const tipY = y - PIN_H - TOOLTIP_GAP;
  const rectX = x - w / 2;
  const rectY = tipY - h;

  return (
    <g
      pointerEvents="none"
      data-testid={`tooltip-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <rect
        x={rectX}
        y={rectY}
        width={w}
        height={h}
        rx={4}
        ry={4}
        fill={TOOLTIP_FILL}
        opacity={0.95}
      />
      <text
        x={x}
        y={rectY + h / 2}
        fill={TOOLTIP_TEXT}
        fontSize={TOOLTIP_FONT_SIZE}
        fontWeight={600}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontFamily: "inherit" }}
      >
        {name}
      </text>
    </g>
  );
}
