# Squid V3 Widget + NextJS 14

## NextJS 14 integration

Below are the steps required to integrate the Squid widget with NextJS 14.
For more information, refer to the [NextJS integration guide](https://docs.squidrouter.com/widget-integration/add-a-widget/widget/nextjs-installation) in our docs.

### Transpile packages

Using the widget with NextJS requires transpiling the `@0xsquid/widget` and `@0xsquid/react-hooks` packages.

Add the following to your `next.config.mjs` file:

```diff
const nextConfig = {
+  transpilePackages: ["@0xsquid/widget", "@0xsquid/react-hooks"]
+  swcMinify: false, // disable swc minify
+  webpack(config) {
+    config.externals.push("pino-pretty")
+
+    return config
+  }
}
```

### Client components

The Squid widget interacts with multiple client-side APIs. For this reason, it needs to be rendered as a client component.

NextJS 14 renders all components on the server by default. To render the Squid widget as a client component, create a new file and add the `"use client"` directive to the top of the file:

```jsx
// SquidWidgetWrapper.tsx
"use client"

import { SquidWidget } from "@0xsquid/widget"

export function SquidWidgetWrapper() {
  return (
    <SquidWidget
      config={{
        integratorId: "<your-integrator-id>"
      }}
    />
  )
}
```

and then use the component in your page or layout:

```jsx
// app/page.tsx
import { SquidWidgetWrapper } from "../components/SquidWidgetWrapper"

export default function Page() {
  return (
    <div>
      {/* The Squid widget will be rendered on the client-side */}
      <SquidWidgetWrapper />

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
cd packages/squid-v2/nextjs/next-14

# Install dependencies
yarn install

# Start the development server
yarn dev
```

## Set up your integrator id

Go to `app/SquidWidgetWrapper.tsx` and add your integrator id to the widget config:

```diff
<SquidWidget
  config={{
+    integratorId: "<your-integrator-id>"
  }}
/>
```
