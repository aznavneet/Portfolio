import { MotionCard, Reveal } from "@/components/motion";
import { IconBadge, SectionHeading } from "@/components/ui";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-line bg-white/[0.025] py-20">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Cloud, platform, delivery, and reliability toolkit.">
            Categorized for fast recruiter scanning while still reflecting the operational surface area of modern DevOps work.
          </SectionHeading>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <MotionCard key={group.title} delay={index * 0.05} className="rounded-lg border border-line bg-ink/60 p-5">
              <IconBadge icon={group.icon} />
              <h3 className="mt-5 text-base font-semibold text-cloud">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-line bg-white/[0.045] px-2.5 py-1.5 text-xs text-mist">
                    {skill}
                  </span>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
