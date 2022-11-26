<!-- eslint-disable vue/require-default-prop -->
<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  fieldValue: Array,
  fieldName: String,
  propClass: String,
});
</script>

<template>
  <div v-if="fieldValue" :class="propClass" class="flex flex-col">
    <div class="text-lg font-extralight">
      {{ fieldName }}
    </div>
    <div class="text-lg font-semibold">
      {{ fieldValue }}
    </div>
  </div>
</template>
