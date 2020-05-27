# eslint-config

ESLint rules recommended by DeepCrawl.

## Installation

Add `@deepcrawl/eslint-config` and its peer dependencies to your `package.json`:

```shell
yarn add --dev \
  @deepcrawl/eslint-config \
  @typescript-eslint/eslint-plugin@^3.0.0 \
  eslint@^7.0.0 \
  eslint-plugin-array-func@^3.1.6 \
  eslint-plugin-clean-code@^0.1.12 \
  eslint-plugin-import@^2.20.2 \
  eslint-plugin-jest@^23.13.1 \
  eslint-plugin-no-loops@^0.3.0 \
  eslint-plugin-sonarjs@^0.5.0
```

## Usage

Update your `.eslintrc` configuration:

```json
{
  "extends": ["@deepcrawl/eslint-config"]
}
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
