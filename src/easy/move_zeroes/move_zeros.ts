import * as assert from "assert";

function moveZeroes(nums: number[]): void {
  if (nums.length === 1) {
    return;
  }

  const length: number = nums.length;

  let leftPointer: number = 0;
  let rightPointer: number = length - 1;

  while (leftPointer <= rightPointer) {
    const leftNumber = nums[leftPointer];
    const rightNumber = nums[rightPointer];
    if (isZero(leftNumber)) {
      nums.splice(leftPointer, 1);
      nums.push(leftNumber);
    }

    if (isZero(rightNumber)) {
      nums.splice(rightPointer, 1);
      nums.push(rightNumber);
    }
    rightPointer--;

  }
}

function isZero(number: number): boolean {
  return number === 0;
}

function main(): void {
  const input: number[] = [0, 1, 0, 3, 12];
  const expected: number[] = [1, 3, 12, 0, 0];

  moveZeroes(input);
  console.log(`Result: ${input}`);

  assert(input.length === expected.length);
  for (const i in expected) {
    assert(input[i] === expected[i]);
  }
}

main();