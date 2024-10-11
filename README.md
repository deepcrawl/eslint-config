# eslint-config

ESLint rules used by DeepCrawl.

## Installation

Add `eslint-config-deepcrawl` and its peer dependencies to your `package.json`:

```shell
yarn add --dev \
  eslint-config-deepcrawl \
  eslint@^9.12.0
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
