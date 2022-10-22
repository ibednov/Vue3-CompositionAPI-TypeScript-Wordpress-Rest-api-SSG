<script setup>
import { useRoute } from "vue-router";
import getPageOrPost from '../../composibles/getPageOrPost'
import PostHeaderPost from "../../components/posts/PostHeaderPost.vue";
import PostBody from '../../components/posts/PostBody.vue';

const route = useRoute();
const { page, load } = getPageOrPost('posts', route.params.id);
load();

const props = defineProps({
    page: Object
});

</script>

<template>
    <article>
        <div class="flex flex-col">
            <PostHeaderPost v-if="page.type === 'post'" :page="page" />
            <PostHeaderPost v-else-if="page.type === 'team'" :page="page" />
            <div v-else>
                What can I do?
            </div>
        </div>
        <PostBody :page="page"/>

    </article>
</template>

