<script setup lang='ts'></script>
<template>
    <div class="flex flex-row">
        <!--Tabs navigation-->
    <ul
      class="mr-4 flex list-none flex-col flex-wrap pl-0"
      id="myTab"
      data-tabs-target="#profileTabs"
      role="tablist">
      <li role="presentation" class="flex-grow text-center">
        <button
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          data-te-nav-active
          role="tab"
          aria-controls="tabs-home03"
          aria-selected="true"
          >Home</button
        >
      </li>
      <li role="presentation" class="flex-grow text-center">
        <button
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          role="tab"
          aria-controls="tabs-profile03"
          aria-selected="false"
          >Profile</button
        >
      </li>
      <li role="presentation" class="flex-grow text-center">
        <button
          class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
          role="tab"
          aria-controls="tabs-messages03"
          aria-selected="false"
          >Messages</button
        >
      </li>
      <li role="presentation" class="flex-grow text-center">
        <button
          class="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
          role="tab"
          aria-controls="tabs-contact03"
          aria-selected="false"
          >Contact</button
        >
      </li>
    </ul>
    </div>
<div class="my-2 w-5/6" id="profileTabs"></div>
</template>
<style scoped></style>