// Types
import type { I_LifeformAttributes } from "@/typing/lifeform";
import type { I_Plant, I_PlantAttributes } from "@/typing/plant";
// Core
import { Lifeform } from "@/core/lifeform";

export abstract class Plant extends Lifeform implements I_Plant {
  name!: I_Plant["name"];
  code!: I_Plant["code"];
  cost!: I_Plant["cost"];
  images!: I_Plant["images"];
  description!: I_Plant["description"];
  ready!: I_Plant["ready"];

  constructor(input: I_LifeformAttributes & I_PlantAttributes) {
    super(input);
    this.ready = (async () => this.initAttributes(input))();
  }

  async initAttributes(input: I_LifeformAttributes & I_PlantAttributes) {
    this.code = input.code;
    this.name = input.name;
    this.cost = input.cost;
    this.description = input.description;
    this.images = {
      idle: input.images.idle,
      walk: input.images.walk,
      attack: input.images.attack,
      death: input.images.death,
    };

    return this;
  }
}
