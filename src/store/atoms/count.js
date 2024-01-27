import { atom } from "recoil";
import { createContext } from "react";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

const countContext = createContext({
  count,
  setCount: () => {},
});
