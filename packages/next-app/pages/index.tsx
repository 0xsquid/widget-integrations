import { SquidWidget } from "@0xsquid/widget";
import { AppConfig } from "@0xsquid/widget/widget/core/types/config";

import styles from "../styles/Home.module.css";

export default function Home() {
  const config = {
    companyName: "Test Widget",
    slippage: 3,
    instantExec: true,
    infiniteApproval: false,

    titles: {
      // Every title in the widget, if string is empty, the title will be invisible
      swap: "",
      settings: "Settings",
      wallets: "Wallets",
      tokens: "Tokens",
      chains: "Chains",
      history: "History",
      transaction: "Transaction",
      destination: "Destination address",
    },
    apiUrl: "https://dev.api.0xsquid.com",
  } as AppConfig;

  return (
    <div className={styles.container}>
      <SquidWidget config={config} />
    </div>
  );
}
