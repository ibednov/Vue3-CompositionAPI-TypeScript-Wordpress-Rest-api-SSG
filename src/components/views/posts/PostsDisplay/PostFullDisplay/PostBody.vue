<script setup lang="ts">
const props = defineProps<{ post: object, }>()
</script>

<template>
  <div class="container mx-auto">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="" v-html="props.post.content?.rendered" />
  </div>
</template>
