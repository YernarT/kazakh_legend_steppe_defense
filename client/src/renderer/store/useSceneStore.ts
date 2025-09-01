// Types
import type { T_GameStatus } from "@/typing/game-status";
// Pinia
import { defineStore } from "pinia";
// Constants
import { GAME_STATUS } from "@/constants/game-status";

interface I_SceneStoreState {
  isDay: boolean;
  sun: number;
  gameStatus: T_GameStatus;
}

interface I_SceneStoreActions {}

// 初始阳光
const initialSun = 100;

export const useSceneStore = defineStore<
  string,
  I_SceneStoreState,
  {},
  I_SceneStoreActions
>("useSceneStore", {
  state: () => ({
    isDay: true,
    sun: initialSun,
    gameStatus: GAME_STATUS.playing,
  }),

  getters: {},

  actions: {
    addSun(amount: number) {
      this.sun += amount;
    },
  },
});
