"use client";

import Image from "next/image";
import { useState } from "react";
import FlipCard from "@/components/FlipCard";

export function Portrait({ src, alt, name }: { src: string; alt: string; name: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="portrait-fit relative aspect-[4/5] w-[min(13.5rem,78%)] rotate-[5deg] md:aspect-auto md:h-auto md:w-72">
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
                sizes="(max-width: 767px) 248px, 288px"
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
    </div>
  );
}
