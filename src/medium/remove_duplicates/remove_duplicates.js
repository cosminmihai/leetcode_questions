"use strict";
exports.__esModule = true;
var assert = require("assert");
function removeDuplicates(nums) {
    var _a;
    var occurrences = new Map();
    var leftSide = -1;
    for (var rightSide = 0; rightSide < nums.length; rightSide++) {
        var number = nums[rightSide];
        var occurrence = occurrences.get(number) || 0;
        if (occurrence < 2) {
            occurrences.set(number, occurrence + 1);
            leftSide++;
            _a = [nums[rightSide], nums[leftSide]], nums[leftSide] = _a[0], nums[rightSide] = _a[1];
        }
    }
    return leftSide + 1;
}
function main() {
    var nums = [1, 1, 1, 2, 2, 3];
    var expectedNums = [1, 1, 2, 2, 3];
    var k = removeDuplicates(nums);
    assert(k === expectedNums.length);
    for (var i = 0; i < k; i++) {
        assert(nums[i] === expectedNums[i]);
    }
}
main();
