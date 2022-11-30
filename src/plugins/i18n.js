import { createI18n } from 'vue-i18n';
import ru from '../lang/ru.json';
import en from '../lang/en.json';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
createApp().use(pinia);
import { useLangStore } from '@/pinia/lang';

export const i18n = createI18n({
  fallbackLocale: 'ru', // set fallback locale
  locale: useLangStore().lang.currentLang, // set locale
  messages: { ru, en }, // set locale messages
});
