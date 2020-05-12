# eslint-config

ESLint rules recommended by DeepCrawl.

## Installation

Add dependency and peer dependencies to your `package.json` dev dependencies:

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

## Known issues in current release

- [MINOR] @typescript-eslint/parser blocked at 2.31.0, due to https://github.com/typescript-eslint/typescript-eslint/issues/2009