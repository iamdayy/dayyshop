<script setup lang='ts'>
import type { Component } from 'vue';
import Order from './ProfileModal/Order.vue';
import Home from '../components/ProfileModal/home.vue';
interface Prop {
  msg?: string;
}
interface Tab {
  id: string;
  target: string;
  title: string;
  component: Component;
  props?: Prop
}
const Tabs: Tab[] = [
  {
    id: "profile",
    target: "#profile",
    title: "Profile",
    component: Home,
    props: {
    }
  },
  {
    id: "order",
    target: "#order",
    title: "Order",
    component: Order,
    props: {
    }
  },
]
</script>
<template>
<div class="flex flex-col md:flex-row gap-2">
  <div class="w-full md:w-2/12 mb-4 p-1 rounded-lg bg-gray-50 dark:bg-gray-600 md:bg-gray-700 md:dark:bg-gray-100 md:bg-opacity-10 md:dark:bg-opacity-10 md:backdrop-blur-sm border md:shadow-inner md:border-gray-700 md:dark:border-gray-100">
      <ul class="flex flex-wrap -mb-px text-md font-medium list-none flex-row md:flex-col pl-0" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li class="mr-2" role="presentation" v-for="tab, i in Tabs" :key="i">
              <button class="inline-block p-2 pl-0 border-b-2 border-" id="profile-tab" :data-tabs-target="tab.target" type="button" role="tab" :aria-controls="tab.id" aria-selected="false">{{ tab.title }}</button>
          </li>
      </ul>
  </div>
  <div id="myTabContent" class="w-full md:w-10/12">
      <div v-for="tab, i in Tabs" :key="i" class="hidden p-4 w-full" :id="tab.id" role="tabpanel" :aria-labelledby="`${tab.id}-tab`">
        <component :is="tab.component" v-bind="tab.props"></component>
      </div>
  </div>
</div>
</template>
<style scoped></style>