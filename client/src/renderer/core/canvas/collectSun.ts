export function collectSun(sunDom: HTMLImageElement) {
  const sunInBox = document.querySelector(".sun-box > .sun-img");
  const { top, left } = sunInBox!.getBoundingClientRect();
  const { top: topDom, left: leftDom } = sunDom.getBoundingClientRect();
  console.log(sunInBox!.getBoundingClientRect());

  sunDom.style.animation = "none";
  sunDom.style.pointerEvents = "none";

  sunDom.style.position = "fixed";
  sunDom.style.top = `${topDom}px`;
  sunDom.style.left = `${leftDom}px`;

  setTimeout(() => {
    sunDom.style.top = `${top}px`;
    sunDom.style.left = `${left}px`;
  }, 0);
}
