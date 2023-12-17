const fs = require('fs');
const { execSync } = require('child_process');

// Read the current version from version.json
const versionData = JSON.parse(fs.readFileSync('version.json', 'utf8'));

// Check which component has changes
// const isBackendChanged = execSync('git diff --name-only HEAD^ backend/').toString().trim() !== '';
// const isFrontendChanged = execSync('git diff --name-only HEAD^ frontends/').toString().trim() !== '';

// Update the version based on changes
  versionData.test = incrementVersion(versionData.test);
  
// Write the updated version back to version.json
fs.writeFileSync('version.json', JSON.stringify(versionData, null, 2));

// Helper function to increment version (you can adjust this logic)
function incrementVersion(version) {
  const parts = version.split('.');
  parts[2] = parseInt(parts[2]) + 1;
  return parts.join('.');
}
