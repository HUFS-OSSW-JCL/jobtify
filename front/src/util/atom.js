import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: {
    isOpen: false,
    animate: false,
  },
});

export const saveState = atom({
  key: "saveState",
  default: {
    isSaved: false,
  },
});
