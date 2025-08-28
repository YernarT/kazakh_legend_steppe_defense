// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_PlantAttributes } from "@/typing/plant";
// Core
import { Plant } from "@/core/plant";
// Assets
import idle from "@/assets/images/plants/rug/idle.png";

class Rug extends Plant {
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

function getRug() {
  const defaultInput: I_LifeformAttributes & I_PlantAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
    code: "rug",
    name: "Кілем",
    cost: 175,
    description: "哈萨克传统家具, 鸿门宴必备",
    images: {
      idle,
      walk: null,
      attack: null,
      death: null,
    },
  };

  return new Rug(defaultInput);
}

export { getRug, Rug };
