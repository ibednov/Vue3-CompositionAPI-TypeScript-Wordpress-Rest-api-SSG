<script setup>
import { inject } from "vue";

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  title: String,
});
const selectedTitle = inject("selectedTitle");
</script>

<template>
  <div v-show="title == selectedTitle">
    <slot />
  </div>
</template>
