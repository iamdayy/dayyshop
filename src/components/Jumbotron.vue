<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  text: String,
});
</script>
<template>
  <div class="bg-bottom h-4/5" :style="`background-image: url(${image})`">
    <div
      :class="`absolute flex sm:flex-row flex-col h-full bg-gradient-to-b from-[#ffffff6b] dark:from-[#43baff57] from-80% to-80%`"
    >
      <div class="px-4 mx-auto text-center py-12 pt-28 lg:py-36">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          {{ title }}
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
        >
          {{ text }}
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
        </div>
      </div>
      <div
        class="w-full md:w-1/3 p-6 md:self-end translate-x-0 md:-translate-x-36"
      >
        <img :src="image" class="mx-auto shadow-lg shadow-black " :alt="title" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
