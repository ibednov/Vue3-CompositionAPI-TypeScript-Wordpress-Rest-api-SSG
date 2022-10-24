<script setup>
import Category from "./CategoryById.vue";

import { ref } from 'vue'
import { Tabs, Tab } from 'flowbite-vue'

const activeTab = ref('uiux')
</script>

<template>

  <main class="container mx-auto p-4">
    <tabs variant="pills" v-model="activeTab" class="py-5">
      <tab name="uiux" title="UI/UX design" class="">
        <KeepAlive>
          <Category :cat="14" />
        </KeepAlive>
      </tab>
      <tab name="brand" title="Brand & marketing design">
        <KeepAlive>
          <Category :cat="87" />
        </KeepAlive>
      </tab>
      <tab name="front" title="Frontend & backend development">
        <KeepAlive>
          <Category :cat="13" />
        </KeepAlive>
      </tab>
      <tab name="gamedev" title="GameDev" :disabled="true">

      </tab>
      <tab name="blog" title="Blog">
        <KeepAlive>
          <Category :cat="2" />
        </KeepAlive>
      </tab>
    </tabs>
  </main>

  <!-- <section class="flex flex-row">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
      </path>
    </svg>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
      </path>
    </svg>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
      </path>
    </svg>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
      </path>
    </svg>
  </section> -->



</template>

