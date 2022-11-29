module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    // override/add rules settings here, such as:
    // "vue/no-unused-vars": "error",
    // Enable vue/script-setup-uses-vars rule
    // "vue/script-setup-uses-vars": "error",
    // "vue/no-v-html": "error",
  },
};
