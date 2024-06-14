const fs = require('fs');
const path = require('path');

// now get controller name from terminal

const NameController = process.argv[2];


//  check are there any controller name enterd
if (!controllerName) {
    console.error('Enter Controller name');
    process.exit(1);
}

// make controller file content

const controllerContent = `
const ${controllerName} = {
    // all contoller methods goes here
}

module.exports = ${controllerName}
`;