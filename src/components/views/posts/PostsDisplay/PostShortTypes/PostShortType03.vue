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
  <router-link :to="(`/posts/`+ post?.id)">
    <div
      :id="post?.acf?.short_type"
      class="rounded-xl px-5 py-8 hover:bg-white hover:dark:bg-stone-900 hover:shadow-xl hover:shadow-blue-500/10 hover:dark:shadow-blue-800/10 hover:scale-105 hover:delay-200 hover:duration-200 group"
    >
      <div class="flex justify-center">
        <img
          class="flex w-2/3 object-contain -mt-12 rounded-xl"
          :src="post?.featured_image_urls?.medium_large[0]"
          :alt="post?.title?.rendered"
        />
      </div>
      <div class="text-gray-900 dark:text-gray-200">
        <div v-if="$route.path == '/posts'">
          <h5 class="text-sm text-stone-500 dark:text-stone-300 pt-3 pb-2">
            <div v-for="category in categories" :key="category.id">
              <a
                v-if="category.id === post?.categories[0]"
                :href="category.link"
              >
                <!-- eslint-disable vue/no-v-html -->
                <div v-html="category.name" />
              </a>
            </div>
          </h5>
        </div>
        <h1
          class="text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold tracking-tight break-word group-hover:text-indigo-500"
          v-html="post?.title?.rendered"
        />
        <!-- eslint-enable -->
        <div class="text-emerald-700 text-xs py-4" hidden>
          {{ post?.acf?.short_type }}
        </div>
      </div>
    </div>
  </router-link>
</template>
