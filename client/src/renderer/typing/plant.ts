import { I_Lifeform } from "@/typing/lifeform";

export interface I_Plant extends I_Lifeform {
  code: string;
  name: string;
  description: string;
  images: Record<string, string | null>;
  cost: number;
  ready: Promise<I_Plant>;
}
