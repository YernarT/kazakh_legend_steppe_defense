// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_PlantAttributes } from "@/typing/plant";
// Core
import { Plant } from "@/core/plant";

class Samovar extends Plant {
  constructor(input: I_LifeformAttributes & I_PlantAttributes) {
    super(input);
  }

  getAttack(): number {
    return this.baseAttack;
  }

  getArmor(): number {
    return this.baseArmor;
  }
}

function getSamovar() {
  const defaultInput: I_LifeformAttributes & I_PlantAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
    code: "samovar",
    name: "Самаурын",
    cost: 200,
    description: "哈萨克传统茶具, 提供持续的恢复效果",
    images: {
      idle: "@/assets/images/plants/samovar/idle.webp",
      walk: null,
      attack: null,
      death: null,
    },
  };

  return new Samovar(defaultInput);
}

export { getSamovar, Samovar };
