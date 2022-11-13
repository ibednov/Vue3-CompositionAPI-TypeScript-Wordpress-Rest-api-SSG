<script setup>
import { inject } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps(["title"]);
const selectedTitle = inject("selectedTitle");
</script>

<template>
  <div v-show="title == selectedTitle">
    <slot />
  </div>
</template>
