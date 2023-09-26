<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/outline";
import { Route } from "../types";
import { onMounted, ref } from "vue";
import { initDrawers } from "flowbite";
import CartDrawer from "./CartDrawer.vue";
import Cart from "./Cart.vue";
import useCartStore from "../stores/cart";
import { storeToRefs } from "pinia";

const isDarkMode = ref<boolean>(true);

const toggleDarkmode = () => {
  const switchToggle = document.querySelector('#switch-toggle');
  isDarkMode.value = !isDarkMode.value;
  const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`
  if (!switchToggle) {
    return;
  }
  if (isDarkMode.value) {
    switchToggle.classList.remove('bg-yellow-500','-translate-x-2')
    switchToggle.classList.add('bg-gray-700','translate-x-3')
    document.documentElement.classList.add('dark')
    setTimeout(() => {
      switchToggle.innerHTML = darkIcon
    }, 250);
  } else {
    switchToggle?.classList.add('bg-yellow-500','-translate-x-2')
    switchToggle?.classList.remove('bg-gray-700','translate-x-3')
    document.documentElement.classList.remove('dark')
    setTimeout(() => {
      switchToggle.innerHTML = lightIcon
    }, 250);
  }
  
}

const { carts } = storeToRefs(useCartStore());
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
        id="main-menu"
      >
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
          class="w-10 h-7 rounded-full bg-white flex my-auto items-center transition duration-300 focus:outline-none"
          @click="toggleDarkmode"
        >
          <div
            id="switch-toggle"
            class="w-8 h-8 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        </button>
        <button
          data-collapse-toggle="main-menu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:ring-1 hover:ring-gray-100 focus:outline-none dark:text-gray-100 dark:hover:ring-gray-700"
          aria-controls="main-menu"
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
  <CartDrawer id="drawer-example" tabindex="-1" aria-labelledby="drawer-label">
    <template #title>
      <ShoppingCartIcon />
      Cart
    </template>
    <template v-if="carts.length > 0" #data>
      <Cart :carts="carts">
        <template #footer>
          <p class="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div class="mt-6 flex w-full justify-center">
            <button
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </button>
          </div>
          <div
            class="mt-6 flex justify-center text-center text-sm text-gray-500"
          >
            <p>
              or
              <button
                type="button"
                class="font-medium text-indigo-400 hover:text-indigo-100"
                data-drawer-hide="drawer-example"
                aria-controls="drawer-example"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </template>
      </Cart>
    </template>
  </CartDrawer>
</template>
<style scoped></style>
