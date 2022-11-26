<script setup>
import { onMounted } from "vue";
import NavBar from "@/components/ui/layouts/BigComponents/NavbarBlock.vue";
import FooterBlock from "@/components/ui/layouts/BigComponents/FooterBlock.vue";

onMounted(() => {
  import("flowbite");
});
</script>

<template>
  <NavBar class="pb-4 md:pb-28" />
  <router-view class="p-3 md:p-0" />
  <FooterBlock />
</template>
