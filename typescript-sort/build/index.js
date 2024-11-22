"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CharactersCollection } from "./CharactersCollection";
// import { LinkedList } from "./LinkedList";
const NumbersCollection_1 = require("./NumbersCollection");
// import { Sorter } from "./Sorter";
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data); // Output: [-5, 0, 3, 10]
// const charactersCollection = new CharactersCollection("Hello!");
// const sorterCharacters = new Sorter(charactersCollection);
// sorterCharacters.sort();
// console.log(charactersCollection.data); // Output: "!eHllo"
// const linkedList = new LinkedList();
// linkedList.add(50);
// linkedList.add(-10);
// linkedList.add(0);
// linkedList.add(-30);
// const sorterLinkedList = new Sorter(linkedList);
// sorterLinkedList.sort();
// linkedList.print(); // Output: --- -30 -10 0 50
