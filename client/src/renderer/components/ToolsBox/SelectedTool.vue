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
import { useMouse, useEventListener } from "vue-hooks-plus";

const plantStore = usePlantStore();
const mousePosition = useMouse();

useEventListener("contextmenu", (e) => {
  e.preventDefault();
  plantStore.selectedTool = null;
});
</script>

<style scoped lang="scss">
.selected-tool {
  width: 108px;
  height: 128px;
  pointer-events: none;
  @include positioned(
    $position: fixed,
    $top: calc(-128px / 2),
    $left: calc(-108px / 2)
  );

  &-img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
}
</style>
