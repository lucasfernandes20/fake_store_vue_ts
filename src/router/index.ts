import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage/HomePage.vue";
import CheckoutPage from "@/pages/CheckoutPage/CheckoutPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/checkout", component: CheckoutPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
