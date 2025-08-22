export default [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/main.vue"),
  },
  {
    path: "/wiki",
    name: "wiki",
    component: () => import("@/views/wiki.vue"),
  },
  {
    path: "/game/:id",
    name: "game",
    component: () => import("@/views/game.vue"),
  },
];
