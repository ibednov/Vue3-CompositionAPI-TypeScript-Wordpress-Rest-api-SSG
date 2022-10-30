<script setup>
import { onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import FooterBlock from "./components/FooterBlock.vue";

onMounted(() => {
  import("flowbite");
});
</script>

<template>
  <NavBar class="pb-4 md:pb-28" />
  <router-view />
  <FooterBlock />
</template>
