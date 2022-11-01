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
  >
    <img
      class="object-contain rounded-xl max-w-full justify-self-center hover:shadow-xl hover:shadow-blue-500/10 hover:dark:shadow-blue-800/10 hover:scale-105 hover:delay-200 hover:duration-200"
      :src="post.featured_image_urls.medium_large[0]"
      :alt="post.title.rendered"
    />
  </router-link>
</template>
