import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
