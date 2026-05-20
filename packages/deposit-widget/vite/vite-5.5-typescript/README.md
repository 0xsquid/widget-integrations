# Squid Deposit Widget + Vite + Typescript

## Getting started

```bash
# Clone the repo
git clone https://github.com/0xsquid/widget-integrations.git

# Move to the right folder
cd packages/deposit-widget/vite/vite-5.5-typescript

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

### Set up your config

Go to `src/App.tsx` and fill in the deposit widget config:

```diff
<DepositWidget
  config={{
    mode: "deposit",
+   destinationAddress: "<destination-address>",
    destinationToken: {
+     address: "<token-address>",
+     chainId: "<chain-id>",
    },
    integrator: {
+     id: "<your-integrator-id>",
+     name: "<your-app-name>",
+     logoUrl: "<your-logo-url>",
    },
  }}
/>
```

- `mode` — `"deposit"` for an open-ended deposit, or `"payment"` for a fixed amount
  (the `"payment"` mode also requires an `amount` string).
- `destinationAddress` — the address that will receive the deposited funds.
- `destinationToken` — the token (`address` + `chainId`) the user ends up with at the destination.
- `integrator` — your integrator `id`, plus the `name` and `logoUrl` shown in the widget.

You can optionally pass `theme` / `themeType` to customize the appearance, and `apiUrl`
to point at a different Squid API environment.
