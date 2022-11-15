// stores/counter.js
import { defineStore } from "pinia";

export const useLangStore = defineStore("lang", {
  state: () => {
    return { currentLang: "ru" };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
