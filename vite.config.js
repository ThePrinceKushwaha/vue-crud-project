// import { fileURLToPath, URL } from "node:url";

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:8000",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//       // vue: "vue/dist/vue.esm-bundler.js",
//     },
//   },
// });

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target:
          process.env.API_BASE_URL ||
          "https://vue-crud-project.onrender.com:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
