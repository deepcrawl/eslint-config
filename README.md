# eslint-config

ESLint rules used by Lumar (formerly DeepCrawl).

## Installation

Add `eslint-config-deepcrawl` and its peer dependencies to your `package.json`:

```shell
yarn add --dev \
  eslint-config-deepcrawl \
  eslint@^10.0.0
```

## Usage

Update your `eslint.config.mjs` file:

```js
import eslintConfigDeepcrawl from "eslint-config-deepcrawl";

export default [...eslintConfigDeepcrawl];
```

## Recommendations

### TypeScript

Have these options enabled in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictPropertyInitialization": true
  }
}
```

or enable `@typescript-eslint/typedef` rule.

### Prettier

Apart from ESLint, it is recommended to use the following Prettier configuration:

```json
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-packagejson"],
  "printWidth": 120,
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```

with `lint-staged` pre-commit hook done via `husky`.

## Migrating from v14

v15 upgrades to ESLint 10 and replaces `eslint-plugin-import` with its
maintained fork `eslint-plugin-import-x`. To upgrade:

1. Bump `eslint` to `^10.0.0` (drop ESLint 9).
2. Rename every `import/*` rule reference in your `eslint.config.*` to
   `import-x/*` — e.g. `"import/no-default-export"` →
   `"import-x/no-default-export"`. ESLint silently ignores unknown rule
   names set to `"off"`, so a missed rename turns into a silent loss of
   your override.
3. Remove `@types/eslint__js` from your `devDependencies` if you have it
   — `@eslint/js@10` now ships its own type definitions.

No other consumer changes are required; the rest of the ruleset is
unchanged.
