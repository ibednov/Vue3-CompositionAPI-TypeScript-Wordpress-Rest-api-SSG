<script setup>
import PostItem from '../../components/post/PostItem.vue'
import { onMounted, onUnmounted, onUpdated } from "vue";

onMounted(() => {
    // console.log("onMounted postList");
});

// watchEffect()

onUnmounted(() => {
    // console.log("onUnmounted");
});

onUpdated(() => {
    // console.log("onUpdated");
});

defineProps({
    page: Array,
});
</script>

<template>
    <div>
        <section class="container mx-auto">
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                    data-tabs-toggle="#myTabContent" role="tablist">

                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-flex p-4  group rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                            id="uiux-tab" data-tabs-target="#uiux" type="button" role="tab" aria-controls="uiux"
                            aria-selected="true">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
                                </path>
                            </svg>
                            UI/UX design
                        </button>
                    </li>

                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-flex  p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                            id="graph-tab" data-tabs-target="#graph" type="button" role="tab" aria-controls="graph"
                            aria-selected="false">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                </path>
                            </svg>
                            Brand & marketing design
                        </button>
                    </li>

                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-flex  p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                            id="dev-tab" data-tabs-target="#dev" type="button" role="tab" aria-controls="dev"
                            aria-selected="false">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                            Frontend & backend development
                        </button>
                    </li>

                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                            id="blog-tab" data-tabs-target="#blog" type="button" role="tab" aria-controls="blog"
                            aria-selected="false">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                </path>
                            </svg>
                            Blog
                        </button>
                    </li>

                </ul>
            </div>
        </section>

        <main>
            <div id="myTabContent">
                <!-- ui/ux design -->
                <div class="container mx-auto" id="uiux" role="tabpanel" aria-labelledby="uiux-tab">

                    <div
                        class=" grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12 ">
                        <div v-for="post in page" :key="post.id">
                            <PostItem :post="post" />
                        </div>
                    </div>

                </div>

                <!-- Brand & marketing design -->
                <div class="hidden container mx-auto bg-gray-50 rounded-lg dark:bg-gray-800" id="graph" role="tabpanel"
                    aria-labelledby="graph-tab">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12 ">
                        <!-- <PostItem v-model="posts.brand" /> -->
                    </div>

                </div>

                <!-- Frontend & backend development -->
                <div class="hidden container mx-auto bg-gray-50 rounded-lg dark:bg-gray-800" id="dev" role="tabpanel"
                    aria-labelledby="dev-tab">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12 ">
                        <!-- <PostItem v-model="posts.dev" /> -->
                    </div>
                </div>

                <!-- Blog -->
                <div class="hidden container mx-auto bg-gray-50 rounded-lg dark:bg-gray-800" id="blog" role="tabpanel"
                    aria-labelledby="blog-tab">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12 ">
                        <!-- <PostItem v-model="posts.blog" /> -->
                    </div>
                </div>

            </div>

        </main>
    </div>
</template>

<script>
// import PostItem from './PostItem.vue';
// export default {
//     name: "PostList",
//     components: { PostItem },

//     data() {
//         return {
//             posts: {
//                 brand: [],
//                 design: [],
//                 front: [],
//                 blog: [],
//             }
//         }
//     },

//     methods: {
//         async getPostsBrand() {
//             try {
//                 let response = await
//                     fetch("/wp-json/wp/v2/posts?per_page=100&categories=87");
//                 this.posts.brand = await response.json();
//             } catch (error) {
//                 console.log(error);
//             }
//         },
//         async getPostsDesign() {
//             try {
//                 let response = await
//                     fetch("/wp-json/wp/v2/posts?per_page=100&categories=14");
//                 this.posts.design = await response.json();
//             } catch (error) {
//                 console.log(error);
//             }
//         },
//         async getPostsDev() {
//             try {
//                 let response = await
//                     fetch("/wp-json/wp/v2/posts?per_page=100&categories=13");
//                 this.posts.dev = await response.json();
//             } catch (error) {
//                 console.log(error);
//             }
//         },
//         async getPostsBlog() {
//             try {
//                 let response = await
//                     fetch("/wp-json/wp/v2/posts?per_page=100&categories=2");
//                 this.posts.blog = await response.json();
//             } catch (error) {
//                 console.log(error);
//             }
//         },

//     },
//     created() {
//         // this.getData();
//         this.getPostsBrand(),
//             this.getPostsDesign(),
//             this.getPostsDev(),
//             this.getPostsBlog()
//     },


// };


</script>

<style>

</style>