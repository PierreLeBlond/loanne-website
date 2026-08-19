import { twMerge } from 'tailwind-merge'
import clsx from "clsx";

export type Vector = {
  x: number;
  y: number;
};


export const dot = (v: Vector, w: Vector) => {
  return v.x * w.x + v.y * w.y;
};

export const norm = (v: Vector) => {
  return Math.sqrt(v.x * v.x + v.y * v.y);
};

export function cn(...inputs) {
  // Merge class names
  return twMerge(clsx(inputs));
}
