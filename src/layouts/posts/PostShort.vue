<script setup>
import PostShortType01 from './PostShortTypes/PostShortType01.vue';
const props = defineProps({
    post: Object,
});

</script>

<template>
    <PostShortType01 :post="post" />
    <!-- <div v-else> -->
        Other or Another ?
    <!-- </div> -->
</template>