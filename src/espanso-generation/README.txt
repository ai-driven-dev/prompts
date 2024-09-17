# Espanso config file generation from markdown prompts

## Goals

1. Have a script that convert the markdown prompts into a yml config file that can be used by Espanso.

2. The markdown prompt file looks like this:

### Global dev prompts

Related to prompts chatting.

#### Who am I? `:prtsme`

```text
I am a senior software engineer on JavaScript but I prefer to use TypeScript.

The libraries I am using are: React, NextJS, Zod, React-Hook-Form, Tailwind.

I need help to write 100% working and clean code.
```

#### My project configuration `:prproject`

```text
I need help for my current project and I need you to help me as an experimented mentor, developer and agile coach.

My project is about:

[[Fully detailed explanation]]

This only project I will refer to you within this conversation is only about this one.

I will try to always provide to you the relevant code associated to the feature or bug or whatever I talk you about.

The code will be surrounded by ", whenever possible.

Technically speaking, here are the libs we are using for our project:

"[[package.json or equivalent]]"
```

3. So in your example, this would work create the following yml Espanso config file:

matches:
  - trigger: ":prtsme"
    form: |
     I am a senior software engineer on JavaScript but I prefer to use TypeScript.

     The libraries I am using are: React, NextJS, Zod, React-Hook-Form, Tailwind.

     I need help to write 100% working and clean code.

  - trigger: ":prproject"
    form: |
     I need help for my current project and I need you to help me as an experimented mentor, developer and agile coach.

     My project is about:

     [[full_detailed_explanation]]

     This only project I will refer to you within this conversation is only about this one.

     I will try to always provide to you the relevant code associated to the feature or bug or whatever I talk you about.

     The code will be surrounded by ", whenever possible.

     Technically speaking, here are the libs we are using for our project:

     "[[package_json_or_equivalent]]"
    form_fields:
      fully_detailed_explanation:
        multiline: true

4. To convert from markdown to yml, we do:
 - create "- trigger:" from markdown titles (from title 2 to title 6, it can have multiple #), since it is fitting the following pattern "# Text `:trigger`"
 - "form: |" content is taken from inner text in those blocks: ```text ```
 - variable (surround be [[ ]]) need to be converted in snake_case, from [[the text of the variable]] to [[the_text_of_the_variable]] in the content
 - if there is any variable like [[my var]] without any surrounding " (like "[[]]"), then the following end block should be added in the yml file for this section:
    form_fields:
      my_var:
        multiline: true


