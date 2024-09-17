const generateYaml = require('./generateYaml');

describe('generateYaml', () => {
  it('should generate valid YAML with multi-line strings and variables', () => {
    const espansoConfig = [
      {
        trigger: 'prproject',
        form: `I need help for my current project and I need you to help me as an experimented mentor, developer and agile coach.

My project is about:

[[fully_detailed_explanation]]

This only project I will refer to you within this conversation is only about this one.

I will try to always provide to you the relevant code associated to the feature or bug or whatever I talk you about.

The code will be surrounded by ", whenever possible.

Technically speaking, here are the libs we are using for our project:

"[[package_json_or_equivalent]]"

[[i_am_focus_on_frontend_____i_am_focus_on_backend]]`,
        variables: ['fully_detailed_explanation', 'package_json_or_equivalent'],
        choices: {
          i_am_focus_on_frontend_____i_am_focus_on_backend: [
            'I am focus on frontend',
            'I am focus on backend',
          ],
        },
      },
    ];

    const expectedYaml = `matches:
  - trigger: ':prproject'
    form: |-
      I need help for my current project and I need you to help me as an experimented mentor, developer and agile coach.

      My project is about:

      [[fully_detailed_explanation]]

      This only project I will refer to you within this conversation is only about this one.

      I will try to always provide to you the relevant code associated to the feature or bug or whatever I talk you about.

      The code will be surrounded by ", whenever possible.

      Technically speaking, here are the libs we are using for our project:

      "[[package_json_or_equivalent]]"

      [[i_am_focus_on_frontend_____i_am_focus_on_backend]]
    form_fields:
      fully_detailed_explanation:
        multiline: true
      i_am_focus_on_frontend_____i_am_focus_on_backend:
        type: list
        values: |-
          I am focus on frontend
          I am focus on backend
`;

    const yamlContent = generateYaml(espansoConfig);
    expect(yamlContent).toBe(expectedYaml);
  });
});


