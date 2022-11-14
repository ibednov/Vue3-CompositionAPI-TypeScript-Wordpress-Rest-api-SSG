<script setup>
import { ref, provide, useSlots } from "vue";

const slots = useSlots();
const tabsArray = ref(slots.default().map((tab) => tab.props));
const selectedTitle = ref(tabsArray.value[0].name);

provide("selectedTitle", selectedTitle);
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 justify-center mt-4 py-6">
    <div
      v-for="item in tabsArray"
      :key="item.name"
      class="grow px-8 py-4 rounded-xl text-center hover:bg-indigo-400 dark:hover:bg-indigo-800 flex flex-row gap-8 justify-center"
      :class="{
        'bg-gradient-to-r from-fuchsia-200 to-blue-400 text-black dark:from-indigo-400 dark:to-violet-400':
          selectedTitle == item.name,
        'bg-stone-100 text-black dark:bg-stone-800 dark:text-white':
          !selectedTitle == item.name,
      }"
      @click="selectedTitle = item.name"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="item.icon" />
      <div class="font-light font-xl">
        {{ item.title }}
      </div>
    </div>
  </div>

  <slot />
</template>
