"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data); // Output: [-5, 0, 3, 10]
const charactersCollection = new CharactersCollection_1.CharactersCollection("Hello!");
charactersCollection.sort();
console.log(charactersCollection.data); // Output: "!eHllo"
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(50);
linkedList.add(-10);
linkedList.add(0);
linkedList.add(-30);
linkedList.sort();
linkedList.print(); // Output: --- -30 -10 0 50
