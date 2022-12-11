<script setup lang="ts">
const { team, load: loadTeam } = getTeam();
loadTeam();
const { t } = useI18n()
</script>

<template>
    <h1 class="text-6xl uppercase font-extrabold text-center py-4">
        {{ t('team.team') }}
    </h1>
    <div class="container mx-auto">
        <div v-if="team.length"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-14 items-center">
            <TeamShort v-for="member in team" :key="member.id" :member="member" />
        </div>
        <div v-else>
            <SpinnerLoader />
        </div>
    </div>
</template>