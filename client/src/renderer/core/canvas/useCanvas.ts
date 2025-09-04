// Vue
import { ref, computed, useTemplateRef, onMounted, nextTick } from "vue";
// Store
import { usePlantStore } from "@/store/usePlantStore";
// Hooks
import { useDebounceFn, useEventListener } from "vue-hooks-plus";
// Core
import { Plant } from "@/core/plant";
import { putPlant } from "@/core/canvas/putPlant";

export function useCanvas() {
  const Ref_Canvas = useTemplateRef<HTMLCanvasElement>("Ref_Canvas");
  const ctx = ref<CanvasRenderingContext2D | null>(null);
  const bgImgElement = ref<HTMLImageElement | null>(null);
  // 草坪面积
  const MAP_ROWS = 5;
  const MAP_COLS = 9;
  // 草坪尺寸
  const cellWidth = computed(() => Ref_Canvas.value!.width / MAP_COLS);
  const cellHeight = computed(() => Ref_Canvas.value!.height / MAP_ROWS);
  // 草坪区域占背景的比例（根据原图测量）
  const lawnRatio = {
    x: 0.18, // 草坪左边界比例
    y: 0.13, // 草坪上边界比例
    w: 0.53, // 草坪宽度比例
    h: 0.86, // 草坪高度比例
  };

  async function init(): Promise<void> {
    if (!Ref_Canvas.value) return nextTick(init);
    ctx.value = Ref_Canvas.value.getContext("2d");

    // 获取背景图片元素
    if (!bgImgElement.value) {
      const parentElement = Ref_Canvas.value!.parentElement;
      bgImgElement.value = (parentElement?.querySelector("[data-bg-img]") ??
        null) as HTMLImageElement | null;
    }

    if (!bgImgElement.value) return nextTick(init);

    function setCanvasSize() {
      // 设置 canvas 尺寸和位置
      Ref_Canvas.value!.width = bgImgElement.value!.width * lawnRatio.w;
      Ref_Canvas.value!.height = bgImgElement.value!.height * lawnRatio.h;
      Ref_Canvas.value!.style.position = "absolute";
      Ref_Canvas.value!.style.left =
        bgImgElement.value!.width * lawnRatio.x + "px";
      Ref_Canvas.value!.style.top =
        bgImgElement.value!.height * lawnRatio.y + "px";
      Ref_Canvas.value!.style.border = "4px dashed red";

      // 设置 CSS 变量
      document.documentElement.style.setProperty(
        "--canvas-width",
        `${Ref_Canvas.value!.width}px`
      );
      document.documentElement.style.setProperty(
        "--canvas-height",
        `${Ref_Canvas.value!.height}px`
      );
      document.documentElement.style.setProperty(
        "--cell-width",
        `${cellWidth.value}px`
      );
      document.documentElement.style.setProperty(
        "--cell-height",
        `${cellHeight.value}px`
      );
    }

    bgImgElement.value.complete
      ? setCanvasSize()
      : (bgImgElement.value.onload = setCanvasSize);
  }

  function drawCell() {
    ctx.value!.strokeStyle = "red";
    for (let row = 0; row < MAP_ROWS; row++) {
      for (let col = 0; col < MAP_COLS; col++) {
        ctx.value!.strokeRect(
          col * cellWidth.value,
          row * cellHeight.value,
          cellWidth.value,
          cellHeight.value
        );
      }
    }
  }

  // 监控屏幕变化, 重新渲染 Canvas, flush 不起作用..
  const { run: renderCanvas } = useDebounceFn(async () => {
    await init();
    drawCell();
  });
  useEventListener("resize", renderCanvas);
  onMounted(renderCanvas);

  const plantStore = usePlantStore();

  async function handleClick(e: MouseEvent) {
    if (!plantStore.selectedTool) return;
    if (!Ref_Canvas.value) return;

    const canvasRect = Ref_Canvas.value.getBoundingClientRect();

    // 检查点击是否在 canvas 范围内
    const isWithinCanvas =
      e.clientX >= canvasRect.left &&
      e.clientX <= canvasRect.right &&
      e.clientY >= canvasRect.top &&
      e.clientY <= canvasRect.bottom;

    if (isWithinCanvas) {
      // 计算相对于 canvas 的坐标
      const relativeX = e.clientX - canvasRect.left;
      const relativeY = e.clientY - canvasRect.top;

      // 计算点击的网格位置
      const col = Math.floor(relativeX / cellWidth.value);
      const row = Math.floor(relativeY / cellHeight.value);

      // 确保索引在有效范围内
      if (col >= 0 && col < MAP_COLS && row >= 0 && row < MAP_ROWS) {
        if (plantStore.selectedTool instanceof Plant) {
          await putPlant({
            ctx: ctx.value!,
            plant: plantStore.selectedTool,
            row,
            col,
            cellWidth: cellWidth.value,
            cellHeight: cellHeight.value,
          });
          plantStore.lawn[row][col] = plantStore.selectedTool;
          plantStore.selectedTool = null;
        }
      }
    }
  }

  useEventListener("click", handleClick);

  return {
    Ref_Canvas,
    ctx,
  };
}
