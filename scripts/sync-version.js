"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs"); // ES module import syntax
var child_process_1 = require("child_process");
// Run the `get-version.sh` script to get the app version
var appVersion = '0.0.0';
try {
    // Execute the script and get the version
    appVersion = (0, child_process_1.execSync)('node ./scripts/get-version.js', { encoding: 'utf-8' }).trim();
}
catch (error) {
    console.error('Error fetching app version:', error);
}
// Create the signature object with the version
var signature = { version: appVersion };
// File path for saving the version to signature.json
var filePath = './public/signature.json';
try {
    // Write the version to the signature.json file
    (0, fs_1.writeFileSync)(filePath, JSON.stringify(signature, null, 2), 'utf-8');
    console.log("App version written to ".concat(filePath, ":"), signature);
}
catch (error) {
    console.error("Failed to write to ".concat(filePath, ":"), error);
}
