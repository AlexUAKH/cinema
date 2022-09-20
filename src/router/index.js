import { createRouter, createWebHistory } from "vue-router";
import roiutes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: roiutes,
});

router.beforeEach(async (to, from, next) => {
  console.log("rooo: ", to.meta.title);
  if (to.meta.title) {
    document.title = `Cinema - ${to.meta.title}`;
  }
  return next();
});

export default router;
