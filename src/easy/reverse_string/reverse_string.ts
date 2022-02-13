import * as assert from "assert";

function reverseString(strings: string[]): void {
  const totalLength = strings.length - 1;
  const half = Math.ceil(totalLength / 2);

  for (let i = 0; i < half; i++) {
    const rightPointer = totalLength - i;
    [strings[i], strings[rightPointer]] = [strings[rightPointer], strings[i]];
  }
}

function main() {
  const input: string[] = ["h", "e", "l", "l", "o"];
  const output: string[] = ["o", "l", "l", "e", "h"];

  reverseString(input);
  console.log(input);
  assert(input.length === output.length);
  for (let i = 0; i < output.length; i++) {
    assert(input[i] === output[i]);
  }
}

main();