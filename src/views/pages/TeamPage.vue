<script setup>
import getTeam from '../../composibles/getTeam.js'
import Spinner from '../../components/Spinner.vue'
import TeamShort from '../../layouts/team/TeamShort.vue';

const props = defineProps({
    team: Object
});

const { team, load: loadTeam } = getTeam();
loadTeam();
</script>

<template>
    <h1 class="text-6xl uppercase font-extrabold text-center">
Команда
    </h1>
    <div class="container mx-auto bg-white dark:bg-stone-800 rounded-xl pa-10">
        <div v-if="team.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 gap-y-12">
            <TeamShort v-for="member in team" :key="member.id" :member="member" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>