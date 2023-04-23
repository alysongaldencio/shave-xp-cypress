require('dotenv').config()

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

    env: {
      apiUrl: process.env.API_URL,
      apiHelper: process.env.API_HELPER
    },

    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: process.env.BASE_URL

  },
});
