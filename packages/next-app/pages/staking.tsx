import { AppConfig } from "@0xsquid/widget/widget/core/types/config";

import { SquidCallType } from "@0xsquid/sdk";
import { SquidStakingWidget } from "@0xsquid/staking-widget";
import { StakeConfig } from "@0xsquid/staking-widget/widget/core/types/config";
import { ethers } from "ethers";
import erc20Abi from "../abi/erc20Abi";
import pinjamStakingPoolAbi from "../abi/pinjamStakingPoolAbi";
import styles from "../styles/Home.module.css";

/**
 * Here you'll find an example of how to use the SquidStakingWidget.
 * @returns
 */
export default function Home() {
  // Define the staking contract config
  const kavaId = 2222;
  const pinjamAxlUsdcPoolAddress = "0x11c3d91259b1c2bd804344355c6a255001f7ba1e";
  const axlUsdcKavaAddress = "0xeb466342c4d449bc9f53a865d5cb90586f405215";
  const pAxlUsdcAddress = "0x5c91f5d2b7046a138c7d1775bffea68d5e95d68d";

  const pinjamStakingPoolInterface = new ethers.utils.Interface(
    pinjamStakingPoolAbi
  );

  const erc20Interface = new ethers.utils.Interface(erc20Abi);

  const stakeConfig: StakeConfig = {
    // This method will be used to compute the exchange rate between the staked token and the token to stake
    // Basically a multiplier from 0 to x
    // Then if the amount that the route gets is 100, and the exchange rate is 0.5, we'll show 50 as the amount to be received for stakedToken
    // If nothing is specified, the exchange rate will be 1
    stakedTokenExchangeRateGetter: async () => {
      await new Promise((res) => setTimeout(res, 5000));
      return 1;
    },

    // This link will be used to redirect the user to the unstake page, because it's not possible yet with the widget
    unstakeLink: "https://app.pinjamlabs.com/manage",

    // Here are the calls that will be called by Squid MultiCall contract after the cross chain swap is done
    customContractCalls: [
      {
        callType: SquidCallType.FULL_TOKEN_BALANCE, // Full token balance means that the MultiCall will stake all token balance it received from the swap
        target: axlUsdcKavaAddress, // Contract address
        value: "0",

        // CallData is a method instead of a static value because it could depend on the route
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

        // CallData is a method instead of a static value because it could depend on the route
        // Here we can see that we use the user address as a parameter (destinationAddress)
        // It's needed as a callback because you can't know upfront what the user address will be
        // route object also offers the possibility to get other parameters like swapRoute:
        // - fromChainId?: number | string;
        // - toChainId?: number | string;
        // - fromTokenAddress?: string;
        // - toTokenAddress?: string;
        callData: (route) => {
          if (route.destinationAddress) {
            return pinjamStakingPoolInterface.encodeFunctionData("deposit", [
              axlUsdcKavaAddress,
              "0",
              route.destinationAddress,
              true,
            ]);
          }

          // If the user address is not available, we return a dummy value
          // The funds won't be sent there, but it's needed to avoid having errors when fetching data when the user is not connected
          // For example getting a quote for a staking mechanism
          return "0x0000000000000000000000000000000000000000";
        },
        payload: {
          tokenAddress: axlUsdcKavaAddress,
          inputPos: 1,
        },
        estimatedGas: "250000",
      },
    ],

    // This will be the token that the user will receive after the swap + staking
    // The coingeckoId is used to fetch the price of the token (USD price)
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

    // Won't be seen by the user, but is needed for the config
    // This is the token that will be swapped TO
    tokenToStake: {
      chainId: kavaId,
      address: axlUsdcKavaAddress,
    },

    // The intro page is optional, but it's a good way to explain to the user what he's going to do
    // It will be displayed as the first page of the widget if it's defined
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
