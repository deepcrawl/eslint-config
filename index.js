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
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-graphql",
    "eslint-plugin-jest",
    "eslint-plugin-sonarjs",
    "prettier",
  ],
  rules: {
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
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/typedef": ["error", {
      propertyDeclaration: true,
    }],
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/ban-types": ["error", {
      "types": {
        "Object": "Avoid using the `Object` type. Did you mean `object`?",
        "Boolean": "Avoid using the `Boolean` type. Did you mean `boolean`?",
        "Number": "Avoid using the `Number` type. Did you mean `number`?",
        "String": "Avoid using the `String` type. Did you mean `string`?",
      },
    }],
    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: ["expect", "expectCDK", "*.verify"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        arrowParens: "avoid",
        usePrettierrc: false,
      },
    ],
    "sonarjs/prefer-while": "error",
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
    "no-shadow": "off",
    "sort-keys": "off",
    "no-void": "error",
    "no-restricted-properties": ["error", {
      "object": "Object",
      "property": "assign",
      "message": "Object.assign allows getting around type checking. Consider another solution.",
    }],
    "spaced-comment": "error",
    "curly": ["error", "multi-line"],
  },
};
