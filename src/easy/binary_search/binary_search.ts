import * as assert from "assert";

function search(nums: number[], target: number): number {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    let middlePointer = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
    let guessNumber = nums[middlePointer];

    if (guessNumber === target) {
      return middlePointer;
    }

    if (guessNumber > target) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }

  return -1;
}

function main() {
  const list: Array<number> = [-1, 0, 3, 5, 9, 12];
  const target: number = 12;

  const index = search(list, target);
  assert(index === 5);
}

main();