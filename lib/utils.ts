import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names safely with tailwind-merge and clsx.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with leading zeroes for chapter/scene display (e.g. 1 -> "01")
 */
export function formatIndex(index: number, pad = 2): string {
  return String(index).padStart(pad, "0");
}
