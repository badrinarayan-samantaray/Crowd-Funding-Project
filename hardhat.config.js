require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.28",  
  networks:{
    sepolia:{
      url:process.env.SEPOLIA_RPC || "",
      accounts:process.env.PRIVATE_KEY !== undefined ?[process.env.PRIVATE_KEY]:[]
    }
  },
  etherscan:{
    apiKey:process.env.ETHERSCAN_API_KEY
  }
};
