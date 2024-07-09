import { SquidWidget } from "@0xsquid/widget"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <SquidWidget
        config={{
          integratorId: "<your-integrator-id>",
          apiUrl: "https://apiplus.squidrouter.com"
        }}
      />
    </main>
  )
}
