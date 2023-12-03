// imports
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();
require("./tasks/block-number");
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */
// environment variables
const SEPOLIA_RPC = process.env.SEPOLIA_RPC_URL || "TEST_SEPOLIA_RPC";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "PRIVATE_KEY";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "ETHERSCAN_API_KEY";
const COINMARKETCAP_API_KEY =
  process.env.COINMARKETCAP_API_KEY || "COINMARKETCAP_API_KEY";
// export modules
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // no need for accouts
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
  },
};
