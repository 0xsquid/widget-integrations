# Squid V3 Widget + NextJS 13

## NextJS 13 integration

Below are the steps required to integrate the Squid widget with NextJS 13.
For more information, refer to the [NextJS integration guide](https://docs.squidrouter.com/widget-integration/add-a-widget/widget/nextjs-installation) in our docs.

### Transpile packages

Using the widget with NextJS requires transpiling the `@0xsquid/widget` and `@0xsquid/react-hooks` packages.

Add the following to your `next.config.mjs` file:

```diff
const nextConfig = {
+  transpilePackages: ["@0xsquid/widget", "@0xsquid/react-hooks"]
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
