async function main() {
  const FlashUSDT = await ethers.getContractFactory("FlashUSDT");
  const flashUSDT = await FlashUSDT.deploy("0x5E52dEc931FFb32f609681B8438A51c675cc232d"); // Aave v3 Sepolia PoolAddressesProvider

  await flashUSDT.deployed();
  console.log("FlashUSDT deployed to:", flashUSDT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
