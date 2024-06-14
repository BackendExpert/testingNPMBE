const fs = require('fs');
const path = require('path');

// now get controller name from terminal

const NameController = process.argv[2];


//  check are there any controller name enterd
if (!controllerName) {
    console.error('Enter Controller name');
    process.exit(1);
}