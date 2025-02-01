# ✨ Contribution - AI-Driven Dev "Prompts"

**Merci d'aider les autres développeurs de la communauté à améliorer leur prompts.**

> Si chaque développeur optimise un prompt, d'ici quelques mois, on aura la plus grande collection de prompts communautaires pour les développeurs.

- [✨ Contribution - AI-Driven Dev "Prompts"](#-contribution---ai-driven-dev-prompts)
  - [⬇️ Mise à jour automatique des prompts](#️-mise-à-jour-automatique-des-prompts)
  - [🆕 Ajouter un nouveau prompt](#-ajouter-un-nouveau-prompt)
    - [Format](#format)
    - [Exemple](#exemple)
    - [Re-générer le fichier de prompt d'Espanso](#re-générer-le-fichier-de-prompt-despanso)
  - [🔄 Modifier et améliorer un prompt existant](#-modifier-et-améliorer-un-prompt-existant)

## ⬇️ Mise à jour automatique des prompts

Un script va lire le [`README.md`](https://github.com/ai-driven-dev/prompts/) pour générer le [`package.yml`](https://github.com/ai-driven-dev/prompts/blob/main/espanso/package.yml)

[Une CI automatique a été ajoutée](https://github.com/ai-driven-dev/prompts/actions) pour mettre à jour les versions dans Espanso automatiquement à chaque commit sur `main` !

## 🆕 Ajouter un nouveau prompt

Il suffit de cloner le dépôt.

```shell
git clone https://github.com/ai-driven-dev/prompts.git
```

Puis d'ouvrir le fichier `README.md` et ajouter votre prompt dans la bonne section !

### Format

> Il y a un format à respecter pour que le script puisse générer le fichier de prompt d'Espanso.

1. Clef dans le titre de niveau 3 (`###`) ou 4 (`####`):
```markdown ### Mon titre `:key` ```

2. Faire une description du prompt dans une balise `>` (un quote).

3. Écrire le prompt en anglais, la description et le titre en français.

4. Utiliser un `<details>` HTML5 pour mettre le prompt.

5. Formulaires (optionnel) si vous avez des champs à remplir.

- Texte : `"[[texte ici]]"`
- Textarea : `[[zone de texte longue]]`
- Select : `[[select1|select2|select3]]`

### Exemple

> Vous pouvez imbriquer du `markdown` dans le prompt !

`````markdown
````markdown
### Mon titre `:testExample`

> Description du prompt

<details>
<summary>Voir le prompt</summary>

````markdown
Goal:
Generate a test file for testing library: "[[testing library]]".

Rules:
- Type of test: "[[unit|integration|e2e]]"
- Use the "Arrange, Act, Assert" pattern
- Do not mock network requests
- Mock the database
- Do not use the "only" method
- Focus on testing the library

Example:
```markdown
[[example of code to test]]
```
````
`````

</details>

### Re-générer le fichier de prompt d'Espanso

```shell
npm run start
```

1. Vérifier que votre prompt se trouve dans le fichier `espanso/package.yml`

2. Faire un commit et un push de votre modification.

## 🔄 Modifier et améliorer un prompt existant

1. Faire une pull-request en ligne avec votre modification.

2. Un membre de la communauté va l'examiner et le merger.

3. C'est tout, merci !
