// stores/counter.js
import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const useLangStore = defineStore('lang', {
  state: () => ({
    lang: useStorage('lang', {
      currentLang: 'ru',
    }),
  }),
  actions: {},
});
