# eslint-config

ESLint rules used by Lumar (formerly DeepCrawl).

## Installation

Add `eslint-config-deepcrawl` and its peer dependencies to your `package.json`:

```shell
yarn add --dev \
  eslint-config-deepcrawl \
  eslint@^10.0.0
```

## Usage

Update your `eslint.config.mjs` file:

```js
import eslintConfigDeepcrawl from "eslint-config-deepcrawl";

export default [...eslintConfigDeepcrawl];
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
  "plugins": ["prettier-plugin-packagejson"],
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

## Migrating from v16

v17 replaces `eslint-plugin-jest` with `@vitest/eslint-plugin`. To upgrade:

1. Rename every `jest/*` rule reference in your `eslint.config.*` to
   `vitest/*`. For example, `"jest/expect-expect"` becomes
   `"vitest/expect-expect"`. ESLint silently ignores unknown rule names
   set to `"off"`, so if you miss a rename, your override stops working
   without an error.
2. If you still use Jest, the same rules lint Jest tests, because the test
   APIs are largely compatible. However, these rules are gone:
   `no-deprecated-functions`, `no-export` and `no-jasmine-globals` have no
   Vitest equivalent, and `vitest/no-done-callback` is deprecated because
   Vitest does not support `done` callbacks. The Jest-only globals (`jest`,
   `fit`, `xit`, `xtest`, `xdescribe`) are no longer declared either.
3. `@typescript-eslint/unbound-method` is replaced by
   `vitest/unbound-method` in TypeScript files. The Vitest rule reports
   the same problems but allows passing a method to `expect()` (for
   example `expect(client.getAccount).toHaveBeenCalled()`) and to
   `vi.mocked()`. Rename any `eslint-disable` comments and config overrides
   for `@typescript-eslint/unbound-method` to `vitest/unbound-method`.
   Remove the disable comments that only worked around mock expectations.
   Old disable comments are reported as unused.
4. Vitest globals are required. `vitest/no-importing-vitest-globals`
   reports imports of `describe`, `it`, `expect`, `vi` and the other
   globals from `vitest`. Type imports such as `Mock` are still allowed.
   Enable globals in your Vitest config and add the global types to your
   `tsconfig.json`:

   ```ts
   // vitest.config.ts
   export default defineConfig({ test: { globals: true } });
   ```

   ```json
   { "compilerOptions": { "types": ["vitest/globals"] } }
   ```

   `eslint --fix` removes the imports.

5. Tests must use `it`, not `test`, both at the top level and inside
   `describe` (`vitest/consistent-test-it`). `eslint --fix` renames them.
6. These rules are new. Most of them can be fixed with `eslint --fix`:
   - From the Vitest recommended preset: `vitest/no-import-node-test`,
     `vitest/no-unneeded-async-expect-function`,
     `vitest/prefer-called-exactly-once-with` and
     `vitest/require-local-test-context-for-concurrent-snapshots`.
   - Added by this config: `vitest/no-test-return-statement`,
     `vitest/prefer-comparison-matcher`, `vitest/prefer-equality-matcher`,
     `vitest/prefer-hooks-in-order`, `vitest/prefer-hooks-on-top`,
     `vitest/prefer-mock-promise-shorthand`, `vitest/prefer-to-contain`,
     `vitest/prefer-to-have-length`, `vitest/prefer-todo`,
     `vitest/prefer-vi-mocked` and `vitest/require-awaited-expect-poll`.

## Migrating from v15

v16.0.0 fixed the `@stylistic/max-len` ignore pattern, which had been
exempting every line, so long lines started to report errors. v16.0.1 then
removed `@stylistic/max-len` altogether and left line length to Prettier.
If you upgrade straight to v16.0.1 or later, you don't need to change
anything. If you added overrides to work around v16.0.0, you can remove them.

## Migrating from v14

v15 upgrades to ESLint 10 and replaces `eslint-plugin-import` with its
maintained fork `eslint-plugin-import-x`. To upgrade:

1. Bump `eslint` to `^10.0.0` (drop ESLint 9).
2. Rename every `import/*` rule reference in your `eslint.config.*` to
   `import-x/*` — e.g. `"import/no-default-export"` →
   `"import-x/no-default-export"`. ESLint silently ignores unknown rule
   names set to `"off"`, so a missed rename turns into a silent loss of
   your override.
3. Remove `@types/eslint__js` from your `devDependencies` if you have it
   — `@eslint/js@10` now ships its own type definitions.

No other consumer changes are required; the rest of the ruleset is
unchanged.
