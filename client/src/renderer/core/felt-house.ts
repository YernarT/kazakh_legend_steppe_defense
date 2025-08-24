// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_Plant } from "@/typing/plant";
// Core
import { Lifeform } from "@/core/lifeform";

class FeltHouse extends Lifeform implements I_Plant {
  name!: I_Plant["name"];
  code!: I_Plant["code"];
  cost!: I_Plant["cost"];
  images!: I_Plant["images"];
  description!: I_Plant["description"];
  ready!: I_Plant["ready"];

  constructor(input: I_LifeformAttributes) {
    super(input);
    this.ready = (async () => this.initAttributes())();
  }

  async initAttributes() {
    this.code = "feltHouse";
    this.name = "Кигіз-үй";
    this.cost = 75;
    this.description = "哈萨克传统建筑, 提供固若金汤的防御";
    this.images = {
      idle: (await import("@/assets/images/plants/felt-house/idle.jpg"))
        .default,
      walk: null,
      attack: null,
      death: null,
    };

    return this;
  }

  getAttack(): number {
    return this.baseAttack;
  }

  getArmor(): number {
    return this.baseArmor;
  }
}

function getFeltHouse() {
  const defaultInput: I_LifeformAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
  };

  return new FeltHouse(defaultInput);
}

export { getFeltHouse, FeltHouse };
