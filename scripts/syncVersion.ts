// Using CommonJS syntax (if your project is not using ES Modules)
// Import required modules
const { writeFileSync } = require('fs');
const { execSync } = require('child_process');

// Define the type for the signature object
interface Signature {
  version: string;
}

// Run the `get-version.sh` script to get the app version
let appVersion = '0.0.0';
try {
  // Execute the script and get the version
  appVersion = execSync('node ./scripts/get-version.js', { encoding: 'utf-8' }).trim();
  console.log('App version fetched:', appVersion);
} catch (error) {
  console.error('Error fetching app version:', error);
}

// Create the signature object with the version
const signature: Signature = { version: appVersion };

// File path for saving the version to signature.json
const filePath = './public/signature.json';

try {
  // Write the version to the signature.json file
  writeFileSync(filePath, JSON.stringify(signature, null, 2), 'utf-8');
  console.log(`App version written to ${filePath}:`, signature);
} catch (error) {
  console.error(`Failed to write to ${filePath}:`, error);
}
