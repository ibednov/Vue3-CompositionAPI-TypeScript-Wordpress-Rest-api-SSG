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
  <div
    :id="post.acf.short_type"
    class="shadow-xl"
    :class="
      post.acf.short_bg ? post.acf.short_bg : 'bg-stone-200 dark:bg-stone-900'
    "
  >
    <div class="grid">
      <img
        class="rounded-t-lg max-h-80 max-w-20 justify-self-center"
        :src="post.featured_image_urls.thumbnail[0]"
        :alt="post.title.rendered"
      />
    </div>
    <div class="p-5 text-gray-700 dark:text-white">
      <h2
        class="py-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="post.title.rendered" />
        <div class="text-emerald-700">
          {{ post.acf.short_type }}
        </div>
      </h2>
      <router-link
        :to="{ name: 'PostFull', params: { id: post.id, post: post } }"
      >
        <div
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{ $t("posts.short.read_more") }}
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>
