import * as assert from "assert";

function twoSum(numbers: number[], target: number): number[] {
  let leftPointer: number = 0;
  let rightPointer: number = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const leftNumber = numbers[leftPointer];
    const rightNumber = numbers[rightPointer];
    if (leftNumber + rightNumber === target) {
      return [leftPointer + 1, rightPointer + 1];
    }

    if (leftNumber + rightNumber > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }


  return [];
}

function main() {
  const numbers: Array<number> = [2, 7, 11, 15];
  const target: number = 9;
  const expected: Array<number> = [1, 2];


  const result = twoSum(numbers, target);
  console.log(`Result: ${result}`);
  assert(result.length === expected.length);
  for (let i = 0; i < expected.length; i++) {
    assert(result[i] === expected[i]);
  }
}

main();