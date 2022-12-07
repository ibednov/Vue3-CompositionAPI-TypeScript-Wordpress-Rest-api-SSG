<!-- eslint-disable no-unused-vars -->
<script setup lang="ts">
import { computed } from 'vue';

const { categories, load: loadCategories } = getCategories();
loadCategories();
const props = defineProps({
  
  post: Object,
});
const snippet = computed(() => {
  return props.post + '...';
});
</script>
<template>
  <router-link :to="(`/posts/`+ post?.id)"
    
    class="flex flex-col justify-items-center self-center hover:scale-105 hover:delay-200 hover:duration-200 hover:bg-white hover:dark:bg-stone-900 hover:p-4"
  >
    <img
      class="object-contain rounded-xl max-w-full"
      :src="post?.featured_image_urls?.medium_large[0]"
      :alt="post?.title?.rendered"
    />
    <div v-if="$route.path == '/posts'">
      <h5 class="text-sm text-stone-500 dark:text-stone-300 py-2 text-center">
        <div v-for="category in categories" :key="category.id">
          <a v-if="category.id === post?.categories[0]" :href="category.link">
            <!-- eslint-disable vue/no-v-html -->
            <div v-html="category.name" />
          </a>
        </div>
      </h5>
    </div>
  </router-link>
</template>
