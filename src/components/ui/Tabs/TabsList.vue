<script setup>
import { ref, provide, useSlots } from "vue";

const slots = useSlots();
const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);

provide("selectedTitle", selectedTitle);
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 justify-center pt-4">
    <div
      v-for="title in tabTitles"
      :key="title"
      class="grow justify-center py-6"
      @click="selectedTitle = title"
    >
      <div
        class="px-8 py-4 rounded-xl text-center hover:bg-indigo-400 dark:hover:bg-indigo-800"
        :class="{
          'bg-gradient-to-r from-fuchsia-200 to-blue-400 text-black dark:from-indigo-400 dark:to-violet-400':
            selectedTitle == title,
          'bg-stone-100 text-black dark:bg-stone-800 dark:text-white': !(
            selectedTitle == title
          ),
        }"
      >
        {{ title }}
      </div>
    </div>
  </div>

  <slot />
</template>
