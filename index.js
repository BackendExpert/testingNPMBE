const fs = require('fs').promises;
const path = require('path');

async function createController(name) {
  const contectController = `
  // import your model or models according to controller

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

async function createModel(name) {
  const contentModel = `
  const mongoose = require('mongoose')

  const ${name}Schema = new mongoose.Schema({
    // content of model
  })
  
  const ${name} = mongoose.model('${name}', ${name}Schema)
  
  module.exports = ${name};
  `

  const modelPath = path.join('server', 'Models', `${name}.js`);

  await fs.mkdir(path.dirname(modelPath), { recursive: true });

  await fs.writeFile(modelPath, controllerContent.trim());
  console.log(`Controller ${name}Controller created at ${modelPath}`);
}

async function createRoute(name) {
  const contentRoute = `
    const express = require('express')
    // import your Controller according to route
    
    const router = express.Router()
    
    // adding routes according to your needs 
    
    
    module.exports = router;
  `
}