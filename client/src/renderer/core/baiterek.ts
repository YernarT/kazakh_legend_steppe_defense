// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_PlantAttributes } from "@/typing/plant";
// Core
import { Plant } from "@/core/plant";
// Assets
import idle from "@/assets/images/plants/baiterek/idle.png";

class Baiterek extends Plant {
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

function getBaiterek() {
  const defaultInput: I_LifeformAttributes & I_PlantAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
    code: "baiterek",
    name: "Бәйтерек",
    cost: 100,
    description: "哈萨克传说中的生命之树，代表生命于希望",
    images: {
      idle,
      walk: null,
      attack: null,
      death: null,
    },
  };

  return new Baiterek(defaultInput);
}

export { getBaiterek, Baiterek };
