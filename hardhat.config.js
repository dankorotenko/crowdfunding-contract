/** @type import('hardhat/config').HardhatUserConfig */
export const solidity = {
  version: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/YMSCWozsGGK1k2_ORyGRS7t2W_kKRaE3`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
