<script setup>
import DropDown from '@/components/ui/dropdown/DropDown.vue';
import FlagRU from '@/components/ui/flags/FlagRU.vue';
import FlagEN from '@/components/ui/flags/FlagEN.vue';

import { useLangStore } from '@/pinia/lang';

const lang = useLangStore().lang; // pinia store

const handleChangeLocaleRu = () => {
  lang.currentLang = 'ru';
};

const handleChangeLocaleEn = () => {
  lang.currentLang = 'en';
};
</script>

<template>
  <DropDown
    v-if="lang.currentLang == 'en'"
    @handle-change="handleChangeLocaleRu"
  >
    <template #text>
      {{ $t('langs.en') }}
    </template>
    <template #icon>
      <FlagEN />
    </template>

    <template #drop_text>
      {{ $t('langs.ru') }}
    </template>
    <template #drop_icon>
      <FlagRU />
    </template>
  </DropDown>

  <DropDown
    v-if="lang.currentLang == 'ru'"
    @handle-change="handleChangeLocaleEn"
  >
    <template #text>
      {{ $t('langs.ru') }}
    </template>
    <template #icon>
      <FlagRU />
    </template>

    <template #drop_text>
      {{ $t('langs.en') }}
    </template>
    <template #drop_icon>
      <FlagEN />
    </template>
  </DropDown>
</template>
