import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to handle image imports from Vite (string) to Next.js (object or string)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getImageSrc(image: any): string {
  if (!image) return "";
  if (typeof image === "string") return image;
  return image.src || "";
}
