<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  page: Object,
});
</script>

<template>
  <div class="container mx-auto">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="page.content.rendered" />
  </div>
</template>
