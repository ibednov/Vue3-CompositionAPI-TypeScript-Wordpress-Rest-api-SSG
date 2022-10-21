<script setup>
import getPageOrPost from '../../composibles/getPageOrPost.js'

// const route = useRoute();
const { page, load } = getPageOrPost('pages', 40);
load();

</script>

<template>
    <div class="container mx-auto" v-if="page" v-html="page.content.rendered" />
    <div v-else>
        Where content?
    </div>
</template>
