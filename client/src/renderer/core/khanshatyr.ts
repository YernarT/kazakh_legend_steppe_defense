// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_PlantAttributes } from "@/typing/plant";
// Core
import { Plant } from "@/core/plant";

class Khanshatyr extends Plant {
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

function getKhanshatyr() {
  const defaultInput: I_LifeformAttributes & I_PlantAttributes = {
    health: 100,
    maxHealth: 100,
    baseAttack: 100,
    baseArmor: 10,
    attackSpeed: 1,
    moveSpeed: 0,
    code: "khanshatyr",
    name: "Ханшатыр",
    cost: 300,
    description: "可汗之帐, 集攻防于一体",
    images: {
      idle: "@/assets/images/plants/khanshatyr/idle.jpg",
      walk: null,
      attack: null,
      death: null,
    },
  };

  return new Khanshatyr(defaultInput);
}

export { getKhanshatyr, Khanshatyr };
