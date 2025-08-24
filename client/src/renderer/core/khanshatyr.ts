// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_Plant } from "@/typing/plant";
// Core
import { Lifeform } from "@/core/lifeform";

class Khanshatyr extends Lifeform implements I_Plant {
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
    this.code = "khanshatyr";
    this.name = "Ханшатыр";
    this.cost = 300;
    this.description = "可汗之帐, 集攻防于一体";
    this.images = {
      idle: (await import("@/assets/images/plants/khanshatyr/idle.jpg"))
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

function getKhanshatyr() {
  const defaultInput: I_LifeformAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
  };

  return new Khanshatyr(defaultInput);
}

export { getKhanshatyr, Khanshatyr };
