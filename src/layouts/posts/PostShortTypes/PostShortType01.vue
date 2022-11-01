<script setup>
import { computed } from "vue";
import getCategories from "../../../composibles/getCategories.js";

const { categories, load: loadCategories } = getCategories();
loadCategories();

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  post: Object,
});

// eslint-disable-next-line no-unused-vars
const snippet = computed(() => {
  return props.post + "...";
});
</script>

<template>
  <!-- :class="
  post.acf.short_bg ? post.acf.short_bg : 'bg-stone-200 dark:bg-stone-900'
" -->
  <router-link
    :to="{ name: 'PostFull', params: { id: post.id, post: post } }"
    class=""
  >
    <div
      :id="post.acf.short_type"
      class="hover:bg-white hover:dark:bg-indigo-900 rounded-xl px-5 py-8 hover:shadow-xl hover:shadow-blue-500/10 hover:dark:shadow-blue-800/10 hover:scale-105 hover:delay-200 hover:duration-200 group"
    >
      <img
        class="max-h-56 w-full object-cover rounded-xl justify-self-center"
        :src="post.featured_image_urls.medium_large[0]"
        :alt="post.title.rendered"
      />

      <div class="text-gray-900 dark:text-gray-200">
        <h5 class="text-stone-500 dark:text-stone-300 pt-3 pb-2">
          <div v-for="category in categories" :key="category.id">
            <a v-if="category.id === post.categories[0]" :href="category.link">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div v-html="category.name" />
            </a>
          </div>
        </h5>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1
          class="text-3xl font-bold tracking-tight break-word group-hover:text-indigo-500"
          v-html="post.title.rendered"
        />
        <div class="text-emerald-700 text-xs py-4">
          {{ post.acf.short_type }}
        </div>
      </div>
    </div>
  </router-link>
</template>
