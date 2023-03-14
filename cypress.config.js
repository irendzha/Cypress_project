const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://next.privat24.ua",
    excludeSpecPattern: "cypress/e2e/2-advanced-examples/*",
  },
});
