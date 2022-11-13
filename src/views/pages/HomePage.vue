<script setup>
import TabSingle from "../../components/ui/Tabs/TabSingle.vue";
import TabsList from "../../components/ui/Tabs/TabsList.vue";
import Category from "./CategoryById.vue";
</script>

<template>
  <main class="container mx-auto">
    <TabsList>
      <TabSingle title="uiux">
        {{ $t("categories.uiux") }}
        <KeepAlive>
          <Category :cat="14" />
        </KeepAlive>
      </TabSingle>
      <TabSingle title="brand">
        {{ $t("categories.brand") }}
        <KeepAlive>
          <Category :cat="87" />
        </KeepAlive>
      </TabSingle>
      <TabSingle title="dev">
        {{ $t("categories.dev") }}
        <KeepAlive>
          <Category :cat="13" />
        </KeepAlive>
      </TabSingle>
      <TabSingle title="gamedev">
        {{ $t("categories.gamedev") }}
      </TabSingle>
      <TabSingle title="blog">
        {{ $t("categories.blog") }}
        <KeepAlive>
          <Category :cat="2" />
        </KeepAlive>
      </TabSingle>
    </TabsList>
  </main>
</template>
