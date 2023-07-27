import { AppConfig } from "@0xsquid/widget/widget/core/types/config";

import { SquidCallType } from "@0xsquid/sdk";
import { SquidStakingWidget } from "@0xsquid/staking-widget";
import { StakeConfig } from "@0xsquid/staking-widget/widget/core/types/config";
import { ethers } from "ethers";
import erc20Abi from "../abi/erc20Abi";
import pinjamStakingPoolAbi from "../abi/pinjamStakingPoolAbi";
import styles from "../styles/Home.module.css";

export default function Home() {
  const kavaId = 2222;
  const pinjamAxlUsdcPoolAddress = "0x11c3d91259b1c2bd804344355c6a255001f7ba1e";
  const axlUsdcKavaAddress = "0xeb466342c4d449bc9f53a865d5cb90586f405215";
  const pAxlUsdcAddress = "0x5c91f5d2b7046a138c7d1775bffea68d5e95d68d";
  const pinjamStakingPoolInterface = new ethers.utils.Interface(
    pinjamStakingPoolAbi
  );
  const erc20Interface = new ethers.utils.Interface(erc20Abi);

  const stakeConfig: StakeConfig = {
    unstakeLink: "https://app.pinjamlabs.com/staking",
    customContractCalls: [
      {
        callType: SquidCallType.FULL_TOKEN_BALANCE,
        target: axlUsdcKavaAddress,
        value: "0",
        callData: () => {
          return erc20Interface.encodeFunctionData("approve", [
            pinjamAxlUsdcPoolAddress,
            "0",
          ]);
        },
        payload: {
          tokenAddress: axlUsdcKavaAddress,
          inputPos: 1,
        },
        estimatedGas: "50000",
      },
      {
        callType: SquidCallType.FULL_TOKEN_BALANCE,
        target: pinjamAxlUsdcPoolAddress,
        value: "0",
        callData: (route) => {
          if (route.destinationAddress) {
            return pinjamStakingPoolInterface.encodeFunctionData("deposit", [
              axlUsdcKavaAddress,
              "0",
              route.destinationAddress,
              true,
            ]);
          }
          return "0x0000000000000000000000000000000000000000";
        },
        payload: {
          tokenAddress: axlUsdcKavaAddress,
          inputPos: 1,
        },
        estimatedGas: "250000",
      },
    ],

    stakedToken: {
      chainId: kavaId,
      address: pAxlUsdcAddress,
      name: "paxlUSDC",
      symbol: "paxlUSDC",
      decimals: 6,
      logoURI:
        "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
      coingeckoId: "usd-coin",
    },
    tokenToStake: {
      chainId: kavaId,
      address: axlUsdcKavaAddress,
    },
    introPage: {
      title: "Stake paxlUSDC on Kava",
      stakingContract: {
        address: "0xe5274e38e91b615d8822e8512a29a16ff1b9c4af",
        explorerLink: "https://kava.mintscan.io/account/",
      },
      logoUrl: "https://app.pinjamlabs.com/icons/pinkav.svg",
    },
  };

  const config = {
    companyName: "Test Widget",
    integratorId: "example-swap-widget",
    slippage: 3,
    instantExec: true,
    infiniteApproval: false,
    apiUrl: "https://dev.api.0xsquid.com",
    stakeConfig,
  } as AppConfig;

  return (
    <div className={styles.container}>
      <SquidStakingWidget config={config} />
    </div>
  );
}
