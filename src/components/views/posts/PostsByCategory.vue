<script setup lang="ts">
const props = defineProps<{ cat: number }>()
const { posts, load: loadPosts } = getPostsByCategoryID(props.cat);
loadPosts();
</script>

<template>
<div
    v-if="posts.length"
    class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-x-4 gap-y-6 rounded-xl bg-gradient-to-r from-cyan-100 to-indigo-100 dark:from-cyan-900 dark:to-indigo-900 md:p-6"
  >
    <PostShort
      v-for="post in posts"
      :key="post?.id"
      :post="post"
      class="basis-1/5 flex flex-col justify-start rounded-xl"
    />
  </div>
  <div v-else>
    <SpinnerLoader />
  </div>
</template>
