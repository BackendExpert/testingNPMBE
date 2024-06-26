const fs = require('fs').promises;
const path = require('path');

async function createController(name) {
  const contectController = `

  const ${name}Controller = {
    // the contect of Controller
  }

  module.exports = ${name}Controller;
  `
  const controllerPath = path.join('server', 'Controllers', `${name}Controller.js`);

  await fs.mkdir(path.dirname(controllerPath), { recursive: true });

  await fs.writeFile(controllerPath, controllerContent.trim());
  console.log(`Controller ${name}Controller created at ${controllerPath}`);
}
