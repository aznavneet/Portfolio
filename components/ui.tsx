import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = PropsWithChildren<{
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}> &
  ComponentPropsWithoutRef<"a">;

export function Button({ href = "#", variant = "secondary", className, children, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition",
        variant === "primary" && "bg-cloud text-ink hover:bg-white",
        variant === "secondary" && "border border-line bg-white/[0.055] text-cloud hover:bg-white/[0.09]",
        variant === "ghost" && "text-mist hover:bg-white/[0.06] hover:text-cloud",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children
}: PropsWithChildren<{ eyebrow: string; title: string }>) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-aqua">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold text-cloud sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-mist">{children}</p> : null}
    </div>
  );
}

export function IconBadge({ icon: Icon, className }: { icon: ElementType; className?: string }) {
  return (
    <span className={cn("inline-flex size-10 items-center justify-center rounded-md border border-line bg-white/[0.055]", className)}>
      <Icon className="size-5 text-aqua" aria-hidden="true" />
    </span>
  );
}
