<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div
    class="container mx-auto flex flex-col gap-8 p-10 bg-blue-100 dark:bg-blue-900 rounded-xl"
  >
    <h1
      class="text-8xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-blue-400"
    >
      404
      <small>
        {{ t('error.error') }}
      </small>
    </h1>
    <h1 class="text-6xl text-center font-extrabold uppercase">
      {{ t('error.not_found') }}
    </h1>
    <h1 class="text-xl text-center font-light">
      {{ t('error.try_else') }}
    </h1>

  </div>
</template>


<route lang="yaml">
meta:
  layout: 404
</route>
