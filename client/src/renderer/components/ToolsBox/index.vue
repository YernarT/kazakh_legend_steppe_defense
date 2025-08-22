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

       </div>
    </div>
    <!-- 铲子 之类的 -->
    <div class="additional"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.tools-box {
  @include flex;

  .standart {
    border: 4px solid rgb(152, 70, 23);
    border-radius: var(--border-radius);
    background-color: rgb(106, 49, 19);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);
    @include flex;

    .sun-block {
      padding: 8px 16px;

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
        }
      }

      .score-box {
        margin-block-start: 8px;
        color: rgb(51, 37, 9);
        font-weight: bold;
        padding: 2px 6px;
        border-radius: var(--border-radius-small);
        background-color: rgb(248, 233, 186);
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.8);
        @include flexCenter;
      }
    }
  }

  .additional {
    @include flexCenter;
  }
}
</style>
