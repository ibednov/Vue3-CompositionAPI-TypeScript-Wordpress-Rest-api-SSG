<script setup>
import { computed } from "vue";

const props = defineProps({
    post: Object
})

const snippet = computed(() => {
    return props.post + "...";
});
</script>

<template>
    <div>
        short type 4
    </div>
    <div class="flex flex-col justify-start dark:bg-stone-800 shadow-xl rounded-xl max-h-full" id="short_type_4">
        <div class="grid">
            <img class="rounded-t-lg max-h-80 max-w-20 justify-self-center" :src="post.featured_image_urls.thumbnail[0]"
                :alt="post.title.rendered" />
        </div>
        <div class="p-5 text-gray-700 dark:text-white">
            <h2 class="py-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                <div v-html="post.title.rendered" />
            </h2>
            <router-link :to="{ name: 'PostFull', params: { id: post.id, post: post } }">
                <div
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {{ $t('posts.read_more')}}
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </router-link>
        </div>
    </div>
</template>