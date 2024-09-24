# Squid V2 Widget + NextJS 13

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
