<script setup>

// import getPosts from "../../composibles/getPosts";
import getPageOrPost from '../../composibles/getPageOrPost.js'

import PostsPage from "../../layouts/posts/PostsPage.vue";

const { page, load } = getPageOrPost('posts','');
// const route = useRoute();

// import Spinner from "../../components/Spinner.vue";
// import TagCloud from "../components/TagCloud.vue";

// const { posts, load } = getPosts();
load();
</script>

<template>
  <div>
    <PostsPage :page="page" />
  </div>
</template>
<script>
// import PostList from '../..//components/posts/PostList.vue';

// export default {
//   name: "MainPage",
//   components: { PostList }
// };
</script>

