import * as assert from "assert";

function reverseWords(s: string): string {
  return s.split(' ').map((word) => {
      const characters = Array.from(word);
      reverseString(characters);
      return characters.join('');
    }
  ).join(' ');
}

function reverseString(strings: string[]): void {
  const totalLength = strings.length - 1;
  const half = Math.ceil(totalLength / 2);

  for (let i = 0; i < half; i++) {
    const rightPointer = totalLength - i;
    [strings[i], strings[rightPointer]] = [strings[rightPointer], strings[i]];
  }
}

function main() {
  const input: string = "Let's take LeetCode contest";
  const output: string = "s'teL ekat edoCteeL tsetnoc";

  const result = reverseWords(input);
  console.log(result);
  assert(input.length === result.length);
  for (let i = 0; i < output.length; i++) {
    assert(result[i] === output[i]);
  }
}

main();