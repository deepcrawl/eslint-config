# eslint-config

ESLint rules recommended by DeepCrawl.

## Installation

Add to your `package.json`:

```json
{
  "devDependencies": {
    "@deepcrawl/eslint-config": "^0.1.0"
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