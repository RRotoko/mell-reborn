import React, { useEffect, useState } from "react";
import { tracks } from "./tracks";
import { register } from "./index";

export const AudioContext = React.createContext({ muted:false, toggle:()=>{} });

export function AudioProvider({ children }: React.PropsWithChildren) {
  const [muted, setMuted] = useState(false);
  useEffect(() => {
    Object.entries(tracks.music).forEach(([k,src]) => register(k, src, 0.5));
    Object.entries(tracks.sfx).forEach(([k,src]) => register(k, src, 0.7));
    Object.entries(tracks.vo).forEach(([k,src]) => register(k, src, 0.9));
  }, []);
  useEffect(() => { (window as any).Howler && ((window as any).Howler.mute(muted)); }, [muted]);
  return (
    <AudioContext.Provider value={{ muted, toggle: ()=>setMuted(m=>!m) }}>
      <button
        onClick={() => setMuted(m=>!m)}
        className="fixed right-5 top-5 z-50 text-xs opacity-70 hover:opacity-100"
      >{muted? "UNMUTE":"MUTE"}</button>
      {children}
    </AudioContext.Provider>
  );
}
