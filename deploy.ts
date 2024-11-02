import { ethers } from "hardhat";
import { Counter } from "./typechain-types";

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  const CounterFactory = await ethers.getContractFactory("Counter");
  const contract = (await CounterFactory.deploy()) as Counter;

  await contract.waitForDeployment();
  console.log("Contract address:", await contract.getAddress());
}

// Deploy
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
