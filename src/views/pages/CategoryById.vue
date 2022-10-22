<script setup>
import PostShort from '../../layouts/posts/PostShort.vue'
import getPostsByCat from '../../composibles/getPostsByCat.js'

const props = defineProps({
    cat: Number,
    posts: Object
});

const { posts, load: loadPosts } = getPostsByCat(props.cat);
loadPosts();
</script>

<template>
    <div class="container mx-auto">
        <div class="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12 ">
            <div v-for="post in posts" :key="post.id">
                <PostShort :post="post" />
            </div>
        </div>
    </div>
</template>