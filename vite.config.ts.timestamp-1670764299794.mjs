// vite.config.ts
import path from "path";
import { defineConfig } from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/vite@3.2.5/node_modules/vite/dist/node/index.js";
import Preview from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/vite-plugin-vue-component-preview@0.3.3_vite@3.2.5/node_modules/vite-plugin-vue-component-preview/out/index.js";
import Vue from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.5+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/vite-plugin-pages@0.27.1_vite@3.2.5/node_modules/vite-plugin-pages/dist/index.mjs";
import generateSitemap from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/vite-ssg-sitemap@0.4.3/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/vite-plugin-vue-layouts@0.7.0_3nkpb5yzbuphqhegz2uv6y4s3u/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/unplugin-vue-components@0.22.11_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/unplugin-auto-import@0.12.0_@vueuse+core@9.6.0/node_modules/unplugin-auto-import/dist/vite.js";
import { VitePWA } from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/vite-plugin-pwa@0.13.3_vite@3.2.5/node_modules/vite-plugin-pwa/dist/index.mjs";
import Inspect from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/vite-plugin-inspect@0.7.9_vite@3.2.5/node_modules/vite-plugin-inspect/dist/index.mjs";
import Unocss from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/unocss@0.47.5_vite@3.2.5/node_modules/unocss/dist/vite.mjs";
import VueMacros from "file:///Users/alepsios/Dev/JS/Vue/alepsios-vue/node_modules/.pnpm/unplugin-vue-macros@1.0.3_gfj3bofsqnvfz2lytdjhc7n4pi/node_modules/unplugin-vue-macros/dist/vite.mjs";
var __vite_injected_original_dirname = "/Users/alepsios/Dev/JS/Vue/alepsios-vue";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    Preview(),
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
          reactivityTransform: true
        })
      }
    }),
    Pages({
      extensions: ["vue", "md"]
    }),
    Layouts(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n", "@vueuse/head", "@vueuse/core", "pinia"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store"],
      vueTemplate: true,
      eslintrc: {
        enabled: false,
        filepath: "types/.eslintrc-auto-import.json",
        globalsPropValue: true
      }
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    Unocss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Alex Bednov",
        short_name: "alexbednov",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    Inspect()
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap({
        hostname: "https://alexbednov.work"
      });
    }
  },
  ssr: {
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWxlcHNpb3MvRGV2L0pTL1Z1ZS9hbGVwc2lvcy12dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hbGVwc2lvcy9EZXYvSlMvVnVlL2FsZXBzaW9zLXZ1ZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWxlcHNpb3MvRGV2L0pTL1Z1ZS9hbGVwc2lvcy12dWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBQcmV2aWV3IGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1jb21wb25lbnQtcHJldmlldydcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xuaW1wb3J0IGdlbmVyYXRlU2l0ZW1hcCBmcm9tICd2aXRlLXNzZy1zaXRlbWFwJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbi8vIGltcG9ydCBNYXJrZG93biBmcm9tICd2aXRlLXBsdWdpbi12dWUtbWFya2Rvd24nXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuLy8gaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdml0ZS1wbHVnaW4tdnVlLWkxOG4nXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuLy8gaW1wb3J0IExpbmtBdHRyaWJ1dGVzIGZyb20gJ21hcmtkb3duLWl0LWxpbmstYXR0cmlidXRlcydcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG4vLyBpbXBvcnQgU2hpa2kgZnJvbSAnbWFya2Rvd24taXQtc2hpa2knXG5pbXBvcnQgVnVlTWFjcm9zIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYWNyb3Mvdml0ZSdcblxuLy8gaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIFByZXZpZXcoKSxcblxuICAgIFZ1ZU1hY3Jvcyh7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogVnVlKHtcbiAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICAgICAgcmVhY3Rpdml0eVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hhbm5vZXJ1L3ZpdGUtcGx1Z2luLXBhZ2VzXG4gICAgUGFnZXMoe1xuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQ2FtcGlvbkpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXG4gICAgTGF5b3V0cygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywgJ3Z1ZS1pMThuJywgJ0B2dWV1c2UvaGVhZCcsICdAdnVldXNlL2NvcmUnLCAncGluaWEnXSxcbiAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb3NhYmxlcycsICdzcmMvc3RvcmUnXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGZpbGVwYXRoOiAndHlwZXMvLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLFxuICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gYWxsb3cgYXV0byBsb2FkIG1hcmtkb3duIGNvbXBvbmVudHMgdW5kZXIgYC4vc3JjL2NvbXBvbmVudHMvYFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICBkdHM6ICdzcmMvY29tcG9uZW50cy5kLnRzJyxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vY3NzLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgVW5vY3NzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tdnVlLW1hcmtkb3duXG4gICAgLy8gRG9uJ3QgbmVlZCB0aGlzPyBUcnkgdml0ZXNzZS1saXRlOiBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZXNzZS1saXRlXG4gICAgLy8gTWFya2Rvd24oe1xuICAgIC8vICAgd3JhcHBlckNsYXNzZXM6ICdwcm9zZSBwcm9zZS1zbSBtLWF1dG8gdGV4dC1sZWZ0JyxcbiAgICAvLyAgIGhlYWRFbmFibGVkOiB0cnVlLFxuICAgIC8vICAgbWFya2Rvd25JdFNldHVwKG1kKSB7XG4gICAgLy8gICAgIC8vIGh0dHBzOi8vcHJpc21qcy5jb20vXG4gICAgLy8gICAgIG1kLnVzZShTaGlraSwge1xuICAgIC8vICAgICAgIHRoZW1lOiB7XG4gICAgLy8gICAgICAgICBsaWdodDogJ3ZpdGVzc2UtbGlnaHQnLFxuICAgIC8vICAgICAgICAgZGFyazogJ3ZpdGVzc2UtZGFyaycsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgbWQudXNlKExpbmtBdHRyaWJ1dGVzLCB7XG4gICAgLy8gICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxuICAgIC8vICAgICAgIGF0dHJzOiB7XG4gICAgLy8gICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgIC8vICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICB9LFxuICAgIC8vIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBkZXZPcHRpb25zOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdzYWZhcmktcGlubmVkLXRhYi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdBbGV4IEJlZG5vdicsXG4gICAgICAgIHNob3J0X25hbWU6ICdhbGV4YmVkbm92JyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy90cmVlL21haW4vcGFja2FnZXMvdml0ZS1wbHVnaW4tdnVlLWkxOG5cbiAgICAvLyBWdWVJMThuKHtcbiAgICAvLyAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxuICAgIC8vICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgIC8vICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyldLFxuICAgIC8vIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLWluc3BlY3RcbiAgICAvLyBWaXNpdCBodHRwOi8vbG9jYWxob3N0OjMzMzMvX19pbnNwZWN0LyB0byBzZWUgdGhlIGluc3BlY3RvclxuICAgIEluc3BlY3QoKSxcblxuICAgIC8vIGVzbGludFBsdWdpbigpLFxuICBdLFxuXG4gIC8vIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlc3QtZGV2L3ZpdGVzdFxuICAvLyB0ZXN0OiB7XG4gIC8vICAgaW5jbHVkZTogWyd0ZXN0LyoqLyoudGVzdC50cyddLFxuICAvLyAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAvLyAgIGRlcHM6IHtcbiAgLy8gICAgIGlubGluZTogWydAdnVlJywgJ0B2dWV1c2UnLCAndnVlLWRlbWknXSxcbiAgLy8gICB9LFxuICAvLyB9LFxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xuICBzc2dPcHRpb25zOiB7XG4gICAgc2NyaXB0OiAnYXN5bmMnLFxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxuXG4gICAgb25GaW5pc2hlZCgpIHtcbiAgICAgIC8vIGNvbnN0IHsgcG9zdHMsbG9hZCB9ID0gZ2V0UG9zdHMoKVxuICAgICAgLy8gbG9hZDtcbiAgICAgIC8vIGNvbnN0IGR5bmFtaWNSb3V0ZXMgPSBwb3N0cy5tYXAocG9zdCA9PiBgL3Bvc3RzLyR7cG9zdC5pZH1gKVxuICAgICAgZ2VuZXJhdGVTaXRlbWFwKHtcbiAgICAgICAgaG9zdG5hbWU6ICdodHRwczovL2FsZXhiZWRub3Yud29yaycsXG4gICAgICAgIC8vIGR5bmFtaWNSb3V0ZXNcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcblxuICBzc3I6IHtcbiAgICAvLyBUT0RPOiB3b3JrYXJvdW5kIHVudGlsIHRoZXkgc3VwcG9ydCBuYXRpdmUgRVNNXG4gICAgbm9FeHRlcm5hbDogWyd3b3JrYm94LXdpbmRvdycsIC92dWUtaTE4bi9dLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVMsT0FBTyxVQUFVO0FBQ3hULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8scUJB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
