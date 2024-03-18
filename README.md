## Issue: https://github.com/unjs/nitro/issues/2277

### Problem:

> Could not find a declaration file for module 'nitropack/runtime/task'. 'nitro-mts-test/node_modules/.pnpm/nitropack@2.9.4/node_modules/nitropack/dist/runtime/task.mjs' implicitly has an 'any' type.
If the 'nitropack' package actually exposes this module, try adding a new declaration (.d.ts) file containing `declare module 'nitropack/runtime/task';`

### Reproduction:

1. `pnpm i`
2. `pnpm run dev`
3. Check console for TypeScript errors or open `server/routes/index.ts` in the IDE

Note:

- I set `strict: true` in `tsconfig.json`
- I added `@rollup/plugin-typescript` and `tslib` so the problem is also visible in the console.
