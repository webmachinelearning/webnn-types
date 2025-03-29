# TypeScript Types Declarations for WebNN

This package contains the TypeScript type declaration (`.d.ts`) files for the [WebNN API](https://webmachinelearning.github.io/webnn/)

# Using Types

## Installing

* npm: ` npm install --save-dev @webnn/types`
* yarn: `yarn add --dev @webnn/types`
* pnpm: `pnpm add -D @webnn/types`

## Configuring

Since this package is outside of [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), the types won't be automatically picked up. The following is a list of ways to add it to type lookup.

### In `tscofig.json`

#### Using `types`
```json
{
  "compilerOptions": {
    "types": ["@webnn/types"]
  }
}
```
#### Using `typeRoots`
```json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@webnn/types",
      "./node_modules/@types"
    ]
  }
}
```
This package uses `webnn` instead of `dist` so that both `@webnn/types` and `@webgpu/types` can be used in `typeRoots`.


# Updating Types

1. Update WebNN specification under `spec`
 `git submodule update --init --recursive`
2. Generate types with `npm run generate`
3. Manually update `webnn/index.d.ts` with changes from `generate/index.d.ts`. Note that there are intentional differences between the versions under `generate/` and `webnn/`.
4. Push changes to all files under `generated/` and `webnn/`.

# Credits
This repository is based on the work done by the WebGPU team for their typing files. Without their work on [@webgpu/types](https://github.com/gpuweb/types/), the WebNN types would have been much harder to create.
