// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_PlantAttributes } from "@/typing/plant";
// Core
import { Plant } from "@/core/plant";
// Assets
import idle from "@/assets/images/plants/felt-house/idle.jpg";

class FeltHouse extends Plant {
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

function getFeltHouse() {
  const defaultInput: I_LifeformAttributes & I_PlantAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
    code: "feltHouse",
    name: "Кигіз-үй",
    cost: 75,
    description: "哈萨克传统建筑, 提供固若金汤的防御",
    images: {
      idle,
      walk: null,
      attack: null,
      death: null,
    },
  };

  return new FeltHouse(defaultInput);
}

export { getFeltHouse, FeltHouse };
