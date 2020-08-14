# eslint-config

ESLint rules used by DeepCrawl.

## Installation

Add `eslint-config-deepcrawl` and its peer dependencies to your `package.json`:

```shell
yarn add --dev \
  eslint-config-deepcrawl \
  @typescript-eslint/eslint-plugin@^3.0.2 \
  eslint@^7.0.0 \
  eslint-plugin-array-func@^3.1.6 \
  eslint-plugin-clean-code@^0.1.12 \
  eslint-plugin-filenames@^1.3.2 \
  eslint-plugin-import@^2.20.2 \
  eslint-plugin-jest@^23.13.1 \
  eslint-plugin-json-format@^2.0.1 \
  eslint-plugin-no-loops@^0.3.0 \
  eslint-plugin-promise@^4.2.1 \
  eslint-plugin-sonarjs@^0.5.0
```

## Usage

Update your `.eslintrc` configuration:

```json
{
  "extends": ["deepcrawl"]
}
```

If you are using tsconfig paths, you also need to let `eslint-plugin-import` know, which imports should it consider internal, for example:

```json
{
  "settings": {
    "import/internal-regex": "^@(src|test)/"
  }
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
