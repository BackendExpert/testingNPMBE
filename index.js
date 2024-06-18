#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// now get type and name from terminal

const type = process.argv[2];
const name = process.argv[3];



// Ensure the user provided both type and name
if (!type || !name) {
    console.error('Please provide a type and a name');
    process.exit(1);
}

let fileContent;
let filePath;
if (type === 'controller') {
    fileContent = `
        class ${name} {
        constructor() {
            // Initialize the controller
        }

        // Add controller methods here
        }

        module.exports = ${name};
    `;
    filePath = path.join('server', 'Controllers', `${name}.js`);
}