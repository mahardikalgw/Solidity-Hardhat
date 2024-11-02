import {expect} from "chai"
import {ethers} from "hardhat";
import { Counter } from "../typechain-types";

describe("Counter", function () {
  let counter: Counter;
  this.beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter")
    counter = await Counter.deploy();
  })
  it("should return the initial count of 0", async function () {
    const count = await counter.getCount()
    expect(count).to.equal(0, "Initial should be 0")
  })
  it("should increment the count", async function() {
    await counter.increment();
    const count = await counter.getCount()
    expect(count).to.equal(1, "Count should be 1 after incrementing")
  })
  it("should decrement the count", async function() {
    await counter.decrement();
    const count = await counter.getCount()
    expect(count).to.equal(-1, "Count should be -1 after decrementing")
  })
})