
import React from "react";
import { SquidWidget } from '@0xsquid/widget';



export const WidgetPage = () => {
  return ;
};

function App() {
  return (
    <div className="App" style={{padding: "2rem", width: "auto", height: "auto"}}>
      <SquidWidget config={
        {companyName: "Squid",
        slippage: 1,
        infiniteApproval: false,
        instantExec: false,
        apiUrl: "https://api.0xsquid.com",
        priceImpactWarnings: {
          warning: 3,
          critical: 5,
        },
        initialFromChainId: 250,
        initialToChainId: 1,
  
        // Mark fantom as not coming soon
        comingSoonChainIds: [
          // Mainnet
          42161,
          56,
          "cosmoshub-4",
          "crescent-1",
          "injective-1",
          "juno-1",
          "kaiyo-1",
          "osmosis-1",
          "secret-4",
          "phoenix-1",
          "agoric-3",
          "mantle-1",
          "axelar-dojo-1",
          "comdex-1",
          "evmos_9001-2",
          "fetchhub-4",
          "kichain-2",
          "regen-1",
          "umee-1",
        ]
      }} />
    </div>
  );
}

export default App;
