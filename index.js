#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// now get controller name from terminal

const NameController = process.argv[2];


//  check are there any controller name enterd
if (!NameController) {
    console.error('Enter Controller name');
    process.exit(1);
}

// make controller file content

const controllerContent = `
const ${NameController} = {
    // all contoller methods goes here
}

module.exports = ${NameController}
`;

// Define the controller file path
const controllerPath = path.join('Controllers', `${NameController}.js`);

// Ensure the directory exists
fs.mkdirSync(path.dirname(controllerPath), { recursive: true });

// Write the controller file
fs.writeFileSync(controllerPath, controllerContent.trim());

console.log(`Controller ${NameController} created at ${controllerPath}`);