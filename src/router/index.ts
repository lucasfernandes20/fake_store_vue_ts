import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomePage from "@/pages/HomePage/HomePage.vue";
import CheckoutPage from "@/pages/CheckoutPage/CheckoutPage.vue";
import ShopPage from "@/pages/ShopPage/ShopPage.vue";
import LoginPage from "@/pages/LoginPage/LoginPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomePage },
  { path: "/checkout", component: CheckoutPage },
  // { path: "/shop", component: ShopPage },
  { path: "/shop", component: ShopPage },
  {
    path: "/login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
