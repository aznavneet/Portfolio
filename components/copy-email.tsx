"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-white/[0.055] px-4 py-2 text-sm font-semibold text-cloud transition hover:bg-white/[0.09]"
    >
      {copied ? <Check className="size-4 text-aqua" /> : <Copy className="size-4" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
