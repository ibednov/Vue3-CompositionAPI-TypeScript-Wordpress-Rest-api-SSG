<script setup>
import { useRoute } from "vue-router";
import getPageOrPost from "../../composibles/getPageOrPost";
import PostHeaderPost from "../../components/posts/PostHeader.vue";
import PostBody from "../../components/posts/PostBody.vue";

const route = useRoute();
const { page, load: loadGetPageOrPost } = getPageOrPost(
  "posts",
  route.params.id
);
loadGetPageOrPost();

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // eslint-disable-next-line vue/require-valid-default-prop
  page: { type: Object, default: {} },
});
</script>

<template>
  <article>
    <div class="flex flex-col">
      <PostHeaderPost v-if="page.type === 'post'" :page="page" />
      <PostHeaderPost v-else-if="page.type === 'team'" :page="page" />
      <div v-else>What can I do?</div>
    </div>
    <PostBody :page="page" />
  </article>
</template>
