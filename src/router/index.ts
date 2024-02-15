import { createRouter, createWebHistory } from "vue-router";

export enum ROUTE_NAME {
  ABOUT_ME = "ABOUT_ME",
  CAREER = "CAREER",
  ACADEMIC = "ACADEMIC",
  PROJECTS = "PROJECTS",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: ROUTE_NAME.ABOUT_ME,
      meta: { title: "Portefolio" },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/career",
      name: ROUTE_NAME.CAREER,
      meta: { title: "Career" },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/academic",
      name: ROUTE_NAME.ACADEMIC,
      meta: { title: "Accomplisments" },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/projects",
      name: ROUTE_NAME.PROJECTS,
      meta: { title: "Projects" },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
});

router.afterEach((to) => {
  setTimeout(() => {
    document.title = `Rafael Neves | ${to.meta.title}`;
  });
});

export default router;
