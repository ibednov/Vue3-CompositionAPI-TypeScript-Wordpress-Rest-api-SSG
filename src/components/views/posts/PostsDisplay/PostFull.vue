<script setup lang="ts">
const route = useRoute();
const { post, load: loadGetPostByID } = getPostByID(route.params.id);
loadGetPostByID();
</script>

<template>
  <article>
    <div class="flex flex-col">
      <PostHeader v-if="post.type === 'post'" :post="post" />
      <PostHeader v-else-if="post.type === 'team'" :post="post" />
      <div v-else>
        <SpinnerLoader />
      </div>
    </div>
    <PostBody :post="post" />
  </article>
</template>
