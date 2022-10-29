import { createRouter, createWebHistory } from "vue-router";
import FilmeView from "@/views/FilmeView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/Filme", name: "Filme", component: FilmeView },
    {path: "/", name: "Home", component: HomeView },
  ],
});

export default router;
