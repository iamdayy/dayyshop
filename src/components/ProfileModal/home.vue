<script setup lang="ts"></script>
<template>
  <div class="flex flex-col items-center justify-center">
    <div class="relative">
      <img
        class="w-10 h-10 md:w-16 md:h-16 rounded-full"
        src="../../assets/vue.svg"
        alt=""
      />
      <span
        class="top-0 left-7 md:left-12 absolute w-3.5 h-3.5 md:w-5 md:h-5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
      ></span>
    </div>
    <div class="w-full flex flex-col gap-2">
      <!-- Create form disabled -->
      <div>
        <label
          for="username-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Username</label
        >
        <input
          type="text"
          id="username-input"
          value="Iamdayy"
          disabled
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          for="email-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          type="text"
          id="email-input"
          value="iamdayy14@mail.com"
          disabled
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
