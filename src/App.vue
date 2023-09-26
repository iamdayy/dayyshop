<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import useProductStore from "./stores/products";
import products from "./assets/products";

const product = useProductStore();
onMounted(() => {
  initFlowbite();
  product.products = products;
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
