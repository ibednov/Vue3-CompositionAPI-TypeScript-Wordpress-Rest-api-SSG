<script setup>
import PostShort from "./PostsDisplay/PostShort.vue";
import getPostsAll from "@/composibles/getPostsAll.js";
import SpinnerLoader from "@/components/ui/layouts/SmallComponents/SpinnerLoader.vue";

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
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 rounded-xl p-10 bg-gradient-to-r from-fuchsia-200 to-blue-200 dark:from-blue-900 dark:to-teal-900"
    >
      <PostShort
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="basis-1/5 flex flex-col justify-center rounded-xl"
      />
    </div>
    <div v-else>
      <SpinnerLoader />
    </div>
  </section>
</template>
