import './App.css'
import { DepositWidget } from '@0xsquid/deposit-widget'

function App() {
  return (
    <>
      <h1 className='title'>Vite + Squid Deposit Widget</h1>
      <DepositWidget
        config={{
          mode: "deposit",
          destinationAddress: "<destination-address>",
          destinationToken: {
            address: "<token-address>",
            chainId: "<chain-id>",
          },
          integrator: {
            id: "<your-integrator-id>",
            name: "<your-app-name>",
            logoUrl: "<your-logo-url>",
          },
        }}
      />
    </>
  )
}

export default App
