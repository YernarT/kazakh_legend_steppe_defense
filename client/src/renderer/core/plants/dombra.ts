// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_PlantAttributes } from "@/typing/plant";
// Core
import { Plant } from "@/core/plant";
// Assets
import idle from "@/assets/images/plants/dombra/idle.png";

class Dombra extends Plant {
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

function getDombra() {
  const defaultInput: I_LifeformAttributes & I_PlantAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
    code: "dombra",
    name: "Домбра",
    cost: 100,
    description: "哈萨克传统乐器, 产生音波攻击敌人",
    images: {
      idle,
      walk: null,
      attack: null,
      death: null,
    },
  };

  return new Dombra(defaultInput);
}

export { getDombra, Dombra };
