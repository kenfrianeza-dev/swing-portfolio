"use client";

import { Award, Mail, Repeat, Sparkles, Stethoscope } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ThemeToggle } from "@/components/theme-toggle";
import GradualBlur from "@/components/GradualBlur";

const NAV = [
  { href: "#experience", label: "Experience", icon: Stethoscope },
  { href: "#skills", label: "Skills", icon: Sparkles },
  { href: "#rotations", label: "Rotations", icon: Repeat },
  { href: "#certifications", label: "Certifications", icon: Award },
  { href: "#contact", label: "Contact", icon: Mail },
] as const;

const blurTint = "color-mix(in srgb, var(--background) 60%, transparent)";

export function Header() {
  const mark = resumeData.personal.shortName.split(" ")[0];

  return (
    <>
      <GradualBlur
        target="page"
        position="top"
        height="calc(env(safe-area-inset-top) + 7rem)"
        strength={2}
        layers={4}
        curve="linear"
        exponential
        tint={blurTint}
        autoHide
        zIndex={30}
      />
      <GradualBlur
        target="page"
        position="bottom"
        height="calc(env(safe-area-inset-bottom) + 8rem)"
        strength={2}
        layers={4}
        curve="linear"
        exponential
        tint={blurTint}
        autoHide
        zIndex={30}
      />

      <header id="top" className="sticky top-0 z-50 bg-transparent pt-[env(safe-area-inset-top)]">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
            }}
            className="focus-ring min-w-0 rounded-full font-serif text-xl tracking-tight"
          >
            <span translate="no">{mark}</span>
            <span className="text-accent">.</span>
          </a>
          <ThemeToggle />
        </div>
      </header>

      <nav
        aria-label="Sections"
        className="fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)]"
      >
        <div className="mx-auto flex w-full max-w-lg items-end justify-around px-2 pt-1 pb-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring flex min-h-11 min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-0.5 py-1 text-center text-[0.65rem] leading-tight text-ink-soft hover:text-ink"
            >
              <item.icon className="size-5 shrink-0" aria-hidden="true" />
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
