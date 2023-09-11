<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import useProductStore from "./stores/products";
import products from "./assets/products";

const product = useProductStore();
onMounted(() => {
  initFlowbite();
  product.products = products;
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
