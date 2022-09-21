import HomeView from "@/views/HomeView.vue";

export default [
  {
    path: "/",
    name: "home",
    meta: {
      title: "",
    },
    component: HomeView,
  },
  {
    path: "/:id",
    name: "movie",
    meta: {
      title: "film description",
    },
    component: () => import("@/views/MovieView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    meta: {
      title: "page not found",
    },
    component: () => import("@/views/404View.vue"),
  },
];
