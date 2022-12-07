<script setup lang="ts">
onMounted(() => {
  import('flowbite');
}),


// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Alex Bednov – web-developer & UI/UX designer',
  meta: [
    { name: 'description', content: 'ваш дизайнер и разработчик' }
  ],
})
</script>
<template>
  <RouterView class="bg-white dark:bg-stone-900 text-black dark:text-white" />
</template>