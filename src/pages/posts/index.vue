<script setup lang="ts">
// const route:object = useRoute()
const { posts, load: loadAllPosts } = getPosts({});
loadAllPosts();
</script>
<template>
  <h1
    class="text-5xl uppercase font-extrabold w-full grow py-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500"
  >
    {{ $t('posts.allposts') }}
  </h1>

  <PostsAll :posts="posts" />
</template>
