"use client"
import { useEffect, useState } from "react"
import { SquidWidget } from "@0xsquid/widget"

export default function Home() {
  const [ isMounted, setIsMounted ] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <main>
      <h1>Squid Widget + NextJS 13</h1>
      <h2>
        Update the integrator id at <code>src/pages/index.tsx</code>
      </h2>

      <SquidWidget
        config={{
          integratorId: "<your-integrator-id>"
        }}
      />
    </main>
  )
}
