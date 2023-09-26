<script setup lang="ts">
import { PropType, ref } from "vue";
import { Product } from "../types";
import { ShoppingCartIcon } from "@heroicons/vue/outline";
import useCartStore from "../stores/cart";

const RpCurr = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    })
const { addToCart } = useCartStore();
const added = ref<boolean>(false);
const add = (product: Product) => {
  addToCart(product);
  added.value = true;
}
defineProps({
  isGrid: Boolean,
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>
<template>
  <div :class="`group relative bg-slate-400 bg-opacity-20 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden ${!isGrid ? 'flex space-x-12' : ''}`">
    <div
      :class="`aspect-square aspect-w-1 ${
        isGrid ? 'w-full' : 'w-1/6'
      } overflow-hidden bg-gray-200 group-hover:opacity-75 align-middle`"
    >
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="object-cover"
      />
    </div>
    <div class="mt-4 flex justify-between w-full p-2">
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
      <div class="flex flex-col items-end gap-1">
        <p class="text-sm font-medium">{{ RpCurr.format(product.price) }}</p>
        <button
          type="button"
          @click="add(product)"
          class="relative z-10 text-white ring- ring-gray-100 hover:ring-gray-300 hover:text-gray-300 font-medium rounded-xl text-sm justify-self-end p-1.5 text-center inline-flex items-center"
        >
          <ShoppingCartIcon class="w-5 h-5 mx-auto"
          :class="added ? 'add' : ''" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.add {
  animation: add 1s ease-in-out backwards;
  transform: translateY(0);
}

@keyframes add {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-40px);
    opacity: 0;
  }
}
</style>
