"use strict";
exports.__esModule = true;
var assert = require("assert");
function search(nums, target) {
    var leftPointer = 0;
    var rightPointer = nums.length - 1;
    while (leftPointer <= rightPointer) {
        var middlePointer = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
        var guessNumber = nums[middlePointer];
        if (guessNumber === target) {
            return middlePointer;
        }
        if (guessNumber > target) {
            rightPointer = middlePointer - 1;
        }
        else {
            leftPointer = middlePointer + 1;
        }
    }
    return -1;
}
function main() {
    var list = [-1, 0, 3, 5, 9, 12];
    var target = 12;
    var index = search(list, target);
    assert(index === 5);
}
main();
