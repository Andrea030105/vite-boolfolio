// src/router.js
import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ProjectMain from "./pages/ProjectMain.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";

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
    {
      path: "/blog/:slug",
      name: "singleProject",
      component: SingleProject,
    },
    {
      path: "/*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
