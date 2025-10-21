import React, { useEffect, useMemo, useRef, useState } from "react";
import useLenis from "../hooks/useLenis";
import { loadScenes } from "../utils/media";
import ru from "../data/scenes.ru.json";
import { SceneDef } from "../types/scenes";
import { AudioProvider } from "../audio/AudioProvider";
import { buildMasterTimeline } from "../gsap/timeline";
import Scene from "../components/Scene";
import TextOverlay from "../components/TextOverlay";
import CTA from "../components/CTA";

export default function App() {
  useLenis();
  const [scenes, setScenes] = useState<SceneDef[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setScenes(loadScenes(ru)); }, []);

  useEffect(() => {
    if (!rootRef.current || scenes.length === 0) return;
    const cleanup = buildMasterTimeline(rootRef.current, scenes);
    return () => cleanup?.();
  }, [scenes]);

  const total = useMemo(()=> scenes.reduce((s,c)=> s + c.duration, 0), [scenes]);

  return (
    <AudioProvider>
      <div ref={rootRef} className="min-h-[200vh] w-full relative">
        {scenes.map((s, i) => (
          <Scene key={s.id} index={i} def={s} />
        ))}
        <TextOverlay scenes={scenes} />
        <CTA />
        <div className="fixed left-4 bottom-4 text-xs opacity-50">
          TOTAL: {total}s • MELL / REBORN
        </div>
      </div>
    </AudioProvider>
  );
}
