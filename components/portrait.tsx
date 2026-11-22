"use client";

import Image from "next/image";
import { Heart, Sparkle } from "lucide-react";
import { useState } from "react";
import FlipCard from "@/components/FlipCard";

function PortraitFrame() {
  const icon = "absolute text-accent";

  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      <span className="absolute -top-1.5 -left-1.5 size-3 border-t-2 border-l-2 border-accent md:-top-2 md:-left-2 md:size-4" />
      <span className="absolute -right-1.5 -bottom-1.5 size-3 border-r-2 border-b-2 border-accent md:-right-2 md:-bottom-2 md:size-4" />
      <Heart className={`${icon} -top-3 -right-3 size-5 rotate-12 md:-top-3.5 md:-right-3.5 md:size-6`} fill="currentColor" strokeWidth={0} />
      <Sparkle className={`${icon} -bottom-2.5 -left-3 size-5 md:-bottom-3 md:-left-3.5 md:size-6`} fill="currentColor" strokeWidth={0} />
      <Sparkle className={`${icon} bottom-5 left-1.5 size-3 md:bottom-6 md:left-2 md:size-4`} fill="currentColor" strokeWidth={0} />
    </div>
  );
}

export function Portrait({ src, alt, name }: { src: string; alt: string; name: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="portrait-fit relative aspect-[4/5] w-[min(8.5rem,88%)] rotate-[5deg] overflow-visible md:aspect-auto md:h-auto md:w-72">
      <FlipCard
        className="focus-ring"
        ariaLabel={`Flip portrait of ${name}`}
        front={
          failed ? (
            <span role="img" aria-label={alt} className="grid size-full place-items-center font-serif text-xl text-accent sm:text-3xl md:text-5xl">
              SG
            </span>
          ) : (
            <div className="relative size-full">
              <Image
                src={src}
                alt=""
                fill
                priority
                sizes="(max-width: 767px) 256px, 288px"
                draggable={false}
                className="object-cover object-top"
                onError={() => setFailed(true)}
              />
            </div>
          )
        }
        back={
          <div className="grid h-full place-items-center px-3 text-center md:px-8">
            <p className="font-serif text-sm leading-tight tracking-tight text-balance md:text-3xl">
              More than a profession, it's a purpose.
            </p>
          </div>
        }
        axis="y"
        flipOnClick
        draggable
        tilt
        glare
        width={288}
        height={360}
        radius={28}
        background="var(--surface)"
        color="var(--ink)"
        shadow
        shadowColor="#1c1917"
        shadowOpacity={0.28}
      />
      <PortraitFrame />
    </div>
  );
}
