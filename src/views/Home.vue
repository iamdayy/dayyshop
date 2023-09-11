<script setup lang="ts">
import Carousel from "../components/Carousel.vue";
import { onMounted } from "vue";
import jumbotrons from "../assets/jumbotron";
import posts from "../assets/blogs";
import products from "../assets/products";
import { initCarousels, initCollapses } from "flowbite";
import Category from "../components/Category.vue";
import Slider from "../components/Slider.vue";
import BlogCard from "../components/BlogCard.vue";

onMounted(() => {
  initCarousels();
  initCollapses();
});
</script>
<template>
  <Carousel :data="jumbotrons" />
  <Category />
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <h2 class="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Products</h2>
    <Slider :products="products" />
  </div>
  <div
    class="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8"
  >
    <h2 class="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Blogs</h2>
    <div class="flex overflow-x-auto space-x-8 no-scrollbar">
      <BlogCard v-for="(post, i) in posts" :key="i" :post="post" />
    </div>
  </div>
</template>
<style scoped></style>
