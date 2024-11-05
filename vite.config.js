// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        script: resolve(__dirname, "js/script.js"),
        script2: resolve(__dirname, "js/script2.js"),
      },
      output: {
        entryFileNames: "[name].js",
        format: "es",
      },
    },
    outDir: "dist",
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
