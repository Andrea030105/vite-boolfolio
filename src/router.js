// src/router.js
import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ProjectMain from "./pages/ProjectMain.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/blog",
      name: "projectMain",
      component: ProjectMain,
    },
  ],
});

export { router };
