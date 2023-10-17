import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./testSetup.js",
  },

  base: "/o/vite-project",
  plugins: [react()],
  build: {
    outDir: "./vite-build",

    rollupOptions: {
      external: [/^project-library(\/.*)?$/],

      output: {
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
      },
    },
  },
});
