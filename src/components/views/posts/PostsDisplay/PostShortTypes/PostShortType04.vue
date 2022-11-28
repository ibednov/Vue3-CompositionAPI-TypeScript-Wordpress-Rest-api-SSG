<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed } from 'vue';
import getCategories from '@/composibles/getCategories.js';
const { categories, load: loadCategories } = getCategories();
loadCategories();
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  post: Object,
});
const snippet = computed(() => {
  return props.post + '...';
});
</script>
<template>
  <router-link
    :id="post.acf.short_type"
    :to="{ name: 'PostFull', params: { id: post.id, post: post } }"
    class="flex flex-col justify-items-center self-center hover:scale-105 hover:delay-200 hover:duration-200 hover:bg-white hover:dark:bg-stone-900 hover:p-4"
  >
    <img
      class="object-contain rounded-xl max-w-full"
      :src="post.featured_image_urls.medium_large[0]"
      :alt="post.title.rendered"
    />
    <div v-if="$route.path == '/posts'">
      <h5 class="text-sm text-stone-500 dark:text-stone-300 py-2 text-center">
        <div v-for="category in categories" :key="category.id">
          <a v-if="category.id === post.categories[0]" :href="category.link">
            <!-- eslint-disable vue/no-v-html -->
            <div v-html="category.name" />
          </a>
        </div>
      </h5>
    </div>
  </router-link>
</template>
