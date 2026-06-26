import { AboutSection } from "@/components/about-section";
import { AppShell } from "@/components/app-shell";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { FeaturedProject } from "@/components/featured-project";
import { Footer } from "@/components/footer";
import { GitHubSection } from "@/components/github-section";
import { Hero } from "@/components/hero";
import { ResearchSection } from "@/components/research-section";
import { ResumeSection } from "@/components/resume-section";
import { SkillsSection } from "@/components/skills-section";
import { profile, skillGroups } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    url: getSiteUrl(),
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: skillGroups.flatMap((group) => group.skills)
  };

  return (
    <AppShell>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <FeaturedProject />
        <GitHubSection />
        <ResearchSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </AppShell>
  );
}
