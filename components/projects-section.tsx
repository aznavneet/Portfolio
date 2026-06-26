import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MotionCard, Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20">
      <Reveal>
        <SectionHeading eyebrow="Projects" title="Project cards with impact, stack, and links.">
          Static verified projects are shown here, while the GitHub section below fetches public repository data live.
        </SectionHeading>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <MotionCard key={project.title} delay={index * 0.07} className="rounded-lg border border-line bg-white/[0.04] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-cloud">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{project.description}</p>
              </div>
              <Link href={project.github} className="focus-ring rounded-md p-2 text-mist hover:bg-white/[0.06] hover:text-cloud" aria-label={`${project.title} GitHub`}>
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-cloud">{project.impact}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-md border border-line bg-white/[0.045] px-2.5 py-1.5 text-xs text-mist">
                  {tech}
                </span>
              ))}
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
