"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <a
      href="#"
      className="focus-ring fixed bottom-5 right-5 z-40 inline-flex size-11 items-center justify-center rounded-md border border-line bg-cloud text-ink shadow-lg transition hover:bg-white"
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" />
    </a>
  );
}
