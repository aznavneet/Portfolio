import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-20">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Experience" />
      </Reveal>
      <div className="mt-12 space-y-6">
        {experience.map((item) => (
          <Reveal key={item.company}>
            <article className="relative rounded-lg border border-line bg-white/[0.04] p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-aqua">{item.duration}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-cloud">{item.role}</h3>
                  <p className="mt-1 text-sm text-mist">
                    {item.company} · {item.location}
                  </p>
                </div>
                <div className="flex max-w-xl flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-line bg-white/[0.045] px-2.5 py-1.5 text-xs text-mist">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                <li className="flex gap-3 text-sm leading-6 text-mist md:col-span-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-aqua" />
                  {item.summary}
                </li>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3 text-sm leading-6 text-mist">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-aqua" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
