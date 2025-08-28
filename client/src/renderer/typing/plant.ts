import { I_Lifeform } from "@/typing/lifeform";

interface I_PlantImages {
  idle: string;
  walk: string | null;
  attack: string | null;
  death: string | null;
}

export interface I_PlantAttributes {
  code: string;
  name: string;
  description: string;
  images: I_PlantImages;
  cost: number;
}

export interface I_Plant extends I_PlantAttributes, I_Lifeform {
  ready: Promise<I_Plant>;
}
