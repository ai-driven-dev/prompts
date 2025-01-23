# AI-Driven Dev {Prompts}

A collection of prompts for software engineers to generate code faster with better quality. ❤️

- [AI-Driven Dev {Prompts}](#ai-driven-dev-prompts)
  - [🚀 Invoke the prompt from EVERYWHERE](#-invoke-the-prompt-from-everywhere)
    - [1) Install our prompt library](#1-install-our-prompt-library)
    - [2) How-to use a prompt?](#2-how-to-use-a-prompt)
    - [3) Up-to-date prompts with updates](#3-up-to-date-prompts-with-updates)
  - [✅ General Guidelines](#-general-guidelines)
    - [Contribution](#contribution)
    - [Template `:codeTemplate`](#template-codetemplate)
    - [Optimize your prompts `:promptOpt`](#optimize-your-prompts-promptopt)
  - [🙋‍♂️ Feature request](#️-feature-request)
    - [Generate user stories `:featureUS`](#generate-user-stories-featureus)
    - [Create a feature `:featureCreate`](#create-a-feature-featurecreate)
    - [Generate coding instructions from a feature `:featureInstructions`](#generate-coding-instructions-from-a-feature-featureinstructions)
    - [Generate code for a small feature `:featureSmallCode`](#generate-code-for-a-small-feature-featuresmallcode)
  - [⚗️ Project Setup / Bootstrap](#️-project-setup--bootstrap)
    - [Enforce good practices `:projectEnforce`](#enforce-good-practices-projectenforce)
  - [💽 Database](#-database)
    - [Generate SQL from specifications `:dbGenSQL`](#generate-sql-from-specifications-dbgensql)
    - [Create entity from SQL Schema `:dbGenEntity`](#create-entity-from-sql-schema-dbgenentity)
  - [🚀 Code Generation](#-code-generation)
    - [Generate fake data `:codeFake`](#generate-fake-data-codefake)
  - [🏞️ Generate code from image](#️-generate-code-from-image)
    - [Extract details from image and match components `:imageExtractDetails`](#extract-details-from-image-and-match-components-imageextractdetails)
  - [💉 Bug Fixing](#-bug-fixing)
    - [Find the issue `:bugFind`](#find-the-issue-bugfind)
  - [🐛 Debugging](#-debugging)
    - [Write log `:debugLog`](#write-log-debuglog)
    - [Detect inconsistencies `:debugInconsistency`](#detect-inconsistencies-debuginconsistency)
  - [🧪 Tests](#-tests)
    - [Generate Gherkin `:testGenGherkin`](#generate-gherkin-testgengherkin)
    - [List untested functions `:testUntested`](#list-untested-functions-testuntested)
  - [📚 Documentation](#-documentation)
    - [Search in online documentation `:docSearch`](#search-in-online-documentation-docsearch)
    - [Upgrade comments `:docComments`](#upgrade-comments-doccomments)
  - [🔄 Refactoring](#-refactoring)
    - [Add comments to the selected code `:refactComment`](#add-comments-to-the-selected-code-refactcomment)
    - [Create new generic file `:refactGeneric`](#create-new-generic-file-refactgeneric)
    - [Optimize this code snippet `:refactOpt`](#optimize-this-code-snippet-refactopt)
    - [Optimize code performance `:refactPerf`](#optimize-code-performance-refactperf)
  - [🧙 Senior Advice](#-senior-advice)
    - [Code Reviewer `:adviceReview`](#code-reviewer-advicereview)
    - [Architecture `:adviceArchitecture`](#architecture-advicearchitecture)
    - [Design Patterns `:adviceDesignPatterns`](#design-patterns-advicedesignpatterns)
  - [🧑‍🍳 Project Management](#-project-management)
    - [Write specifications document `:pmSpecs`](#write-specifications-document-pmspecs)
    - [Choose a tech stack `:pmTechStack`](#choose-a-tech-stack-pmtechstack)
    - [Generate Milestones `:pmGenerateMilestones`](#generate-milestones-pmgeneratemilestones)
    - [Generate a tech ticket `:pmTicket`](#generate-a-tech-ticket-pmticket)
  - [⚡️ Zero Shot Prompts](#️-zero-shot-prompts)
    - [Assert text `:assert`](#assert-text-assert)
    - [Markdown merge `:mdMerge`](#markdown-merge-mdmerge)
    - [Answer in French `:answerFr`](#answer-in-french-answerfr)
    - [Answer in markdown `:answerMd`](#answer-in-markdown-answermd)
    - [Check knowledge base before answering `:checkKB`](#check-knowledge-base-before-answering-checkkb)
    - [Evaluate Answer `:evaluate`](#evaluate-answer-evaluate)
    - [Restart a new chat / conversation `:restart`](#restart-a-new-chat--conversation-restart)
    - [OSX](#osx)
      - [Homebrew updates `:osxBrew`](#homebrew-updates-osxbrew)

## 🚀 Invoke the prompt from EVERYWHERE

To code faster with AI, you need:

1. Good prompts
2. To be able to user them everywhere, from ChatGPT to Chrome.

### 1) Install our prompt library

1. Follow the [Espanso installation guide here](https://espanso.org/install/) for your operating system.

2. Then, install the package:

```sh
espanso install ai-driven-dev-prompts --git git@github.com:ai-driven-dev/prompts.git --external
```

3. Launch the app any time you want to use the prompts.

### 2) How-to use a prompt?

When you need a prompt, press `⌥ + Space` (Windows / Linux : `ALT + Space`) and search for `prompt's name`.

![espanso usage](docs/espanso.gif)

### 3) Up-to-date prompts with updates

Prompts are updated regularly by the AI-Driven Dev Community, use this command to get the latest upgraded prompts.

```sh
espanso package update ai-driven-dev-prompts
```

## ✅ General Guidelines

Those prompts can be used to personalize AI based on your requirements.

### Contribution

Please share your prompts or fix those here using a pull-request.

### Template `:codeTemplate`

Most of the time, you just need to structure a prompt - to make it better.

1. Use the `:codeTemplate` template to get started.
2. **Mandatory** fields:
   - `Goal`: What you want to achieve
   - `Rules`: Guidelines and constraints to follow
   - `Context`: Background information or environment details
3. *Optional* but recommended:
   - `Steps`: Detailed procedure to follow
   - `Input Example`: Sample input to demonstrate usage
   - `Output Example`: Expected output format

Note: `Context` and `Example` can be a link to a file, or a code snippet.

```text
**Goal**: "[[What you want to achieve with this prompt]]"

**Rules**:
- "[[Rule 1]]"
- "[[Rule 2]]"
- "[[Rule 3]]"

Steps:
- "[[Step 1]]"
- "[[Step 2]]"
- "[[Step 3]]"

**Context**:
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

### Optimize your prompts `:promptOpt`

```text
You are an **elite Prompt Engineer**.  
Your job is to transform any "**shitty**" prompt into a **masterclass**.  
Your role is to elevate any prompt to its **highest level of clarity and impact**.

1. **Read** the prompt carefully and identify major weaknesses.  
   - Identify the **context**, the **desired role**, the **goal**, and potential **gaps**.
   - Find inconsistencies, ambiguities, duplications or missing details.
2. **Explain** those weaknesses clearly.  
  - Use **bullet points** for each issue.
3. **Suggest** concise, high-impact improvements.  
  - Use **bullet points** for each improvement.
4. **Rewrite** a final version that is clear, focused, and achieves the goal.

**Rules**:  
- Keep examples minimal.  
- Maintain or clarify original intent.  
- Answer in user's language.
- Respect the original intent.
- Simplify language** or **clarify style where necessary.
- Add constraints** (length, tone, format) if needed.
- Use clear and short sentences.
- Use actions verbs.
- Use this structured output: goal, roles, context, rules, steps (recommends), (optional) input and output examples.
- Provide very shorts but impactful details on the action the LLM needs to do.

**Output Format**:  
1. **Weaknesses**  
2. **Suggested Improvements**  
3. **Masterclass Prompt** (reply with your final result in block text formatted markdown surrounded by 4 backticks)

**My original Prompt that needs to be improved**:
<prompt>
[[Your prompt]]
</prompt>
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

### Create a feature `:featureCreate`

````text
Goal:
Build a new, existing or not, feature in our project.

Rules:
- We proceed in **4 phases** (Specifications, Architecture, Action Plan, Final Export).
- On 1st prompt, print 4 main phases with this one single line formatted as: "Phase's title : Objective".
- Start directly with Phase 1.  

---

## Process Overview

### Phase 1: 🧠 Gather Specifications
- **Objective**: Obtain project requirements and clarify purpose, features, constraints, and environment needs.
- **Actions**:
  - All questions must be a concise, single line.
  - Ask targeted questions to confirm:
    - Functional requirements.
    - Chosen technologies, tools, or libraries (including **versions**).
    - When discussing tech, assert that used versions match the requirements.
    - Constraints (modularity, scalability, guidelines).
    - Environment setups (API tokens, configuration files).
    - Testing, Documentation, and CI/CD requirements.
- **Output**:
  - A validated list of specifications.

**Important**: Do not move to Phase 2 until the explicitly user confirms Phase 1.

---

### Phase 2: 🧱 Define or Refine Architecture
- **Objective**: Collaboratively create or adjust the project's architecture.
- **Actions**:
  - Specify folder structures, naming conventions, and core components (e.g., commands, utilities, events).
  - Define environment variables (with placeholder values).
  - Ensure modularity, scalability, and maintainability.
  - Check in the knowledge base if an architecture already exists. Then:
   - If you do have one, confirm with the user, confirm first it is up-to-date.
   - If you don't know it, ask the user to provide it.  
   - If it doesn't exist, the user will let you know.  
  - An updated (or newly created) architecture plan, ready for Markdown export.
  - If architecture already exists, only print affected files/folders (already existing or to be created).

**Important**: Do not move to Phase 3 until the user confirms Phase 2.

---

### Phase 3: 🗂️ Develop a Detailed Plan of Actions
- **Objective**: Outline each step to implement and configure the architecture.
- **Rules**:
  - Not git actions, only technical steps.
  - No code generation, only setup instructions.
  - No assumptions, no "not needed" steps.
  - concentrate exclusively on the feature to be implemented, eg: do not mention naming conventions or code style.
  - Follow only the precise instructions and never install additional libraries unless explicitly requested.
  - Do not give code or commands to execute (e.g., `mkdir ...`); instead, say “create the new files/folders xxx.”
- **Actions**:
  - **Configuration Tasks**: External dependency setup, token generation, key management, environment variables.
  - **Technical Setup**: Initializing the project, installing dependencies, creating files/folders.
  - Ensure each step is concise, bullet-pointed, and verified for successful compilation or runtime.
- **Output**:
  - A validated, step-by-step action plan.
  - Be sure everything discussed on "Phase 1" is covered entirely.

**Important**: Do not move to Phase 4 until the user confirms Phase 3.

Before going to phase 4, review the plan to check that good practices are enforced and plan is correct regarding the specifications.

---

### Phase 4: 🧑‍💻 Export in Markdown
- **Objective**: Produce a final Markdown document suitable for the “developer” and the “AI Editor.”
- **Rules**: 
  - Phase 4 must be answered in markdown format on a text block with 4 backticks.
  - Avoid repetition and focus only on the essentials.
  - No code generation or example but provide instructions on what to do.
  - Provide this phase in english.
- **Actions**:
  - **Sections**:
    1. **Actions for the "developer"**:
      - He should not touch the codebase, only external services that requires configuration.
      - Only **Configuration Tasks** (from Phase 3)
    2. **Actions for the "AI Editor"**:
      - Explain in a short sentence the feature and summarize what do we want to code.
      - Is doing most of the work, it codes everything and change architecture if needed.
      - **Architecture** (from Phase 2): folder structure, components, environment variables etc.
      - **Technical Setup Instructions** (from Phase 3).
      - Give the instructions being very clear but concise, do not be very detailed, just the necessary.
      - **Output in english language.**
      - Add these custom instructions at the end of the document:
        - Never install additional libraries
        - Strictly follow the provided instructions
        - Follow plan in order, no skipping steps
        - Always adapt to current project rules and structure
        - Do all steps without asking
        - Always start with package installation if necessary
        - Use proper versions from package manager
        - Respect conventions, like naming and existing code patterns
  - **Formatting**:
    - Keep instructions concise, accurate, and actionable.
    - Use numbered bullet points to list steps.
  - **No examples**—strictly provide mandatory instructions.

**Important**: Conclude only after Phase 4 is validated.

---

## **Instructions**
1. **Start by outlining these four phases** to the user, confirming they understand the process.
2. **Phase-by-phase approach**:
   - Always request and validate user input for each phase before proceeding.
   - **Never skip or combine phases**.
3. **Never generate code**—you are the Architect, not the code generator.
4. The final **Markdown document** must be separated into the sections listed under Phase 4.

---

## **Expected Final Output**
When all phases are complete, you will produce a **Markdown document** containing:

1. **Guide for the Developer**:
   - Validated specifications and project goals.
   - Configuration tasks (external dependencies, tokens, etc.).
2. **Guide for the AI Editor**:
   - A strictly defined technical plan and instructions (folder structure, environment variables, setup steps).
````

### Generate coding instructions from a feature `:featureInstructions`

To use when you are discussing a feature with the AI and you need to export it to the coding editor (like Cursor, Windsurf or whatever).

```text
Goal:
[[What you want to achieve with this prompt]]

Context:
You (the "AI Architect") have already gathered all user requirements and must produce a single, detailed plan for the "AI Editor".
This plan explains exactly which code to generate or modify (for instance, to create a VS Code extension, add a new feature, or fix a bug).
The Developer (human) will copy/paste these instructions into the "AI Editor"'s prompt.

Roles:  
- AI Architect: Generates the technical plan only (no code).  
- AI Editor: Implements the plan by generating or modifying code.  
- Developer (me): Validates the plan and coordinates both IAs.

What to Include:  
- Detailed breakdown of each file, folder, or feature required.  
- Exact file/folder names, function or class stubs, relevant data structures, placeholders for environment variables.  
- Step-by-step explanations so the AI Editor knows precisely what to create or modify.  
- Markdown formatting (for the generated prompt) with quadruple backticks (````) for clarity—no code, just instructions.

Prompt for the "AI Architect“ (write a "technical plan" only, no code):
1. Greet the user, english only, acknowledging all requirements have been finalized. No further specification gathering is needed.  
2. Immediately produce a step-by-step plan describing what code the AI Editor must generate or modify:  
   - Outline file names and folder structure.  
   - Explain the purpose of each file or component.  
   - Indicate which lines or blocks of code to add or modify (in a generalized, descriptive way).  
   - Highlight any dependencies or environment variables.  
   - Provide instructions for building or testing if applicable.  
   - Provide discussions choices to ensure the "AI Editor" will NOT go the wrong way.
3. Output the entire plan in a single Markdown block surrounded by quadruple backticks (````).  
4. Conclude by reminding the Developer to validate the instructions before passing them on to the AI Editor.

Important:
Before answering the user, make sure the plan is doable. If not, ask the user to clarify or adjust the requirements.
```

### Generate code for a small feature `:featureSmallCode`

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

### Generate fake data `:codeFake`

```text
Goal:
Generate a new variable filled with fake data.

Rules:
- Fill all fields with valid values.
- Type of the data must be respected.
```

## 🏞️ Generate code from image

### Extract details from image and match components `:imageExtractDetails`

```text
Goal:
Extract details from image and match components in the codebase.

Steps:
1. Analyze the image, then extract information about the image.
  - Match the information with the components in the codebase.
  - From every extracted info (eg: button name), match the components' parameters (eg: name from button.tsx)
2. Identify: changing state and actions that must be handled by functions.
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
- Component folder: @
- Feature folder: @
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

Steps:
1. Analyze the given code
2. Then list potentials issues and steps to fix the code
3. Sort them by relevance

Notes:
- Issues might be induced by another part of the code, so you might need to check the whole codebase.
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
```gherkin
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
```
````

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

### Upgrade comments `:docComments`

```text
Goal:
Insert / Update / Beautify comments in the given code.

Rules:
- Add top file documentation to describe what the file is doing only if whole file is provided.
- Provide a usage example in functions' doc
- Include input parameters and output in code comments ONLY if code is not type-safe
- For inline comments, only comment it code is technically complexe
```

## 🔄 Refactoring

### Add comments to the selected code `:refactComment`

```text
# Goal
Add comments to the code to enhance readability, but only focusing on complex logic or technically challenging parts.

# Steps
1. **Identify Complex Logic**: Review each section of the code to determine if the logic is nontrivial or could benefit from an explanation.
2. **Explain Technical Challenges**: For technically hard-to-understand components, provide detailed comments to clarify how the code works. 
3. **Avoid Unnecessary Comments**: Do not add comments for self-explanatory code or for describing typed function parameters.

# Output Format
Code with comments added directly above or next to complex logic or technically challenging parts.

# Rules
- Make sure EVERY EXISTING AND NEWLY ADDED comments are matching the code. If NOT, comment with a "⚠️".
- Focus on clarity and precision in the comments.
- Ensure comments enhance understanding without cluttering the code.
- Preserve existing formatting and style of the code wherever possible.
- DO NOT comment obvious code sections or simple logic, remember we are senior developers.

# Consider
1. Code quality and adherence to best practices
2. Potential bugs or edge cases
3. Performance optimizations
4. Readability and maintainability
5. Any security concerns

Suggest improvements and explain your reasoning for each suggestion.
```

### Create new generic file `:refactGeneric`

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

### Code Reviewer `:adviceReview`

```text
Role:
Your task is to make a very good code review, analyze the provided code and suggest improvements to make it cleaner, bug free.

Goal:
Identify areas where the code can be made more efficient, faster, less buggy or less resource-intensive.

Constraints:
- The optimized code should maintain the same functionality as the original code while demonstrating improved efficiency.
- When providing your recommendations, consider factors such as algorithm complexity, data structures, and code organization.
- Ensure that your suggestions are clear and well-explained.
- Provide specific suggestions for optimization, along with explanations of how these changes can enhance the code's performance.

Detection rules:
- Performance issues
- Security breaches
- Optimization (refactoring, simplification)
- Improve readability.
- Merge similar functions into one.
- Remove redundant code.
- Match comments with code.
- Missing good practices.

Steps:
1. Explain what the code is doing in one short sentence.
2. Analyze the code and use detection rules to find issues (print those in short bullet points)
3. Propose improvements to the code.
4. Wait for the user approval before changing any code, just provide suggestions.
```

### Architecture `:adviceArchitecture`

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

### Write specifications document `:pmSpecs`

Create a brand new specification document to help you kickstart your project.

````text
Act as an **interactive project specification assistant**, help me build and refine a complete, well-organized project specification document.  

## Objectives:
- Guide me through filling out a Markdown-based template step-by-step.
- Organize input logically, even if provided out of order.
- Ensure completeness and high-quality detail in every section.

## Instructions for Interaction:
1. **Start the Process**  
   - Begin by asking, "Tell me about your project."
   - Provide an overview of the main sections in the template (use only headings from the Markdown).
   - For every answer, ask follow-up questions to gather more details but ONLY regarding that specific section.
   - Propose the user to move to the next section BUT ONLY after completing every steps of the current one.
   - Always validate with the user by asking him if everything is correct before moving to the next section.

2. **Guide Input**  
   - For each subsection:
     - Ask targeted questions to gather relevant details (limit to 3 short bullet points for guidance).  
     - Challenge or refine unclear answers to ensure quality.
     - Summarize inputs after completion of each subsection and confirm with me before proceeding.

3. **Maintain Structure**  
   - Organize all inputs according to the template format. Fill placeholders with responses as I provide them.
   - Highlight incomplete sections and ask whether to revisit or move forward.

4. **Completion Process**  
   - After filling each sections like section 2 (##):
    - Ask for final edits or approval.
    - When the template is approved, please follow those steps:
      - For each section of the template we discussed, output the fully complet section in markdown format.
      - Never skip anything, provide the full details of the section.
      - Output format in text block surrounded by 4 backticks.

## Markdown Template Overview:
<template>
```markdown
# Project Specification Template

## 1. 💡 Initial Conceptualization  
### Description  
### Objectives  
### Added Value  

## 2. 📊 Feasibility Study  
### Market Analysis  
### Technical Analysis  
### Financial Analysis  

## 3. 👥 Stakeholder Analysis  
### Stakeholders  
### Roles and Interests  
### Needs  

## 4. 📝 Requirements Gathering  
### User Stories  
### Requirements Workshops  
### Requirement Documentation  

## 5. ✍️ Specification Writing  
### Specification Document  
### Technical Specifications  

## 6. 🎯 Scope Definition  
### Included in Scope  
### Excluded from Scope  

## 7. 📅 Roadmap and Planning  
### Milestones  
### Timeline  
### Resource Planning  

## 8. ⚠️ Risk Management  
### Risk Identification  
### Risk Mitigation  

## 9. ✅ Validation and Approval  
### Review Sessions  
### Approval Process  

## 10. 💬 Communication Strategy  
### Communication Channels  
### Update Frequency  
### Feedback Management  
```
</template>

## Important rules:
- If the user is talking about a subject from an existing section but not the current one, ask them to wait because this will be treated afterwards.
- If this user puts a subject that is not in the template, put it at the end of the template and ask the user if they want to add it.
- When filling document, reformulate the user's answers to make them more concise and clear, use bullet points when necessary, remember that people that will read this document must be aware of every details.
- At the end of the section, ask the user if everything is correct and if he wants to add something?

## Let's start:
- After first message, clarify with the user what we are going to do here:
  - Output the plan
  - Tell him we are going to:
    - Gather its project info
    - Go through the template
    - Assert everything is valid, helping him to write good specifications
    - Then export it to markdown so he can update its based document.
- First, ask the user if some documents already exists.
  - If so, ask for him to upload them. then, once processed, go through the template to improve his document.
    - The document is supposed to help you "pre-filled" the section, but you must ALWAYS validate it with the user.
    - This document might not be complete or up-to-date, be careful.
    - Ask the user for more details after pre-filling the section, ask questions to go deeper.
    - For each question you ask, if you already have the answer, ask the user if it is still valid in parenthesis, but keep you original questions too.
  - If not, let's begin. Tell me about your project so we can start filling out the first section: Initial Conceptualization.
````

### Choose a tech stack `:pmTechStack`

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

### Generate Milestones `:pmGenerateMilestones`

Generate the milestones for your project.

```text
Define the key milestones for the project; we aim for short release cycles and sprints to support quick iteration.

Once milestones are defined, estimate the development timeline for each one.

Team composition:
[[Bullet point list of team members]]

Development is scheduled to start in the "[[Second week of January]]".

Please generate a table with the following columns: Task, Estimated Start Date, Estimated End Date. Use the date format "09 Jan. - 10 Feb.," starting each milestone on a Monday and ending on a Friday.
```

### Generate a tech ticket `:pmTicket`

A simple ticket template generation from your project's task.

```text
Regarding this task or sub-stack "[[task_or_sub_stack]]".

Create ticket for developer with detailed steps of what to do with checkboxes:

Rules:
- Keep only the feature scope and focus only on the sub-steps, do not think about side tasks or parent ones.
- Add a simple test feature list explanation with checkboxes as well.
- Do not hesitate to add notes regarding important aspect of what you wrote.
```

## ⚡️ Zero Shot Prompts

### Assert text `:assert`

```text
Rewrite this text to make it shorter and clearer by removing repetitions and unnecessary details, while maintaining a logical structure, coherent meaning, and avoiding any inconsistencies.

Keep original language.
```

### Markdown merge `:mdMerge`

```text
find . -type f \( -name "*.md" -o -name "*.mdx" \) -print0 | xargs -0 cat > all.md
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

### Check knowledge base before answering `:checkKB`

Discuss with the AI... then write this prompt.

```text
Before answering, check the knowledge base to better understand my request.

Then:
- Summarize briefly the knowledge you found.
- Annonce the next steps you will take.
- Ask for confirmation before proceeding.
```

### Evaluate Answer `:evaluate`

```text
Thank you. Now:

1) Evaluate your own work. List all its strength and flaws.

2) Give it a mark between 0 and 20. Justify your mark with an argumentative paragraph.

3) Give yourself a list of suggestions that will make the mark 20. Number each suggestion.

4) Rewrite your work by following recommendations from point 3). Annotate each suggestion that you apply with their respective number within the text.

5) Ask me if I want to repeat the process again. We well be doing so until your work is marked 20/20.
```

### Restart a new chat / conversation `:restart`

````markdown
# New Prompt: Relaunching a Complex Conversation

## **Summary of Key Takeaways**
We discussed [sujet principal] and explored [specific areas]. The main goal was to [objective]. Here's a concise summary of what was accomplished:
- **Core decisions taken:** [Key points].
- **Challenges remaining:** [Brief overview of unresolved issues].
- **Next priorities:** [Clear and actionable next steps].

---

## **Decisions Taken**
1. **[Decision 1]:** [What and why].  
2. **[Decision 2]:** [What and why].  
3. **[Decision 3]:** [What and why].  

---

## **Challenges Remaining**
- **[Unresolved Topic 1]:** [Reason for lack of resolution].  
- **[Unresolved Topic 2]:** [Reason for lack of resolution].  

---

## **Exclusions**
1. **[Excluded Point 1]:** [Reason].  
2. **[Excluded Point 2]:** [Reason].  

---

## **Next Steps (Quick Reference)**
- **[Step 1]:** [Brief and actionable description].  
- **[Step 2]:** [Brief and actionable description].  
- **[Step 3]:** [Brief and actionable description].  

---

## **Instructions for Continuation**
With this context, help refine the following:
1. [Specific refinement needed].  
2. [Second area for improvement].  
3. [Additional question to explore].  
````

### OSX

#### Homebrew updates `:osxBrew`

```text
brew update && brew outdated --greedy && brew upgrade --greedy && brew cleanup && brew doctor
```
