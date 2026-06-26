import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { ArchitectureMap } from "@/components/architecture-map";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui";
import { metrics, profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-20">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-md border border-line bg-white/[0.045] px-3 py-2 font-mono text-xs text-aqua">
          <span className="size-2 rounded-full bg-aqua" />
          Available for Cloud, DevOps, Platform and SRE roles
        </div>
        <h1 className="mt-6 text-balance text-5xl font-semibold tracking-normal text-cloud sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-aqua">{profile.title}</p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">{profile.headline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={profile.resumePath} variant="primary">
            <Download className="size-4" />
            Resume
          </Button>
          <Button href={profile.github}>
            <Github className="size-4" />
            GitHub
          </Button>
          <Button href={profile.linkedin}>
            <Linkedin className="size-4" />
            LinkedIn
          </Button>
          <Button href={`mailto:${profile.email}`} variant="ghost">
            <Mail className="size-4" />
            Contact
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-line bg-white/[0.035] p-4">
              <p className="text-2xl font-semibold text-cloud">{metric.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mist">{metric.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <ArchitectureMap />
      </Reveal>
    </section>
  );
}
