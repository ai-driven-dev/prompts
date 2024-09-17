/**
 * @module generateYaml
 *
 * @description This module contains a function that transforms an espanso configuration into a YAML string.
 *
 */
const yaml = require('js-yaml');

/**
 * Transforms an espanso configuration into a YAML string.
 * @param {import('./parseMarkdown').EspansoConfig} espansoConfig
 * @example
 * const espansoConfig = [{
 *    trigger: 'trigger',
 *    form: 'form',
 *    variables: ['variable1', 'variable2'],
 *    choices: { 'variable1': ['choice1', 'choice2'] },
 * }];
 *
 * const yamlString = generateYaml(espansoConfig);
 *
 * @returns {string} The YAML string.
 */
function generateYaml(espansoConfig) {
  const yamlConfig = {
    matches: espansoConfig.map((configItem) => {
      const matchItem = {
        trigger: `:${configItem.trigger}`,
        form: configItem.form,
      };

      // If there are variables, add form_fields
      if (configItem.variables.length > 0) {
        matchItem.form_fields = {};
        configItem.variables.forEach((variable) => {
          // Construct the pattern to search for the variable enclosed in double quotes
          const pattern = `"[[${variable}]]"`;
          // Check if the pattern is not included in the replace string
          if (!variable.includes('___') && !matchItem.form.includes(pattern)) {
            // Add the variable to form_fields with multiline set to true
            matchItem.form_fields[variable] = { multiline: true };
          }
        });
      }

      // If there are choices, add them to form_fields
      if (configItem.choices && Object.keys(configItem.choices).length > 0) {
        matchItem.form_fields = matchItem.form_fields || {};
        Object.entries(configItem.choices).forEach(([variable, choices]) => {
          matchItem.form_fields[variable] = {
            type: 'list',
            values: choices.join('\n'),
          };
        });
      }

      // Remove form_fields object if it's empty
      if (
        matchItem.form_fields &&
        Object.keys(matchItem.form_fields).length === 0
      ) {
        delete matchItem.form_fields;
      }

      return matchItem;
    }),
  };

  // Convert the JavaScript object to a YAML string
  // Use the "styles" option to specify custom styles for different data types
  return yaml.dump(yamlConfig, {
    lineWidth: -1, // Disable line wrapping
    noRefs: true, // Prevent creating YAML references
    noCompatMode: true, // Disable compatibility mode to allow special characters in strings
    styles: {
      '!!null': 'canonical', // Dump null as ~
      '!!bool': 'lowercase', // Dump boolean values in lowercase
      '!!int': 'decimal', // Dump integers in decimal format
      '!!float': 'lowercase', // Dump floats in lowercase
      '!!str': 'fold', // Use block style for multi-line strings
    },
    quotingType: '"', // Use double quotes for strings
  });
}

module.exports = generateYaml;
