import React from "react";
import { cn } from "@/lib/utils";

export interface MonoLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted" | "subtle";
  size?: "xs" | "sm" | "md";
  dot?: boolean;
}

export function MonoLabel({
  children,
  variant = "default",
  size = "sm",
  dot = false,
  className,
  ...props
}: MonoLabelProps) {
  const sizeClasses = {
    xs: "text-[10px] tracking-widest py-0.5 px-1.5",
    sm: "text-xs tracking-wider py-1 px-2.5",
    md: "text-sm tracking-wide py-1.5 px-3",
  }[size];

  const variantClasses = {
    default: "bg-[#14151c] text-[#a8abbf] border border-[#222430]",
    accent: "bg-[#251b14] text-[#e09673] border border-[#482c1e]",
    muted: "bg-[#101116] text-[#717485] border border-[#1b1c24]",
    subtle: "text-[#8e91a2] bg-transparent p-0 border-0",
  }[variant];

  return (
    <span
      className={cn(
        "font-mono uppercase inline-flex items-center gap-1.5 font-medium rounded-sm select-none transition-colors",
        sizeClasses,
        variantClasses,
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full inline-block",
            variant === "accent" ? "bg-[#d9825b] animate-pulse" : "bg-[#5c5e6f]"
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
