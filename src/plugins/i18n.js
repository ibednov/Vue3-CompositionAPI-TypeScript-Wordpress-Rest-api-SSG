import { createI18n } from 'vue-i18n'

import ru from '../lang/ru.json'

export const i18n = createI18n({
    locale: 'ru', // set locale
    fallbackLocale: 'ru', // set fallback locale
    messages: { ru }, // set locale messages
})

// export async function loadMessages(locale) {
//     console.log(locale);
//     if (Object.keys(i18n.global.getLocaleMessage(locale)).length === 0) {
//         const messages = await import ('../lang/' + locale)

//         i18n.global.setLocaleMessage(locale, messages)
//     }

//     if (i18n.global.locale !== locale) {
//         i18n.global.locale = locale
//     }
// }