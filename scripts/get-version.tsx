import { readFileSync } from 'fs'; // ES module syntax for fs
import { execSync } from 'child_process';

// Read version from package.json
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
const version = packageJson.version;

// Get Git commit count and hash
let gitCommitCount = '0';
let gitCommitHash = '0000000';

try {
  gitCommitCount = execSync('git rev-list --count HEAD', { encoding: 'utf-8' }).trim();
  gitCommitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();
} catch (error) {
  console.warn('Git commands failed, using defaults.');
}

const appVersion = `${version}-${gitCommitCount}-${gitCommitHash}`;
console.log(appVersion);
