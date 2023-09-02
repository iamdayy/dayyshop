import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue"
import HomeView from "../views/Home.vue";
import ProductsView from "../views/Products.vue";

const routes: RouteRecordRaw[] = [
    {
     path: '',
     component: DefaultLayout,
     children: [
        {
            path: "",
            name: "Home",
            component: HomeView
        },
        {
            path: "/product",
            name: "Products",
            component: ProductsView
        }
     ]   
    }
];


export default createRouter({
    routes,
    history: createWebHistory()
});