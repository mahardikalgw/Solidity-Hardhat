import { ethers } from "hardhat"
import { Counter } from "../typechain-types"

async function main() {
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
  const Counter = await ethers.getContractFactory("Counter")
  const counter = Counter.attach(contractAddress) as Counter

  const initialCount = await counter.getCount()
  console.log("Initial count : ", initialCount.toString())

  const incrementTx = await counter.increment();
  await incrementTx.wait()

  const countAfterIncrement: bigint = await counter.getCount();
    console.log("Count after Increment:", countAfterIncrement.toString()); // Should print 1

    // Decrement the count
    const decrementTx = await counter.decrement();
    await decrementTx.wait(); // Wait for the transaction to be mined

    // Check the updated count again
    const countAfterDecrement: bigint = await counter.getCount();
    console.log("Count after Decrement:", countAfterDecrement.toString());
}


main().catch((error: Error) => {
  console.error(error);
  process.exitCode = 1;
});