import React, { useRef } from "react";
import { SceneDef } from "../types/scenes";

type Props = { index: number; def: SceneDef };

export default function Scene({ def, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section
      id={`scene-${def.id}`}
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      data-scene={def.id}
      data-index={index}
      style={{ perspective: "1200px" }}
    >
      {def.media?.video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          src={def.media.video}
          poster={def.media.poster}
          playsInline
          muted
          loop
          preload="metadata"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,#0F2128_0%,#0B1418_70%)]" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
    </section>
  );
}
