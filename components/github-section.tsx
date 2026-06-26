import { GitFork, Star } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { getGitHubRepos } from "@/lib/github";
import { formatNumber } from "@/lib/utils";

export async function GitHubSection() {
  const repos = await getGitHubRepos("aznavneet");
  const languages = Array.from(new Set(repos.map((repo) => repo.language).filter(Boolean))).slice(0, 8);

  return (
    <section id="github" className="border-y border-line bg-white/[0.025] py-20">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="GitHub" title="GitHub" />
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2">
          {languages.map((language) => (
            <span key={language} className="rounded-md border border-line bg-ink/60 px-3 py-2 text-xs text-mist">
              {language}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.length ? (
            repos.slice(0, 6).map((repo) => (
              <Reveal key={repo.id}>
                <Link href={repo.html_url} className="focus-ring block h-full rounded-lg border border-line bg-ink/64 p-5 transition hover:border-aqua/50">
                  <h3 className="text-base font-semibold text-cloud">{repo.name}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-mist">{repo.description ?? "Public GitHub repository."}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-mist">
                    <span>{repo.language ?? "Repository"}</span>
                    <span className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-3.5" />
                        {formatNumber(repo.stargazers_count)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="size-3.5" />
                        {formatNumber(repo.forks_count)}
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))
          ) : (
            <div className="rounded-lg border border-line bg-ink/64 p-6 text-sm leading-6 text-mist md:col-span-2 lg:col-span-3">
              GitHub repositories will appear here when the GitHub API is reachable during build or runtime.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
