# eslint-config

ESLint rules recommended by DeepCrawl.

## Installation

Add `@deepcrawl/eslint-config` and its peer dependencies to your `package.json`:

```json
{
  "devDependencies": {
    "@deepcrawl/eslint-config": "^0.1.0",
    "@typescript-eslint/eslint-plugin": "^2.32.0",
    "eslint": "^7.0.0",
    "eslint-plugin-array-func": "^3.1.5",
    "eslint-plugin-clean-code": "^0.1.12",
    "eslint-plugin-jest": "^23.9.0",
    "eslint-plugin-no-loops": "^0.3.0",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-sonarjs": "^0.5.0",
    "prettier": "^2.0.5"
  }
}
```

## Usage

Update your `.eslintrc` configuration:

```json
{
  "extends": ["@deepcrawl/eslint-config"]
}
```

## Recommendations

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
