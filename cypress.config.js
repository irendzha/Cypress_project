const { defineConfig } = require("cypress");
const { initPlugin } = require("cypress-plugin-snapshots/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      initPlugin(on, config);
      return config;
    },
    baseUrl: "https://next.privat24.ua",
    excludeSpecPattern: [
      "cypress/e2e/2-advanced-examples/*",
      "cypress/e2e/__snapshots__/*",
      "cypress/e2e/__image_snapshots__/*",
    ],
    imageConfig: {
      createDiffImage: true, // Should a "diff image" be created, can be disabled for performance
      threshold: 0.01, // Amount in pixels or percentage before snapshot image is invalid
      thresholdType: "percent", // Can be either "pixel" or "percent"
    },
    name: "custom image name", // Naming resulting image file with a custom name rather than concatenating test titles
    separator: "custom image separator", // Naming resulting image file with a custom separator rather than using the default ` #`
  },
});
