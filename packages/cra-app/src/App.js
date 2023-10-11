
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
        integratorId: "example-swap-widget",
        infiniteApproval: false,
        instantExec: false,
        apiUrl: "https://v2.api.squidrouter.com",
 
      }} />
    </div>
  );
}

export default App;
