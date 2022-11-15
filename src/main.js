import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
import store from "./store";

import { i18n } from "./plugins/i18n.js";
import { registerSW } from "virtual:pwa-register";

import "./style.css";
import App from "./App.vue";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

const pinia = createPinia();

createApp(App).use(i18n).use(pinia).use(router).use(store).mount("#app");
