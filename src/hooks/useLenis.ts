import { useEffect } from "react";
import Lenis from "lenis";
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    function raf(time: number){ lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { (lenis as any).destroy?.(); };
  }, []);
}
