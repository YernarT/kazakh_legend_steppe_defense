import type { I_Plant } from "@/typing/plant";

import { getBaiterek } from "@/core/plants/baiterek";
import { getKhanshatyr } from "@/core/plants/khanshatyr";
import { getDombra } from "@/core/plants/dombra";
import { getKobyz } from "@/core/plants/kobyz";
import { getFeltHouse } from "@/core/plants/felt-house";
import { getRug } from "@/core/plants/rug";
import { getSamovar } from "@/core/plants/samovar";
import { getEagle } from "@/core/plants/eagle";

export function getPlant(code: I_Plant["code"]): I_Plant | null {
  switch (code) {
    case "baiterek":
      return getBaiterek();
    case "khanshatyr":
      return getKhanshatyr();
    case "dombra":
      return getDombra();
    case "kobyz":
      return getKobyz();
    case "felt-house":
      return getFeltHouse();
    case "rug":
      return getRug();
    case "samovar":
      return getSamovar();
    case "eagle":
      return getEagle();
    default:
      return null;
  }
}
