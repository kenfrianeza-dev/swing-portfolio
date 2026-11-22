import type { ReactNode } from "react";
import {
  Award,
  ChevronDown,
  Download,
  GraduationCap,
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { resumeData } from "@/data/resume";
import BorderGlow from "@/components/BorderGlow";
import { HeroFibers } from "@/components/hero-fibers";
import { Portrait } from "@/components/portrait";
import { Badge } from "@/components/ui/badge";
import { getCurrentYear } from "@/lib/utils";

const WARD_TAGS = ["Internal Medicine", "Surgical", "OB-GYN", "Pediatrics"] as const;

const btn =
  "focus-ring inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold motion-safe:transition-colors";

const chip = "bg-accent-fill text-white dark:bg-[#c96b86]";

function Card({ children }: { children: ReactNode }) {
  return (
    <BorderGlow
      className="min-w-0"
      edgeSensitivity={30}
      glowColor="340 48 74"
      backgroundColor="var(--surface)"
      borderRadius={18}
      glowRadius={20}
      glowIntensity={0.9}
      coneSpread={22}
      colors={["#c96b86", "#e7a8bc", "#9aaf98"]}
      fillOpacity={0.35}
    >
      {children}
    </BorderGlow>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/35 to-accent" />
      <span className="size-1.5 shrink-0 rotate-45 bg-accent" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/35 to-accent" />
    </div>
  );
}

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-16">
        <Divider />
        <h2 id={`${id}-title`} className="mt-10 flex items-center gap-3 font-serif text-3xl tracking-tight text-balance sm:mt-12">
          <Icon className="size-7 shrink-0 text-accent" aria-hidden="true" strokeWidth={1.5} />
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function Hero() {
  const { personal } = resumeData;
  const role = personal.title.replace(/\s*\([^)]*\)/, "").replace(" — ", ", ");

  return (
    <section className="relative flex min-h-[calc(100svh-4.75rem)] flex-col">
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
        aria-hidden="true"
      >
        <HeroFibers />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-6 px-5 py-8 sm:px-8 md:absolute md:top-[14%] md:left-1/2 md:mx-0 md:-translate-x-1/2 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-10 md:gap-x-8">
        <div className="flex justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:justify-end md:pr-6">
          <Portrait
            src={personal.headshotUrl}
            alt={`Portrait of ${personal.name}`}
            name={personal.shortName}
          />
        </div>
        <div className="text-center md:col-start-1 md:row-start-1 md:text-left">
          <h1
            translate="no"
            className="mt-3 font-serif text-5xl leading-[0.92] tracking-[-0.03em] md:mt-4 md:text-7xl"
          >
            <span className="block">Stella Joy</span>
            <span className="mt-1 block text-accent">Gregorio</span>
            <span className="sr-only">, RN</span>
          </h1>
          <p className="text-[0.72rem] font-medium tracking-[0.18em] text-accent-ink uppercase pt-4">
            {role}
          </p>
        </div>
        <div className="md:col-start-1 md:row-start-2">
          <p className="max-w-[42ch] text-pretty text-base leading-7 text-ink-soft">{personal.summary}</p>
          <p className="mt-3 text-sm text-ink-soft">{personal.availability}</p>
          <div className="mt-7">
            <a
              href={personal.resumePdfUrl}
              download
              className={`${btn} bg-accent-fill text-white hover:bg-accent-fill-hover dark:text-accent-fill-ink`}
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      </div>
      <a
        href="#experience"
        className="focus-ring relative z-10 mx-auto mb-8 flex w-fit flex-col items-center gap-1 px-3 py-2 text-[0.68rem] tracking-[0.22em] text-ink-soft uppercase md:mt-auto md:mb-24"
      >
        Scroll
        <ChevronDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Clinical Experience" icon={Stethoscope}>
      <div className="grid gap-4">
        {resumeData.professionalExperience.map((job) => {
          const source = `${job.unit} ${job.highlights.join(" ")}`;
          const tags = WARD_TAGS.filter((tag) => source.includes(tag));

          return (
            <Card key={job.role}>
              <article className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-2xl tracking-tight text-balance">{job.role}</h3>
                  <p className="text-sm tabular-nums text-ink-soft">{job.period}</p>
                </div>
                <p className="mt-1 text-accent-ink">{job.hospital}</p>
                {tags.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li key={tag}>
                        <Badge className={chip}>{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-5 space-y-3">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-pretty leading-7 text-ink-soft">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-accent" />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Clinical Skills & Competencies" icon={Sparkles}>
      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(resumeData.clinicalSkills).map(([group, skills]) => (
          <Card key={group}>
            <article className="h-full p-5">
              <h3 className="font-serif text-xl tracking-tight text-balance">{group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill}>
                    <Badge className={chip}>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Rotations() {
  return (
    <Section id="rotations" title="Student Nurse Related Learning Experience" icon={GraduationCap}>
      <div className="grid gap-4 md:grid-cols-2">
        {resumeData.clinicalRotations.map((rotation) => (
          <Card key={rotation.unit}>
            <article className="h-full p-5">
              <h3 className="font-serif text-xl tracking-tight text-balance">{rotation.unit}</h3>
              <p className="mt-1 text-sm text-accent-ink">{rotation.hospital}</p>
              <p className="mt-3 text-pretty leading-7 text-ink-soft">{rotation.summary}</p>
            </article>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Credentials() {
  const clinical = resumeData.certifications.filter(
    (item) => item.category === "Clinical Certification",
  );
  const seminars = resumeData.certifications.filter(
    (item) => item.category === "Seminar & Research",
  );
  const { education } = resumeData;

  return (
    <Section id="certifications" title="Certifications, Training & Education" icon={Award}>
      <div className="grid items-start gap-4 md:grid-cols-2">
        <Card>
          <article className="h-full p-5 sm:p-6">
            <h3 className="font-serif text-xl tracking-tight">Clinical Certification</h3>
            <ul className="mt-2">
              {clinical.map((item) => (
                <li key={item.title} className="flex items-start gap-4 border-t border-line py-3.5 first:border-t-0">
                  <div className="min-w-0">
                    <p className="text-pretty leading-6">{item.title}</p>
                    <p className="mt-0.5 text-sm text-ink-soft">{item.provider}</p>
                  </div>
                  <p className="ml-auto shrink-0 text-sm tabular-nums text-accent-ink">{item.year}</p>
                </li>
              ))}
            </ul>
          </article>
        </Card>
        <div className="grid gap-4">
          <Card>
            <article className="p-5 sm:p-6">
              <h3 className="font-serif text-xl tracking-tight">Education</h3>
              <p className="mt-3 text-pretty leading-6">{education.degree}</p>
              <p className="mt-1 text-accent-ink">{education.school}</p>
              <p className="mt-1 text-sm text-ink-soft">{education.campus}</p>
              <p className="text-sm tabular-nums text-ink-soft">{education.period}</p>
            </article>
          </Card>
          <Card>
            <article className="p-5 sm:p-6">
              <h3 className="font-serif text-xl tracking-tight">Seminar & Research</h3>
              <ul className="mt-2">
                {seminars.map((item) => (
                  <li key={item.title} className="flex items-start gap-4 border-t border-line py-3.5 first:border-t-0">
                    <div className="min-w-0">
                      <p className="text-pretty leading-6">{item.title}</p>
                      <p className="mt-0.5 text-sm text-ink-soft">{item.provider}</p>
                    </div>
                    <p className="ml-auto shrink-0 text-sm tabular-nums text-accent-ink">{item.year}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function telHref(phone: string) {
  // PH mobile: drop the trunk 0 and prefix +63.
  return `tel:+63${phone.replace(/\D/g, "").replace(/^0/, "")}`;
}

export function Contact() {
  const { personal } = resumeData;
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personal.location)}`;

  const rows = [
    {
      href: `mailto:${personal.email}`,
      label: personal.email,
      icon: Mail,
      external: false,
    },
    {
      href: telHref(personal.phone),
      label: personal.phone,
      icon: Phone,
      external: false,
    },
    {
      href: maps,
      label: personal.location,
      icon: MapPin,
      external: true,
    },
  ];

  return (
    <Section id="contact" title="Contact" icon={Mail}>
      <div className="overflow-hidden rounded-[18px] border border-line bg-surface">
        <ul className="divide-y divide-line">
          {rows.map((row) => {
            const Icon = row.icon;
            return (
              <li key={row.href}>
                <a
                  href={row.href}
                  className="focus-ring flex min-h-14 items-center gap-3 px-5 py-3.5 text-ink underline decoration-line underline-offset-4 hover:bg-background hover:decoration-accent-ink motion-safe:transition-colors sm:px-6"
                  {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon className="size-[18px] shrink-0 text-accent-ink" aria-hidden="true" strokeWidth={1.75} />
                  <span className="min-w-0 break-words">
                    {row.label}
                    {row.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}



export async function Footer() {
  const { name, shortCredentials, shortDegree } = resumeData.personal;
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-line pb-[calc(env(safe-area-inset-bottom)+4.75rem)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-2 px-5 py-8 sm:px-8">
        <p translate="no" className="font-serif text-lg">
        &copy; {currentYear} {name}
        </p>
        <p className="text-sm text-ink-soft">{shortCredentials}, {shortDegree}</p>
      </div>
    </footer>
  );
}
