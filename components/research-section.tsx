import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { IconBadge, SectionHeading } from "@/components/ui";
import { researchPapers } from "@/data/portfolio";

export function ResearchSection() {
  return (
    <section id="research" className="section-shell py-20">
      <Reveal>
        <SectionHeading eyebrow="Research" title="Published cloud security research.">
          Research contributions covering hybrid cloud, Google Cloud Platform, and Azure security practices.
        </SectionHeading>
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {researchPapers.map((paper) => (
          <Reveal key={paper.title}>
            <a
              href={paper.href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring group flex h-full flex-col rounded-lg border border-line bg-white/[0.04] p-6 transition hover:border-aqua/50"
            >
              <div className="flex items-start justify-between gap-4">
                <IconBadge icon={paper.icon} />
                <ArrowUpRight className="size-5 shrink-0 text-mist transition group-hover:text-cloud" />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-7 text-cloud">{paper.title}</h3>
              <p className="mt-3 text-sm text-mist">{paper.publisher}</p>
              <div className="mt-auto pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-aqua">{paper.date}</p>
                <p className="mt-3 text-sm text-mist">{paper.topic}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
