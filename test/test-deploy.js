const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("Greet", () => {
  let contractFactory, contract;
  beforeEach(async () => {
    contractFactory = await ethers.getContractFactory("Greet");
    contract = await contractFactory.deploy();
  });
  it("Should start with a favourite number of 0", async () => {
    const currentValue = await contract.str();
    const expectedValue = "Hi";
    // assert or expect
    assert.equal(currentValue.toString(), expectedValue); // recommended
    // or
    // expect(currentValue.toString().to.equal(expectedValue));
  });
});
