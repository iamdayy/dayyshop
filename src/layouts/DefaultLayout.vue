<script setup lang="ts">
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import { Route } from "../types";
import { ref } from "vue";

const routes = ref<Route[]>([
  {
    path: "/",
    name: "Home",
    title: "Home",
  },
  {
    path: "/product",
    name: "Products",
    title: "Product",
  },
  {
    path: "/blogs",
    name: "Blogs",
    title: "Blog",
  },
]);
</script>
<template>
  <NavBar :routes="routes"></NavBar>
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>
<style scoped></style>
