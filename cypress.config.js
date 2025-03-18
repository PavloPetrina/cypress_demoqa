const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    excludeSpecPattern: ["**/examples"],
    types: ["cypress-plugin-steps"],
    viewportWidth: 1440,
    viewportHeight: 900,


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
