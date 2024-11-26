//* Normal Classes With Same Functionality But Different Types
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(key: number): number {
    return this.collection[key];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(key: number): string {
    return this.collection[key];
  }
}

//* Generic Class Definition Which Takes Type as Argument
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(key: number): T {
    return this.collection[key];
  }
}

const arrStr = new ArrayOfAnything(["a", "b", "c"]); //* Inference Type
const arrNum = new ArrayOfAnything<number>([1, 2, 3]);

//* Normal Functions With Same Functionality But Different Types
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//* Generic Function Definition Which Takes Type as Argument
function printArray<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(["a", "b", "c"]); //* Inference Type
printArray<number>([1, 2, 3]);

//* Generic Constraints
class Car {
  print() {
    console.log("Car is being printed...");
  }
}

class House {
  print() {
    console.log("House is being printed...");
  }
}

interface PRINTABLE {
  print(): void;
}

function printHousesOrCars<T extends PRINTABLE>(arr: T[]): void {
  for (let item of arr) {
    item.print();
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
