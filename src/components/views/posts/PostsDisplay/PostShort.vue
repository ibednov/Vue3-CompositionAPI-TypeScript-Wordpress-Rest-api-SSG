<script setup>
import PostShortType01 from './PostShortTypes/PostShortType01.vue';
import PostShortType02 from './PostShortTypes/PostShortType02.vue';
import PostShortType03 from './PostShortTypes/PostShortType03.vue';
import PostShortType04 from './PostShortTypes/PostShortType04.vue';
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  post: Object,
});
</script>
<template>
  <PostShortType01 v-if="post.acf.short_type === 'short_type_1'" :post="post" />
  <PostShortType02
    v-else-if="post.acf.short_type === 'short_type_2'"
    :post="post"
  />
  <PostShortType03
    v-else-if="post.acf.short_type === 'short_type_3'"
    :post="post"
  />
  <PostShortType04 v-else :post="post" />
</template>
