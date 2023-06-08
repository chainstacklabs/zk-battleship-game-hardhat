<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-fantom/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Fantom.svg" /></a>&nbsp;
</p>

<p align="center">
  • <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Blockchain API reference</a> • <br>
  • <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •
</p>

# Game of Battleship Solidity and Hardhat

This project is the practical part of a tutorial that outlines how to build a game of Battleship on the Ethereum blockchain. It discusses the challenges of storing private data on a public blockchain and proposes a solution that uses public-private signatures to ensure that the players' ship coordinates remain private while still allowing the game to be played on the blockchain.

> Find the article in the Chainstack developer portal []()

## Quick start

Clone the repository:

```sh
git clone https://github.com/chainstacklabs/zk-battleship-game-hardhat.git
```

Install dependencies:

```shell
npm install
```

Run tests:

```shell
npx hardhat test
```

Add environment variables to `.env.sample` and rename to `.env`:

Deploy a node with Chainstack:

1. [Sign up with Chainstack](https://console.chainstack.com/user/account/create).  
1. [Deploy a node](https://docs.chainstack.com/platform/join-a-public-network).  
1. [View node access and credentials](https://docs.chainstack.com/platform/view-node-access-and-credentials).

```env
SEPOLIA_ENDPOINT="YOUR_CHAINSTACK_ENDPOINT"
GOERLI_ENDPOINT="YOUR_CHAINSTACK_ENDPOINT"
MAINNET_URL="YOUR_CHAINSTACK_ENDPOINT"
PRIVATE_KEY="PRIVATE_KEY_1"
PRIVATE_KEY_2="PRIVATE_KEY_2"
ETHERSCAN="ETHERSCAN_API_KEY"
```

Use the [Chainstack faucet](https://faucet.chainstack.com/sepolia-faucet) to get test funds:

Deploy the smart contract:

```sh
npx hardhat run scripts/deploy.ts --network sepolia
```

or 

```sh
npx hardhat run scripts/deploy.ts --network sepolia
```

Now the contract will be deployed and verified on Etherscan.

## Example response

```sh
Compiled 3 Solidity files successfully
Deploying contract...
BattleShipGame was deployed at: 0x27F1a73dB2aCD037B9AeAA993F1A2D6c5606456B
Waiting for 3 blocks...
3 blocks have passed!
Verifying contract...
Contract verified!
The contract 0x27F1a73dB2aCD037B9AeAA993F1A2D6c5606456B has already been verified
```