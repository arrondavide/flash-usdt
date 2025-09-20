require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY", // or Alchemy
      accounts: ["0xYOUR_PRIVATE_KEY"], // add testnet wallet key here
    },
  },
};
