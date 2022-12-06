import { createI18n } from 'vue-i18n'
import { type UserModule } from '~/types'

import ru from '~/lang/ru.json';
import en from '~/lang/en.json';
import { createPinia } from 'pinia';

import { useLangStore } from '~/store/lang';

export const install: UserModule = ({ app }) => {
  const pinia = createPinia()
  app.use(pinia)
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: 'ru', // set fallback locale
    locale: useLangStore().lang, // set locale
    messages: { ru, en }, // set locale messages
  })
  app.use(i18n)
}

// // Import i18n resources
// // https://vitejs.dev/guide/features.html#glob-import
// //
// // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
// const messages = Object.fromEntries(
//   Object.entries(
//     import.meta.glob<{ default: any }>('../../locales/*.y(a)?ml', { eager: true }))
//     .map(([key, value]) => {
//       const yaml = key.endsWith('.yaml')
//       return [key.slice(14, yaml ? -5 : -4), value.default]
//     }),
// )