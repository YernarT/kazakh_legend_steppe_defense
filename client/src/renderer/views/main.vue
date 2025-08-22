<template>
  <main class="main-view">
    <div class="stage-list">
      <div v-for="stage in Object.keys(GAME_LEVELS)" class="stage" :key="stage">
        <div class="stage-title">Level {{ stage }}</div>

        <div class="level-list">
          <div
            class="level"
            v-for="level in GAME_LEVELS[stage]"
            :key="level"
            @click="$router.push(`/game/${level}`)"
          >
            {{ level }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Constants
import { GAME_LEVELS } from "@/constants/game-levels";
</script>

<style scoped lang="scss">
.main-view {
  width: 100dvw;
  height: 100dvh;
  background-color: #1a1a1a;
  @include flexCenter();

  .stage-list {
    @include flex($direction: column);

    .stage {
      margin-block-end: 16px;

      .stage-title {
        font-size: 20px;
        margin-block-end: 8px;
      }
    }
  }

  .level-list {
    @include flex($gap: 16px, $wrap: wrap);

    .level {
      padding: 6px 16px;
      border: 1px solid var(--c-text);
      border-radius: var(--border-radius);
      @include flexCenter();
    }
  }
}
</style>
