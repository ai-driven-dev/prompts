# AI-Driven Dev {Prompts}

This repository is the new `Prompts` repository for the AI-Driven Dev project.

- [🚀 Use optimized dev prompts in you workflow](#-use-optimized-dev-prompts-in-you-workflow)
  - [Install a text expander](#install-a-text-expander)
  - [Get the latest prompt](#get-the-latest-prompt)
- [✅ General GuideLines](#-general-guidelines)
  - [The perfect Prompt Template](#the-perfect-prompt-template)
- [🧑‍💻 Create a RAG with your project context](#-create-a-rag-with-your-project-context)
  - [Instruct AI to be a developer from your project `:rag`](#instruct-ai-to-be-a-developer-from-your-project-rag)
- [🙋‍♂️ Feature request](#️-feature-request)
  - [Generate user stories `:featureUS`](#generate-user-stories-featureus)
  - [Technical plan `:featurePlan`](#technical-plan-featureplan)
- [🧪 Tests](#-tests)
  - [Check for test methods to implement `:testAdd`](#check-for-test-methods-to-implement-testadd)
- [⚡️ Zero Shot Prompts](#️-zero-shot-prompts)
  - [Answer in markdown `:answerMd`](#answer-in-markdown-answermd)

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

### Get the latest prompt

Prompts are updated regularly but the AI-Driven Dev Community, use that command to get the latest upgraded prompts.

```sh
espanso package update ai-driven-dev-prompts
```

## ✅ General GuideLines

Those prompts will be used to personalize the AI based on your requirements.

- It can be used in your IDE (e.g., GitHub Copilot, Cursor...)
- It can be used as a Custom GPT

### The perfect Prompt Template
  
```text
Goal: [What you want to achieve with this prompt]

Rules:
- [Rule 1]
- [Rule 2]
- [Rule 3]

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

## 🧑‍💻 Create a RAG with your project context

You can personalize the AI responses to your project context.

### Instruct AI to be a developer from your project `:rag`

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

## 🧪 Tests

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

## ⚡️ Zero Shot Prompts

### Answer in markdown `:answerMd`

```text
Answer in markdown format on a text block.
```
