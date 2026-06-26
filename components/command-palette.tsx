"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { commandItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }

      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onOpenChange, open]);

  const filtered = useMemo(() => {
    return commandItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 px-4 py-20 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="mx-auto max-w-xl overflow-hidden rounded-lg border border-line bg-[#0d1118] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Search className="size-4 text-mist" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-10 flex-1 bg-transparent text-sm text-cloud outline-none placeholder:text-mist"
            placeholder="Search actions"
            aria-label="Search actions"
          />
          <button
            type="button"
            className="focus-ring rounded-md p-2 text-mist hover:bg-white/[0.06] hover:text-cloud"
            onClick={() => onOpenChange(false)}
            aria-label="Close command palette"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="max-h-80 overflow-auto p-2">
          {filtered.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className="focus-ring flex items-center gap-3 rounded-md px-3 py-3 text-sm text-cloud transition hover:bg-white/[0.06]"
            >
              <item.icon className="size-4 text-aqua" />
              {item.label}
            </Link>
          ))}
          <p className={cn("px-3 py-6 text-center text-sm text-mist", filtered.length ? "hidden" : "block")}>
            No matching action.
          </p>
        </div>
      </div>
    </div>
  );
}
