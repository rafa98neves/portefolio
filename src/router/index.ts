import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export enum ROUTE_NAME {
  ABOUT_ME = "ABOUT_ME",
  CAREER = "CAREER",
  ACADEMIC = "ACADEMIC",
  PROJECTS = "PROJECTS",
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        {
          path: "",
          name: ROUTE_NAME.ABOUT_ME,
          meta: { title: "Portefolio" },
          component: HomeView,
        },
        {
          path: "career",
          name: ROUTE_NAME.CAREER,
          meta: { title: "Career" },
          component: HomeView,
        },
        {
          path: "academic",
          name: ROUTE_NAME.ACADEMIC,
          meta: { title: "Accomplisments" },
          component: HomeView,
        },
        {
          path: "projects",
          name: ROUTE_NAME.PROJECTS,
          meta: { title: "Projects" },
          component: HomeView,
        },
      ],
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
