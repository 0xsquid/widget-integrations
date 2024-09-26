# Squid V2 Widget + Vite + Typescript SWC

## Getting started

```bash
# Clone the repo
git clone https://github.com/0xsquid/widget-integrations.git

# Move to the right folder
cd packages/squid-v2/vite/vite-5.5-typescript-swc

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
import react from "@vitejs/plugin-react-swc"
+import { nodePolyfills } from "vite-plugin-node-polyfills"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
+   nodePolyfills()
  ]
})
```

### Import React

The `vite-plugin-react-swc` plugin requires you to import React in both your `App.tsx` and `main.tsx` files:

```diff
# main.tsx
+// @ts-expect-error - Required top-level React import for vite typescript swc plugin
+import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

```diff
+// @ts-expect-error - Required top-level React import for vite typescript swc plugin
+import React from 'react';
import { SquidWidget } from '@0xsquid/widget'

function App() {
  return (
    <SquidWidget
      config={{
        integratorId: "<your-integrator-id>"
      }}
    />
  )
}

export default App
```

### Set up your integrator id

Go to `src/pages/index.tsx` and add your integrator id to the widget config:

```diff
<SquidWidget
  config={{
+    integratorId: "<your-integrator-id>"
  }}
/>
```
