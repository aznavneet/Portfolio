import { ArrowUpRight, GitBranch, Layers3, Rocket } from "lucide-react";
import { ArchitectureMap } from "@/components/architecture-map";
import { MotionCard, Reveal } from "@/components/motion";
import { Button, SectionHeading } from "@/components/ui";
import { flagshipProject } from "@/data/portfolio";

export function FeaturedProject() {
  return (
    <section className="border-y border-line bg-white/[0.025] py-20">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow={flagshipProject.kicker} title={flagshipProject.title}>
            {flagshipProject.problem}
          </SectionHeading>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="rounded-lg border border-line bg-ink/64 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-white/[0.055]">
                  <Layers3 className="size-5 text-aqua" />
                </span>
                <h3 className="text-xl font-semibold text-cloud">System design narrative</h3>
              </div>
              <p className="mt-5 text-sm leading-6 text-mist">{flagshipProject.value}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {flagshipProject.stack.map((item) => (
                  <span key={item} className="rounded-md border border-line bg-white/[0.045] px-2.5 py-1.5 text-xs text-mist">
                    {item}
                  </span>
                ))}
              </div>
              <Button href="https://github.com/aznavneet" className="mt-7">
                GitHub repositories
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ArchitectureMap />
          </Reveal>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {flagshipProject.workflow.map((step, index) => (
            <MotionCard key={step} delay={index * 0.04} className="rounded-lg border border-line bg-ink/64 p-4">
              <div className="mb-4 flex items-center justify-between">
                <Rocket className="size-4 text-aqua" />
                <span className="font-mono text-xs text-mist">0{index + 1}</span>
              </div>
              <p className="text-sm leading-6 text-cloud">{step}</p>
            </MotionCard>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-line bg-white/[0.035] p-5">
          <div className="flex items-start gap-3">
            <GitBranch className="mt-1 size-5 shrink-0 text-amber" />
            <p className="text-sm leading-6 text-mist">
              Add PRISM documentation, screenshots, and repository URL to replace this verified slot with the complete case study.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
