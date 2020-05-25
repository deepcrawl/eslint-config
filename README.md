# eslint-config

ESLint rules recommended by DeepCrawl.

## Installation

Add `@deepcrawl/eslint-config` and its peer dependencies to your `package.json`:

```json
{
  "devDependencies": {
    "@deepcrawl/eslint-config": "^0.1.0",
    "@typescript-eslint/eslint-plugin": "^3.0.0",
    "eslint": "^7.0.0",
    "eslint-plugin-array-func": "^3.1.6",
    "eslint-plugin-clean-code": "^0.1.12",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-jest": "^23.13.1",
    "eslint-plugin-no-loops": "^0.3.0",
    "eslint-plugin-sonarjs": "^0.5.0"
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
