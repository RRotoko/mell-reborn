import { Howl } from "howler";
export const sounds: Record<string, Howl> = {};
export function register(name: string, src: string, volume = 0.6) {
  sounds[name] = new Howl({ src: [src], volume });
}
export function play(name: string) { sounds[name]?.play(); }
export function stop(name: string) { sounds[name]?.stop(); }
