import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { VitePWA } from "vite-plugin-pwa";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   devOptions: {
    //     enabled: true,
    //     type: "module",
    //   },
    //   injectRegister: "script",
    // }),
    eslintPlugin(),
  ],
});
