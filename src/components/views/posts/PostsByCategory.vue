<script setup lang="ts">
const props = defineProps<{ cat: number }>()
const { posts, load: loadPosts } = getPostsByCategoryID(props.cat);
loadPosts();
</script>

<template>
  <PostsIndex :posts="posts" />
</template>
