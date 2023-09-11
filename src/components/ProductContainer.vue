<template>
  <div>
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="mobileFiltersOpen">
      <Dialog
        as="div"
        class="absolute z-40 lg:hidden"
        @close="mobileFiltersOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-600 backdrop-blur-md bg-opacity-20 py-4 pb-12 z-50 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2"
                  @click="mobileFiltersOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Filters -->
              <form class="mt-4 border-t border-gray-200">
                <h3 class="sr-only">Categories</h3>
                <ul role="list" class="px-2 py-3 font-medium">
                  <li v-for="(category, i) in subCategories" :key="i">
                    <a :href="category.href" class="block px-2 py-3">{{
                      category.title
                    }}</a>
                  </li>
                </ul>

                <Disclosure
                  as="div"
                  v-for="section in filters"
                  :key="section.id"
                  class="border-t border-gray-200 px-4 py-6"
                  v-slot="{ open }"
                >
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between px-2 py-3 hover:text-gray-300"
                    >
                      <span class="font-medium">{{ section.name }}</span>
                      <span class="ml-6 flex items-center">
                        <PlusIcon
                          v-if="!open"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                        <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`filter-mobile-${section.id}-${optionIdx}`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          type="checkbox"
                          :checked="option.checked"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          :for="`filter-mobile-${section.id}-${optionIdx}`"
                          class="ml-3 min-w-0 flex-1 text-gray-300"
                          >{{ option.label }}</label
                        >
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"
      >
        <h1 class="text-4xl font-bold tracking-tight text-gray-100">
          New Arrivals
        </h1>

        <div class="flex items-center">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="group inline-flex justify-center text-sm font-medium text-gray-300 hover:text-gray-100"
              >
                Sort
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

          <button
            type="button"
            class="-m-2 ml-5 p-2 text-gray-100 hover:text-gray-300 sm:ml-7"
          >
            <span class="sr-only">View grid</span>
            <ViewGridIcon
              class="h-5 w-5"
              aria-hidden="true"
              @click="$emit('grid')"
            />
          </button>
          <button
            type="button"
            class="-m-2 ml-4 p-2 text-gray-100 hover:text-gray-300 sm:ml-6 lg:hidden"
            @click="mobileFiltersOpen = true"
          >
            <span class="sr-only">Filters</span>
            <FilterIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" class="pb-24 pt-6">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <!-- Filters -->
          <form class="hidden lg:block">
            <h3 class="sr-only">Categories</h3>
            <ul
              role="list"
              class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-100"
            >
              <li v-for="(category, i) in subCategories" :key="i">
                <a :href="category.href">{{ category.title }}</a>
              </li>
            </ul>

            <Disclosure
              as="div"
              v-for="section in filters"
              :key="section.id"
              class="border-b border-gray-200 py-6"
              v-slot="{ open }"
            >
              <h3 class="-my-3 flow-root">
                <DisclosureButton
                  class="flex w-full items-center justify-between py-3 text-sm text-gray-100 hover:text-gray-300"
                >
                  <span class="font-medium text-gray-100">{{
                    section.name
                  }}</span>
                  <span class="ml-6 flex items-center">
                    <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                    <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel class="pt-6">
                <div class="space-y-4">
                  <div
                    v-for="(option, optionIdx) in section.options"
                    :key="option.value"
                    class="flex items-center"
                  >
                    <input
                      :id="`filter-${section.id}-${optionIdx}`"
                      :name="`${section.id}[]`"
                      :value="option.value"
                      type="checkbox"
                      :checked="option.checked"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      :for="`filter-${section.id}-${optionIdx}`"
                      class="ml-3 text-sm text-gray-600"
                      >{{ option.label }}</label
                    >
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </form>

          <!-- Product grid -->
          <div class="lg:col-span-3">
            <slot></slot>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusIcon,
  PlusIcon,
  ViewGridIcon,
} from "@heroicons/vue/solid";
import { storeToRefs } from "pinia";
import useProductStore from "../stores/products";
const product = useProductStore();
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = storeToRefs(product).getCategoryProduct;
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

const mobileFiltersOpen = ref(false);
</script>
