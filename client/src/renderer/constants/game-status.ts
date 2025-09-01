import type { T_GameStatus } from "@/typing/game-status";

export const GAME_STATUS: Record<T_GameStatus, T_GameStatus> = {
  playing: "playing",
  paused: "paused",
  win: "win",
  lost: "lost",
};
