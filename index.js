const fs = require('fs');
const parseMarkdown = require('./src/espanso-generation/parseMarkdown');
const generateYaml = require('./src/espanso-generation/generateYaml');
const { extractScripts } = require('./src/extract-scripts');
const glob = require('glob');

console.log('🚀 Starting script...');

const espansoOSXPath = `${process.env.HOME}/Library/Application Support/espanso/match/packages/`;

const newEspansoPrivateFolder = `${espansoOSXPath}/espanso-private`;

if (!fs.existsSync(newEspansoPrivateFolder)) {
  console.log('📂 Creating espanso config directory...');
  fs.mkdirSync(newEspansoPrivateFolder, { recursive: true });
}

const PRIVATE_PROMPTS = ['./prompts/private/*'];
const PUBLIC_PROMPTS = [
  './../instructions/*.md',
  './resources/agents/*',
  './README*',
];

console.log('📝 Writing public prompts...');
fs.writeFileSync(
  './espanso/package.yml',
  getPromptsContentForEspanso(PUBLIC_PROMPTS)
);

console.log('📝 Writing private prompts...');
fs.writeFileSync(
  `${newEspansoPrivateFolder}/package.yml`,
  getPromptsContentForEspanso(PRIVATE_PROMPTS)
);

console.log('📝 Writing manifest...');
fs.writeFileSync(
  `${newEspansoPrivateFolder}/_manifest.yml`,
  `name: 'espanso-private'
title: 'AI Driven Dev Prompts (Private)'
description: A collection of your private prompts (not committed onto GitHub).
version: 0.1.0
author: alexsoyes ()
website: https://github.com/alexsoyes/ai-driven-dev-community`
);

console.log('📝 Writing README...');
fs.writeFileSync(`${newEspansoPrivateFolder}/README.md`, `Your custom prompts!`);

console.log('🔍 Extracting scripts from markdown...');
extractScriptsFromMarkdownToFiles(PUBLIC_PROMPTS);

console.log('✅ Script finished.');

/**
 * Generates the content for Espanso configuration from the given directories.
 *
 * @param {string[]} directories - An array of directories containing markdown files.
 * @returns {string} The generated YAML content for Espanso.
 */
function getPromptsContentForEspanso(directories) {
  console.log('🔄 Generating prompts content for Espanso...');
  const header = 'matches:\n';
  let yamlContent = header;

  for (const promptDirectory of directories) {
    const markdownFiles = glob.sync(promptDirectory + '.md');

    for (const markdownFile of markdownFiles) {
      yamlContent += getPrompts(markdownFile);
    }
  }

  return yamlContent;
}

/**
 * Generates the prompts for a given markdown file.
 *
 * @param {string} filePath - The path to the markdown file.
 * @returns {string} The generated YAML content for the markdown file.
 */
function getPrompts(filePath) {
  console.log(`🔄 Generating prompts for file "${filePath}"`);
  const markdownText = fs.readFileSync(filePath, 'utf8');
  const espansoConfig = parseMarkdown(markdownText);
  return generateYaml(espansoConfig).split('\n').slice(1).join('\n') + '\n';
}

/**
 * Extracts scripts from markdown files in the given directories and writes them to files.
 *
 * @param {string[]} directories - An array of directories containing markdown files.
 * @returns {void}
 */
function extractScriptsFromMarkdownToFiles(directories) {
  console.log('🔄 Extracting scripts from markdown files...');
  for (const promptDirectory of directories) {
    const markdownFiles = glob.sync(promptDirectory + '.md');

    for (const markdownFile of markdownFiles) {
      extractScripts(markdownFile);
    }
  }
}