# Squid V3 Widget + Vite + Typescript

## Getting started

```bash
# Clone the repo
git clone https://github.com/0xsquid/widget-integrations.git

# Move to the right folder
cd packages/squid-v2/vite/vite-5.5-typescript

# Install dependencies
yarn install

# Start the development server
yarn dev
```

### Polyfills

Squid needs some polyfills for browser compatibility.
You can add them to your Vite project using the `vite-plugin-node-polyfills` plugin.

First, install the plugin:

```bash
yarn add vite-plugin-node-polyfills -D
```

Finally, add the plugin to your `vite.config.ts` file:

```diff
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
+import { nodePolyfills } from "vite-plugin-node-polyfills"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
+   nodePolyfills()
  ]
})
```

### Set up your integrator id

Go to `src/App.tsx` and add your integrator id to the widget config:

```diff
<SquidWidget
  config={{
+    integratorId: "<your-integrator-id>"
  }}
/>
```
