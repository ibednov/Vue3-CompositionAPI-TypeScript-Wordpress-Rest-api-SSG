<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed } from "vue";

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  post: Object,
});

const snippet = computed(() => {
  return props.post + "...";
});
</script>

<template>
  <router-link
    :id="post.acf.short_type"
    :to="{ name: 'PostFull', params: { id: post.id, post: post } }"
    :class="
      post.acf.short_bg ? post.acf.short_bg : 'bg-stone-200 dark:bg-stone-900'
    "
  >
    <img
      class="object-contain rounded-xl max-h-80 max-w-20 justify-self-center"
      :src="post.featured_image_urls.medium_large[0]"
      :alt="post.title.rendered"
    />
  </router-link>
</template>
