# Widget integrations

This repo holds different examples showing how to integrate Squid widget inside an existing website.

Please reference our docs at [https://docs.squidrouter.com/widget](https://docs.squidrouter.com/widget)

## Examples

```
- packages/
    - squid-v2/          # Swap widget (@0xsquid/widget)
        - vite
        - nextjs
    - deposit-widget/    # Deposit widget (@0xsquid/deposit-widget)
        - vite
        - nextjs
```

### Swap widget examples

| Path | Framework | Widget version | Status |
| --- | --- | --- | --- |
| `packages/squid-v2/vite/vite-5.5-typescript` | Vite 5, React 18 | 8.0.0 | Follows the latest widget |
| `packages/squid-v2/vite/vite-5.5-typescript-swc` | Vite 5 with SWC, React 18 | 8.0.0 | Follows the latest widget |
| `packages/squid-v2/nextjs/next-14` | Next.js 14 (app router), React 18 | 8.0.0 | Follows the latest widget |
| `packages/squid-v2/nextjs/next-13` | Next.js 13 (pages router), React 18 | 6.4.0 | Frozen: newer widget versions need Next.js 14 or later |
| `packages/squid-v2/nextjs/next-13-ethers-v5` | Next.js 13 (pages router), React 18, ethers 5 | 6.4.0 | Frozen: newer widget versions need Next.js 14 or later |

## Requirements

- Node.js 24 (the version in `.nvmrc`). All the swap widget examples are checked with it.
- Yarn 1 (`npm install -g yarn`)

Each example is a separate project with its own `yarn.lock`. There is no workspace at the repo root.

The Next.js 13 examples set `NODE_OPTIONS` in their `package.json` scripts. This syntax works in macOS and Linux shells. On Windows, use WSL or Git Bash.

## Run an example

1. Get an integrator id. Its allowed origins must include the local URL of the example (for example `http://localhost:3000` or `http://localhost:5173`). Without an allowed origin, the widget cannot load data.
2. Put the integrator id in the widget config of the example, in place of `<your-integrator-id>`.
3. Install and start the example:

```bash
cd packages/squid-v2/vite/vite-5.5-typescript
yarn install
yarn dev
```

Use `yarn build` to check the production build.

## Keep the examples in sync

After each `@0xsquid/widget` release:

1. In each example that follows the latest widget, set the exact new version of `@0xsquid/widget` in `package.json` (no `^`).
2. Run `yarn install` in each example to regenerate its `yarn.lock`.
3. Run `yarn build`, then `yarn dev`, and open the example. Make sure that the swap form loads, that you can open the token selector, and that the browser console shows no errors from the widget.
4. Send all the updates in one pull request.

If a release drops support for a setup (for example a framework version), leave that example on the last widget version that works. Mark it as frozen in the table above and give the reason.

## Test a local hooks or widget build before a release

Do this only for changes that can affect integrators: build output, dependencies, peer dependency ranges, styles, or wallet connection flows. Most changes do not need it.

1. Build tarballs:

```bash
# in squid-react-hooks
cd packages/hooks && yarn packlib

# in squid-widget
cd packages/widget && yarn packlib
```

2. In the example, point the widget at the tarball with a `file:` dependency. The paths below are for an example in `packages/squid-v2/<framework>/<example>`, with `squid-widget`, `squid-react-hooks` and this repo in the same folder.

```json
"dependencies": {
  "@0xsquid/widget": "file:../../../../../squid-widget/packages/widget/squid-widget-<timestamp>.tgz"
}
```

3. The widget pins an exact `@0xsquid/react-hooks` version. To use a local hooks tarball, add a Yarn `resolutions` entry:

```json
"resolutions": {
  "@0xsquid/react-hooks": "file:../../../../../squid-react-hooks/packages/hooks/squid-hooks-lib-<timestamp>.tgz"
}
```

4. Run `yarn install`. Then clear the bundler cache: `node_modules/.vite` for Vite, `.next` for Next.js.
5. Make sure that only one copy of hooks and one copy of React are installed: `yarn why @0xsquid/react-hooks` and `yarn why react`.
6. Build and open the example as in [Keep the examples in sync](#keep-the-examples-in-sync).
7. Do not commit the `file:` paths. Revert `package.json` and `yarn.lock` when you are done.

Do not use `yarn link`: a linked package loads its own copy of React and of hooks, which breaks React hooks and splits the widget state.
