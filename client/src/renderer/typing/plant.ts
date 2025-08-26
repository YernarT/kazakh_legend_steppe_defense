import { I_Lifeform } from "@/typing/lifeform";

export interface I_PlantAttributes {
  code: string;
  name: string;
  description: string;
  images: Record<string, string | null>;
  cost: number;
}

export interface I_Plant extends I_PlantAttributes, I_Lifeform {
  ready: Promise<I_Plant>;
}
