const { task } = require("hardhat/config");

task("block-number", "Prints the currnet block number").setAction(
  async (taskArgs, hre) => {
    const blockNo = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number: ${blockNo}`);
  }
);
