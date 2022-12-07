<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'IndexPage',
})

const { t } = useI18n()

</script>

<template>
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
