import * as assert from "assert";

class ListNode {
  val: number
  next: ListNode | null

  constructor(val ?: number, next ?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (n === 1 && !head.next) {
    return null;
  }

  const dummyNode = new ListNode(0, head);
  let leftPointer = dummyNode;
  let rightPointer = head;

  let interval = n;
  // Start the right pointer by n positions to the right
  while (interval > 0 && rightPointer) {
    rightPointer = rightPointer.next;
    interval -= 1;
  }

  while (rightPointer) {
    rightPointer = rightPointer.next;
    leftPointer = leftPointer.next;
  }

  leftPointer.next = leftPointer.next.next;
  return dummyNode.next;
}

function main(): void {
  const node5 = new ListNode(5);
  const node4 = new ListNode(4, node5);
  const node3 = new ListNode(3, node4);
  const node2 = new ListNode(2, node3);
  const node = new ListNode(1, node2);

  let head = removeNthFromEnd(node, 2);
  assert(head.next.next.next.val === 5);
}

main();