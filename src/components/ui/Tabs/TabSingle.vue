<script setup>
import { inject } from "vue";

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  // title: String,
  name: String,
});
const selectedTitle = inject("selectedTitle");
</script>

<template>
  <div v-show="name == selectedTitle">
    <slot />
  </div>
</template>
