<script setup>
import { onMounted } from "vue";
import NavBar from "./components/NavBar.vue";

onMounted(() => {
  import("flowbite");
});
</script>

<template>
    <NavBar class="p-10 pb-20" />
    <router-view />
</template>