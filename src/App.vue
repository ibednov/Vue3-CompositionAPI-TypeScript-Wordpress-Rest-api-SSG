<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import NavBar from "./components/NavBar.vue";

</script>

<template>
  <div>
    <NavBar class="p-10 pb-20" />
    <router-view />
  </div>
</template>