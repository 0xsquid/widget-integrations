# Widget integrations

This repo holds different examples showing how to integrate Squid widget inside an existing website. 

Please reference our docs at [https://docs.squidrouter.com/widget](https://docs.squidrouter.com/widget)

## Requirements

These apply from the next major version of `@0xsquid/widget`:

- Node.js 22.12 or later. Yarn 1 stops the install on older Node versions.
- A bundler with ES2022 support: Next.js 14+, Vite 5+ or webpack 5.
- Next.js 13 is not supported.
- React 18.

MetaMask is available as a Stellar wallet from this release. Stellar is enabled by default; to turn it off, use `disabledChains` or `availableChains` in the widget config.

## Examples
```
- packages/
    - squid-v2/          # Swap widget (@0xsquid/widget)
        - vite
        - nextjs
        - cra (Create react app)
    - deposit-widget/    # Deposit widget (@0xsquid/deposit-widget)
        - vite
        - nextjs
```
