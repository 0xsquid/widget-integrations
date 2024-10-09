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
