<script setup lang="ts">
const props = defineProps({
  post: Object,
});
</script>
<template>
  <PostShortType01
    v-if="post?.acf?.short_type === 'short_type_1'"
    :post="props?.post"
  />
  <PostShortType02
    v-else-if="post?.acf?.short_type === 'short_type_2'"
    :post="props?.post"
  />
  <PostShortType03
    v-else-if="post?.acf?.short_type === 'short_type_3'"
    :post="props?.post"
  />
  <PostShortType04 v-else :post="props?.post" />
</template>
