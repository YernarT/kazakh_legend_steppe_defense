// Types
import type { I_Plant } from "@/typing/plant";
// Pinia
import { defineStore } from "pinia";
// Utils
import { getPlant } from "@/utils/getPlant";

interface I_PlantStoreState {
  plants: I_Plant[];
  // 鼠标点击的工具
  selectedTool: I_Plant | null;
  // 草坪上的植物状态
  lawn: (I_Plant | null)[][];
}

interface I_PlantStoreActions {
  addPlant: (code: I_Plant["code"]) => Promise<void>;
  removePlant: (code: I_Plant["code"]) => void;
}

const MAP_ROWS = 5;
const MAP_COLS = 9;

export const usePlantStore = defineStore<
  string,
  I_PlantStoreState,
  {},
  I_PlantStoreActions
>("usePlantStore", {
  state: () => ({
    plants: [],
    selectedTool: null,
    lawn: Array.from({ length: MAP_ROWS }, () =>
      Array.from({ length: MAP_COLS }, () => null)
    ),
  }),

  getters: {},

  actions: {
    // 往卡槽塞入植物
    async addPlant(code: I_Plant["code"]) {
      const plant = getPlant(code);

      if (plant) {
        this.plants.push(plant);
      }
    },

    // 从卡槽移出植物
    removePlant(code: I_Plant["code"]) {
      this.plants = this.plants.filter((plant) => plant.code !== code);
    },
  },
});
