<template>
  <main class="game-view">
    <ToolsBox :plants="plants" />
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
// Core
import {
  getBaiterek,
  getKhanshatyr,
  getDombra,
  getKobyz,
  getFeltHouse,
  getRug,
  getSamovar,
  getEagle,
} from "@/core";
// Hooks
import { useCanvas } from "@/core/canvas/useCanvas";
// Components
import ToolsBox from "@/components/ToolsBox/index.vue";
// Assets
import Assets_Background_1 from "@/assets/images/background-1.svg";

const plants = ref<I_Plant[]>([]);

const { Ref_Canvas, ctx } = useCanvas();

async function loadPlants() {
  plants.value = [
    await getBaiterek().ready,
    await getKhanshatyr().ready,
    await getDombra().ready,
    await getKobyz().ready,
    await getFeltHouse().ready,
    await getRug().ready,
    await getSamovar().ready,
    await getEagle().ready,
  ];
}

onMounted(() => {
  loadPlants();
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
