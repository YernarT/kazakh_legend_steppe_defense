import { ref, useTemplateRef, onMounted, nextTick } from "vue";
import { useDebounceFn, useEventListener } from "vue-hooks-plus";

export function useCanvas() {
  const Ref_Canvas = useTemplateRef<HTMLCanvasElement>("Ref_Canvas");
  const ctx = ref<CanvasRenderingContext2D | null>(null);
  const bgImgElement = ref<HTMLImageElement | null>(null);
  const MAP_ROWS = 5;
  const MAP_COLS = 9;

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
    }

    bgImgElement.value.complete
      ? setCanvasSize()
      : (bgImgElement.value.onload = setCanvasSize);
  }

  function drawCell() {
    const cellWidth = Ref_Canvas.value!.width / MAP_COLS;
    const cellHeight = Ref_Canvas.value!.height / MAP_ROWS;

    ctx.value!.strokeStyle = "red";
    for (let row = 0; row < MAP_ROWS; row++) {
      for (let col = 0; col < MAP_COLS; col++) {
        ctx.value!.strokeRect(
          col * cellWidth,
          row * cellHeight,
          cellWidth,
          cellHeight
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

  return {
    Ref_Canvas,
    ctx,
  };
}
