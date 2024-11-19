# AI-Driven Dev {Prompts}

This repository is the new `Prompts` repository for the AI-Driven Dev project.

> **Warning**
> This repository is under heavy development.

- [🚀 Use optimized dev prompts in you workflow](#-use-optimized-dev-prompts-in-you-workflow)
  - [Install a text expander](#install-a-text-expander)
  - [How-to use prompts library](#how-to-use-prompts-library)
  - [Get the latest prompt](#get-the-latest-prompt)
- [✅ General GuideLines](#-general-guidelines)
  - [The perfect Prompt Template `:codePrompt`](#the-perfect-prompt-template-codeprompt)
- [🧑‍💻 RAG (Retrieval Augmented Generation)](#-rag-retrieval-augmented-generation)
  - [Instruct AI to be a developer from your project `:ragProject`](#instruct-ai-to-be-a-developer-from-your-project-ragproject)
  - [Code Review `:ragReview`](#code-review-ragreview)
  - [Architecture `:ragArchitecture`](#architecture-ragarchitecture)
- [🙋‍♂️ Feature request](#️-feature-request)
  - [Generate user stories `:featureUS`](#generate-user-stories-featureus)
  - [Technical plan `:featurePlan`](#technical-plan-featureplan)
  - [Generate code for a feature `:featureCode`](#generate-code-for-a-feature-featurecode)
- [⚗️ Project Setup / Bootstrap](#️-project-setup--bootstrap)
  - [Enforce good practices `:projectEnforce`](#enforce-good-practices-projectenforce)
- [💽 Database](#-database)
  - [Generate SQL from specifications `:dbGenSQL`](#generate-sql-from-specifications-dbgensql)
  - [Create entity from SQL Schema `:dbGenEntity`](#create-entity-from-sql-schema-dbgenentity)
- [🚀 Code Generation](#-code-generation)
  - [Generate new function from specifications `:codeGenFn`](#generate-new-function-from-specifications-codegenfn)
  - [Create new file based on existing file `:codeNewFile`](#create-new-file-based-on-existing-file-codenewfile)
  - [Fake data `:codeFakeData`](#fake-data-codefakedata)
- [🏞️ Generate code from image](#️-generate-code-from-image)
  - [Extract details from image and match components (WIP)](#extract-details-from-image-and-match-components-wip)
- [💉 Bug Fixing](#-bug-fixing)
  - [Find the issue `:bugFind`](#find-the-issue-bugfind)
  - [Create new generic file `:codeNewFileGeneric`](#create-new-generic-file-codenewfilegeneric)
- [🐛 Debugging](#-debugging)
  - [Write log `:debugLog`](#write-log-debuglog)
  - [Detect inconsistencies `:debugInconsistency`](#detect-inconsistencies-debuginconsistency)
- [🧪 Tests](#-tests)
  - [Generate Gherkin `:testGenGherkin`](#generate-gherkin-testgengherkin)
  - [Check for test methods to implement `:testAdd`](#check-for-test-methods-to-implement-testadd)
  - [Create new test based on existing test (WIP)](#create-new-test-based-on-existing-test-wip)
  - [List untested functions `:testUntested`](#list-untested-functions-testuntested)
  - [List test cases `:testListCases`](#list-test-cases-testlistcases)
- [⚡️ Zero Shot Prompts](#️-zero-shot-prompts)
  - [Answer in markdown `:answerMd`](#answer-in-markdown-answermd)
- [📚 Documentation](#-documentation)
  - [Search in online documentation `:docSearch`](#search-in-online-documentation-docsearch)
  - [Insert / Update / Beautify comments `:docInsert`](#insert--update--beautify-comments-docinsert)
  - [Provide example to use a function `:docFnExample`](#provide-example-to-use-a-function-docfnexample)
- [🔄 Refactoring](#-refactoring)
  - [Optimize this code snippet `:refactOpt`](#optimize-this-code-snippet-refactopt)
  - [Optimize code performance `:refactPerf`](#optimize-code-performance-refactperf)
- [🧙 Senior Advice](#-senior-advice)
  - [Code Review (WIP)](#code-review-wip)
  - [Project Architecture (WIP)](#project-architecture-wip)
  - [Design Patterns `:adviceDesignPatterns`](#design-patterns-advicedesignpatterns)

## 🚀 Use optimized dev prompts in you workflow

Because better prompts leads to (way) better results.

This is a collection of prompts that I use to generate images for my AI-Driven Dev project.

<https://ai-driven-dev.com>

### Install a text expander

1. Follow the [Espanso installation guide here](https://espanso.org/install/) for your operating system.

2. Then, install the package:

```sh
espanso install ai-driven-dev-prompts --git git@github.com:ai-driven-dev/prompts.git --external
```

3. Launch the app any time you want to use the prompts.

### How-to use prompts library

When you need a prompt, type `:promptName` OR press `⌥ + Space` (Windows / Linux : `ALT + Space`) and search for `prompt's name`.

![espanso usage](docs/espanso.gif)

### Get the latest prompt

Prompts are updated regularly but the AI-Driven Dev Community, use that command to get the latest upgraded prompts.

```sh
espanso package update ai-driven-dev-prompts
```

## ✅ General GuideLines

Those prompts will be used to personalize the AI based on your requirements.

- It can be used in your IDE (e.g., GitHub Copilot, Cursor...)
- It can be used as a Custom GPT

### The perfect Prompt Template `:codePrompt`

1. Use the `:codePrompt` template to get started.
2. "Goal", "Rules", and "Context" are mandatory.
3. "Examples" are optional but highly recommended.
  
```text
Goal: "[[What you want to achieve with this prompt]]"

Rules:
- "[[Rule 1]]"
- "[[Rule 2]]"
- "[[Rule 3]]"

Steps (optional):
- "[[Step 1]]"
- "[[Step 2]]"
- "[[Step 3]]"

Context:
<context>
[[Describe the context of the prompt]]
</context>

Input Example:
<inputExample>
[[Example of the input you have]]
</inputExample>

Output Example:
<outputExample>
[[Example of the output you want to get]]
</outputExample>
```

## 🧑‍💻 RAG (Retrieval Augmented Generation)

You can personalize the AI responses to your project context.

### Instruct AI to be a developer from your project `:ragProject`

This code will teach the AI to answer as a developer from your project.

- **Parameters**:
  - project name
  - project description
  - your role
  - tech stack
  - language specifics
- **Additional context**:
  - Project Structure (in `tree`)
  - Project Tech Stack (upload `package.json` and extract main stack)

```text
## My Project

Name: "[[project name]]".
Description: "[[project description]]".
My Role: "[[your role]]".
Tech Stack: "[[tech stack]]".

## Code Generation Rules

- Comment only on complex logic or business rules.
- Use clear, concise, and obvious names to avoid comments.
- Focus on business logic, not implementation details.
- Focus on readability and maintainability over complex optimizations.
- Limit explanations to the minimum needed to understand the code.
- Provide only the necessary code changes.
- Always ensure type safety.
- Keep functions simple.
- Limit functions to 20 lines when possible, 50 at most.
- Follow the style of the existing codebase.
- Use modular programming best practices.
- Optimize code for performance and scalability.
- Always return entire code changes, never use "// ... existing code ..." or similar.
- Language Specifics:
[[language specifics, e.g.: arrow function, async/await, etc.]]

### Security

- Follow OWASP guidelines for secure coding.
- Avoid deprecated or insecure libraries. Suggest alternatives only if needed.
- Sanitize and validate all inputs using framework tools.
- Follow security best practices for data handling (e.g., avoid hardcoded credentials, prevent SQL injection).

## When asking explicitly Error Handling

- For non-critical errors, use recovery mechanisms rather than throwing.
- Make error messages meaningful and actionable.
- Throw errors to avoid unexpected behavior.
- Include error handling in all functions (e.g., try/catch).
- Log meaningful errors where appropriate.

## When asking explicitly to write Tests

- Focus tests on functionality and edge cases, not implementation details.
- Include both positive and negative test cases.
- Use Mocks only for external calls.
- Follow the Arrange-Act-Assert pattern.
- Structure tests to match the existing style.
- Tests should be clear, precise, and broken into small parts.
```

### Code Review `:ragReview`

```text
Your task is to analyze the provided code snippet and suggest improvements to optimize its performance.

Identify areas where the code can be made more efficient, faster, or less resource-intensive.

Provide specific suggestions for optimization, along with explanations of how these changes can enhance the code’s performance.

The optimized code should maintain the same functionality as the original code while demonstrating improved efficiency.

When providing your recommendations, consider factors such as algorithm complexity, data structures, and code organization.

Please wait for the user to provide the code snippet before proceeding with the audit, and ensure that your suggestions are clear and well-explained.

Rules:
- Reduce complexity.
- Improve readability.
- Enhance performance.
- Merge similar functions into one.
- Remove redundant code.

Steps:
1. Explain what the code is doing (in very concise bullet points).
2. List those points, then give detailed explanations of the impact and propose specific recommendations for optimizing the code (formatted as bullet points).
  - identified performances issues
  - identified readability issues
  - identified maintainability issues
3. Rewrite full code snippets with your improvements.
4. At the end of the audit, please ask me if I want to repeat the audit from step 2. with this time, the newly generated code, until you get a "no" or you reach a maximum of 3 iterations, or you are satisfied with the result.
```

### Architecture `:ragArchitecture`

````markdown
As a software architect, you are tasked with conducting a comprehensive audit of a project structure. 

Brief:
You are required to review, criticize the project structure and identify potential issues that could impact the project's maintainability, scalability, and overall efficiency.

Goal:
Propose improvements to the project structure to enhance its quality and ensure that it aligns with best practices.
Feat every issue regarding the "Project" info and its tech stack.

Rules:
- Empty files or folders.
- Duplicate files.
- Large files.
- Overly nested folders.
- Overloaded folders.
- Inefficient project structure.
- Inconsistent naming conventions, generic names, or unclear file organisation.
- Files in the wrong directory.
- Use architecture best practices.
- Find inconsistencies and risks.
- Propose actions to improve existing architecture.

Tasks:
1. List rules to check in bullet points, then add more relevant ones regarding the project stack (suffix those by 🆕 emoji to identify them) that can be detected using project structure and package manager file.
2. List every potential issue in the project structure.
3. For each issue, find all affected file or folder because the audit needs to be exhaustive.
4. Do not provide issue if there is no recommendation to solve it.
6. Only answer using "Tasks" and "Template" sections.

Template:
"""
# Architecture Audit

* Main technologies used in list.
* Description of the project.

## (emoji) Title of the issue

Very short explanation of the issue and why it is problematic.

* List of every affected files or folders.
  * ...
* Explanation of the issue.
* Short explanation of recommendations to solve the issue, provide tools or methods if necessary.
  * ...
* Example of how the issue can be fixed.
"""

Final steps at the end of the audit, ask the user to type:
1) Continue audit and ask user to specify more rules of your own.
2) Re-audit the project dismissing correct points.
3) Reupload new project structure and Re-audit.
4) Continue audit, AI will try to find new issues.
````

## 🙋‍♂️ Feature request

### Generate user stories `:featureUS`

If you want to generate user-stories for your project, use this prompt.

**Parameters**:

- Feature to build, be as detailed as possible

````text
Goal: Please endorse Product Owner to write very good user stories for the developers team.

Rules:
- Do not generate anything yet.
- Ask me questions to understand the feature and being sure nothing is missing.
- Questions can include user roles, actions, and outcomes, as well as UI/UX details.
- Be accurate and really lean, use concise questions.
- Make user stories coherent and clear.
- Sort them by priority of code.
- When the user asks, write the user stories using the template under.
- Output the template in markdown.

Requirements:
<requirements>
[[Feature to build, be as detailed as possible]]
</requirements>

User stories template:
```markdown
# Feature's name with Epic

## "User Story 1"

**As a** [role]
**I want** [action]
**So that** [outcome]

* Acceptance Criteria:
  * [ ] Given: ...
  * [ ] When: ...
  * [ ] Then: ...
  * [ ] And: ...

## "User Story 2"

...
```
````

### Technical plan `:featurePlan`

Feel free to remove part of the plan you are not using.

```markdown
# Technical Plan to code my feature

## Description

[[1 sentence summary of the feature.]]

## Behavior: User flow

The idea of the feature is:

- Given the user...
- When the user...
- Then the user...

## Frontend Implementation (w/wo UI)

- [ ] Action

## Backend Implementation (w/wo DB)

- [ ] Action

## Tests

- [ ] Describe
  - [ ] It should...
  - [ ] It should...

## Requirements from Product Owner

Here are the original requirements from the Product Owner:
<requirements>
optional if you made a "perfect" plan
</requirements>
```

<!-- markdownlint-disable MD033 -->
<details>
<summary>Example</summary>

````markdown

# Technical Plan to code my feature

## Description

I need to code a edit form to edit a suggestion.

## Behavior: User flow

The idea of the feature is:

- Given the user is on the suggestions list page
- When the user click the edit button of a suggestion
- Then the user can see a dialog containing a form to edit the suggestion's name, description and version

## Frontend Implementation (w/wo UI)

- [ ] Create one button "Edit" per cell in not existing in @SuggestionLine.tsx
  - [ ] Remove everything related to "isEditing" and state management, submit functions, just display table
- [ ] It will open a Dialog from @Dialog.tsx
- [ ] Dialog contains a `<form>` with useFormState, create a new component "EditSuggestionForm" using example in @TipForm.tsx 
  - [ ] `id` is passed as hidden field
  - [ ] `id`, `name`, `description` and `version` are passed as Props
  - [ ] Use "InputWithLabel" same way this is in @TipForm.tsx
  - [ ] Dialog has a close button top right
- [ ] Dialog has a unique submit button
  - [ ] Display form errors if any at the bottom of the form
  - [ ] On submit, call  "createSuggestionAction" from useFormState

## Backend Implementation (w/wo DB)

- [ ] Create a form action similar to @createSuggestionAction.ts but for edition (name, description, version are editable)
- [ ] In order to persist the save, you need to create a save in FireStore similar to @createSuggestion.ts but for edition
- [ ] Create a new "SuggestionEditForm" type
  - [ ] Pick id, name, description and version to "Suggestion" type in @Suggestion.ts , use that type in my form action

## Tests

- [ ] Describe "Suggestion Edition"
  - [ ] It should edit an existing suggestion
    - [ ] Test against @createSuggestionAction.ts  method
    - [ ] Mock deps using example from @newsletterAction.test.ts 
    - [ ] Mock next/* calls like "revalidatePath"
````

</details>
<!-- markdownlint-enable MD033 -->

### Generate code for a feature `:featureCode`

**Parameters**:

- Requirements: Can be the user stories or the technical plan.

```text
Goal:
Generate code for a feature based on existing codebase.

Requirements:
<requirements>
[[Requirements]]
</requirements>

Rules:
- Acknowledge it.
- Reformulate in bullet point grouped by section to show me that you understood what to do.
- Generate development steps (based on my codebase).

Output example:
<outputExample>
Feature to code: ...

Development steps:

1. ...
2. ...
3. ...

Plan:

Step 1: ...

Sub step 1.1: ...

...
</outputExample>
```

## ⚗️ Project Setup / Bootstrap

### Enforce good practices `:projectEnforce`

**Parameters**:

- Tech stack: "React, TypeScript..."
- Configuration file: "package.json, tsconfig.json..."

```text
Goal:
Regarding my used project technologies "[[your tech stack]]", can you help me to enforce the following good practices in my application?

Rules:
1. Please list best tools and practices I can use regarding:
  - Code format.
  - Linting.
  - Tests before commit.
  - Build before push.
  - Force good commit convention from conventional commit (or equivalent).
  - SemVer version management.
  - Major updates notice (in CI).
  - Minor and security updates automatically install.
  - Security checks.
  - Code coverage.
  - Documentation.
2. For each steps, detail the step by step things to setup those improvements regarding my project's config.
3. Use the latest version of tools unless I do specify otherwise.

Context:
- Configuration file: #
```

## 💽 Database

### Generate SQL from specifications `:dbGenSQL`

```text
Goal:
Generate SQL from specifications.
```

### Create entity from SQL Schema `:dbGenEntity`

```text
Goal:
Create entity from SQL Schema.

I need you to help me creating my "[[objects|types|interfaces]]" in "[[language]]" from my SQL database schema (surrounded by "---" delimiters):
---
[[SQL schema]]
---

1. For each entity, I want you to generate the corresponding type.
2. For each relation, I want you to generate the corresponding type.
3. No comment in code.
4. Suffix the type name with "Entity".
```

## 🚀 Code Generation

### Generate new function from specifications `:codeGenFn`

```text
Goal:
Generate a new function from specifications.

Rules:
- Generate a new function matching the specifications.
- List logic to implement in bullet points.
- Function must reuse existing code when possible.
- Focus on business logic.

Specifications:
[[Specifications]]
```

### Create new file based on existing file `:codeNewFile`

```text
Goal:
Create a new file based on an existing file.

Rules:
- Create a new file with the same structure as the existing file.
- Adapt the code to the new file.
- Do not keep existing logic, only take structure and reusable code.

Context:
[[Describe new logic]]

Existing file: #file
New file: #file
```

### Fake data `:codeFakeData`

```text
Goal:
Generate a new variable filled with fake data.

Rules:
- Fill all fields with valid values.
- Type of the data must be respected.
```

## 🏞️ Generate code from image

### Extract details from image and match components (WIP)

```text
Goal:
Extract details from image and match components in the codebase.

Steps:
1. Analyze the image, then extract information about the image.
  - Then, match the information with the components in the codebase.
  - Match every info with a component in the codebase in a bullet point list.
2. Identify: simple text, changing state and actions that must be handled by functions.
  - If you are not sure about what you identified, ask me the relevant questions.
  - Then, continue with the next step.
3. Bind actions from the image with existing functions in the codebase.
  - Use feature folder.
4. Generate code from the information extracted.
  - Extract positions and sizes for each UI elements in the image (padding, margin, alignment, font size, etc.)
  - Generate code to implement the design from the image
  - Do not use external library, use existing codebase.
  - Create local components if necessary.

Context:
- Component folder: #
- Feature folder: #
- Image is attached.
```

## 💉 Bug Fixing

### Find the issue `:bugFind`

```text
Goal:
Find the issue in the given code context.

Given: "[[State]]".
When: "[[Action]]".
Then: "[[Expected result]]".

Instead, I get the following:
<error>
[[Result, behavior, error logs... or your analysis]]
</error>

Rules:
- Analyze the given code
- Then list potentials issues and steps to fix the code
- Sort them by relevance
- Issues might be induced by another part of the code, so you might need to check the whole codebase.
```

### Create new generic file `:codeNewFileGeneric`

```text
Goal:
I want to make this file generic so it can "[[purpose]]".

Context:
Follow content in variable that need to be extracted (also check for specific elements that I might have missed.):
<elements>
[[specific elements that must be extracted]]
</elements>

Rules:
1. List all the elements that need to be extracted.
2. List all the elements that do not need to be removed.
3. List the steps to achieve the refactoring.
4. Provide the code to add or modify (do not make unnecessary changes).
```

## 🐛 Debugging

### Write log `:debugLog`

```text
Goal:
Add logging messages to the given code at each significant step.

Rules:
- Use an appropriate emoji at the start of each log message for better visualization.
- Annotate the code by adding logging messages at each significant step, including within inner functions.
- Each log message must use a suitable emoji representing the step it corresponds to— for instance:
  - 🛠️ **Action Step** (When a particular action is being performed)
  - ✅ **Confirmation Step** (Verifying or completing an action)
  - 🔄 **Calling Function** (Log inner function calls)
  - ⚠️ **Handling Errors** (If logging at the point of error handling)
- Each message must be descriptive to help in easy debugging of errors.
- Ensure loggings are descriptive enough to aid in debugging but not too verbose as to overwhelm output.
- Log points should include function calls, iteration starts, important decisions, error handling, and final steps.
- The focus should be on enhancing clarity without compromising code functionality.
```

### Detect inconsistencies `:debugInconsistency`

```text
Goal:
Review the given code and identify all inconsistencies. 

Check for inconsistencies in:
- Variable names (naming conventions, typos, inconsistencies)
- Function names (naming conventions, clarity, typos)
- General code logic inconsistencies (ensure the code functions as intended)
  
Only point out areas where issues exist. Do not provide commentary on parts of the code that are correct.

Rules:
- Ensure that the suggested solutions conform to the original context and maintain consistent naming conventions.
- Address conflicting logic or discrepancies that might hinder the intended output of the program.
- Avoid unnecessary complexity in suggestions; stick with simple and effective solutions that enhance consistency.
- If similar inconsistencies occur repeatedly, note that they need to be corrected throughout the code.
```

## 🧪 Tests

### Generate Gherkin `:testGenGherkin`

````text
Goal:
Interpret the following feature description to create a Gherkin-style user story.

Rules:
- Read the feature description: "[[As... I want... So that...]]"
- Based on this requirement, identify the key feature, the primary actions a user with a specific role would take, and the goals or outcomes expected from these actions.
- Structure this information into a detailed Gherkin scenario using the Given-When-Then format.
  - The 'Given' step should establish the context, including the user's role.
  - The 'When' step should describe the user's actions.
  - The 'Then' step should specify the expected outcomes.

Example output:
````gherkin
# Gherkin Best Practices
# ---------------------
# 1. Use ubiquitous language
# 2. One scenario = one test objective
# 3. Avoid technical details in scenarios
# 4. Favor Scenario Outlines for similar tests
# 5. Keep scenarios short and concise (3-5 steps maximum)
# 6. Use tags consistently
# 7. Avoid dependencies between scenarios
# 8. Name your scenarios descriptively
# 9. Use Background for common steps
# 10. Follow Given-When-Then format

# language: en

@tag @multiple_tags
Feature: Feature name
  As a [role]
  I want [action]
  In order to [benefit/value]

  Background:
    Given [prerequisite 1]
    And [prerequisite 2]

  Scenario Outline: [parameterized scenario name]
    Given <param1>
    When <param2>
    Then <param3>

    Examples:
      | param1 | param2 | param3 |
      | val1   | val2   | val3   |
      | val4   | val5   | val6   |

  Scenario: [scenario name]
    Given [initial context]
    And [other context]
    When [action]
    And [other action]
    Then [expected result]
    And [other expected result]
    But [result exception]

  @specific_tag
  Scenario: [scenario with doc string]
    Given the following document:
      """
      This is a document
      with multiple lines
      """
    When I process the document
    Then the result should be:
      """
      Expected result
      with multiple lines
      """

  Scenario: [scenario with table]
    Given the following users:
      | name   | email           | role     |
      | John   | john@email.com  | admin    |
      | Mary   | mary@email.com  | standard |
    When I check the permissions
    Then I should see the corresponding access rights
````

### Check for test methods to implement `:testAdd`

```text
Goal:
Based on implementation file, check for methods that need to be tested in test file.

Rules:
- List main part that need test in bullet points
- Group similar test in "describe" or similar
- Write test in "it should..." format

Test file: @
Implementation file: @
```

### Create new test based on existing test (WIP)

### List untested functions `:testUntested`

```text
Goal:
List every untested behaviors.

Rules:
- List every behavior that are not tested yet.
- Provide bullet list of untested behaviors.
- Output with "should {behavior}" format.
- Group those behaviors by distinct sections.
- Always on functional behavior, not on technical implementation.

Implementation files to check:
#file

Test files to check (if any):
#file
```

### List test cases `:testListCases`

```text
Goal:
List all test cases in the given test file.

Requirements:
<requirements>
[[requirements]]
</requirements>

Rules:
- Detect edge cases and exceptions.
- Group by distinct sections.
- Format with bullet list with small sentences.
- [[Do not test UI, focus the logic only | Test the UI if needed | Test the UI and the logic]].
```

## ⚡️ Zero Shot Prompts

### Answer in markdown `:answerMd`

```text
Answer in markdown format on a text block. 
For code blocks that contain markdown or other backticks, use 4 backticks. 
```

## 📚 Documentation

### Search in online documentation `:docSearch`

```text
Goal:
Search in online documentation "[[search query]]".

Rules:
- Write down what the search query is about.
- In bullet point, list top 3 results from the search query.
- If you can't find the answer, say so.
- If you find the answer, write it in markdown format.
```

### Insert / Update / Beautify comments `:docInsert`

```text
Goal:
Insert / Update / Beautify comments in the given code.

Rules:
- Add top file documentation to describe what the file is doing.
- Add or update documentation for functions.
- Add documentation within function if necessary.
- Move comments to the right place if necessary.
```

### Provide example to use a function `:docFnExample`

```text
Goal:
Provide an example of how to use a function.

Rules:
- Use the function name in the example
- Provide a short and simple example
- Include input parameters and output in code comments
```

## 🔄 Refactoring

### Optimize this code snippet `:refactOpt`

```text
Goal:
Beautify, comment and refactor the given code snippet.

Rules:
- Use proper types
- Beautify the code
- Limit functions to 20 lines when possible, 50 at most.
- Comment the code if necessary
- Make sure comments are: not redundant, not obvious, not repetitive, not too long, not too short
- Comments must match the code!
- Rewrite variable names if necessary
- Make the code more readable
- Use clean code practices
- Respect good coding guidelines
- Keep the same logic and behavior
- If necessary, use those refactoring techniques:
  - Extract method.
  - Inline method.
  - Rename method.
- Move method.
- Group similar methods, variables or properties.
- Encapsulate field.
- Decompose conditional.
- Consolidate conditional expression.
- Consolidate duplicate conditional fragments.
- Remove assignments to parameters.
- Make sure the code is still readable and maintainable, doing its best to keep the same logic.
```

### Optimize code performance `:refactPerf`

```text
Goal:
Optimize code for performance and scalability.

Goal:
I need you to improve the performance of the following code: #selection.

Steps:
1. Find the main performances issues in the code.
2. List the necessary steps to improve the performance of the code.
3. Implement the necessary changes to improve the performance of the code.
4. Make sure the code is still readable and maintainable.
5. Propose at the end 3 other ways to improve the code's performance, sorted by importance.

Rules:
- Do not change the logic of the code.
- Input and output of the code should remain the same.
```

## 🧙 Senior Advice

### Code Review (WIP)

### Project Architecture (WIP)

- Stack
- Folder structure
- Tech stack
- Architecture

### Design Patterns `:adviceDesignPatterns`

```text
Goal:
List the existing design patterns in the following code.

Rules:
- List the existing design patterns in the following code.
- Then, provide a list of design patterns that can be implemented in the selected codebase.

For each design pattern, provide:
- A very brief description of the design pattern.
- Why it is effective.
- The benefits and drawbacks of using the design pattern.
- An example of how the design pattern can be implemented in the selected technology.
```
