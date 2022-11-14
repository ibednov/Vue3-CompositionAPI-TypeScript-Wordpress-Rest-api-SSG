<script setup>
import TabSingle from "../../components/ui/Tabs/TabSingle.vue";
import TabsList from "../../components/ui/Tabs/TabsList.vue";
import Category from "./CategoryById.vue";
</script>

<template>
  <main class="container mx-auto">
    <TabsList>
      <TabSingle :title="$t('categories.uiux')" name="uiux">
        <KeepAlive>
          <Category :cat="14" />
        </KeepAlive>
      </TabSingle>
      <TabSingle :title="$t('categories.brand')" name="brand">
        <KeepAlive>
          <Category :cat="87" />
        </KeepAlive>
      </TabSingle>
      <TabSingle :title="$t('categories.dev')" name="dev">
        <KeepAlive>
          <Category :cat="13" />
        </KeepAlive>
      </TabSingle>
      <TabSingle :title="$t('categories.gamedev')" name="gamedev" disabled>
      </TabSingle>
      <TabSingle :title="$t('categories.blog')" name="blog">
        <KeepAlive>
          <Category :cat="2" />
        </KeepAlive>
      </TabSingle>
    </TabsList>
  </main>
</template>
