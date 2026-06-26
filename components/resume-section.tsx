import { Download } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Button, SectionHeading } from "@/components/ui";
import { profile } from "@/data/portfolio";

export function ResumeSection() {
  return (
    <section id="resume" className="border-y border-line bg-white/[0.025] py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading eyebrow="Resume" title="Interactive resume viewer with direct download.">
              Keep the resume in <span className="font-mono text-cloud">public/resume</span> and Vercel will serve it as a static asset.
            </SectionHeading>
            <Button href={profile.resumePath} variant="primary" className="mt-8">
              <Download className="size-4" />
              Download CV
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-[680px] overflow-hidden rounded-lg border border-line bg-ink/70">
              <iframe src={profile.resumePath} title="Navneet Bhardwaj resume" className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
