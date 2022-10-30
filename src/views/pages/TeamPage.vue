<script setup>
import getTeam from "../../composibles/getTeam.js";
import TeamShort from "../../layouts/team/TeamShort.vue";
import SpinnerLoader from "../../components/SpinnerLoader.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  team: Object,
});

const { team, load: loadTeam } = getTeam();
loadTeam();
</script>

<template>
  <h1 class="text-6xl uppercase font-extrabold text-center py-4">Команда</h1>
  <div class="container mx-auto">
    <div
      v-if="team.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-14"
    >
      <TeamShort v-for="member in team" :key="member.id" :member="member" />
    </div>
    <div v-else>
      <SpinnerLoader />
    </div>
  </div>
</template>
