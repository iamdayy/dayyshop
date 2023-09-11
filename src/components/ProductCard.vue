<script setup lang="ts">
import { PropType } from "vue";
import { Product } from "../types";
import useCartStore from "../stores/cart";

const { addToCart } = useCartStore();

defineProps({
  isGrid: Boolean,
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>
<template>
  <div :class="`group relative ${!isGrid ? 'flex space-x-12' : ''}`">
    <div
      :class="`aspect-h-1 aspect-w-1 ${
        isGrid ? 'w-full' : 'w-1/6'
      } overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75`"
    >
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <div class="mt-4 flex justify-between w-full">
      <div class="whitespace-nowrap overflow-hidden">
        <h3 class="text-sm text-ellipsis overflow-hidden">
          <a :href="product.href">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.name + product.id }}
            <!-- <p class="overflow-hidden text-ellipsis">
                  </p> -->
          </a>
        </h3>
        <p class="mt-1 text-sm">{{ product.color }}</p>
      </div>
      <div>
        <p class="text-sm font-medium">{{ product.price }}</p>
        <button
          type="button"
          @click="addToCart(product)"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path
              d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
