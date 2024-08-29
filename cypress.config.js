const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '56w51d',
  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
