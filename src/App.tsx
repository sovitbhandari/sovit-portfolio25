import React, { useEffect, useState } from "react";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";

import {
  ABOUT,
  EDUCATION,
  EXPERIENCE,
  FEATURED_PROJECTS,
  MORE_PROJECTS,
  NAV,
  SOCIAL,
  STACK_GROUPS,
  type Project,
} from "./data";
import { Button } from "./components/ui/Button";
import { ScreenshotFrame } from "./components/ProjectVisuals";
import { Reveal } from "./components/Reveal";

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 md:px-8 ${className}`}>{children}</div>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-7 flex items-baseline gap-3 md:mb-9">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">{title}</h2>
    </div>
  );
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const visualLeft = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  const info = (
    <div className="flex flex-col justify-center p-6 md:p-8 lg:p-9">
      <p className="font-mono text-xs text-accent">{number}</p>
      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-[2.35rem]">
        {project.name}
      </h3>
      {project.descriptor && (
        <p className="mt-1.5 text-sm text-accent-soft">{project.descriptor}</p>
      )}
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-secondary">
        {project.description}
      </p>

      <div className="mt-6 space-y-2.5 border-t border-border pt-5">
        {project.facts.map((fact) => (
          <p key={fact.label} className="text-sm leading-snug text-ink-secondary">
            <span className="font-medium text-ink">{fact.label}</span>
            <span className="mx-2 text-ink-muted">—</span>
            {fact.value}
          </p>
        ))}
      </div>

      <p className="mt-5 text-[13px] leading-relaxed text-ink-muted">
        {project.tags.join(" / ")}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
      >
        View repository
        <ArrowUpRight className="link-arrow h-4 w-4" aria-hidden />
      </a>
    </div>
  );

  const visual = (
    <div className="p-4 md:p-5 lg:p-6">
      <ScreenshotFrame
        className="aspect-[16/10] w-full"
        src={project.image}
        alt={project.imageAlt}
      />
    </div>
  );

  return (
    <Reveal>
      <article className="project-card group overflow-hidden rounded-card border border-border bg-surface">
        <div className="grid lg:grid-cols-2">
          {visualLeft ? (
            <>
              <div className="order-2 border-t border-border lg:order-1 lg:border-r lg:border-t-0">
                {visual}
              </div>
              <div className="order-1 lg:order-2">{info}</div>
            </>
          ) : (
            <>
              <div className="lg:border-r lg:border-border">{info}</div>
              <div className="border-t border-border lg:border-t-0">{visual}</div>
            </>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function App(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const github = SOCIAL.find((s) => s.label === "GitHub")!;
  const linkedin = SOCIAL.find((s) => s.label === "LinkedIn")!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 border-b transition-colors ${
          scrolled ? "border-border bg-bg/92 backdrop-blur-md" : "border-transparent bg-bg/80"
        }`}
      >
        <Container className="flex h-14 items-center justify-between md:h-16">
          <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
            Sovit Bhandari
          </a>

          <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-ink-secondary transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-ink-secondary transition-colors hover:text-accent"
            >
              Resume
            </a>
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-secondary transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </Container>

        {menuOpen && (
          <nav
            id="mobile-nav"
            className="border-t border-border bg-bg px-5 py-4 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-md px-3 py-3 text-base text-ink hover:bg-surface"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-md px-3 py-3 text-base text-ink hover:bg-surface"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md px-3 py-3 text-base text-ink hover:bg-surface"
                onClick={() => setMenuOpen(false)}
              >
                GitHub
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="border-b border-border">
          <Container className="hero-shell">
            <div className="max-w-[900px]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[12px] tracking-[0.18em] text-accent md:text-[13px]">
                  SOFTWARE ENGINEER
                </span>
                <span className="h-px w-8 bg-border" aria-hidden />
                <span className="inline-flex items-center gap-2 font-mono text-[11px] text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" aria-hidden />
                  Available
                </span>
              </div>

              <h1 className="hero-name mt-5 text-ink md:mt-6">{ABOUT.name}</h1>

              <p className="hero-position mt-3 text-ink-secondary md:mt-4">
                {ABOUT.heroPosition}
              </p>

              <p className="hero-body mt-4 text-ink-secondary md:mt-5">{ABOUT.heroSupport}</p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 md:mt-8">
                <Button href="#projects">View Projects</Button>
                <Button href="/resume.pdf" variant="outline" target="_blank" rel="noreferrer">
                  Resume
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-accent"
                >
                  GitHub
                  <ArrowUpRight className="link-arrow h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>

            <div className="max-w-[900px]">
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-ink-muted">
                <span>{ABOUT.location}</span>
                <span className="text-border" aria-hidden>
                  /
                </span>
                <span>{EDUCATION.degree}</span>
                <span className="text-border" aria-hidden>
                  /
                </span>
                <span>{EDUCATION.school}</span>
                <span className="text-border" aria-hidden>
                  /
                </span>
                <span className="text-accent">{EDUCATION.year}</span>
              </div>

              <p className="mt-3 font-mono text-xs leading-relaxed text-ink-muted md:text-[13px]">
                {ABOUT.heroTech.join("  ·  ")}
              </p>
            </div>
          </Container>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border section-pad">
          <Container>
            <Reveal>
              <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <SectionHeading index="01" title="About" />
                </div>
                <div className="md:col-span-9">
                  <p className="max-w-3xl text-xl leading-snug tracking-tight text-ink md:text-2xl">
                    {ABOUT.aboutLead}
                  </p>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
                    {ABOUT.aboutBody}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5 text-sm text-ink-muted">
                    <span>{EDUCATION.location}</span>
                    <span>
                      {EDUCATION.degree} · {EDUCATION.year}
                    </span>
                    <span>GPA {EDUCATION.gpa}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-border section-pad">
          <Container>
            <Reveal>
              <SectionHeading index="02" title="Experience" />
            </Reveal>
            <div>
              {EXPERIENCE.map((job, i) => (
                <Reveal key={`${job.org}-${job.year}`} delayMs={i * 40}>
                  <article className="grid gap-3 border-t border-border py-6 md:grid-cols-12 md:gap-6 md:py-7">
                    <div className="md:col-span-2">
                      <p className="font-mono text-sm text-ink-muted">{job.year}</p>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="text-base font-semibold text-ink">{job.org}</h3>
                      <p className="mt-0.5 text-sm text-ink-secondary">{job.role}</p>
                      <p className="mt-2 font-mono text-[11px] text-ink-muted">
                        {job.context ? `${job.context} · ` : ""}
                        {job.period}
                      </p>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-sm leading-relaxed text-ink-secondary">{job.summary}</p>
                      <ul className="mt-3 space-y-1.5">
                        {job.contributions.map((item) => (
                          <li key={item} className="text-sm leading-relaxed text-ink-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="border-b border-border section-pad">
          <Container>
            <Reveal>
              <SectionHeading index="03" title="Featured Projects" />
            </Reveal>
            <div className="space-y-5 md:space-y-6">
              {FEATURED_PROJECTS.map((project, index) => (
                <FeaturedProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </Container>
        </section>

        {/* More Projects */}
        <section className="border-b border-border section-pad">
          <Container>
            <Reveal>
              <SectionHeading index="04" title="More Projects" />
            </Reveal>
            <div className="overflow-hidden rounded-card border border-border">
              {MORE_PROJECTS.map((project, index) => (
                <Reveal key={project.name} delayMs={index * 40}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-3 border-b border-border bg-surface px-5 py-5 transition-colors last:border-b-0 hover:bg-surface-raised sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-ink-muted">
                          {String(index + 4).padStart(2, "0")}
                        </span>
                        <h3 className="text-base font-semibold text-ink">{project.shortName}</h3>
                      </div>
                      <p className="mt-2 text-sm text-ink-secondary">{project.description}</p>
                      <p className="mt-2 text-xs text-ink-muted">{project.tags.join(" · ")}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-ink-secondary group-hover:text-accent">
                      Repository
                      <ArrowUpRight className="link-arrow h-3.5 w-3.5" aria-hidden />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Technical Stack */}
        <section id="skills" className="border-b border-border section-pad">
          <Container>
            <Reveal>
              <SectionHeading index="05" title="Technical Stack" />
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-card border border-border">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5">
                  {STACK_GROUPS.map((group, i) => (
                    <div
                      key={group.title}
                      className={[
                        "bg-surface p-5 md:p-6",
                        i < STACK_GROUPS.length - 1 ? "lg:border-r lg:border-border" : "",
                        i % 2 === 0 ? "sm:border-r sm:border-border lg:border-r" : "",
                        i < 3 ? "max-lg:border-b max-lg:border-border" : "",
                        i < 4 ? "max-sm:border-b max-sm:border-border" : "",
                        i === 4 ? "sm:col-span-2 lg:col-span-1 sm:border-r-0" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <p className="font-mono text-xs text-accent">
                        {group.index} {group.title}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="text-sm text-ink-secondary">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Contact */}
        <section id="contact" className="section-pad">
          <Container>
            <Reveal>
              <p className="font-mono text-xs tracking-[0.16em] text-ink-muted">CONTACT</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                Have a role or project in mind?
              </h2>
              <a
                href={`mailto:${ABOUT.email}`}
                className="group mt-8 inline-flex items-center gap-2 text-2xl font-medium text-ink transition-colors hover:text-accent md:text-3xl"
              >
                {ABOUT.email}
                <ArrowUpRight className="link-arrow h-6 w-6" aria-hidden />
              </a>
              <div className="mt-7 flex flex-wrap gap-6 text-sm">
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-secondary transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-secondary transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <footer className="border-t border-border">
        <Container className="flex flex-col gap-4 py-7 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {ABOUT.name} · Software Engineer
          </p>
          <div className="flex gap-5">
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
