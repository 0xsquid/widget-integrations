import { SquidWidget } from "@0xsquid/widget"
import { useState, useEffect } from "react"
import { ethers } from "ethers"

const ethereumRpc = "https://rpc.ankr.com/eth"

export function EthersInfo() {
  const [ blockNumber, setBlockNumber ] = useState<number | null>(null)
  const [ resolvedAddress, setResolvedAddress ] = useState("")
  const [ ensQuery, setEnsQuery ] = useState("")

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(ethereumRpc)
    provider.getBlockNumber().then(setBlockNumber)
  }, [])

  const handleEnsLookup = async () => {
    const provider = new ethers.providers.JsonRpcProvider(ethereumRpc)
    const address = await provider.resolveName(ensQuery)
    setResolvedAddress(address || "Name not found")
  }

  return (
    <div>
      Ethers version: <span>{ethers.version}</span>

      <p>Current Block Number: <span>{blockNumber}</span></p>

      <div>
        <label>Enter ENS Name:</label>
        <input
          type="text"
          placeholder="vitalik.eth"
          value={ensQuery}
          onChange={(e) => setEnsQuery(e.target.value)}
        />
        <button
          onClick={handleEnsLookup}
        >
          Search
        </button>
        <p>
          Resolved Address: <span>{resolvedAddress}</span>
        </p>
      </div>
    </div>
  )
}


export default function Home() {
  const [ isMounted, setIsMounted ] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <main >
      <h1 >Squid Widget + NextJS 13 + Ethers v5</h1>
      <h2 >
        Update the integrator id at <code>src/pages/index.tsx</code>
      </h2>

      <EthersInfo />

      <SquidWidget
        config={{
          integratorId: "squid-swap-widget"
        }}
      />
    </main>
  )
}