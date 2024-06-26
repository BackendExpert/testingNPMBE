const fs = require('fs').promises;
const path = require('path');

async function createController(name) {
  const contectController = `

  const ${name}Controller = {
    // the contect of Controller
  }

  module.exports = ${name}Controller;
  `
}
