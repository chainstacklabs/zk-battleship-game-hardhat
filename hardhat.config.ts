require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require('@nomiclabs/hardhat-etherscan');
//import "@nomicfoundation/hardhat-verify";

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  mocha: {
    timeout: 100000000
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_URL,
      accounts: [PRIVATE_KEY, PRIVATE_KEY_2]
    },
    sepolia: {
      url: process.env.SEPOLIA_ENDPOINT,
      accounts: [PRIVATE_KEY, PRIVATE_KEY_2]
    },
    goerli: {
      url: process.env.GOERLI_ENDPOINT,
      accounts: [PRIVATE_KEY, PRIVATE_KEY_2]
    }
},
  etherscan: {
    apiKey: process.env.ETHERSCAN,
  },
};
