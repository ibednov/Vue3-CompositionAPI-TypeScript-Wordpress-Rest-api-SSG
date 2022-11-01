<script setup>
import PostShort from "../../layouts/posts/PostShort.vue";
import getPostsAll from "../../composibles/getPostsAll.js";
import SpinnerLoader from "../../components/SpinnerLoader.vue";

// // eslint-disable-next-line no-unused-vars
// const props = defineProps({
//   // eslint-disable-next-line vue/require-default-prop
//   posts: Object,
// });

const { posts, load: loadPosts } = getPostsAll();
loadPosts();
</script>
<template>
  <section class="container mx-auto flex flex-col">
    <h1
      class="text-5xl uppercase font-extrabold w-full grow py-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500"
    >
      {{ $t("posts.allposts") }}
    </h1>
    <div
      v-if="posts.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 bg-gradient-to-r from-fuchsia-200 to-blue-200 dark:from-blue-900 dark:to-teal-900 rounded-xl p-10"
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
  </section>
</template>
