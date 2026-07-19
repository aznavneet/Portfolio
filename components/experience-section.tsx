import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";

type ExperienceEngagement = {
  client: string;
  role: string;
  responsibilities: string[];
  technologies: string[];
};

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  engagements?: ExperienceEngagement[];
  responsibilities?: string[];
  technologies?: string[];
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-20">
      <Reveal>
        <SectionHeading eyebrow="Professional Experience" title="Professional Experience" />
      </Reveal>
      <div className="mt-10 grid gap-5">
        {(experience as ExperienceItem[]).map((item) => {
          const engagements = item.engagements ?? [
            {
              client: item.company,
              role: item.role,
              responsibilities: item.responsibilities ?? [],
              technologies: item.technologies ?? []
            }
          ];

          return (
            <Reveal key={item.company}>
              <article className="relative rounded-lg border border-line bg-white/[0.04] p-6 sm:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-aqua">{item.duration}</p>
                    <h3 className="mt-3 text-xl font-semibold text-cloud sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-sm leading-6 text-mist">
                      {item.company} · {item.location}
                    </p>
                    {item.summary ? (
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-mist">{item.summary}</p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {engagements.map((engagement) => (
                    <div key={`${item.company}-${engagement.client}`} className="rounded-lg border border-line bg-white/[0.03] p-5">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-aqua">Client</p>
                          <h4 className="mt-2 text-lg font-semibold text-cloud">{engagement.client}</h4>
                          <p className="mt-1 text-sm leading-6 text-mist">{engagement.role}</p>
                        </div>
                        <div className="flex max-w-xl flex-wrap gap-2">
                          {engagement.technologies.map((tech) => (
                            <span key={tech} className="rounded-md border border-line bg-white/[0.045] px-2.5 py-1.5 text-xs text-mist">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul className="mt-5 grid gap-3 md:grid-cols-2">
                        {engagement.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="flex gap-3 text-sm leading-6 text-mist">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-aqua" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
