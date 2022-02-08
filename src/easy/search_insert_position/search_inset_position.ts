import * as assert from "assert";

function searchInsert(nums: number[], target: number): number {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  if (nums.length === 1) {
    return target <= nums[0] ? 0 : 1;
  }

  if (target > nums[rightPointer]) {
    return rightPointer + 1;
  } else if (target < nums[leftPointer]) {
    return 0;
  }

  while (leftPointer <= rightPointer) {
    const middlePointer = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
    const number = nums[middlePointer];

    if (number === target) {
      return middlePointer;
    } else if (number > target) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }

  return leftPointer;
}


function main() {
  const list: number[] = [1, 3, 5, 6];
  const target: number = 4;

  const position = searchInsert(list, target);
  assert(position === 2);
}

main();


