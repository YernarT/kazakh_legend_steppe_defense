<template>
  <div class="plant-card">
    <div class="img-block">
      <img class="plant-card-img" :src="plant.images.idle" :alt="plant.name" />
    </div>

    <div class="cost-block">
      <div class="cost">{{ plant.cost }}</div>
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
  background-color: #fff;
  border-radius: var(--border-radius-small);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  @include flex($direction: column);

  .img-block {
    width: 108px;
    height: 128px;
    padding: 4px;
    border-radius: var(--border-radius-small);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    @include flexCenter;

    .plant-card-img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--border-radius-small);
    }
  }

  .cost-block {
    width: 100%;
    padding: 2px 6px;
    @include flexCenter;

    .cost {
      color: rgb(51, 37, 9);
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
