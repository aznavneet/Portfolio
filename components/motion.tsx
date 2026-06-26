"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
