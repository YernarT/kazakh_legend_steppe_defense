// Pinia
import { defineStore } from "pinia";

interface I_SceneStoreState {
  isDay: boolean;
  sun: number;
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
  }),

  getters: {},

  actions: {
    addSun(amount: number) {
      this.sun += amount;
    },
  },
});
