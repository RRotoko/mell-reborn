import React from "react";
import { SceneDef } from "../types/scenes";

export default function TextOverlay({ scenes }: { scenes: SceneDef[] }) {
  return (
    <div className="pointer-events-none fixed inset-0 grid place-items-center px-6">
      {scenes.map((s) => (
        <div
          key={s.id}
          id={`overlay-${s.id}`}
          className="opacity-0 text-center will-change-transform"
        >
          {s.text.map((line, i) => (
            <div
              key={i}
              className="font-cond tracking-widest text-textdim text-2xl md:text-4xl leading-relaxed"
            >
              {line}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
