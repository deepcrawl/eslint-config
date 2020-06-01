module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-plugin-import/recommended",
    "plugin:eslint-plugin-import/typescript",
    "plugin:eslint-plugin-jest/recommended",
    "plugin:eslint-plugin-promise/recommended",
    "eslint-config-prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-array-func",
    "eslint-plugin-clean-code",
    "eslint-plugin-no-loops",
    "eslint-plugin-jest",
    "eslint-plugin-promise",
    "eslint-plugin-sonarjs",
  ],
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: false,
        types: {
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
          Boolean: {
            message: "Use boolean instead",
            fixWith: "boolean",
          },
          Number: {
            message: "Use number instead",
            fixWith: "number",
          },
          Symbol: {
            message: "Use symbol instead",
            fixWith: "symbol",
          },

          // object typing
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
          },
          '{}': {
            message: [
              '`{}` actually means "any non-nullish value".',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
          },
        },
      },
    ],
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
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "property",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        filter: {
          regex: "[- :]",
          match: true,
        },
      },
      {
        selector: "enumMember",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"]
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"]
      },
    ],
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
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true,
      },
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/unified-signatures": "error",
    "array-func/avoid-reverse": "error",
    "clean-code/feature-envy": "error",
    "import/default": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-relative-parent-imports": "error",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      },
    ],
    "jest/expect-expect": "error",
    "no-loops/no-loops": "error",
    "promise/prefer-await-to-then": "error",
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
    "sonarjs/no-small-switch": "error",
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
    "no-console": "error",
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
