const { expect } = require("chai");

describe("BasicToken", function () {
  it("should mint initial supply to deployer", async function () {
    const [deployer] = await ethers.getSigners();
    const BasicToken = await ethers.getContractFactory("BasicToken");
    const token = await BasicToken.deploy(1000);

    const balance = await token.balanceOf(deployer.address);
    expect(balance).to.equal(1000n * 10n ** 18n);
  });
});
