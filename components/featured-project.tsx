import { ArrowUpRight, Bell, BrainCircuit, Building2, GitBranch, Layers3, Rocket, Sparkles, Target } from "lucide-react";
import { ArchitectureMap } from "@/components/architecture-map";
import { MotionCard, Reveal } from "@/components/motion";
import { Button, SectionHeading } from "@/components/ui";
import { flagshipProject } from "@/data/portfolio";

export function FeaturedProject() {
  return (
    <section id="projects" className="border-y border-line bg-white/[0.025] py-20">
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
                <span className="font-mono text-xs text-mist">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-sm leading-6 text-cloud">{step}</p>
            </MotionCard>
          ))}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionCard className="rounded-lg border border-line bg-white/[0.035] p-5">
            <div className="flex items-center gap-3">
              <BrainCircuit className="size-5 text-aqua" />
              <h3 className="text-lg font-semibold text-cloud">Core capabilities</h3>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {flagshipProject.capabilities.map((capability) => (
                <div key={capability} className="rounded-md border border-line bg-ink/56 px-3 py-2 text-sm text-mist">
                  {capability}
                </div>
              ))}
            </div>
          </MotionCard>
          <MotionCard delay={0.06} className="rounded-lg border border-line bg-white/[0.035] p-5">
            <div className="flex items-center gap-3">
              <Sparkles className="size-5 text-amber" />
              <h3 className="text-lg font-semibold text-cloud">AI-generated intelligence</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {flagshipProject.aiOutputs.map((output) => (
                <div key={output.title} className="rounded-md border border-line bg-ink/56 p-4">
                  <h4 className="text-sm font-semibold text-cloud">{output.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-mist">{output.description}</p>
                </div>
              ))}
            </div>
          </MotionCard>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <MotionCard className="rounded-lg border border-line bg-white/[0.035] p-5">
            <div className="flex items-center gap-3">
              <Bell className="size-5 text-aqua" />
              <h3 className="text-lg font-semibold text-cloud">Developer experience</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {flagshipProject.deliveryChannels.map((channel) => (
                <span key={channel} className="rounded-md border border-line bg-ink/56 px-2.5 py-1.5 text-xs text-mist">
                  {channel}
                </span>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              {flagshipProject.notificationData.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-mist">
                  <GitBranch className="size-3.5 shrink-0 text-amber" />
                  {item}
                </div>
              ))}
            </div>
          </MotionCard>
          <MotionCard delay={0.05} className="rounded-lg border border-line bg-white/[0.035] p-5">
            <div className="flex items-center gap-3">
              <Target className="size-5 text-amber" />
              <h3 className="text-lg font-semibold text-cloud">Business value</h3>
            </div>
            <div className="mt-5 space-y-3">
              {flagshipProject.businessValue.map((item) => (
                <p key={item} className="text-sm leading-6 text-mist">
                  {item}
                </p>
              ))}
            </div>
          </MotionCard>
          <MotionCard delay={0.1} className="rounded-lg border border-line bg-white/[0.035] p-5">
            <div className="flex items-center gap-3">
              <Building2 className="size-5 text-aqua" />
              <h3 className="text-lg font-semibold text-cloud">Target market</h3>
            </div>
            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Platforms</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {flagshipProject.targetPlatforms.map((platform) => (
                  <span key={platform} className="rounded-md border border-line bg-ink/56 px-2.5 py-1.5 text-xs text-mist">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">Industries</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {flagshipProject.targetIndustries.map((industry) => (
                  <span key={industry} className="rounded-md border border-line bg-ink/56 px-2.5 py-1.5 text-xs text-mist">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </MotionCard>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <MotionCard className="rounded-lg border border-line bg-white/[0.035] p-5">
            <h3 className="text-lg font-semibold text-cloud">Future integrations</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {flagshipProject.futureIntegrations.map((integration) => (
                <span key={integration} className="rounded-md border border-line bg-ink/56 px-2.5 py-1.5 text-xs text-mist">
                  {integration}
                </span>
              ))}
            </div>
          </MotionCard>
          <MotionCard delay={0.06} className="rounded-lg border border-line bg-white/[0.035] p-5">
            <h3 className="text-lg font-semibold text-cloud">Roadmap</h3>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {flagshipProject.roadmap.map((phase) => (
                <div key={phase} className="rounded-md border border-line bg-ink/56 px-3 py-2 text-sm text-mist">
                  {phase}
                </div>
              ))}
            </div>
          </MotionCard>
        </div>
        <div className="mt-6 rounded-lg border border-line bg-white/[0.035] p-5">
          <div className="flex items-start gap-3">
            <GitBranch className="mt-1 size-5 shrink-0 text-amber" />
            <p className="text-sm leading-6 text-mist">{flagshipProject.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
