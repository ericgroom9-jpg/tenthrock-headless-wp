"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ALASKA_MIN = 99500;
const ALASKA_MAX = 99999;
const HAWAII_MIN = 96700;
const HAWAII_MAX = 96899;

interface ZipCheckFormProps {
  placeholder?: string;
  buttonLabel?: string;
}

export default function ZipCheckForm({
  placeholder = "Enter Zip Code",
  buttonLabel = "Check Now",
}: ZipCheckFormProps) {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<"ok" | "no" | null>(null);

  function handleCheck(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = zip.trim();
    if (!/^\d{5}$/.test(trimmed)) {
      setResult("no");
      return;
    }
    const n = parseInt(trimmed, 10);
    const isExcluded =
      (n >= ALASKA_MIN && n <= ALASKA_MAX) ||
      (n >= HAWAII_MIN && n <= HAWAII_MAX);
    setResult(isExcluded ? "no" : "ok");
  }

  return (
    <form onSubmit={handleCheck} noValidate className="w-full max-w-lg">
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
        <Input
          type="text"
          inputMode="numeric"
          maxLength={5}
          autoComplete="postal-code"
          aria-label="ZIP code"
          data-testid="input-zip-check"
          placeholder={placeholder}
          value={zip}
          onChange={(e) => {
            setZip(e.target.value);
            if (result !== null) setResult(null);
          }}
          className="!bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 rounded-full px-6 text-lg focus-visible:ring-[#c5d520] flex-1 w-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        />
        <Button
          type="submit"
          size="lg"
          data-testid="button-zip-check"
          className="bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] shadow-[0_0_30px_rgba(197,213,32,0.3)] hover:shadow-[0_0_50px_rgba(197,213,32,0.5)] active:shadow-[0_0_50px_rgba(197,213,32,0.5)] transition-all duration-300 w-full sm:w-auto min-h-[52px] whitespace-nowrap rounded-full"
        >
          {buttonLabel}
        </Button>
      </div>
      <p
        role="status"
        aria-live="polite"
        data-testid="text-zip-check-result"
        className={`mt-6 min-h-[1.5rem] text-base font-medium text-left sm:text-center ${
          result === "ok"
            ? "text-[#c5d520]"
            : result === "no"
              ? "text-red-300"
              : ""
        }`}
      >
        {result === "ok"
          ? "We serve that area."
          : result === "no"
            ? "We don't serve that area."
            : ""}
      </p>
    </form>
  );
}
