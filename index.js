#!/usr/bin/env node

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
  const controllerPath = path.join('Controllers', `${name}Controller.js`);

  await fs.mkdir(path.dirname(controllerPath), { recursive: true });

  await fs.writeFile(controllerPath, contectController.trim());
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

  const modelPath = path.join('Models', `${name}.js`);

  await fs.mkdir(path.dirname(modelPath), { recursive: true });

  await fs.writeFile(modelPath, contentModel.trim());
  console.log(`Model ${name}Controller created at ${modelPath}`);
}

async function createRoute(name) {
  const contentRoute = `
    const express = require('express')
// import your Controller according to route
    
const router = express.Router()
    
// adding routes according to your needs 
    
    
module.exports = router;
    `

  const routePath = path.join('Routes', `${name}.js`);

  await fs.mkdir(path.dirname(routePath), { recursive: true });

  await fs.writeFile(routePath, contentRoute.trim());
  console.log(`Route ${name} created at ${routePath}`);
}

const [,, type, name] = process.argv;

if (!type || !name) {
  console.error('Please provide a type (controller, model, or Route) and a name');
  process.exit(1);
}


(async () => {
  try{
    if(type === "controller"){
      await createController(name)
    }
    else if(type === "model"){
      await createModel(name)
    }
    else if(type === "route"){
      await createRoute(name)
    }
  }
  catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})()

