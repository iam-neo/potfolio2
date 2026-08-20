"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
}

export function RevealText({
  children,
  as: Component = "span",
  className,
}: RevealTextProps) {
  return (
    <Component className={cn("inline-block font-display font-light text-balance", className)}>
      {children}
    </Component>
  );
}
