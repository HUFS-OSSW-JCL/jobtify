import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const modalState = atom({
  // 모달 상태 관리 (애니메이션)
  key: "modalState",
  default: {
    isOpen: false,
    animate: false,
  },
});

export const todayState = atom({
  // 오늘의 채용공고
  key: "todayState",
  default: {
    isAvailable: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const saveState = atom({
  // 즐겨찾기
  key: "saveState",
  default: {
    isSaved: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const userData = atom({
  // 유저 데이터 저장
  key: "userData",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
