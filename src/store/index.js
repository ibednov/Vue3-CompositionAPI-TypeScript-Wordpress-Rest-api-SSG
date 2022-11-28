import { createStore } from 'vuex';
import { loadMessages } from '../plugins/i18n';

export default createStore({
  state() {
    return {
      locale: 'ru',
    };
  },
  getters: {},
  mutations: {
    setLocale(state, payload) {
      state.locale = payload;
    },
  },
  actions: {
    async setLocale({ commit }, locale) {
      await loadMessages(locale);
      commit('setLocale', locale);
    },
  },
});
