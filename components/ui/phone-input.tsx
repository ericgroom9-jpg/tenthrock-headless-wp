"use client";

import { forwardRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type" | "value"> {
  value?: string;
  onChange?: (value: string) => void;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value: controlledValue, onChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState("");
    const displayValue = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        if (controlledValue === undefined) {
          setInternalValue(formatted);
        }
        onChange?.(formatted);
      },
      [controlledValue, onChange]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && displayValue.length > 0) {
          e.preventDefault();
          const digits = displayValue.replace(/\D/g, "");
          const newDigits = digits.slice(0, -1);
          const formatted = formatPhoneNumber(newDigits);
          if (controlledValue === undefined) {
            setInternalValue(formatted);
          }
          onChange?.(formatted);
        }
      },
      [displayValue, controlledValue, onChange]
    );

    return (
      <input
        ref={ref}
        type="tel"
        inputMode="numeric"
        value={displayValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter your phone number"
        className={cn(
          "w-full h-12 px-4 border rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 outline-none focus:ring-1 transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
