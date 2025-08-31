import type { I_Plant } from "@/typing/plant";

interface I_PutPlantOptions {
  ctx: CanvasRenderingContext2D;
  plant: I_Plant;
  row: number;
  col: number;
  cellWidth: number;
  cellHeight: number;
}

export function putPlant({
  ctx,
  plant,
  row,
  col,
  cellWidth,
  cellHeight,
}: I_PutPlantOptions) {
  fetch(plant.images.idle)
    .then((response) => response.blob())
    .then((blob) => createImageBitmap(blob))
    .then((imageBitmap) => {
      // 对图片进行缩放, 不超过单元格尺寸
      const scale = Math.min(
        cellWidth / imageBitmap.width,
        cellHeight / imageBitmap.height,
        1
      );
      const width = imageBitmap.width * scale;
      const height = imageBitmap.height * scale;
      ctx.drawImage(
        imageBitmap,
        col * cellWidth + (cellWidth - width) / 2,
        row * cellHeight + (cellHeight - height) / 2,
        width,
        height
      );
    });
}
