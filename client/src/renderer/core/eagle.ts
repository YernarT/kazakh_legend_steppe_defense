// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_PlantAttributes } from "@/typing/plant";
// Core
import { Plant } from "@/core/plant";
// Assets
import idle from "@/assets/images/plants/eagle/idle.png";

class Eagle extends Plant {
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

function getEagle() {
  const defaultInput: I_LifeformAttributes & I_PlantAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
    code: "eagle",
    name: "Бүркіт",
    cost: 150,
    description: "哈萨克传说中的鹰, 精准打击敌人",
    images: {
      idle,
      walk: null,
      attack: null,
      death: null,
    },
  };

  return new Eagle(defaultInput);
}

export { getEagle, Eagle };
