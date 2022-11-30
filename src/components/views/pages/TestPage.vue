<script setup>
import DropDown from '../../ui/dropdown/DropDown.vue';
import FlagRU from '@/components/ui/flags/FlagRU.vue';
import FlagEN from '@/components/ui/flags/FlagEN.vue';
</script>

<template>
  <div class="container mx-auto p-10">
    <DropDown>
      <template #text> English </template>
      <template #icon>
        <FlagEN />
      </template>

      <template #drop_text> Russian </template>
      <template #drop_icon>
        <FlagRU />
      </template>
    </DropDown>
  </div>

  <div class="hidden">
    <FlagRU />
    <FlagEN />
  </div>
</template>
