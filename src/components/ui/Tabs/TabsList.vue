<script setup lang="ts">
import { ref, provide, useSlots } from 'vue';
const slots: object = ref(useSlots())
const tabsArray: object = ref(slots.value.default().map((tab) => tab.props))
const selectedTitle: object = ref(tabsArray.value[0].name)
provide('selectedTitle', selectedTitle)
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 justify-center mt-4 py-6">
    <button v-for="item in tabsArray" :key="item.name"
      class="grow px-8 py-4 items-center rounded-xl text-center hover:bg-violet-200 dark:hover:bg-indigo-800 flex flex-row gap-x-3 justify-center"
      :class="{
        'bg-gradient-to-r from-cyan-200 to-violet-200 text-black dark:from-cyan-900 dark:to-violet-900 dark:text-white':
          selectedTitle == item.name,
        'bg-stone-100 text-black dark:bg-stone-800 dark:text-white':
          !selectedTitle == item.name,
        'disabled cursor-not-allowed dark:hover:!bg-stone-900 dark:text-stone-700 text-stone-300 hover:!bg-transparent':
          item.disabled,
      }" :disabled="item.disabled" @click="selectedTitle = item.name" @click.prevent="item.disabled">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div :class="item.icon" class="text-2xl" />
      <div class="font-light font-xl">
        {{ t(item.title) }}
      </div>
    </button>
  </div>

  <slot />
</template>
