<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/outline";
import { useSlots } from "vue";
defineProps({
  title: String,
});
const slots = useSlots();
</script>
<template>
  <!-- drawer component -->
  <div
    class="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto translate-x-full transition-transform bg-slate-600 bg-opacity-20 backdrop-blur-sm w-screen md:w-96"
  >
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-xl font-semibold"
    >
    <slot name="title" />
      <span v-if="!slots.title">{{ title }}</span>
    </h5>
    <button
      type="button"
      data-drawer-hide="drawer-example"
      aria-controls="drawer-example"
      class="bg-transparent text-gray-400 hover:text-gray-100 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
    >
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <div v-if="slots.data">
        <slot name="data" />
    </div>
    <div v-else class="text-center w-full text-orange-400">
        <ShoppingCartIcon class="w-12 h-12 mx-auto" />
        <h1 class="text-2xl font-semibold underline">There's no product</h1>
        <p>
            <button
                type="button"
                class="text-sm text-indigo-400 hover:text-indigo-100"
      data-drawer-hide="drawer-example"
      aria-controls="drawer-example"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
        </p>
    </div>
  </div>
</template>
<style scoped></style>
