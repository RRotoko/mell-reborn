export type CameraPlan = { orbitDeg: number; dolly: "in_slow"|"in"|"in_fast"|"front_lock"|null };
export type SceneDef = {
  id: string;
  duration: number;
  text: string[];
  voiceover: string;
  camera: CameraPlan;
  fx: string[];
  music: string;
  sfx: string[];
  media?: { poster?: string; video?: string };
};
export type ScenesFile = { scenes: SceneDef[] };
