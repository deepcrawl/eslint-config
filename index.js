module.exports = {
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
    "eslint-plugin-array-func",
    "eslint-plugin-clean-code",
    "eslint-plugin-no-loops",
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
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Object: "Avoid using the `Object` type. Did you mean `object`?",
          Boolean: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          Number: "Avoid using the `Number` type. Did you mean `number`?",
          String: "Avoid using the `String` type. Did you mean `string`?",
        },
      },
    ],
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
    "@typescript-eslint/naming-convention": "error",
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
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/typedef": [
      "error",
      {
        propertyDeclaration: true,
      },
    ],
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
    "array-func/avoid-reverse": "error",
    "clean-code/feature-envy": "error",
    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: ["expect", "expectCDK", "*.verify"],
      },
    ],
    "no-loops/no-loops": "error",
    "prettier/prettier": [
      "error",
      {
        arrowParens: "avoid",
        bracketSpacing: true,
        printWidth: 120,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "all",
        useTabs: false,
      },
      {
        usePrettierrc: false,
      },
    ],
    "sonarjs/cognitive-complexity": ["error", 8],
    "sonarjs/max-switch-cases": "error",
    "sonarjs/no-all-duplicated-branches": "error",
    "sonarjs/no-collapsible-if": "error",
    "sonarjs/no-collection-size-mischeck": "error",
    "sonarjs/no-duplicate-string": "error",
    "sonarjs/no-duplicated-branches": "error",
    "sonarjs/no-element-overwrite": "error",
    "sonarjs/no-identical-conditions": "error",
    "sonarjs/no-identical-expressions": "error",
    "sonarjs/no-identical-functions": "error",
    "sonarjs/no-inverted-boolean-check": "error",
    "sonarjs/no-one-iteration-loop": "error",
    "sonarjs/no-redundant-boolean": "error",
    "sonarjs/no-redundant-jump": "error",
    "sonarjs/no-same-line-conditional": "error",
    "sonarjs/no-small-swtich": "error",
    "sonarjs/no-unused-collection": "error",
    "sonarjs/no-use-of-empty-return-value": "error",
    "sonarjs/no-useless-catch": "error",
    "sonarjs/prefer-immediate-return": "error",
    "sonarjs/prefer-while": "error",
    "complexity": ["error", 10],
    "default-case-last": "error",
    "max-classes-per-file": ["error", 1],
    "max-len": [	
      "error",	
      {	
        code: 120,	
        ignoreComments: true,	
        ignorePattern: "^(export|import)*",	
        ignoreTemplateLiterals: true,	
      }	
    ],
    "max-lines-per-function": ["error", 15],
    "max-params": ["error", 7],
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "error",
        ],
      },
    ],
    "no-else-return": "error",
    "no-multi-str": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "Object",
        property: "assign",
        message: "Object.assign allows getting around type checking. Consider another solution.",
      }
    ],
    "no-self-assign": "error",
    "object-shorthand": "error",
    "prefer-template": "error",
    "spaced-comment": "error",
  },
};
