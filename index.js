#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the type (controller or model) and name from the command line arguments
const type = process.argv[2];
const name = process.argv[3];

// Ensure the user provided both type and name
if (!type || !name) {
  console.error('Please provide a type (controller or model) and a name');
  process.exit(1);
}

// Define the content based on type
let fileContent;
let filePath;

if (type === 'controller') {
  fileContent = `
const ${name} = {
    // all contoller methods goes here
}

module.exports = ${name}
`;
  filePath = path.join('Controllers', `${name}.js`);
} 

else if (type === 'model') {
  fileContent = `
const mongoose = require('mongoose')

const ${name}Schema = new mongoose.Schema({
    // contenet of model
})
       
const ${name} = mongoose.model('${name}', ${name}Schema)
       
module.exports = ${name}
`;
  filePath = path.join('Models', `${name}.js`);

} else {
  console.error('Invalid type. Please specify either "controller" or "model"');
  process.exit(1);
}

// Ensure the directory exists
fs.mkdirSync(path.dirname(filePath), { recursive: true });

// Write the file
fs.writeFileSync(filePath, fileContent.trim());

console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} ${name} created at ${filePath}`);

