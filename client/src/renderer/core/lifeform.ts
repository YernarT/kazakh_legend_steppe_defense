import type { I_Lifeform } from "@/typing/lifeform";

export abstract class Lifeform implements I_Lifeform {
  health: number;
  maxHealth: number;
  baseAttack: number;
  baseArmor: number;
  attackSpeed: number;
  moveSpeed: number;

  constructor(input: I_Lifeform) {
    this.health = input.health;
    this.maxHealth = input.maxHealth;
    this.baseAttack = input.baseAttack;
    this.baseArmor = input.baseArmor;
    this.attackSpeed = input.attackSpeed;
    this.moveSpeed = input.moveSpeed;
  }

  get attack() {
    return this.getAttack();
  }

  get armor() {
    return this.getArmor();
  }

  abstract getAttack(): number;
  abstract getArmor(): number;
}

// const lifeform = new Lifeform({health: 100, maxHealth: 1000, base});
