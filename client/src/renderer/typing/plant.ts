import { I_Lifeform } from "@/typing/lifeform";

export interface I_Plant extends I_Lifeform {
  code: string;
  name: string;
  description: string;
  image: string;
  cost: number;
}
