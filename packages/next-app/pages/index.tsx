import { SquidWidget } from "@0xsquid/widget";
import { AppConfig } from "@0xsquid/widget/widget/core/types/config";

import styles from "../styles/Home.module.css";

export default function Home() {
  const config = {
    companyName: "Test Widget",
    integratorId: "example-swap-widget",
    slippage: 3,
    instantExec: true,
    infiniteApproval: false,
    apiUrl: "https://v2.api.squidrouter.com",
  } as AppConfig;

  return (
    <div className={styles.container}>
      <SquidWidget config={config} />
    </div>
  );
}
