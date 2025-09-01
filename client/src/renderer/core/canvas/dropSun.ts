// Assets
import sunPng from "@/assets/images/sun.png";

interface I_PutPlantOptions {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
}

/**
 * 日落函数
 * @param {I_PutPlantOptions} param0 参数
 * @param {I_PutPlantOptions} param0.ctx 画布上下文
 * @param {I_PutPlantOptions} param0.x 阳光 x 坐标
 * @param {I_PutPlantOptions} param0.y 阳光 y 坐标
 * @returns {void} 无返回值
 */
export function dropSun({ ctx, x, y }: I_PutPlantOptions) {
  const sunImage = new Image();
  sunImage.src = sunPng;
  sunImage.style.cssText = `
  position: absolute;
  top: ${y}px;
  left: ${x}px;
  z-index: 50;
  animation: dropSun 10s linear forwards;

  width: 60px;
  height: 57px;
  object-fit: cover;
  filter: drop-shadow(0 0 4px rgba(255, 247, 0, 0.8));
  `;

  sunImage.onload = () => {
    ctx.canvas.parentElement?.appendChild(sunImage);
  };
  sunImage.onanimationend = () => {
    // TODO: 阳光落地了，还未被收集。3 秒后移除阳光。
    sunImage.style.transform = "translateY(var(--canvas-height))";
    sunImage.style.animation = "sunBlink 3s linear infinite";
  };
}
