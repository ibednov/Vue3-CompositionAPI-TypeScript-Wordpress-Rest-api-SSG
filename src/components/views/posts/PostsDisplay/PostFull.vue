<script setup>
import { useRoute } from 'vue-router';
import getPageOrPost from '@/composibles/getPageOrPost';
import PostHeader from './PostFullDisplay/PostHeader.vue';
import PostBody from './PostFullDisplay/PostBody.vue';
import SpinnerLoader from '@/components/ui/layouts/SmallComponents/SpinnerLoader.vue';

const route = useRoute();
const { page, load: loadGetPageOrPost } = getPageOrPost(
  'posts',
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
      <PostHeader v-if="page.type === 'post'" :page="page" />
      <PostHeader v-else-if="page.type === 'team'" :page="page" />
      <div v-else>
        <SpinnerLoader />
      </div>
    </div>
    <PostBody :page="page" />
  </article>
</template>
