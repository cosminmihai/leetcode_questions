import * as assert from "assert";


// Do not return anything, modify nums in-place instead.
function rotate(nums: number[], k: number): void {
  const length = nums.length;
  k = k % length;
  reverse(nums, 0, length - k - 1);
  reverse(nums, length - k, length - 1);
  nums.reverse();
}

function reverse(nums: number[], start: number, end: number): void {
  const swaps = Math.ceil((end - start) / 2);
  for (let counter = 0; counter < swaps; counter++) {
    [nums[start], nums[end]] = [nums[end], nums[start]]
    start++;
    end--;
  }
}

function main() {
  const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  const k: number = 3;
  const expectedNums: Array<any> = [5, 6, 7, 1, 2, 3, 4];

  console.log(`Before: ${nums}`);
  rotate(nums, k);
  console.log(`Result: ${nums}`);
  assert(nums.length === expectedNums.length);
  for (let i = 0; i < k; i++) {
    assert(nums[i] === expectedNums[i]);
  }
}

main();