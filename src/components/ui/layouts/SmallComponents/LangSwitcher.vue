<script setup lang="ts">
const { t, locale } = useI18n()
const lang = useLangStore()

const changeLang = (name: string) => {
  lang.changeLang(name)
  locale.value = name
  // console.log('store locale: ' + lang.lang);
  // console.log('i18n locale: ' + locale.value);
}
</script>

<template>
  <DropDown v-if="lang.lang == 'en'" @handle-change="changeLang('ru')">
    <template #text>
      {{ t('langs.en') }}
    </template>
    <template #icon>
      <FlagEN />
    </template>

    <template #drop_text>
      {{ t('langs.ru') }}
    </template>
    <template #drop_icon>
      <FlagRU />
    </template>
  </DropDown>

  <DropDown v-if="lang.lang == 'ru'" @handle-change="changeLang('en')">
    <template #text>
      {{ t('langs.ru') }}
    </template>
    <template #icon>
      <FlagRU />
    </template>

    <template #drop_text>
      {{ t('langs.en') }}
    </template>
    <template #drop_icon>
      <FlagEN />
    </template>
  </DropDown>
</template>
