<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto lg:mx-0">
        <div class="flex w-full justify-between">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            From the blog
          </h2>
          <div>
            <button
              type="button"
              class="-m-2 ml-5 p-2 text-gray-100 hover:text-gray-300 sm:ml-7"
            >
              <span class="sr-only">View grid</span>
              <ViewGridIcon
                class="h-5 w-5"
                aria-hidden="true"
                @click="isGrid = !isGrid"
              />
            </button>
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="group inline-flex justify-center text-sm font-medium text-gray-300 hover:text-gray-100 ml-4"
                >
                  <FilterIcon class="h-5 w-5" aria-hidden="true"></FilterIcon>
                  <ChevronDownIcon
                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-100 group-hover:text-gray-300"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-600 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem
                      v-for="option in sortOptions"
                      :key="option.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="option.href"
                        :class="[
                          option.current
                            ? 'font-medium text-gray-800 dark:text-gray-100'
                            : 'text-gray-800 dark:text-gray-300',
                          active ? 'bg-gray-100 dark:bg-gray-700' : '',
                          'block px-4 py-2 text-sm bg-gray-300 dark:bg-gray-800',
                        ]"
                        >{{ option.name }}</a
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>

        <p class="mt-2 text-lg leading-8">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div
        :class="`mx-auto mt-4 grid w-full grid-cols-1 gap-x-6 gap-y-8 border-t border-gray-200 pt-4 lg:mx-0 ${
          isGrid ? 'lg:max-w-none lg:grid-cols-3' : ''
        }`"
      >
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :is-grid="false"
        >
        </BlogCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogCard from "../components/BlogCard.vue";
import posts from "../assets/blogs";
import { ref } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  FilterIcon,
  ViewGridIcon,
  ChevronDownIcon,
} from "@heroicons/vue/outline";
const isGrid = ref<boolean>(true);

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
</script>
