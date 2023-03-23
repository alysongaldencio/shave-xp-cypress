const { defineConfig } = require("cypress");

const { removeUser } = require('./cypress/support/tasks/database')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        removeUser 
      })
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'http://localhost:3000'

  },
});
