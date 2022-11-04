module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parser: "vue-eslint-parser",
  rules: {
    // override/add rules settings here, such as:
    // "vue/no-unused-vars": "error",
    // Enable vue/script-setup-uses-vars rule
    // "vue/script-setup-uses-vars": "error",
    // "vue/no-v-html": "error",
  },
};
