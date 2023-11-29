// imports
const { ethers, run, network } = require("hardhat");
require("dotenv").config();
// main function
const main = async () => {
  console.log("Deploying contract...");
  try {
    const contractFactory = await ethers.getContractFactory("Greet");
    const contract = await contractFactory.deploy();
    console.log("Contract deployed:", contract.target);
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
      console.log("Waiting for block confirmations...");
      const tx = contract.deploymentTransaction();
      await tx.wait(6);
      await verify(contract.target, []);
    }
    const currentValue = await contract.str();
    console.log(`Current value: ${currentValue}`);
    const txResponse = await contract.setStr("Hello world");
    await txResponse.wait(1);
    const newValue = await contract.str();
    console.log(`Updated value: ${newValue}`);
  } catch (err) {
    console.log(err);
  }
};
// verify function
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (err) {
    if (err.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(err);
    }
  }
};
// call main function
main();
