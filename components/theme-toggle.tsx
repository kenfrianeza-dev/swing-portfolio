"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const THEME_COLOR = { light: "#F7F3EE", dark: "#1A1614" } as const;

export function ThemeToggle() {
  const { setTheme } = useTheme();

  function toggle() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    setTheme(next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[next]);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="focus-ring relative grid size-11 shrink-0 place-items-center rounded-full bg-surface text-ink-soft hover:text-ink motion-safe:transition-colors cursor-pointer"
    >
      <Sun className="hidden size-[18px] dark:block" aria-hidden="true" />
      <Moon className="block size-[18px] dark:hidden" aria-hidden="true" />
      <span className="sr-only dark:hidden">Switch to dark mode</span>
      <span className="sr-only hidden dark:block">Switch to light mode</span>
    </button>
  );
}
