<template>
    <div class="min-h-screen">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Categories</h2>
  
          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gapy-10 lg:gap-x-8">
            <div v-for="feature in features" :key="feature.name" class="pt-1 border-t border-gray-300">
                <a class="hover:bg-gray-600 bg-opacity-10 block rounded-md cursor-pointer p-2" @mouseover="hover">
                    <dt class="font-medium">{{ feature.name }}</dt>
                    <dd class="mt-2 text-sm">{{ feature.description }}</dd>
                </a>
            </div>
          </dl>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
          <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
          <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
          <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue';

const hover = () => {
  console.log('hover')
}
  const features = ref([
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ])
  </script>