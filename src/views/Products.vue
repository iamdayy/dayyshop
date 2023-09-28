<template>
  <ProductContainer @grid="isGrid = !isGrid">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
        Customers also purchased
      </h2>

      <div
        :class="`mt-6 xl:gap-x-8 ${
          isGrid
            ? 'grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'
            : 'flex flex-col space-y-2'
        }`"
      >
        <ProductCard
          v-for="(product, i) in products"
          :key="i"
          :product="product"
          :is-grid="isGrid"
        ></ProductCard>
      </div>
    </div>
  </ProductContainer>
</template>

<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import ProductContainer from "../components/ProductContainer.vue";
import { ref } from "vue";
import products from "../assets/products";

const isGrid = ref<boolean>(true);
</script>
