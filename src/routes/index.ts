import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HomeView from "../views/Home.vue";
import ProductsView from "../views/Products.vue";
import BlogsView from "../views/Blogs.vue";
import OrderView from "../views/order.vue"
const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "/product",
        name: "Products",
        component: ProductsView,
      },
      {
        path: "/blogs",
        name: "Blogs",
        component: BlogsView,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    component: OrderView,
  }
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
