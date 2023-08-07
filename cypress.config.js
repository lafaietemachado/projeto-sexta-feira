const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'http://www.saucedemo.com',
    env: {
      fakerApi: 'http://fakerestapi.azurewebsites.net/api/v1'
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
