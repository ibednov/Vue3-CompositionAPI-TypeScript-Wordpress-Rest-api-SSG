<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="flex flex-col container mx-auto justify-center">
    <NavbarBlock/>
    <div i-carbon-warning class="w-20 h-20 self-center" />
    <RouterView />
    <button
      :to="{ name: 'Home' }"
      type="button"
      @click="router.back()"
      class="md:w-1/6 self-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {{ t('error.maybe_main') }}
    </button>
    <FooterBlock/>
  </main>
</template>
