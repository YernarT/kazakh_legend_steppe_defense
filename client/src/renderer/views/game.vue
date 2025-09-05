<template>
  <main class="game-view">
    <ToolsBox />
    <div class="game-area">
      <img
        data-bg-img
        class="bg-img"
        alt="Background Image"
        src="@/assets/images/background-1.svg"
      />
      <canvas ref="Ref_Canvas" class="game-canvas"></canvas>
    </div>
  </main>
</template>

<script setup lang="ts">
// Vue
import { computed, watchEffect } from "vue";
// Store
import { useSceneStore } from "@/store/useSceneStore";
// Core
import { dropSun } from "@/core/canvas/dropSun";
// Hooks
import { useCanvas } from "@/core/canvas/useCanvas";
// Components
import ToolsBox from "@/components/ToolsBox/index.vue";
// Constants
import { GAME_STATUS } from "@/constants/game-status";
// Utils
import { random } from "@/utils/random";

const sceneStore = useSceneStore();

const { Ref_Canvas, ctx } = useCanvas();

let widthOfCell = parseFloat(
  document.documentElement.style.getPropertyValue("--cell-width")
);

const startOfCanvas = computed(() => parseFloat(Ref_Canvas.value!.style.left));

function scheduleDropSun() {
  setTimeout(() => {
    const isCanvasReady =
      Ref_Canvas.value &&
      ctx.value &&
      Ref_Canvas.value.width &&
      Ref_Canvas.value.height;

    if (!isCanvasReady) scheduleDropSun();

    widthOfCell = !Number.isNaN(widthOfCell)
      ? widthOfCell
      : (widthOfCell = parseFloat(
          document.documentElement.style.getPropertyValue("--cell-width")
        ));

    const randomX = random(
      startOfCanvas.value + widthOfCell,
      startOfCanvas.value + widthOfCell * 8
    );
    const randomY = 0;

    dropSun({ ctx: ctx.value!, x: randomX, y: randomY });
    scheduleDropSun();
  }, random(2, 5) * 1000);
}

watchEffect(() => {
  const isDay = sceneStore.isDay;
  const isPlaying = sceneStore.gameStatus === GAME_STATUS.playing;

  // 白天在游戏中随机掉落阳光
  if (isDay && isPlaying) {
    scheduleDropSun();
  }
});
</script>

<style scoped lang="scss">
.game-view {
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow: hidden;
  @include flex($direction: column, $gap: 16px);

  .game-area {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    position: relative;

    .bg-img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
    }
  }
}
</style>
