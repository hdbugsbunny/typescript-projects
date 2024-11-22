import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let current = this.head;
    while (current.next) {
      length++;
      current = current.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("List is Empty!");
    }

    let counter = 0;
    let current: Node | null = this.head;
    while (current) {
      if (counter === index) {
        return current;
      }

      counter++;
      current = current.next;
    }

    throw new Error("Index Out of Bounds!");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is Empty!");
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error("List is Empty!");
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    if (leftIndex === rightIndex) {
      return;
    }

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      console.log("---");
      return;
    }

    let current: Node | null = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
