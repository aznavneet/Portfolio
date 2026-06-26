import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-mist">
          Built with Next.js, Tailwind CSS, TypeScript, and deployed on Vercel.
        </p>
        <div className="flex items-center gap-2">
          <Link href={`mailto:${profile.email}`} className="focus-ring rounded-md p-2 text-mist hover:bg-white/[0.06] hover:text-cloud" aria-label="Email">
            <Mail className="size-4" />
          </Link>
          <Link href={profile.github} className="focus-ring rounded-md p-2 text-mist hover:bg-white/[0.06] hover:text-cloud" aria-label="GitHub">
            <Github className="size-4" />
          </Link>
          <Link href={profile.linkedin} className="focus-ring rounded-md p-2 text-mist hover:bg-white/[0.06] hover:text-cloud" aria-label="LinkedIn">
            <Linkedin className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
