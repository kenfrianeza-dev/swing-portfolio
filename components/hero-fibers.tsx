"use client";

import { useTheme } from "next-themes";
import GhostFibers from "@/components/GhostFibers";

export function HeroFibers() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <GhostFibers
      glowColor={dark ? "#e7a8bc" : "#c96b86"}
      secondaryColor="#9aaf98"
      lightMode={!dark}
      layers={3}
      twist={1.2}
      threads={72}
      fiberStyle="dots"
      depthOfField={0.85}
      hoverEffect="focus"
      intro
      mouseInteraction
    />
  );
}
