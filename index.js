const path = require("path");

module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-plugin-jest/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: [
        "**/*.cdktest.ts",
        "**/*.integration.ts",
        "**/*.mock.ts",
        "**/*.test.ts",
        "**/__tests__/**",
        "**/_generated/**/*.ts",
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/tslint/config": "off",
        "max-classes-per-file": "off",
        "max-lines-per-function": "off",
      },
    },
    {
      files: ["**/migrations/**"],
      rules: {
        "max-lines-per-function": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 2018,
    project: [
      path.resolve(__dirname, "./tsconfig.json"),
    ],
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "eslint-plugin-graphql",
    "eslint-plugin-jest",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        arrowParens: "avoid"
      },
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/camelcase": [
      "error",
      {
        allow: ["must_not"],
        properties: "always",
      },
    ],
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "angle-bracket",
        objectLiteralTypeAssertions: "allow",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          constructors: "no-public",
        },
      },
    ],
    "@typescript-eslint/generic-type-naming": ["error", "^T[A-Z][a-zA-Z]+$"],
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["protected-constructors", "private-constructors"],
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        fixToUnknown: true,
        ignoreRestArgs: true,
      },
    ],
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreProperties: true,
      },
    ],
    "@typescript-eslint/no-magic-numbers": [
      "off",
      {
        ignoreNumericLiteralTypes: true,
      },
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true,
      },
    ],
    "@typescript-eslint/no-type-alias": ["off"],
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        lintFile: "./tslint.json",
      },
    ],
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: ["expect", "expectCDK", "*.verify"],
      },
    ],
    "max-lines-per-function": ["error", 15],
    "max-classes-per-file": ["error", 1],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreComments: true,
        ignorePattern: "^(export|import)*",
        ignoreTemplateLiterals: true,
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-empty-function": "off",
    "no-magic-numbers": "off",
    "object-shorthand": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-await": "off",
  },
};
