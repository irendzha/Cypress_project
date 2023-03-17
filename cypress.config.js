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
    env: {
      "cypress-plugin-snapshots": {
        imageConfig: {
          threshold: 1,
          thresholdType: "pixel",
        },
      },
    },
  },
});
