import { certifications } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { IconBadge, SectionHeading } from "@/components/ui";

export function CertificationsSection() {
  return (
    <section className="section-shell py-20">
      <Reveal>
        <SectionHeading eyebrow="Certifications" title="Certifications" />
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {certifications.map((certification) => (
          <Reveal key={certification.name}>
            <a href={certification.credential} className="focus-ring block rounded-lg border border-line bg-white/[0.04] p-6 transition hover:border-aqua/50">
              <IconBadge icon={certification.icon} />
              <h3 className="mt-5 text-lg font-semibold text-cloud">{certification.name}</h3>
              <p className="mt-2 text-sm text-mist">{certification.issuer}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-aqua">{certification.date}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
