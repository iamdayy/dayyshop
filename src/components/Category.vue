<template>
  <div class="min-h-screen text-gray-700 dark:text-white">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
    >
      <div class="py-8">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Categories
        </h2>

        <dl
          class="mt-16 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gapy-10 lg:gap-x-8"
        >
          <div
            v-for="(category, i) in categories"
            :key="i"
            class="pt-1 border-t border-gray-300"
          >
            <a
              class="hover:bg-gray-600 bg-opacity-10 block rounded-md cursor-pointer p-2"
              @mouseenter="hover(category.title)"
            >
              <dt class="font-medium">{{ category.title }}</dt>
              <!-- <dd class="mt-2 text-sm">{{ feature.description }}</dd> -->
            </a>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img
          v-for="image, i in images"
          :key="i"
          :src="image"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          class="rounded-lg bg-gray-500 dark:bg-gray-100 shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useProductStore from "../stores/products";
import { ref } from "vue";
import { storeToRefs } from "pinia";
const product = useProductStore();


const categories = storeToRefs(product).getCategoryProduct;
const category = ref<string>("Shirt");
let images = ref(storeToRefs(product).getRandomCategoryImage.value(category.value, 4))
const hover = (cat: string) => {
  category.value = cat;
  images.value = storeToRefs(product).getRandomCategoryImage.value(category.value, 4);
};
</script>
