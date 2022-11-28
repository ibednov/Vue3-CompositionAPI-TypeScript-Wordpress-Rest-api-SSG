<!-- eslint-disable vue/require-default-prop -->
<script setup>
import PostShort from './PostsDisplay/PostShort.vue';
import getPostsByCat from '@/composibles/getPostsByCat.js';
import SpinnerLoader from '@/components/ui/layouts/SmallComponents/SpinnerLoader.vue';

const props = defineProps({
  cat: Number,
  posts: Object,
});

const { posts, load: loadPosts } = getPostsByCat(props.cat);
loadPosts();
</script>

<template>
  <div
    v-if="posts.length"
    class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-x-4 gap-y-6 rounded-xl p-10 bg-gradient-to-r from-cyan-100 to-indigo-100 dark:from-cyan-900 dark:to-indigo-900"
  >
    <PostShort
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="basis-1/5 flex flex-col justify-start rounded-xl"
    />
  </div>
  <div v-else>
    <SpinnerLoader />
  </div>
</template>
