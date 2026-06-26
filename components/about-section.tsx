import { ShieldCheck, Terminal, Workflow } from "lucide-react";
import { Reveal } from "@/components/motion";
import { IconBadge, SectionHeading } from "@/components/ui";
import { profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-20">
      <Reveal>
        <SectionHeading eyebrow="About" title="Built around production infrastructure, not portfolio theater.">
          {profile.summary}
        </SectionHeading>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Workflow,
            title: "Delivery discipline",
            copy: "CI/CD, reviewable change, rollback thinking, and repeatable deployments are treated as first-class engineering concerns."
          },
          {
            icon: ShieldCheck,
            title: "Operational awareness",
            copy: "Infrastructure choices are framed around security, access control, monitoring, handover, and maintainability."
          },
          {
            icon: Terminal,
            title: "Automation mindset",
            copy: "Manual steps are converted into scripts, pipelines, and documented workflows wherever practical."
          }
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
            <div className="h-full rounded-lg border border-line bg-white/[0.04] p-6">
              <IconBadge icon={item.icon} />
              <h3 className="mt-5 text-lg font-semibold text-cloud">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
