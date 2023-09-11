<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/outline";
import { Route } from "../types";
import { onMounted } from "vue";
import useCartStore from "../stores/cart";
import { initDrawers } from "flowbite";
import { storeToRefs } from "pinia";
const product = useCartStore();
const { carts } = storeToRefs(product);
const props = defineProps({
  routes: Array<Route>,
});
onMounted(() => {
  initDrawers();
});
</script>
<template>
  <nav class="md:p-4 p-2 absolute w-full z-40">
    <div
      class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between md:p-4 md:px-12 p-2 bg-gray-700 border-gray-100 border backdrop-blur-xl bg-opacity-40 shadow-lg dark:bg-gray-900 md:rounded-full rounded-lg"
    >
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto order-1 md:order-none"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <ul
          class="flex flex-col md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700"
        >
          <li v-for="(item, i) in props.routes" :key="i">
            <router-link :to="{ name: item.name }">
              <a
                class="block py-2 pl-3 pr-4 md:bg-transparent border-green-400 hover:border-b md:p-0"
                :class="
                  $route.name == item.name
                    ? 'text-green-400 border-b'
                    : 'text-white border-0'
                "
                >{{ item.title }}</a
              >
            </router-link>
          </li>
        </ul>
      </div>
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Dayyshop</span
        >
      </a>
      <div class="flex md:order-2">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          class="md:hidden text-gray-200 dark:text-gray-100 hover:ring-1 hover:ring-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5 mr-1"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:ring-1 hover:ring-gray-100 focus:outline-none dark:text-gray-100 dark:hover:ring-gray-700"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <button
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
          data-drawer-placement="right"
          data-drawer-backdrop="false"
          type="button"
          class="inline-flex items-center ml-2 p-2 w-10 h-10 md:w-9 md:h-9 justify-center text-sm text-gray-200 rounded-lg hover:ring-1 hover:ring-gray-100 focus:outline-none dark:text-gray-100 dark:hover:ring-gray-700"
        >
          <span class="sr-only">Open Cart</span>
          <ShoppingCartIcon class="w-5 h-6" />
        </button>
      </div>
    </div>
  </nav>
  <!-- drawer component -->
  <div
    id="drawer-example"
    class="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto translate-x-full transition-transform bg-slate-600 bg-opacity-20 backdrop-blur-sm w-screen md:w-96"
    tabindex="-1"
    aria-labelledby="drawer-label"
  >
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-xl font-semibold"
    >
      <ShoppingCartIcon class="w-5 h-5 mx-2" />
      Cart
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
    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
      <div class="mt-8">
        <div class="flow-root">
          <ul role="list" class="-my-6 divide-y divide-gray-200">
            <li v-for="product, i in carts" :key="i" class="flex py-6">
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
                    class="flex justify-between text-base font-medium text-gray-900"
                  >
                    <h3>
                      <a :href="product.href">{{ product.name }}</a>
                    </h3>
                    <p class="ml-4">{{ product.price }}</p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <p class="text-gray-500">Qty {{ product.quantity }}</p>

                  <div class="flex">
                    <button
                      type="button"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
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
      <div class="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>$262.00</p>
      </div>
      <p class="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div class="mt-6">
        <a
          href="#"
          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >Checkout</a
        >
      </div>
      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or
          <button
            type="button"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
