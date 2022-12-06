<script setup lang="ts">
const { categories, load: loadCategories } = getCategories();
loadCategories();

const { t } = useI18n()
</script>
<template>
  <div class="container mx-auto">
    <div class="text-4xl text-center uppercase font-etrabold">All cats</div>

    <div class="flex flex-row flex-wrap">
      <a v-for="cat in categories" :href="'/category/' + cat.id" class="flex flex-col basis-1/3 grow p-4">
        <div class=" bg-cyan-300 dark:bg-cyan-800 p-4 rounded-xl hover:bg-blue-700 hover:text-white">
          <div v-html="t('categories.' + cat?.slug)" />
        </div>
      </a>
    </div>
  </div>
</template>
