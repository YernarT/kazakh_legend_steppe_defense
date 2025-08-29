<template>
  <div class="tools-box">
    <!-- 阳光 和 植物 -->
    <div class="standart">
      <!-- 阳光 -->
      <div class="sun-block">
        <div class="sun-box">
          <img class="sun-img" src="@/assets/images/sun.png" alt="Sun" />
        </div>
        <div class="score-box">650</div>
      </div>

      <!-- 植物列表 -->
      <div class="plant-list">
        <PlantCard
          v-for="plant in plantStore.plants"
          :key="plant.code"
          :plant="plant"
          @click="handleClickPlantCard"
        />
      </div>
    </div>
    <!-- 铲子 之类的 -->
    <div class="additional">
      <div class="shovel-block">
        <img
          class="shovel-img"
          src="@/assets/images/tools/shovel-1.svg"
          alt="Shovel"
        />
      </div>
    </div>
  </div>

  <SelectedTool />
</template>

<script setup lang="ts">
// Types
import type { I_Plant } from "@/typing/plant";
// Vue
import { onMounted } from "vue";
// Store
import { usePlantStore } from "@/store/usePlantStore";
// Components
import PlantCard from "@/components/ToolsBox/PlantCard.vue";
import SelectedTool from "@/components/ToolsBox/SelectedTool.vue";

const plantStore = usePlantStore();

async function loadPlants() {
  await plantStore.addPlant("baiterek");
  await plantStore.addPlant("khanshatyr");
  await plantStore.addPlant("dombra");
  await plantStore.addPlant("kobyz");
  await plantStore.addPlant("felt-house");
  await plantStore.addPlant("rug");
  await plantStore.addPlant("samovar");
  await plantStore.addPlant("eagle");
}

onMounted(() => {
  loadPlants();
});

function handleClickPlantCard(plant: I_Plant) {
  plantStore.selectedTool = plant;
}
</script>

<style scoped lang="scss">
.tools-box {
  width: 100%;
  @include flex($alignItems: center);

  .standart {
    border: 4px solid rgb(152, 70, 23);
    border-radius: var(--border-radius);
    background-color: rgb(106, 49, 19);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);
    overflow: hidden;
    @include flex;

    .sun-block {
      height: 175px;
      padding: 8px 16px;
      border-inline-end: 4px solid rgb(152, 70, 23);
      @include flexCenter($direction: column, $gap: 12px);

      .sun-box {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 4px solid rgb(152, 70, 23);
        background-color: rgb(106, 49, 19);
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);
        @include flexCenter;

        .sun-img {
          width: 40px;
          height: 37px;
          object-fit: cover;
          filter: drop-shadow(0 0 4px rgba(255, 247, 0, 0.8));
        }
      }

      .score-box {
        color: rgb(51, 37, 9);
        font-weight: bold;
        padding: 2px 6px;
        border-radius: var(--border-radius-small);
        background-color: rgb(248, 233, 186);
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);
        @include flexCenter;
      }
    }

    .plant-list {
      /* --c-scrollbar: rgb(152, 70, 23);
      --c-scrollbar-bg: rgb(99, 37, 4); */

      padding: 8px;
      overflow: auto;
      @include useScroll($type: none);
      @include flex($gap: 4px);
    }
  }

  .additional {
    flex-shrink: 0;
    margin-inline-start: 8px;
    border: 8px solid rgb(152, 70, 23);
    border-radius: var(--border-radius);
    background-color: rgb(106, 49, 19);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);
    @include flexCenter;
  }
}
</style>
