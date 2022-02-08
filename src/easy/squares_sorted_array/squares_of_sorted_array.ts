import * as assert from "assert";

function sortedSquares(nums: number[]): number[] {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  const squaredList = new Array<number>();
  while (leftPointer <= rightPointer) {
    const leftSquared = Math.pow(nums[leftPointer], 2);
    const rightSquared = Math.pow(nums[rightPointer], 2);
    if (leftSquared > rightSquared) {
      squaredList.unshift(leftSquared);
      leftPointer--;
    } else {
      squaredList.unshift(rightSquared);
      rightPointer++;
    }
  }

  return squaredList;
}

function main() {
  const input: number[] = [-4, -1, 0, 3, 10];
  const output: number[] = [0, 1, 9, 16, 100];

  const result = sortedSquares(input);
  assert(result.length === output.length);
  for (const i in result) {
    assert(result[i] === output[i]);
  }
}

main();