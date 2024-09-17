const { getScriptsContent } = require('./extract-scripts');

describe('getScriptsContent', () => {
  it('should extract scripts content from markdown', () => {
    // Arrange
    const fileContent = `
**Script:**

\`\`\`bash
#!/bin/bash

echo "test"

# source: scripts/generated/project-documentation-typescript.sh
\`\`\`
    `;

    // Act
    const scripts = getScriptsContent(fileContent);

    // Assert
    expect(scripts).toEqual([
      `#!/bin/bash\n\necho "test"\n\n# source: scripts/generated/project-documentation-typescript.sh`,
    ]);
  });
});
