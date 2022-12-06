<script setup lang="ts">
const props = defineProps<{ posts: object }>()
</script>
<template>
  <section class="container mx-auto flex flex-col">
    <div
      v-if="props.posts.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 rounded-xl p-10 bg-gradient-to-r from-fuchsia-200 to-blue-200 dark:from-blue-900 dark:to-teal-900"
    >
      <PostShort
        v-for="post in props.posts"
        :key="post?.id"
        :post="post"
        class="basis-1/5 flex flex-col justify-center rounded-xl"
      />
    </div>
    <div v-else>
      <SpinnerLoader />
    </div>
  </section>
</template>
