import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useLangStore = defineStore('lang', () => {
  const currentLang = ref('ru')
  const lang = useStorage('lang', currentLang)
  function changeLang(name: string) {
    lang.value = name
  }
  return { lang, changeLang }
})