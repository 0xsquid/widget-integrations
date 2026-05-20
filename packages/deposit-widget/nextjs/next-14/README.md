# Squid Deposit Widget + NextJS 14

## NextJS 14 integration

Below are the steps required to integrate the Squid Deposit Widget with NextJS 14.

### Next config

`@0xsquid/deposit-widget` ships a pre-bundled (already transpiled) dist, so unlike the
swap widget it does **not** need `transpilePackages`. The only tweaks required are
disabling SWC minification and externalizing `pino-pretty`.

Add the following to your `next.config.mjs` file:

```diff
const nextConfig = {
+  swcMinify: false, // disable swc minify
+  webpack(config) {
+    config.externals.push("pino-pretty")
+
+    return config
+  }
}
```

### Client components

The Squid Deposit Widget interacts with multiple client-side APIs. For this reason, it needs to be rendered as a client component.

NextJS 14 renders all components on the server by default. To render the widget as a client component, create a new file and add the `"use client"` directive to the top of the file:

```jsx
// DepositWidgetWrapper.tsx
"use client"

import { DepositWidget } from "@0xsquid/deposit-widget"

export function DepositWidgetWrapper() {
  return (
    <DepositWidget
      config={{
        mode: "deposit",
        destinationAddress: "<destination-address>",
        destinationToken: {
          address: "<token-address>",
          chainId: "<chain-id>"
        },
        integrator: {
          id: "<your-integrator-id>",
          name: "<your-app-name>",
          logoUrl: "<your-logo-url>"
        }
      }}
    />
  )
}
```

and then use the component in your page or layout:

```jsx
// app/page.tsx
import { DepositWidgetWrapper } from "./DepositWidgetWrapper"

export default function Page() {
  return (
    <div>
      {/* The Squid Deposit Widget will be rendered on the client-side */}
      <DepositWidgetWrapper />

      <MyServerComponent />
    </div>
  )
}
```

## Getting started

```bash
# Clone the repo
git clone https://github.com/0xsquid/widget-integrations.git

# Move to the right folder
cd packages/deposit-widget/nextjs/next-14

# Install dependencies
yarn install

# Start the development server
yarn dev
```

## Set up your config

Go to `app/DepositWidgetWrapper.tsx` and fill in the deposit widget config:

```diff
<DepositWidget
  config={{
    mode: "deposit",
+   destinationAddress: "<destination-address>",
    destinationToken: {
+     address: "<token-address>",
+     chainId: "<chain-id>"
    },
    integrator: {
+     id: "<your-integrator-id>",
+     name: "<your-app-name>",
+     logoUrl: "<your-logo-url>"
    }
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
