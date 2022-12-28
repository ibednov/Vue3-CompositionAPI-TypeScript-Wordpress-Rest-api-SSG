<script setup lang="ts">
defineProps<{ posts: object }>()
</script>
<template>
  <PostsIndex :posts="posts" />
</template>
