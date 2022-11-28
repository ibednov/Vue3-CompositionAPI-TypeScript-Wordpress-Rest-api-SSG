<script setup>
import { computed } from 'vue';
import getCategories from '@/composibles/getCategories.js';
const { categories, load: loadCategories } = getCategories();
loadCategories();
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  post: Object,
});
// eslint-disable-next-line no-unused-vars
const snippet = computed(() => {
  return props.post + '...';
});
</script>
<template>
  <router-link :to="{ name: 'PostFull', params: { id: post.id, post: post } }">
    <div
      :id="post.acf.short_type"
      class="aspect-[9/14] flex h-full w-full rounded-xl px-5 py-8 group bg-cover bg-center hover:bg-white hover:dark:bg-stone-900 hover:shadow-xl hover:shadow-blue-500/10 hover:dark:shadow-blue-800/10 hover:scale-105 hover:delay-200 hover:duration-200 hover:p-4"
      :style="
        `background-image: url('` +
        post.featured_image_urls.medium_large[0] +
        `')`
      "
    >
      <div
        class="flex flex-col text-gray-900 dark:text-gray-200 self-end bg-white dark:bg-stone-900 px-4 py-2 rounded-xl"
      >
        <div v-if="$route.path == '/posts'">
          <h5 class="text-sm text-stone-500 dark:text-stone-300 pt-3 pb-2">
            <div v-for="category in categories" :key="category.id">
              <a
                v-if="category.id === post.categories[0]"
                :href="category.link"
              >
                <!-- eslint-disable vue/no-v-html -->
                <div v-html="category.name" />
              </a>
            </div>
          </h5>
        </div>
        <h1
          class="text-xl lg:text-xl xl:text-2xl font-bold tracking-tight break-word group-hover:text-indigo-500"
          v-html="post.title.rendered"
        />
        <!-- eslint-enable -->
        <div class="text-emerald-700 text-xs p-0 m-0" hidden>
          {{ post.acf.short_type }}
        </div>
      </div>
    </div>
  </router-link>
</template>
