"use client";

import { useState } from "react";
import { BackToTop } from "@/components/back-to-top";
import { CommandPalette } from "@/components/command-palette";
import { Navbar } from "@/components/navbar";
import { ReadingProgress } from "@/components/reading-progress";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <Navbar onCommand={() => setCommandOpen(true)} />
      {children}
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <BackToTop />
    </>
  );
}
