<script setup lang="ts">
const route = useRoute()
const { member, load: loadGetTeamMember } = getTeamMember(route.params.id);
loadGetTeamMember();
</script>
<template>
  <TeamFull :member="member" />
</template>