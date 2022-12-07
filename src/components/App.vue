<script setup lang="ts">
onMounted(() => {
  import('flowbite');
})

const { t } = useI18n()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: t('global.site_name'),
  meta: [
    { name: 'description', content: t('global.site_desc') }
  ],
})
</script>
<template>
  <RouterView class="bg-white dark:bg-stone-900 text-black dark:text-white" />
</template>