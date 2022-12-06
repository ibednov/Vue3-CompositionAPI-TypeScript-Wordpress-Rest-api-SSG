<script setup lang="ts">
import { inject } from 'vue';

defineProps<{
  name: string
}>()

const selectedTitle = inject('selectedTitle');
</script>

<template>
  <div v-show="name == selectedTitle">
    <slot />
  </div>
</template>
