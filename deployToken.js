async function main() {
  const BasicToken = await ethers.getContractFactory("BasicToken");
  const token = await BasicToken.deploy(1000);
  await token.waitForDeployment();

  console.log("BasicToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
