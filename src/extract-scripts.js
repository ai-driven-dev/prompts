const fs = require('fs');

const bashCodeBlockRegex = /```bash\n((?:[^\n]*\n)*?# source: .+?)\n*?```/gm;

/**
 * Extracts the scripts from the given file path and write those in files.
 *
 * @param {string} filePath
 * @returns {void}
 */
function extractScripts(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const scripts = getScriptsContent(content);

  for (const source of scripts) {
    const sourcePath = source.match(/# source: (.*)/)[1];

    console.log(`📦 Extracting script from ${filePath} to ${sourcePath}`);
    if (fs.existsSync(sourcePath)) {
      console.log(`🔀 Updating...`);
      fs.unlinkSync(sourcePath);
    }
    fs.writeFileSync(sourcePath, `${source}`);
  }
}

/**
 * Extract scripts content from markdown.
 *
 * @param {string} fileContent
 *
 * @returns {string[]}
 */
function getScriptsContent(fileContent) {
  const scripts = [];
  let match;

  while ((match = bashCodeBlockRegex.exec(fileContent)) !== null) {
    const source = match[1];
    scripts.push(source);
  }

  return scripts;
}

module.exports = { extractScripts, getScriptsContent };