import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Should setup, matching with the CX id and friendlyURLMapping
  // So we can load the images correctly:
  base: "/o/testing-cx-custom-element",

  plugins: [react()],
  build: {
    // Necessary because Liferay generates `build` and `dist`
    // directories and we want to avoid conflicts:
    outDir: "./vite-build",

    rollupOptions: {
      // That's what make vite not include `react` and `react-dom`
      // inside the final bundle, so we can load that as module:
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
