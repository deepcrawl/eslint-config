module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:promise/recommended",
    "plugin:n/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "array-func",
    "clean-code",
    "filenames",
    "no-loops",
    "jest",
    "jest-formatting",
    "json-format",
    "promise",
    "sonarjs",
  ],
  reportUnusedDisableDirectives: true,
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
          BigInt: {
            message: "Use bigint instead",
            fixWith: "bigint",
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
          object: {
            message: [
              'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
              'Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.',
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
      "warn",
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
        "selector": "variable",
        "types": ["boolean"],
        "format": ["PascalCase"],
        "prefix": ["are", "can", "did", "does", "do", "has", "is", "not", "should", "was", "were", "will", "with"]
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
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/no-duplicate-enum-values": "off",
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
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true,
      },
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/unified-signatures": "error",
    "array-func/avoid-reverse": "error",
    "clean-code/feature-envy": "error",
    "filenames/match-regex": ["error", "^([a-z0-9]+)(-[a-z0-9]+)*(\.[a-z]+)*$"],
    "import/default": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-relative-packages": "error",
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
    "jest/prefer-expect-resolves": "error",
    "jest/prefer-to-be": "error",
    "no-loops/no-loops": "error",
    "n/no-missing-import": "off",
    "n/no-unsupported-features/node-builtins": [
      "error",
      {
        ignores: ["fetch", "Response", "Request"],
      },
    ],
    "n/no-unsupported-features/es-syntax": [
      "error",
      {
        ignores: ["modules"],
      },
    ],
    "promise/prefer-await-to-then": "error",
    "sonarjs/cognitive-complexity": ["error", 8],
    "sonarjs/max-switch-cases": "error",
    "sonarjs/no-all-duplicated-branches": "error",
    "sonarjs/no-collapsible-if": "error",
    "sonarjs/no-collection-size-mischeck": "error",
    "sonarjs/no-duplicate-string": "warn",
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
    "max-lines-per-function": [
      "warn",
      {
        max: 20,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      },
    ],
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
  overrides: [
    {
      files: ["**/.eslintrc.js"],
      rules: {
        "filenames/match-regex": "off",
      },
    },
  ],
  settings: {
    "json/sort-package-json": "standard",
    "json/ignore-files": [],
    "json/json-with-comments-files": [],
  },
};
