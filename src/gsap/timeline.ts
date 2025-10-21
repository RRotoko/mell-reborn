import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SceneDef } from "../types/scenes";
gsap.registerPlugin(ScrollTrigger);

export function buildMasterTimeline(root: HTMLElement, scenes: SceneDef[]) {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" }});

  gsap.set(root, { height: `${scenes.length * 100}vh` });

  scenes.forEach((s, i) => {
    const section = document.querySelector(`#scene-${s.id}`) as HTMLElement;
    const overlay = document.querySelector(`#overlay-${s.id}`) as HTMLElement;

    const fromRot = -s.camera.orbitDeg/2;
    const toRot   = s.camera.orbitDeg/2;
    const fromScale = s.camera.dolly === "in_fast" ? 0.9 : s.camera.dolly === "in" ? 0.95 : s.camera.dolly === "in_slow" ? 0.98 : 1;
    const toScale   = s.camera.dolly ? 1.06 : 1.02;

    tl.fromTo(section, { rotateY: fromRot, scale: fromScale, transformOrigin: "50% 50%" }, 
                        { rotateY: toRot,   scale: toScale,   duration: s.duration/10 });

    if (overlay) {
      tl.to(overlay, { opacity: 1, y: 0, duration: 0.6 }, "<0.1");
      tl.to(overlay, { opacity: 0, y: -10, duration: 0.6 }, `>-${Math.min(0.8, s.duration/10)}`);
    }

    if (i === scenes.length - 1) {
      tl.to("#cta", { opacity: 1, duration: 0.8 }, ">-0.2");
    }
  });

  const st = ScrollTrigger.create({
    animation: tl,
    trigger: root,
    start: "top top",
    end: `+=${scenes.length * 100}%`,
    scrub: 1
  });

  return () => { st.kill(); tl.kill(); };
}
