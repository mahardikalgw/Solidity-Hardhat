import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ETHERSCAN_API_KEY = "HPYDW2P7ZCUR7CNQ2JYJIJ11QIXFV4XIEN"

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  sourcify: {
    enabled: true
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};

export default config;
