"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
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
    get length() {
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
    at(index) {
        if (!this.head) {
            throw new Error("List is Empty!");
        }
        let counter = 0;
        let current = this.head;
        while (current) {
            if (counter === index) {
                return current;
            }
            counter++;
            current = current.next;
        }
        throw new Error("Index Out of Bounds!");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is Empty!");
        }
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        return leftNode.data > rightNode.data;
    }
    swap(leftIndex, rightIndex) {
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
    print() {
        if (!this.head) {
            console.log("---");
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;
