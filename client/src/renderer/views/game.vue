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
import { onMounted, ref } from "vue";
// Types
import type { I_Plant } from "@/typing/plant";
// Hooks
import { useCanvas } from "@/core/canvas/useCanvas";
// Components
import ToolsBox from "@/components/ToolsBox/index.vue";

const { Ref_Canvas, ctx } = useCanvas();
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
    overflow: hidden;
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
