import * as assert from "assert";

function moveZeroes(nums: number[]): void {
  if (nums.length === 1) {
    return;
  }

  const length: number = nums.length;
  let leftPointer: number = 0;
  let rightPointer: number = 0;

  while (rightPointer <= length - 1) {
    const number = nums[rightPointer];
    if (number !== 0) {
      swapTwoNumbers(nums, leftPointer, rightPointer);
      leftPointer++;
      rightPointer++;
    } else {
      rightPointer++;
    }
  }
}

function swapTwoNumbers(nums: number[], index1: number, index2: number): void {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}

function main(): void {
  const input: number[] = [0, 1, 0, 3, 12];
  const expected: number[] = [1, 3, 12, 0, 0];

  moveZeroes(input);
  assert(input.length === expected.length);
  for (const i in expected) {
    assert(input[i] === expected[i]);
  }
}

main();