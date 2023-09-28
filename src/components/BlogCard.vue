<script setup lang="ts">
import { PropType } from "vue";
import { Post } from "../types";
defineProps({
  isGrid: {
    type: Boolean,
    default: true,
  },
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
});
</script>
<template>
  <article
    :class="`flex flex-shrink-0 ${
      isGrid ? 'max-w-lg' : 'min-w-full'
    } flex-col items-start justify-between text-gray-700 dark:text-white border border-slate-300 shadow-lg rounded-lg p-4`"
  >
    <div class="flex items-center gap-x-4 text-xs">
      <time :datetime="post.datetime" class="">{{ post.date }}</time>
      <a
        :href="post.category.href"
        class="relative z-10 rounded-full px-3 py-1.5 font-medium hover:bg-gray-100"
        >{{ post.category.title }}</a
      >
    </div>
    <div class="group relative">
      <h3
        class="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600"
      >
        <a :href="post.href">
          <span class="absolute inset-0"></span>
          {{ post.title }}
        </a>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm leading-6">{{ post.description }}</p>
    </div>
    <div class="relative mt-8 flex items-center gap-x-4">
      <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full" />
      <div class="text-sm leading-6">
        <p class="font-semibold">
          <a :href="post.author.href">
            <span class="absolute inset-0" />
            {{ post.author.name }}
          </a>
        </p>
        <p class="">{{ post.author.role }}</p>
      </div>
    </div>
  </article>
</template>
<style scoped></style>
