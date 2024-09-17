const MarkdownIt = require('markdown-it');

const mdParser = new MarkdownIt();

/**
 * Parses markdown text and extracts espanso triggers.
 * @param {string} markdownText - The markdown text to parse.
 *
 * @typedef {Object} EspansoConfig
 * @property {string} trigger - The trigger text
 * @property {string} form - The expanded form text
 * @property {string[]} variables - Template variables
 * @property {Object.<string, string[]>} choices - Choices for the variables
 *
 * @returns {EspansoConfig[]} The extracted espanso configuration.
 */
function parseMarkdown(markdownText) {
  const tokens = mdParser.parse(markdownText, {});
  let triggerKey = "";
  let triggers = {};

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'heading_open' && token.tag.match(/^h[2-6]$/)) {
      const inlineToken = tokens[i + 1];
      if (inlineToken.type === 'inline') {
        const content = inlineToken.content;
        const triggerMatch = content.match(/^(.*) `:(.*)`(.*?)$/);
        if (triggerMatch) {
          // Start of a new trigger
          triggerKey = triggerMatch[2].trim();
          triggers[triggerKey] = {
            trigger: triggerKey,
            form: '',
            variables: [],
            choices: {},
          };
        }
      }
    }

    if (token.type === 'fence' && triggerKey) {
      let newContentWithReplacedVars = token.content;
      const variableMatches = token.content.match(/\[\[(.*?)\]\]/g);
      if (variableMatches) {
        variableMatches.forEach((variable) => {
          /**
           * Transform the variable into a valid espanso variable name.
           *
           * @example
           * ```js
           * const variableName = 'variable_name'; // if variable = '[[Variable's Name]]';
           * const variableName = 'variable___choice_1___choice_2'; // if variable = '[[Variable|Choice 1|Choice 2]]';
           * ```
           *
           * @param {string} variable - The variable to transform.
           * @returns {string} The transformed variable.
           * @private
           * @ignore
           */
          const variableName = variable
            .replace('[[', '')
            .replace(']]', '')
            .replace(/\|/g, '___')
            .trim()
            .replace(/\s+/g, '_')
            .replace(/[^\w\s]/g, '')
            .toLowerCase();

          if (!triggers[triggerKey].variables.includes(variableName)) {
            triggers[triggerKey].variables.push(variableName);
            newContentWithReplacedVars = newContentWithReplacedVars.replace(
              variable,
              `[[${variableName}]]`
            );
          }

          if (variable.includes('|')) {
            const choices = variable
              .replace('[[', '')
              .replace(']]', '')
              .split('|')
              .map((choice) => choice.trim());
            triggers[triggerKey].choices[variableName] = choices;
          }
        });
      }
      triggers[triggerKey].form = newContentWithReplacedVars;
    }
  }

  return Object.values(triggers);
}

module.exports = parseMarkdown;
