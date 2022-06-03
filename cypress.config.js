const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseurl: "https://www.vslstudio.io/login",
  failOnStatusCode: false,
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/**/*spec.js",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
