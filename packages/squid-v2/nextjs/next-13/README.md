# Squid V3 Widget + NextJS 13

## NextJS 13 integration

This example stays on widget `6.4.0`, the newest version that supports Next.js 13. Newer widget versions pull in dependencies that the Next.js 13.4 build cannot compile, so they need Next.js 14 or later.

Below are the steps required to integrate the Squid widget with NextJS 13.
For more information, refer to the [NextJS integration guide](https://docs.squidrouter.com/widget-integration/add-a-widget/widget/nextjs-installation) in our docs.

### Transpile packages

Using the widget with NextJS 13 requires transpiling the `@0xsquid/widget` package. Do not add `@0xsquid/react-hooks`: Next.js 13 cannot transpile its build output.

Add the following to your `next.config.mjs` file:

```diff
const nextConfig = {
+  transpilePackages: ["@0xsquid/widget"]
}
```

### Node.js global `navigator`

Node.js 21 and later define a global `navigator`. With it, a widget dependency thinks that it runs in a browser and fails during server rendering (`document is not defined`). Turn it off in the `dev`, `build` and `start` scripts:

```diff
"scripts": {
-  "dev": "next dev",
+  "dev": "NODE_OPTIONS=--no-experimental-global-navigator next dev",
-  "build": "next build",
+  "build": "NODE_OPTIONS=--no-experimental-global-navigator next build",
-  "start": "next start",
+  "start": "NODE_OPTIONS=--no-experimental-global-navigator next start",
}
```

## Getting started

```bash
# Clone the repo
git clone https://github.com/0xsquid/widget-integrations.git

# Move to the right folder
cd packages/squid-v2/nextjs/next-13

# Install dependencies
yarn install

# Start the development server
yarn dev
```

## Set up your integrator id

Go to `src/pages/index.tsx` and add your integrator id to the widget config:

```diff
<SquidWidget
  config={{
+    integratorId: "<your-integrator-id>"
  }}
/>
```
