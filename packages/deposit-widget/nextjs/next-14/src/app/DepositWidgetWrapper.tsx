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
