<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'IndexPage',
})
const { t } = useI18n()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
// useHead({
//   title: t('ssg.home_name'),
//   meta: [
//     { name: 'description', content: t('ssg.home_desc') }
//   ],
// })
</script>

<template>
  <section class="flex flex-col md:hidden text-center">
    <div class="text-xl font-light">
      {{ t('home.welcome') }}
    </div>

    <div class="text-3xl font-bold uppercase text-center underline decoration-sky-600 dark:decoration-sky-500">
      {{ t('global.site_name') }}
    </div>

    <div
      class="text-xl font-light pt-6 pb-2 text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-700 dark:to-emerald-600 dark:from-sky-400">
      {{ t('home.check') }}
    </div>

    <div class="self-center pb-4 text-emerald-800 dark:text-emerald-500">
      <div class="i-mingcute:arrow-down-fill text-3xl"></div>
    </div>
  </section>

  <main class="container mx-auto">
    <TabsList>
      <TabSingle :title="'categories.uiux-design'" name="uiux" icon="i-mingcute:file-code-line">
        <PostsByCategory :cat="14" />
      </TabSingle>
      <TabSingle :title="'categories.brand-marketing-design'" name="brand" icon="i-mingcute:fire-line">
        <PostsByCategory :cat="87" />
      </TabSingle>
      <TabSingle :title="'categories.development'" name="dev" icon="i-mingcute:code-line">
        <PostsByCategory :cat="13" />
      </TabSingle>
      <TabSingle :title="'categories.gamedev'" name="gamedev" disabled="true" icon="i-mingcute:game-1-line">
      </TabSingle>
      <TabSingle :title="'categories.blog'" name="blog" icon="i-mingcute:edit-2-line">
        <PostsByCategory :cat="2" />
      </TabSingle>
    </TabsList>
  </main>
</template>


<route lang="yaml">
meta:
  layout: home
</route>
