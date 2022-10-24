<script setup>
import PostShortType01 from './PostShortTypes/PostShortType01.vue';
import PostShortType04 from './PostShortTypes/PostShortType04.vue';
import PostShortType03 from './PostShortTypes/PostShortType03.vue';
import PostShortType02 from './PostShortTypes/PostShortType02.vue';
const props = defineProps({
    post: Object,
});

</script>

<template>
    <PostShortType01 v-if="post.acf.short_type === 'short_type_1'" :post="post" />
    <PostShortType02 v-else-if="post.acf.short_type === 'short_type_2'" :post="post" />
    <PostShortType03 v-else-if="post.acf.short_type === 'short_type_3'" :post="post" />
    <PostShortType04 v-else :post="post" />
</template>