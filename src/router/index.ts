import { createRouter, createWebHistory } from "vue-router";

export enum ROUTE_NAME {
  ABOUT_ME = "ABOUT_ME",
  MY_SKILLS = "MY_SKILLS",
  HISTORY = "HISTORY",
  ACADEMIC = "ACADEMIC",
  CONTACTS = "CONTACTS",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: ROUTE_NAME.ABOUT_ME,
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/skills",
      name: ROUTE_NAME.MY_SKILLS,
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/history",
      name: ROUTE_NAME.HISTORY,
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/academic",
      name: ROUTE_NAME.ACADEMIC,
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/contacts",
      name: ROUTE_NAME.CONTACTS,
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
});

export default router;
