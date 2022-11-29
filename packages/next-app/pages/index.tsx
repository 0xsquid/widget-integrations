import { SquidWidget } from "@0xsquid/widget/src"
import type { AppConfig } from "@0xsquid/widget/src/widget/core/types/config"

import styles from '../styles/Home.module.css'

export default function Home() {
  const config = {
    companyName: "Test Widget",
    slippage: 3,
    instantExec: true,
    infiniteApproval: false,
    apiUrl: "http://localhost:3000"
  } as AppConfig

  return (
    <div className={styles.container}>
      <SquidWidget config={config} />
    </div>
  )
}
