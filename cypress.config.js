const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  viewportWidth: 1280,
  video: true,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx}',
  },
});
