export interface I_Lifeform {
  // 当前生命值
  health: number;
  // 最大生命值
  maxHealth: number;
  // 基础攻击力
  baseAttack: number;
  attack: number;
  // 攻击速度
  attackSpeed: number;
  // 基础护甲
  baseArmor: number;
  // 护甲
  armor: number;
  // 移动速度
  moveSpeed: number;
  // 获取攻击力
  getAttack: () => number;
  // 获取护甲
  getArmor: () => number;
}
