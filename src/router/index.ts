import { createRouter, createWebHistory } from "vue-router";

export enum ROUTE_NAME {
  ABOUT_ME = "ABOUT_ME",
  MY_SKILLS = "MY_SKILLS",
  HISTORY = "HISTORY",
  ACADEMIC = "ACADEMIC",
  PROJECTS = "PROJECTS",
  CONTACTS = "CONTACTS",
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
      path: "/skills",
      name: ROUTE_NAME.MY_SKILLS,
      meta: { title: "Skills" },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/history",
      name: ROUTE_NAME.HISTORY,
      meta: { title: "History" },
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
      path: "/contacts",
      name: ROUTE_NAME.CONTACTS,
      meta: { title: "Contacts" },
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
