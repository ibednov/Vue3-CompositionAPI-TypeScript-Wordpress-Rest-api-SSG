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
    <router-link :to="{ name: 'PostFull', params: { id: post.id, post: post } }" 
    class="flex flex-col justify-start  max-h-full" id="short_type_4">
        <img class="rounded-xl max-h-80 max-w-20 justify-self-center" :src="post.featured_image_urls.thumbnail[0]"
            :alt="post.title.rendered" />
    </router-link>
</template>