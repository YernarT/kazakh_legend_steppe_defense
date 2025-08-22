<template>
  <div class="plant-card">
    <img class="plant-card-img" :src="plant.image" :alt="plant.name" />

    <div class="cost-block">
      <div class="cost">100</div>
      <img class="sun-img" src="@/assets/images/sun.png" alt="Sun" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Types
import type { I_Plant } from "@/typing/plant";

const props = defineProps<{ plant: I_Plant }>();
</script>

<style scoped lang="scss">
.plant-card {
  width: 100px;
  height: 220px;
  background-color: #eeeeee;
  border-radius: var(--border-radius-small);
  border: 2px solid #eeeeee;
  border-block-start-width: 6px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);
  @include flex($direction: column);

  .plant-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cost-block {
    padding: 2px 6px;
    @include flex($justifyContent: center, $alignItems: center, $gap: 8px);

    .cost {
      font-weight: bold;
    }

    .sun-img {
      width: 30px;
      height: 27px;
      object-fit: cover;
    }
  }
}
</style>
