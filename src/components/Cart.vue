<script setup lang='ts'>

import { PropType } from "vue";
import useCartStore from "../stores/cart";
import { storeToRefs } from "pinia";
import { Cart } from "../types";
const product = useCartStore();
const { deleteFromCart, decrementFromCart, incrementToCart } = product
const { getSubTotal } = storeToRefs(product);
const RpCurr = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    })
defineProps({
    carts: {
        type: Array as PropType<Cart[]>,
        required: true,
    }
})
</script>
<template>
    <div v-if="carts.length > 0" class="w-full">
        <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div class="mt-8">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                <li v-for="(product, i) in carts" :key="i" class="flex py-6">
                  <div
                    class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                  >
                    <img
                      :src="product.imageSrc"
                      :alt="product.imageAlt"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
    
                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div
                        class="flex justify-between text-base font-medium text-gray-900 dark:text-gray-100"
                      >
                        <h3>
                          <a :href="product.href">{{ product.name }}</a>
                        </h3>
                        <p class="ml-4">{{ RpCurr.format(product.price) }}</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">{{ product.color }}</p>
                    </div>
                    <div class="flex flex-2 items-end justify-between text-sm">
                      <p class="text-gray-500 dark:text-gray-100">Qty <span class="mx-2 text-lg cursor-pointer" @click="decrementFromCart(product.id)">-</span>{{ product.quantity }} <span class="mx-2 text-lg cursor-pointer" @click="incrementToCart(product.id)">+</span></p>
    
                      <div class="flex">
                        <button
                          type="button"
                          @click="deleteFromCart(product.id)"
                          class="font-medium text-red-600 hover:text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
        <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200">
            <p>Subtotal</p>
            <p>{{ RpCurr.format(getSubTotal) }}</p>
          </div>
          <slot name="footer" />
        </div>
    </div>
</template>
<style scoped></style>