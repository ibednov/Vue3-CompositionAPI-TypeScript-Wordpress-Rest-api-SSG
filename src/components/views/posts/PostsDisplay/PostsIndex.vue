<script setup lang="ts">
import MasonryWall from '@yeger/vue-masonry-wall'

const { t } = useI18n()

defineProps<{ posts: object }>()

// type postViewType = ['masonry' | 'grid' | 'list']

const postsView: string = ref('')

const setMasonry = () => postsView.value = 'masonry'
const setGrid = () => postsView.value = 'grid'
const setList = () => postsView.value = 'list'

const activeClass = 'bg-white text-black dark:bg-slate-900 dark:text-blue-200  text-blue-700'

onMounted(() => setMasonry())

//  FUTURE: добавить сохранение в local storage


</script>

<template>
    <div v-if="posts.length"
        class="rounded-xl bg-gradient-to-r from-cyan-100 to-indigo-100 dark:from-cyan-900 dark:to-indigo-900 md:p-6">
        <!--  -->
        <div class="py-4">
            <div class="text-md font-light px-4">
                {{ t('posts.short.view') }}
            </div>

            <div class="flex flex-col md:flex-row gap-2 md:gap-4 px-2 py-2">
                <button class="flex gap-2 justify-center items-center py-2 px-4 rounded-xl"
                    :class="(postsView === 'masonry') ? activeClass : ''" @click="setMasonry">
                    <div class="i-mingcute:grid-2-fill" />
                    <div class="">
                        {{ t('posts.short.masonry') }}
                    </div>
                </button>

                <button class="flex gap-2 justify-center items-center py-2 px-4 rounded-xl"
                    :class="(postsView === 'grid') ? activeClass : ''" @click="setGrid">
                    <div class="i-mingcute:grid-fill" />
                    <div>
                        {{ t('posts.short.grid') }}
                    </div>
                </button>

                <button class="flex gap-2 justify-center items-center py-2 px-4 rounded-xl"
                    :class="postsView === 'list' ? activeClass : ''" @click="setList">
                    <div class="i-mingcute:list-check-3-fill" />
                    <div>
                        {{ t('posts.short.list') }}
                    </div>
                </button>
            </div>
        </div>

        <div v-if="(postsView === 'masonry')" class="gap-x-10 gap-y-6">
            <masonry-wall :items="posts" :ssr-columns="1" :column-width="300" :gap="40">
                <template #default="{ item }">
                    <PostShort :key="item?.id" :post="item" class="basis-1/5 flex flex-col justify-start rounded-xl" />
                </template>
            </masonry-wall>
        </div>

        <div v-else-if="(postsView === 'grid')"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-x-4 gap-y-6 ">
            <PostShort v-for="post in posts" :key="post?.id" :post="post"
                class="basis-1/5 flex flex-col justify-start rounded-xl" />
        </div>

        <div v-else>
            <div hidden>
                {{ t('posts.short.hidden_secret') }}
                <br />
                {{ t('posts.short.YES') }}
            </div>
            <div class="flex flex-col gap-4 justify-center">
                <PostShortTypeList v-for="post in posts" :key="post?.id" :post="post" />
            </div>
        </div>
    </div>
    <div v-else>
        <SpinnerLoader />
    </div>
</template>