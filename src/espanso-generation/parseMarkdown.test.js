const parseMarkdown = require('./parseMarkdown');
const convertToYaml = require('./convertToYaml');

describe('parseMarkdown', () => {
  it('should parse variables and convert to YAML', () => {
    const markdownText = `
### My project configuration \`:prproject\`

\`\`\`text
My project is about:

[[Fully detailed explanation]]
\`\`\`
`;

    const espansoConfig = parseMarkdown(markdownText);
    const yamlContent = convertToYaml(espansoConfig);

    expect(yamlContent).toMatch(/trigger: ':prproject'/);
    expect(yamlContent).toMatch(/multiline: true/);
  });

  it('should parse triggers and forms from markdown', () => {
    const markdownText = `
# Espanso config file generation from markdown prompts

## Global dev prompts

### Who am I? \`:prtsme\`

\`\`\`text
I am a senior software engineer on JavaScript but I prefer to use TypeScript.

[[My tech stack, e.g. Node.js, React, TypeScript]]

[[I am focus on frontend | I am focus on backend]]
\`\`\`
`;

    const result = parseMarkdown(markdownText);

    expect(result).toEqual([
      {
        trigger: 'prtsme',
        form: 'I am a senior software engineer on JavaScript but I prefer to use TypeScript.\n\n[[my_tech_stack_eg_nodejs_react_typescript]]\n\n[[i_am_focus_on_frontend_____i_am_focus_on_backend]]\n',
        variables: [
          'my_tech_stack_eg_nodejs_react_typescript',
          'i_am_focus_on_frontend_____i_am_focus_on_backend',
        ],
        choices: {
          i_am_focus_on_frontend_____i_am_focus_on_backend: [
            'I am focus on frontend',
            'I am focus on backend',
          ],
        },
      },
    ]);
  });

  it('should accept trigger headings ending with (WIP)', () => {
    const markdownText = `
### Help me thinking \`:codeCodingHelpThinking\`

\`\`\`text
I need you to help me think about the best way to implement this new functionality:
[[new functionality]]

Please provide the best coding steps regarding my existing code.
\`\`\`

### Improve code readability \`:codeCodingImproveReadability\` (WIP 🚧)

\`\`\`text
I need you to improve the readability of the following code.

Result should remain the same, but the code should be easier to read and understand.
\`\`\`

### Give me an example of the usage of this function \`:codeCodingProvideExampleUsage\` (WIP 🚧)

\`\`\`text
Provide an example of the usage of this function, input and output.
\`\`\`
`;
    expect(parseMarkdown(markdownText)).toMatchSnapshot();
  });
});

