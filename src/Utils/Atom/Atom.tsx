import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const colorState = atom({
  key: "colorState",
  default: { background: "#000" },
  effects_UNSTABLE: [persistAtom],
});

export const titleState = atom({
  key: "titleState",
  default: "Archive",
  effects_UNSTABLE: [persistAtom],
});
