# AI-Driven Dev {Prompts}

This repository is the new `Prompts` repository for the AI-Driven Dev project.

> **Warning**
> This repository is under heavy development.

## 🚀 Use optimized developer prompts in your workflow

Because better prompts leads to (way) better results.

This is a collection of prompts that I use to generate images for my AI-Driven Dev project.

<https://ai-driven-dev.com>

### 1) Install the text expander

1. Follow the [Espanso installation guide here](https://espanso.org/install/) for your operating system.

2. Then, install the package:

```sh
espanso install ai-driven-dev-prompts --git git@github.com:ai-driven-dev/prompts.git --external
```

3. Launch the app any time you want to use the prompts.

### 2) How-to use the prompts library

When you need a prompt, type `:promptName` OR press `⌥ + Space` (Windows / Linux : `ALT + Space`) and search for `prompt's name`.

![espanso usage](docs/espanso.gif)

### 3) Get the latest prompts (update)

Prompts are updated regularly by the AI-Driven Dev Community, use this command to get the latest upgraded prompts.

```sh
espanso package update ai-driven-dev-prompts
```

## 🔥 Available prompts

- [🚀 Use optimized developer prompts in your workflow](#-use-optimized-developer-prompts-in-your-workflow)
  - [1) Install the text expander](#1-install-the-text-expander)
  - [2) How-to use the prompts library](#2-how-to-use-the-prompts-library)
  - [3) Get the latest prompts (update)](#3-get-the-latest-prompts-update)
- [🔥 Available prompts](#-available-prompts)
- [✅ General Guidelines](#-general-guidelines)
  - [The perfect Prompt Template `:codePrompt`](#the-perfect-prompt-template-codeprompt)
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
  - [Clean prompt `:promptClean`](#clean-prompt-promptclean)
  - [Answer in French `:answerFr`](#answer-in-french-answerfr)
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
- [🧑‍🍳 Project Management](#-project-management)
  - [Specification writing](#specification-writing)
    - [Start a new specification document `:pmSpecsStart`](#start-a-new-specification-document-pmspecsstart)
    - [Continue to fill the document `:pmSpecsContinue`](#continue-to-fill-the-document-pmspecscontinue)
  - [Selection](#selection)
    - [Choose a tech stack `:pmSelectionTech`](#choose-a-tech-stack-pmselectiontech)
  - [Generate](#generate)
    - [Milestones `:pmGenerateMilestones`](#milestones-pmgeneratemilestones)
    - [User-stories (US) `:pmGenerateUS`](#user-stories-us-pmgenerateus)
    - [Gherkin `:pmGenerateGherkin`](#gherkin-pmgenerategherkin)
  - [Template](#template)
    - [Ticket `:pmTemplateTicket`](#ticket-pmtemplateticket)

## ✅ General Guidelines

Those prompts can be used to personalize AI based on your requirements.

- It can be used in your IDE (e.g., GitHub Copilot, Cursor...)
- It should be used as a Custom GPT like [this](https://github.com/ai-driven-dev/instructions)

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

## 🙋‍♂️ Feature request

### Generate user stories `:featureUS`

If you want to generate user-stories for your project, use this prompt.

**Parameters**:

- Feature to build, be as detailed as possible

````text
Goal: Please endorse Product Owner to write very good user stories for the developers team.

Rules:
- Do not generate code.
- Ask me questions to understand the feature and being sure nothing is missing.
- Be accurate and lean, concise questions, minimum words.
- Group questions by section of 3 questions minimum.
- Make user stories coherent and clear.
- Sort them by priority of code.
- When the user asks, write the user stories using the template under.
- Output the template in markdown.

Requirements:
<requirements>
[[Feature to build, be as detailed as possible]]
</requirements>

Steps:
1. Ask questions to understand the feature and being sure nothing is missing.
2. Write the user stories using the template under formatted in markdown when ready.

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
Generate SQL schema from specifications.

Rules:
- Generate the full SQL schema, with the tables, the columns, the relations between the tables and the constraints.

Specifications:
<specifications>
[[Entity list and relations between entities]]
</specifications>
```

### Create entity from SQL Schema `:dbGenEntity`

```text
Goal:
Create entities from SQL Schema generating "[[objects|types|interfaces]]".

SQL Schema:
<sqlSchema>
[[SQL schema]]
</sqlSchema>

Rules:
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
<specifications>
[[Specifications]]
</specifications>
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
<context>
[[Describe new logic]]
</context>

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

### Clean prompt `:promptClean`

```text
Rewrite this text to make it shorter and clearer by removing repetitions and unnecessary details, while maintaining a logical structure, coherent meaning, and avoiding any inconsistencies.
```

### Answer in French `:answerFr`

```text
For all answers, answer in French.
```

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

## 🧑‍🍳 Project Management

### Specification writing

#### Start a new specification document `:pmSpecsStart`

Create a brand new specification document to help you kickstart your project.

```text
We will discuss my project together, and I need you to provide valuable suggestions for it.

This template always refers to "the template" whenever I talk to you about "a template."

Throughout our conversation, keep this in mind, as I will need you to make updates whenever necessary.

For example, I may ask you to "update the template with the specifications we just discussed."

Is this clear to you?

This Markdown template, which you will update each time I request, is outlined here, surrounded by "---":

---
Reusable Project Specification Template

# Initial Conceptualization (Adaptable)

## Project Idea:

### Description: [Brief description of the project]
### Objectives: [Key objectives and goals of the project]
### Added Value: [Value addition to stakeholders or market]

## Feasibility Study:

### Market Analysis: [Research and analysis of market demand and competition]
### Technical Analysis: [Evaluation of required technologies and resources]
### Financial Analysis: [Budget estimate and potential funding sources]
### Stakeholder Analysis (Simplified)

## Stakeholder Identification:

### List of Stakeholders: [Identify primary stakeholders]
### Roles and Interests: [Define roles and interests of stakeholders]

## Stakeholder Needs:
### Identified Needs: [Key needs and expectations of stakeholders]
### Information Collection Methods: [Methods for gathering stakeholder input]
### Communication Plan: [Strategy for updating stakeholders]

# Requirements Gathering (With Examples)

## User Stories / Use Cases:
### List of user stories: [Example: "As a [role], I want to [action]."]
### Detailed use cases: [Specific scenarios and functionalities]

## Requirements Workshops:
### Planning of Workshops: [Schedule and goals for workshops]
### Participants: [Identify key participants for workshops]
### Workshop Summary: [Key outcomes and action items]

## Requirement Documentation:
### Functional Requirements: [List of essential features]
### Non-Functional Requirements: [Performance, security, etc.]
### Requirement Prioritization: [Criteria for prioritizing requirements]

# Specification Writing (User-Friendly Language)

## Specification Document:
### Document Structure: [Outline of the specification document]
### Detailed Content: [In-depth description of project requirements]
### Revisions and Validations: [Process for reviewing and updating the document]

## Technical Specifications:
### Architecture: [Technical structure and design]
### Used Technologies: [Tools and languages to be used]
### Technical Constraints: [Limitations and challenges]

# Scope Definition (Flexible)

## Scope Statement:
### Included in Scope: [Components included in the project]
### Excluded from Scope: [Deliberately excluded aspects]

### Limitations and Exclusions:
### Identified Limitations: [Resource, time, or budget constraints]
### Specified Exclusions: [Excluded features or components]

# Roadmap and Planning (Interactive)

## Project Milestones:
### List of Milestones: [Key project achievements and deadlines]

## Timeline Planning:

### Preliminary Calendar: [Projected timeline of the project]
### Resource Allocation: [Assignment of tasks and resources]

## Resource Planning:
### Budget: [Financial planning and estimates]
### Team: [Composition and roles of the project team]
### Tools and Technologies: [Required tools and software]

# Risk Management (Interactive)

## Risk Identification:
### List of Risks: [Potential risks and challenges]
### Risk Analysis: [Assessment of risk impact and likelihood]

## Risk Mitigation Plan:
### Mitigation Strategies: [Plans to address identified risks]
### Validation and Approval (Efficient)

## Review Sessions:
### Planning of Sessions: [Schedule for review meetings]
### Feedback and Adjustments: [Process for incorporating feedback]

## Approval Process:
### Stakeholder Approval: [Procedure for obtaining final approval]
### Communication Plan (Accessible)

## Communication Strategy:
### Communication Channels: [Platforms for project updates and discussions]
### Update Frequency: [Regular intervals for communication]
### Feedback Management: [System for gathering and addressing feedback]
---

For the first answer, shortly explain in 1 sentence to the user what we are doing here.

Then, give them bullet points of the markdown template (with only the heading 1) to explain what we are going to fill.

Finally, start to dialog with the user. The aim is to fill the template during that discussion.

Your objective is to help the user build a thorough, well-organized project specification document through guided interaction. 

Follow these steps:
1. Get data from the user, filling in sections of the template where it fits best.
2. Organize user input, even if it’s provided out of order, to keep the document structured.
3. Ask clarifying questions to ensure all responses are complete and relevant.
4. Challenge answers when needed to refine details and improve quality.
5. Before moving to the next section, verify with the user that they’re ready to proceed. 
6. Let the user know if any part of the template is incomplete, and ask if they’d like to fill in missing sections.
7. After each section, offer a summary of what's been added and ask if they’d like to see it.

To begin, ask the user: "Tell me about your project."
```

#### Continue to fill the document `:pmSpecsContinue`

Once you start chatting, you can continue the discussion to better fill the specification document.

```text
Perfect!

Now, I want you to go through the template I gave you because we need to fill it together.

1. **Template Structure**:
   - The template is formatted in Markdown. It contains main sections with titles in the format `# Title` and subsections as `## Subtitle`.
   - Each subsection includes text and a placeholder surrounded by brackets. Acknowledge this structure, but do not inform the user about it (this is not needed for them).

2. **Prompting User for Input**:
   - For each subsection, ask the user to fill it in. Provide three brief bullet points to guide their response.

3. **User Confirmation**:
   - After the user provides an answer, ask:
     * "Do you want to continue?"
     * "Is there anything else you want to add?"

4. **Handling Edits**:
   - If the user chooses to edit their answer, repeat this step and save the updated response in the template until they confirm they want to continue.

5. **Reviewing Answers**:
   - If the answer is clear and suitable, proceed to the next subsection.
   - If the answer seems unclear or incorrect, notify the user. Don’t hesitate to assist in refining the answer if necessary for quality.

6. **Transitioning Sections**:
   - When you reach the last subsection, inform the user that you’ll move to the next subtitle (##) and begin asking questions to fill it out.
   - If the next title is a main section (`# Title`), give the user the option to:
     * Jump to the next section
     * Continue editing

7. **Displaying Completed Sections**:
   - If the user wants to jump to the next section, fully display the completed portion of the template.
```

### Selection

#### Choose a tech stack `:pmSelectionTech`

Choose the right tech is hard, an AI can help you find the best tech stack for your project, sorting advantages and drawbacks.

```text
Regarding the technology project I am planning and specifying, I need guidance on selecting the right tools and frameworks.
I have a team of developers (which may consist of just one developer) ready to work on this, and they are open to learning new technologies if needed.
Please base your answers on the template we filled out together.

Here are the key aspects of my project and requirements:

1. Overview of Developer Skills (please review the developers' expertise based on their web resumes):

[[Please provide URLs to the developers' resumes for reference.]]

2. Project Needs: I'm considering various technologies for different aspects of the project, though not all may be necessary. The needs will depend on the chosen tools. For example, if I am using Next.js with Vercel, a separate database might not be required.
My tech stack could include:
   - Frontend frameworks.
   - Frontend UI libraries or frameworks (must be compatible with the chosen frontend framework).
   - Browser extension guidelines (optional depending on specifications).
   - Backend (optional depending on specifications).
   - User authentication systems.
   - Database (optional depending on specifications).
   - Web hosting with email service (optional depending on specifications).
   - Version control platform with Continuous Integration (CI).
   - Containerization (optional depending on specifications).

Please assess the necessity of each component based on my project requirements.

3. Selection Criteria:
   - My project requirements from the template we filled out together.
   - Performance: The solutions should be fast and efficient.
   - Ease of Use: User-friendly and quick to implement.
   - Cost-Effectiveness: Affordable options are preferred.
   - Integration: Technologies should work well together.
   - Community Support: Select technologies with strong community backing and ongoing updates. Avoid tools that are not actively maintained (e.g., Express.js, which is popular but no longer backed).
   - Time to Market: Focus on a rapid launch for a Minimum Viable Product (MVP).

Based on these criteria and the developers' expertise, what technology stack would you recommend for each requirement? (If more than one tool is necessary, please specify.)

Please format your answer like this (surrounded by "---" delimiters):
---
Project Needs:
- Recommended Technology.
- Rationale.
- Required for this project based on the template (y/n with brief explanation).
- Alternative Option.
---

Afterward, please justify your choices in relation to my project requirements.
```

### Generate

#### Milestones `:pmGenerateMilestones`

Generate the milestones for your project.

```text
Define the key milestones for the project; we aim for short release cycles and sprints to support quick iteration.

Once milestones are defined, estimate the development timeline for each one.

Team composition:
[[Bullet point list of team members]]

Development is scheduled to start in the "[[Second week of January]]".

Please generate a table with the following columns: Task, Estimated Start Date, Estimated End Date. Use the date format "09 Jan. - 10 Feb.," starting each milestone on a Monday and ending on a Friday.
```

#### User-stories (US) `:pmGenerateUS`

Generate a list of user-stories based on the project specifications.

```text
Based on these specifications, I need user stories for the developer to follow when implementing the code.

Using our wireframes and documentation, please generate a comprehensive list of user stories for this project.

For each milestone we define, create a set of user stories that will capture all essential details.
```

#### Gherkin `:pmGenerateGherkin`

Generate a Gherkin-style user story based on a feature description.

```text
Please interpret the following feature description to create a Gherkin-style user story.

The description is: "[[As... I want... So that...]]"

- Based on this description, identify the key feature, the primary actions a user with a specific role would take, and the goals or outcomes expected from these actions.
- Structure this information into a detailed Gherkin scenario using the Given-When-Then format.
  - The 'Given' step should establish the context, including the user's role.
  - The 'When' step should describe the user's actions.
  - The 'Then' step should specify the expected outcomes.
```

### Template

#### Ticket `:pmTemplateTicket`

A simple ticket template generation from your project's task.

```text
Regarding this task or sub-stack "[[task_or_sub_stack]]".

Create ticket for developer with detailed steps of what to do with checkboxes:

Rules:
- Keep only the feature scope and focus only on the sub-steps, do not think about side tasks or parent ones.
- Add a simple test feature list explanation with checkboxes as well.
- Do not hesitate to add notes regarding important aspect of what you wrote.
```
