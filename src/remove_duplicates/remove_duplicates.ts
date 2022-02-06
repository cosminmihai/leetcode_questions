import * as assert from "assert";

function removeDuplicates(nums: number[]): number {
  const occurrences = new Map<number, number>();
  let leftSide = -1;
  for (let rightSide = 0; rightSide < nums.length; rightSide++) {
    const number = nums[rightSide];
    const occurrence = occurrences.get(number) || 0;

    if (occurrence < 2) {
      occurrences.set(number, occurrence + 1);
      leftSide++;
      [nums[leftSide], nums[rightSide]] = [nums[rightSide], nums[leftSide]];
    }
  }

  return leftSide + 1;
}

function main() {
  const nums: Array<number> = [1, 1, 1, 2, 2, 3];
  const expectedNums: Array<any> = [1, 1, 2, 2, 3];

  const k = removeDuplicates(nums);

  assert(k == expectedNums.length);
  for (let i = 0; i < k; i++) {
    assert(nums[i] == expectedNums[i]);
  }
}

main();