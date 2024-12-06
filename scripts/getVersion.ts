import { execSync } from "child_process";
import { readFileSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";

function getVersion(): string {
  try {
    // Read the version from package.json
    const packageJsonPath = path.resolve(process.cwd(), "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
    const version = packageJson.version;

    // Get the Git commit count and short hash
    const gitCommitCount = execSync("git rev-list --count HEAD", { encoding: "utf-8" }).trim();
    const gitCommitHash = execSync("git rev-parse --short HEAD", { encoding: "utf-8" }).trim();

    // Construct the application version string
    const appVersion = `${version}-${gitCommitCount}-${gitCommitHash}`;
    console.log(appVersion);

    return appVersion;
  } catch (error) {
    console.error("Error generating version information:", error);
    process.exit(1);
  }
}

// Run the function if the script is executed directly
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  getVersion();
}

export default getVersion;
