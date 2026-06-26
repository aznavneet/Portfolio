"use client";

import { Command, Github, Linkedin, Menu, Moon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Navbar({ onCommand }: { onCommand: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/78 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="#" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex size-9 items-center justify-center rounded-md border border-line bg-white/[0.06] font-mono text-sm font-bold text-aqua">
            NB
          </span>
          <span className="hidden text-sm font-semibold text-cloud sm:block">{profile.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm text-mist transition hover:bg-white/[0.055] hover:text-cloud"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-line bg-white/[0.045] text-mist transition hover:text-cloud"
            aria-label="Open command palette"
            onClick={onCommand}
          >
            <Command className="size-4" />
          </button>
          <Link
            href={profile.github}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-line bg-white/[0.045] text-mist transition hover:text-cloud"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </Link>
          <Link
            href={profile.linkedin}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-line bg-white/[0.045] text-mist transition hover:text-cloud"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </Link>
          <span
            className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-white/[0.025] text-mist"
            aria-label="Dark theme enabled"
            title="Dark theme"
          >
            <Moon className="size-4" />
          </span>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-line bg-white/[0.045] text-cloud lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={cn("section-shell grid lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-sm text-mist hover:bg-white/[0.055] hover:text-cloud"
              >
                {item.label}
              </Link>
            ))}
            <Button href={`mailto:${profile.email}`} variant="primary" className="mt-2">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
