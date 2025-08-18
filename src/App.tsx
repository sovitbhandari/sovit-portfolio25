import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Download, Network, Rocket, Server, Shield, Star, Boxes, GraduationCap, Wrench } from "lucide-react";

import { ABOUT, SOCIAL, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, FOCUS, METRICS, type Project } from "./data";

// Local UI primitives (unstyled libs avoided so the repo runs instantly)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/Tabs";
import { Input } from "./components/ui/Input";
import { Textarea } from "./components/ui/Textarea";
import { Separator } from "./components/ui/Separator";
import { Progress } from "./components/ui/Progress";
import { Badge } from "./components/ui/Badge";

/** Lightweight developer checks (toggle via ?tests=1)
 *  These are quick runtime sanity checks that help catch data mistakes.
 */
function runDataTests() {
  const results: { name: string; pass: boolean; message?: string }[] = [];
  const names = new Set<string>();

  // Projects must be well-formed
  PROJECTS.forEach((p, i) => {
    results.push({
      name: `PROJECTS[${i}] required fields`,
      pass: !!(p.name && p.tags?.length && p.bullets?.length && typeof p.link === "string"),
      message: p.name,
    });
    results.push({
      name: `PROJECT name unique – ${p.name}`,
      pass: !names.has(p.name),
      message: "names must be unique",
    });
    names.add(p.name);
  });

  // Experience bullets present
  EXPERIENCE.forEach((e, i) => {
    results.push({
      name: `EXPERIENCE[${i}] bullets array`,
      pass: Array.isArray(e.bullets) && e.bullets.length > 0,
      message: e.role,
    });
  });

  // Skills groups are non-empty
  SKILLS.forEach((s, i) =>
    results.push({
      name: `SKILLS[${i}] has items`,
      pass: Array.isArray(s.items) && s.items.length > 0,
      message: s.title,
    })
  );

  // Social href looks plausible
  SOCIAL.forEach((s, i) =>
    results.push({
      name: `SOCIAL[${i}] href starts with mailto/http`,
      pass: /^(mailto:|https:\/\/)/.test(s.href),
      message: s.label,
    })
  );

  return results;
}

/** Section component
 *  Provides consistent spacing and a heading with an optional icon.
 */
const Section: React.FC<{
  id: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}> = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="py-14 md:py-20">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center gap-3">
        {Icon && <Icon className="h-6 w-6 text-slate-700" />}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

/** Small chip UI */
const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full border bg-white px-3 py-1 text-sm text-slate-800 shadow-sm">{children}</span>
);

/** Stat tile (icon + label + value) */
const Stat: React.FC<{ icon?: React.ReactNode; label: string; value: number | string }> = ({
  icon,
  label,
  value,
}) => (
  <div className="rounded-2xl border bg-white p-4 shadow-sm">
    <div className="mb-2 flex items-center gap-2 text-slate-600">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
    <div className="text-2xl font-bold text-slate-900">{value}</div>
  </div>
);

/** Project cards laid out responsively with subtle motion */
const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((p) => (
      <motion.div
        key={p.name}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <Card className="flex h-full flex-col border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg tracking-tight text-slate-900">{p.name}</CardTitle>
            <CardDescription className="text-slate-700">{p.impact}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col">
            <div className="mb-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>
            <ul className="mb-4 space-y-2 text-slate-700">
              {p.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
            <div className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <a href={p.link} target="_blank" rel="noreferrer">
                  View details
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default function App(): JSX.Element {
  // Derived stat example: total number of listed skill keywords
  const skillCount = useMemo(() => SKILLS.reduce((n, s) => n + s.items.length, 0), []);

  // Toggle dev test output via URL parameter (?tests=1)
  const showTests =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("tests") === "1";
  const testResults = showTests ? runDataTests() : [];

  // Console-table is helpful while developing (kept silent in production)
  if (process.env.NODE_ENV !== "production" && showTests) {
    // eslint-disable-next-line no-console
    console.table(testResults);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ======= Nav ======= */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-lg font-extrabold tracking-tight text-slate-900">Sovit.dev</div>
          <nav className="hidden gap-5 text-sm md:flex">
            {(
              [
                ["about", "About"],
                ["skills", "Skills"],
                ["projects", "Projects"],
                ["experience", "Experience"],
                ["education", "Education"],
                ["stats", "Stats"],
                ["contact", "Contact"],
              ] as const
            ).map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:underline">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button size="sm" asChild>
              <a href="#contact">
                <Rocket className="mr-2 h-4 w-4" /> Hire Me
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* ======= Hero ======= */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          {/* Intro column */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              {ABOUT.name}
            </h1>
            <p className="mt-4 text-xl text-slate-700">{ABOUT.tagline}</p>
            <p className="mt-3 max-w-prose text-slate-600">{ABOUT.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL.map((s) => (
                <Button key={s.label} asChild variant="outline">
                  <a href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <s.icon className="h-4 w-4" /> {s.label}
                  </a>
                </Button>
              ))}
            </div>
            <div className="mt-6 text-sm text-slate-500">{ABOUT.location}</div>
          </motion.div>

          {/* Focus/Stats column */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="border-slate-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Star className="h-5 w-5" />
                  Focus Areas
                </CardTitle>
                <CardDescription className="text-slate-700">What I’m doubling down on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {FOCUS.map((f) => (
                    <Badge key={f} className="rounded-full">
                      {f}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-5" />
                <div className="grid grid-cols-2 gap-4">
                  <Stat icon={<Code2 className="h-4 w-4" />} label="Projects" value={28} />
                  <Stat icon={<Wrench className="h-4 w-4" />} label="Skills" value={skillCount} />
                  <Stat icon={<Shield className="h-4 w-4" />} label="CI/CD Deploys/Month" value={8} />
                  <Stat icon={<span className="inline-block w-4 text-center">🏆</span>} label="LeetCode/Wk" value={21} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ======= About ======= */}
      <Section id="about" title="About" icon={Server}>
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <Card className="bg-white md:col-span-1">
            <CardContent className="pt-6">
              <p className="leading-relaxed text-slate-700">
                I build end-to-end features, automate delivery, and keep systems healthy. Recent work spans fullstack microservices
                on Kubernetes, GitHub Actions → ArgoCD deployments, and serverless patterns on AWS. I’m also exploring
                applied NLP to turn raw transcripts (like earnings calls) into insight.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Highlights</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• GPA 3.80, USF (’26)</li>
                <li>• Two SWE internships (Platform, DevOps & Web)</li>
                <li>• DevSecOps pipeline with security gates</li>
                <li>• Serverless URL shortener with Redis acceleration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ======= Skills ======= */}
      <Section id="skills" title="Skills" icon={Cpu}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group) => (
            <Card key={group.title} className="bg-white transition-all hover:-translate-y-0.5 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ======= Experience (vertical timeline style) ======= */}
      <Section id="experience" title="Experience" icon={Server}>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-200" />
          <div className="space-y-6">
            {EXPERIENCE.map((job) => (
              <motion.div key={job.role} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                <div className="absolute -left-[7px] mt-8 h-3 w-3 rounded-full bg-slate-300 ring-4 ring-white" />
                <Card className="overflow-hidden bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{job.role}</CardTitle>
                      <span className="text-sm text-slate-500">{job.time}</span>
                    </div>
                    <CardDescription>{job.org}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      {job.bullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ======= Projects ======= */}
      <Section id="projects" title="Projects" icon={Boxes}>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-white">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="ml">ML / Data</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <ProjectGrid projects={PROJECTS} />
          </TabsContent>
          <TabsContent value="fullstack" className="mt-6">
            <ProjectGrid
              projects={PROJECTS.filter((p) => p.tags.some((t) => ["React", "Node", "Express", "MongoDB"].includes(t)))}
            />
          </TabsContent>
          <TabsContent value="devops" className="mt-6">
            <ProjectGrid
              projects={PROJECTS.filter((p) =>
                p.tags.some((t) => ["Docker", "Kubernetes", "GitHub Actions", "ArgoCD", "Terraform"].includes(t))
              )}
            />
          </TabsContent>
          <TabsContent value="ml" className="mt-6">
            <ProjectGrid projects={PROJECTS.filter((p) => p.tags.some((t) => ["scikit-learn", "NLP"].includes(t)))} />
          </TabsContent>
        </Tabs>
      </Section>


      {/* ======= Education ======= */}
      <Section id="education" title="Education" icon={GraduationCap}>
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xl font-semibold">{EDUCATION.school}</div>
                <div className="text-slate-600">
                  {EDUCATION.degree} · {EDUCATION.grad}
                </div>
              </div>
              <div className="font-medium text-slate-700">{EDUCATION.gpa}</div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* ======= Stats (bars only; no line chart) ======= */}
      <Section id="stats" title="Stats" icon={Shield}>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Weekly Focus</CardTitle>
            <CardDescription>Balance and consistency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-700">{m.label}</span>
                    <span className="font-medium">{m.value}</span>
                  </div>
                  {/* normalize to 0..100 for demo visuals */}
                  <Progress value={Math.min(m.value * 5, 100)} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* ======= Optional test results viewer (dev) ======= */}
      {showTests && (
        <Section id="tests" title="Internal Tests (dev)" icon={Shield}>
          <Card className="bg-white">
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm">
                {testResults.map((t, i) => (
                  <li key={i} className={t.pass ? "text-emerald-700" : "text-rose-700"}>
                    {t.pass ? "✅" : "❌"} <strong>{t.name}</strong> {t.message ? `— ${t.message}` : ""}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Append <code>?tests=1</code> to the URL to toggle this section.
              </p>
            </CardContent>
          </Card>
        </Section>
      )}

      {/* ======= Contact ======= */}
      <Section id="contact" title="Contact" icon={Network}>
        <Card className="bg-white">
          <CardContent className="pt-6">
            {/* NOTE: This is a stub. If you want, I can wire an API route or Formspree. */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! I’ll get back to you shortly.");
              }}
              className="grid gap-4 md:grid-cols-2"
            >
              <Input placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
              <Textarea className="md:col-span-2" placeholder="Your message" rows={5} required />
              <div className="md:col-span-2 flex gap-3">
                <Button type="submit">
                  Send
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    id="resume" 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Resume (PDF)
                  </a>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Section>

      {/* ======= Footer ======= */}
      <footer className="mt-12 border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} {ABOUT.name}. All rights reserved.</div>
          <div className="flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                <s.icon className="h-4 w-4" /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
