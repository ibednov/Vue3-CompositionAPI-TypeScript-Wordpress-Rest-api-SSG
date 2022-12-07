<script setup lang="ts">
import { reactive, ref } from 'vue';

const data = ref({
  isVisible: false,
});

const emit = defineEmits(['handleChange']);

const handleChangeLocale = ref(() => {
  toggleVisibility();
  emit('handleChange');
});

const toggleVisibility = reactive(() => {
  try {
    data.value.isVisible = !data.value.isVisible;
    console.log('try to drop');
  } catch (error) {
    console.log('drop error');
  }
});
</script>

<template>
  <div class="flex flex-col items-center md:order-2">
    <button type="button"
      class="flex flex-row justify-items-center px-2 py-4 md:gap-4 text-sm text-gray-500 rounded-xl cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      @click="toggleVisibility">
      <slot name="icon" class="self-center" />
      <span class="hidden sm:block">
        <slot name="text" />
      </span>
    </button>

    <!-- Dropdown -->
    <div v-show="data.isVisible"
      class="absolute z-50 -top-16 md:top-16 my-4 text-base w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
      <button type="button"
        class="inline-flex justify-center items-center px-2 py-4 gap-4 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        @click="handleChangeLocale">
        <slot name="drop_icon" />

        <slot name="drop_text" />
      </button>
    </div>
  </div>
</template>
