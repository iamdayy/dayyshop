<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/outline";
defineProps({
  products: Array<any>,
});
</script>
<template>
  <div class="flex overflow-x-auto space-x-8 no-scrollbar">
    <slot />
    <section
      class="flex-shrink-0 w-1/6 border-purple-300 bg-[url('https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg')] bg-cover rounded-lg"
    >
      <span>
        <a href="href" class="group">
          <div
            class="h-full overflow-hidden rounded-lg backdrop-blur-sm bg-opacity-20 hover:backdrop-blur-none bg-slate-500 p-3 px-4 flex flex-col justify-center"
          >
            <h3 class="mt-4 text-2xl">More Products...</h3>
            <ArrowRightIcon class="h-12 w-12 ml-24"></ArrowRightIcon>
          </div> </a
      ></span>
    </section>
  </div>
</template>
<style scoped></style>
