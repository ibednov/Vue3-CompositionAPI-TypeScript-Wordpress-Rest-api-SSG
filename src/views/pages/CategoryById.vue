<!-- eslint-disable vue/require-default-prop -->
<script setup>
import PostShort from "../../layouts/posts/PostShort.vue";
import getPostsByCat from "../../composibles/getPostsByCat.js";
import SpinnerLoader from "../../components/SpinnerLoader.vue";

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
    class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 gap-y-12"
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
