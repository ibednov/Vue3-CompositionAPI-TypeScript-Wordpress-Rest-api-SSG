import { createApp } from "vue";

import router from "./router";
import store from "./store";

import { i18n } from "./plugins/i18n.js";

import "./style.css";

import App from "./App.vue";

createApp(App).use(i18n).use(router).use(store).mount("#app");
