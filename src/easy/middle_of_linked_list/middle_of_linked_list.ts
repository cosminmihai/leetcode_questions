import * as assert from "assert";

class ListNode {
  val: number
  next: ListNode | null

  constructor(val ?: number, next ?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  if (!head.next) {
    return head;
  }

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}

function main(): void {
  const node5 = new ListNode(5);
  const node4 = new ListNode(4, node5);
  const node3 = new ListNode(3, node4);
  const node2 = new ListNode(2, node3);
  const node = new ListNode(1, node2);

  const result = middleNode(node);
  assert(result.val === node3.val);
}

main();


