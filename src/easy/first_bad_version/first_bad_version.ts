import * as assert from "assert";

const solution = function (isBadVersion: Function) {
  return function (n: number): number {
    let leftPointer = 1;
    let rightPointer = n;
    let firstBad = rightPointer;

    while (leftPointer <= rightPointer) {
      let version = leftPointer + Math.floor((rightPointer - leftPointer) / 2);

      if (isBadVersion(version)) {
        rightPointer = version - 1;
        if (version < firstBad) {
          firstBad = version;
        }
      } else {
        leftPointer = version + 1;
      }
    }

    return firstBad;
  };
}

function main() {
  const n = 2126753390;
  const bad = 1702766719;

  const result = solution((version) => version >= bad)(n);
  assert(result === bad);
}

main();