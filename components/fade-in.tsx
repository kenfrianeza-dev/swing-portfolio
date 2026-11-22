"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function FadeIn({
  children,
  className,
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets = stagger ? gsap.utils.toArray<HTMLElement>(root.children) : root;
      if (Array.isArray(targets) && targets.length === 0) return;

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: {
            trigger: root,
            start: "top 92%",
            toggleActions: "restart none restart none",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
