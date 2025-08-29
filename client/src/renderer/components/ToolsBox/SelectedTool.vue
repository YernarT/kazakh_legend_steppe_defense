<template>
  <div
    class="selected-tool"
    :style="{
      transform: `translate(${mousePosition.pageX}px, ${mousePosition.pageY}px)`,
    }"
  >
    <img
      v-show="plantStore.selectedTool"
      class="selected-tool-img"
      :src="plantStore.selectedTool?.images.idle"
      :alt="plantStore.selectedTool?.name"
    />
  </div>
</template>

<script setup lang="ts">
// Store
import { usePlantStore } from "@/store/usePlantStore";
// Hooks
import { useMouse } from "vue-hooks-plus";

const plantStore = usePlantStore();
const mousePosition = useMouse();
</script>

<style scoped lang="scss">
.selected-tool {
  width: 108px;
  height: 128px;
  pointer-events: none;
  @include positioned($position: fixed, $top: 0, $left: 0);

  &-img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
}
</style>
