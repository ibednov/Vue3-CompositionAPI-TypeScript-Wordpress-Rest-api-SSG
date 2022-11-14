<script setup>
import { ref, provide, useSlots } from "vue";

const slots = useSlots();
// const tabTitles = ref(slots.default().map((tab) => tab.props.name));
const tabsArray = ref(slots.default().map((tab) => tab.props));
const selectedTitle = ref(tabsArray.value[0].name);

// console.log(tabsArray);

// console.log(selectedTitle);

provide("selectedTitle", selectedTitle);
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 justify-center pt-4">
    <div
      v-for="item in tabsArray"
      :key="item.name"
      class="grow justify-center py-6"
      @click="selectedTitle = item.name"
    >
      <div
        class="px-8 py-4 rounded-xl text-center hover:bg-indigo-400 dark:hover:bg-indigo-800"
        :class="{
          'bg-gradient-to-r from-fuchsia-200 to-blue-400 text-black dark:from-indigo-400 dark:to-violet-400':
            selectedTitle == item.name,
          'bg-stone-100 text-black dark:bg-stone-800 dark:text-white': !(
            selectedTitle == item.name
          ),
        }"
      >
        <!-- name : {{ item.name }} -->
        <!-- <br /> -->
        <!-- <div v-if="item.name == 'uiux'">uiux</div>
        <div v-else-if="item.name == 'brand'">brand</div>
        <div v-else-if="item.name == 'dev'">dev</div>
        <div v-else-if="item.name == 'gamedev'">gamedev</div>
        <div v-else>blog</div> -->
        {{ item.title }}
      </div>
    </div>
  </div>

  <slot />
</template>
